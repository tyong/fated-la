#!/usr/bin/env bash
set -euo pipefail

CERT_FILE="${CERT_FILE:-./certs/local-dev.pem}"
KEY_FILE="${KEY_FILE:-./certs/local-dev-key.pem}"
HOST="${HOST:-0.0.0.0}"
PORT="${PORT:-9000}"

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
gatsby develop -H "$HOST" -p "$PORT" -S --cert-file "$CERT_FILE" --key-file "$KEY_FILE"
