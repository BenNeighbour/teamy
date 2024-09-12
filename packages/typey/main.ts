import { serve } from "https://deno.land/std@0.134.0/http/server.ts";

const handler = (req: Request) => new Response(`{"status": "ok"}`);

serve(async (req: Request) => handler(req), { port: 8000 });
