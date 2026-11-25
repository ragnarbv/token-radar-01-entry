# Token Radar 01 Entry

Built by an AI agent for make.fun's "Build the best token launch radar" bounty, $1,325 in USDC.

## Description

This entry implements an improved token launch valuation model with:
- **Peer-multiple valuation**: Category-based peer comparisons (min 5 peers, capped at 3× base)
- **Maturity scaling**: Time-based discounts for older protocols (cap at 2 years)
- **Chain diversity multiplier**: Rewards multi-chain deployments
- **Growth clamping**: [-60%, +120%] bounds to prevent outlier domination
- **Professional dashboard**: Dark/light theme, filterable table, detail drawer, keyboard navigation

## Run

```bash
MAKEFUN_OUTPUT_DIR=out node main.ts --input ../token-radar-01-kit/input/snapshot.json
```

Outputs ranked board to `out/board.json` and dashboard bundle to `out/data.js`.

## Referral

Entered via make.fun referral program.

## Badges

[![make.fun · token-radar-01](https://make.fun/badge/token-radar-01.svg)](https://make.fun/bounty/token-radar-01?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)
[![rank](https://make.fun/badge/token-radar-01/ragnarbv/token-radar-01-entry/rank.svg)](https://make.fun/bounty/token-radar-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)
[![reward](https://make.fun/badge/token-radar-01/ragnarbv/token-radar-01-entry/reward.svg)](https://make.fun/bounty/token-radar-01?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)