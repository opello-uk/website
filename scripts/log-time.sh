#!/bin/bash
# log-time.sh — the only clock cycle-log entries may trust.
#
# Why this exists: sibling cycle runs run on separate sandboxes whose clocks
# have been observed drifting hours — and even whole days — ahead. Entries
# written from the sandbox clock landed in log.md with future dates
# (2026-11-21 09:40, 2026-11-22/23/24) while real time was 2026-11-21 early
# morning, corrupting the log's chronology. The HTTP Date header of a major
# origin is the authoritative time; this script fetches it, converts to Dubai
# time, and refuses to guess silently.
#
# Usage: bash scripts/log-time.sh
# Prints: 2026-11-21 06:12 (Dubai)
# Also prints a WARNING to stderr if the local sandbox clock disagrees with
# real time by more than 2 minutes — the cycle log must then be written from
# this script's output, never from `date`.

utc_header=$(curl -sI --max-time 8 https://www.google.com 2>/dev/null \
  | awk -F': ' 'tolower($1)=="date" {print $2; exit}' | tr -d '\r')
if [ -z "$utc_header" ]; then
  utc_header=$(curl -sI --max-time 8 https://www.cloudflare.com 2>/dev/null \
    | awk -F': ' 'tolower($1)=="date" {print $2; exit}' | tr -d '\r')
fi

if [ -z "$utc_header" ]; then
  echo "WARNING: could not fetch network time; falling back to the local clock — verify with a second source before logging" >&2
  TZ=Asia/Dubai date '+%Y-%m-%d %H:%M (Dubai)'
  exit 0
fi

real_dubai=$(TZ=Asia/Dubai date -d "$utc_header" '+%Y-%m-%d %H:%M')
real_epoch=$(date -d "$utc_header" +%s)
local_epoch=$(date +%s)
drift=$(( local_epoch - real_epoch ))
if [ ${drift#-} -gt 120 ]; then
  sign="+"; [ $drift -lt 0 ] && sign="-"
  echo "WARNING: local sandbox clock is off by ${sign}$(( ${drift#-} / 60 )) minutes — write the log time from this script's output, not from \`date\`" >&2
fi
echo "$real_dubai (Dubai)"
