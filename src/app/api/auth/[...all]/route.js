import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

export const GET = handler.GET;
export const POST = async (req) => {
  try {
    return await handler.POST(req);
  } catch (err) {
    console.error("Better Auth Error:", err);
    throw err;
  }
};
