#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

if [ ! -d "$HOME/.claude/skills/gstack/bin" ]; then
  echo "gstack not found — installing..." >&2
  git clone --depth 1 https://github.com/garrytan/gstack.git "$HOME/.claude/skills/gstack"
  cd "$HOME/.claude/skills/gstack" && ./setup --team
  echo "gstack installed." >&2
fi

npm install
