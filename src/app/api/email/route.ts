import mail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  mail.setApiKey(process.env.SENDGRID_API_KEY as string);

  try {
    const body = await request.json();
    const { email, message } = body;

    const content = {
      to: email as string,
      from: process.env.FROM_EMAIL as string,
      templateId: process.env.TEMPLATE_ID as string,
      dynamic_template_data: {
        email,
        message,
      },
    };

    const response = await mail.send(content);

    return NextResponse.json({
      status: "success",
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          status: "error",
          message: `Message failed to send with error: ${error.message}`,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: "An unknown error occurred.",
        },
        { status: 500 }
      );
    }
  }
}
