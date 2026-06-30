export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload?.eventName) {
    return Response.json({ error: "Missing eventName" }, { status: 400 });
  }
  console.log("VascuMind event", JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }));
  return Response.json({ ok: true });
}
