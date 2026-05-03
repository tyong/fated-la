#!/usr/bin/env bash
set -euo pipefail

CERT_FILE="${CERT_FILE:-./certs/local-dev.pem}"
KEY_FILE="${KEY_FILE:-./certs/local-dev-key.pem}"
HOST="${HOST:-0.0.0.0}"
# External URL stays https://localhost:9000 — Gatsby HTTPS listens on GATSBY_TLS_PORT; the proxy
# on PUBLIC_PORT forwards TLS and 301s plain HTTP to HTTPS on the same host/port.
PUBLIC_PORT="${PUBLIC_PORT:-9000}"
GATSBY_TLS_PORT="${GATSBY_TLS_PORT:-9001}"

if [[ ! -f "$CERT_FILE" || ! -f "$KEY_FILE" ]]; then
  echo "Missing HTTPS certs for local LAN dev."
  echo "Run: npm run mkcert:lan"
  echo "Expected files:"
  echo "  - $CERT_FILE"
  echo "  - $KEY_FILE"
  exit 1
fi

export GATSBY_AGENTATION=1
npx agentation-mcp server &
gatsby develop -H "$HOST" -p "$GATSBY_TLS_PORT" -S --cert-file "$CERT_FILE" --key-file "$KEY_FILE" &
GATSBY_PID=$!

cleanup() {
  kill "$GATSBY_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

# Wait until Gatsby is accepting TLS on the internal port (avoids flaky proxy connects).
if command -v nc >/dev/null 2>&1; then
  for _ in $(seq 1 90); do
    if nc -z 127.0.0.1 "$GATSBY_TLS_PORT" 2>/dev/null; then break; fi
    sleep 0.2
  done
else
  sleep 2
fi

export PUBLIC_PORT GATSBY_TLS_PORT
node ./scripts/local-http-to-https-proxy.cjs
