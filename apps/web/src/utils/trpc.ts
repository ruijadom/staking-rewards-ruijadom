import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@ruijadom/api";

export const trpc = createTRPCReact<AppRouter>();
