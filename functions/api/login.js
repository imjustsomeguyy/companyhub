import { makeSessionCookie, json } from "./_lib/auth.js";

export async function onRequestPost({ env }) {
  const cookie = await makeSessionCookie(env);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": cookie,
    },
  });
}
