# Worst Fix Ever: Funniest Commit Message

Entry for make.fun competition #155 — [Worst Fix Ever: Funniest Commit Message](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

## Entry

```
fix: null check added (the check itself is null, so everything is null now)
```

## How it works

`main.ts` (Node.js, standard library only) writes the commit message above —
exactly 75 characters, no trailing newline — to `entry.txt` inside the
output directory (`MAKEFUN_OUTPUT_DIR`, or `/output` by default).
