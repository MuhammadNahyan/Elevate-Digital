import { connectDB } from "@/lib/mongodb.js";
import ContactSubmission from "@/models/ContactSubmission";

export async function POST(req) {


    try {
        const body = await req.json();
        const { name, email, message } = body;
    
        if (
            !name?.trim() ||
            !email?.trim() ||
            !message?.trim()
        ) {
            return Response.json({
                success: false,
                error: "Please enter all fields",
            });
        }
    
        // await sendEmail({ name, email, message });

        await connectDB();
    
        const newMessage =  await ContactSubmission.create({
            name,
            email,
            message
        })

        return Response.json({
            success: true,
            data: newMessage
        })
        
    } catch (error) {
        return Response.json(
            { success: false, error: "Internal Server error" },
            { status: 500 }
        )
    }
}