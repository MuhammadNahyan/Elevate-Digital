import { connectDB } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";
import mongoose from "mongoose";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    console.log("DELETE ID:", id);

    const deleted = await ContactSubmission.findByIdAndDelete(id);

    if (!deleted) {
      return Response.json({
        success: false,
        error: "No document found to delete",
      });
    }

    return Response.json({
      success: true,
      message: "Deleted successfully",
    });

  } catch (error) {
    console.log("DELETE ERROR:", error);

    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}