#!/usr/bin/env bash
# Copies each app's privacy policy from the app's own repo into this site. The app repos are private, so GitHub Pages
# can't serve them; this public repo serves the policies instead, at the addresses the apps and store listings use.
# The app repo keeps the source (it changes with the app's features, and some apps test it); this site keeps an exact
# copy.
#
# Usage, from anywhere, with the app repos cloned next to this one (../koora-trivia and so on):
#   bash tools/sync-policies.sh           copy every policy that changed; then commit and open a PR here
#   bash tools/sync-policies.sh --check   only list the ones that differ; exits 1 if any does
# APPS_DIR=<folder> sets where the app repos are, if not next to this one. An app that isn't there is skipped.

set -euo pipefail

site=$(cd "$(dirname "$0")/.." && pwd)
apps=${APPS_DIR:-$(dirname "$site")}
check=0
if [ "${1:-}" = "--check" ]; then check=1; fi

# app repo | the policy in that repo | where this site serves it (the URL is the path, without .md or .html)
policies='
koora-trivia|docs/privacy_policy.html|koora-trivia/privacy/index.html
monthly-expense-app|docs/privacy-policy.md|monthly-expense-app/privacy-policy.md
wasfati|docs/privacy-policy.html|wasfati/privacy-policy.html
qr-scanner-generator|docs/privacy-policy/index.html|qr-scanner-generator/privacy-policy/index.html
wasnt-me|docs/privacy-policy.md|wasnt-me/privacy-policy.md
'

differ=0
while IFS='|' read -r repo source served; do
  if [ -z "$repo" ]; then continue; fi
  from="$apps/$repo/$source"
  to="$site/$served"
  if [ ! -f "$from" ]; then
    echo "skipped  $repo: no $from"
    continue
  fi
  if cmp -s "$from" "$to"; then
    echo "same     $served"
  elif [ "$check" -eq 1 ]; then
    echo "differs  $served (from $repo/$source)"
    differ=1
  else
    mkdir -p "$(dirname "$to")"
    cp "$from" "$to"
    echo "copied   $served"
  fi
done <<< "$policies"

exit "$differ"
