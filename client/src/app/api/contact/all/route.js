import ContactSubmission from "@/models/ContactSubmission";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();

  const messages = await ContactSubmission.find().sort({ createdAt: -1 });

  return Response.json({ success: true, messages });
}