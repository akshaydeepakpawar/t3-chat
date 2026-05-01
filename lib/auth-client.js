import { createAuthClient } from "better-auth/react";
export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: "https://t3-chat-t395.vercel.app/",
});
