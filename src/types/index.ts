// middleware/types.ts

import { NextMiddleware } from "next/server";
export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;