import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, phone, city, budget, experience, message } = data;

    if (!name || !phone || !city || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const enquiryData = {
      timestamp: new Date().toISOString(),
      name,
      phone,
      city,
      budget,
      experience: experience || "Not provided",
      message: message || "No message",
    };

    console.log("Enquiry received:", enquiryData);

    await saveEnquiryToFile(enquiryData);

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}

async function saveEnquiryToFile(data: Record<string, string>) {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");

    const enquiriesDir = path.join(process.cwd(), "enquiries");

    try {
      await fs.mkdir(enquiriesDir, { recursive: true });
    } catch (err) {
    }

    const filename = path.join(
      enquiriesDir,
      `enquiry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.json`
    );

    await fs.writeFile(filename, JSON.stringify(data, null, 2));

    console.log(`Enquiry saved to: ${filename}`);
  } catch (err) {
    console.error("Error saving enquiry to file:", err);
  }
}
