import { connectDB } from "@/lib/mongodb.js";
import Content from "@/models/Content";

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const updated = await Content.findOneAndUpdate(
    {},
    { $set: body },
    { new: true, upsert: true }
  );

  return Response.json(updated);
}