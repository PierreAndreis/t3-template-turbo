import { protectedProcedure, publicProcedure, router } from "../trpc";

export const authRouter = router({
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @acme/auth package
    return "you can see this secret message!";
  }),
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
});
