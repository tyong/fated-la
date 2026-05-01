#!/usr/bin/env bash
set -euo pipefail

if ! command -v mkcert >/dev/null 2>&1; then
  echo "mkcert is not installed."
  echo "Install it with Homebrew:"
  echo "  brew install mkcert nss"
  exit 1
fi

LAN_IP="${LOCAL_IP:-$(ipconfig getifaddr en0 2>/dev/null || true)}"
if [[ -z "${LAN_IP}" ]]; then
  LAN_IP="$(ipconfig getifaddr en1 2>/dev/null || true)"
fi

if [[ -z "${LAN_IP}" ]]; then
  echo "Could not detect LAN IP. Set LOCAL_IP manually:"
  echo "  LOCAL_IP=10.x.x.x npm run mkcert:lan"
  exit 1
fi

mkdir -p certs
mkcert -install
mkcert \
  -cert-file ./certs/local-dev.pem \
  -key-file ./certs/local-dev-key.pem \
  "${LAN_IP}" localhost 127.0.0.1 ::1

echo ""
echo "Created local HTTPS certs:"
echo "  certs/local-dev.pem"
echo "  certs/local-dev-key.pem"
echo ""
echo "Start dev server with:"
echo "  npm run dev"
