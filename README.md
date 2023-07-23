# Ruijadom engineering challenge

This is a minimum fullstack monorepo that will be used to develop the Staking Rewards code challenge.

https://github.com/stakingrewards/engineering-challenge/tree/

## Scope of work

- Build UI implementation as close to the design as possible
- Auto-saving user input
- Reactive UI
- Performant UI with emphasis on a friendly UX

## Todo

- [ ] Implement a mask for the inputs
- [ ] Implement regex to deal with expressions


## Getting Started

```sh
# optional: If you haven't installed pnpm
npm i -g pnpm
# clone repo
git clone https://github.com/ruijadom/staking-rewards-ruijadom.git
# install packages
cd staking-rewards-ruijadom && pnpm i

# run all steps to setup the db and seed
pnpm --filter @ruijadom/prisma run db:setup

  # migrate db by prisma
  pnpm --filter @ruijadom/prisma run db:migrate:dev
  # seed db
  pnpm --filter @ruijadom/prisma run db:seed
  # run db studio
  pnpm --filter @ruijadom/prisma run db:studio


# start dev server
pnpm dev
```