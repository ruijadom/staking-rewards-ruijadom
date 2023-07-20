import express from "express";
import cors from "cors";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import { prisma } from "@ruijadom/db/dist";

import {
  createStakingSchema,
  getSingleStakingSchema,
  updateStakingSchema,
  deleteStakingSchema,
} from "./schema/staking";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  createStaking: t.procedure
    .input(createStakingSchema)
    .mutation(async ({ input }) => {
      const staking = await prisma.staking.create({
        data: {
          ...input,
        },
      });
      return staking;
    }),

  getStakings: t.procedure.query(() => {
    return prisma.staking.findMany();
  }),
  getSingleStaking: t.procedure
    .input(getSingleStakingSchema)
    .query(({ input }) => {
      return prisma.staking.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  updateStaking: t.procedure
    .input(updateStakingSchema)
    .mutation(async ({ input }) => {
      const staking = await prisma.staking.update({
        where: {
          id: input.id,
        },
        data: {
          ...input,
        },
      });
      return staking;
    }),
  deleteStaking: t.procedure
    .input(deleteStakingSchema)
    .mutation(async ({ input }) => {
      await prisma.staking.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

export type AppRouter = typeof appRouter;

const PORT = 3001;

const app = express();

app
  .use(cors())
  .use((req, _res, next) => {
    console.log(req.method, req.path, req.body ?? req.query);
    next();
  })
  .use(
    "/trpc",
    trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
  )
  .listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
  });
