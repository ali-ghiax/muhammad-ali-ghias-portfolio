import { NextResponse } from "next/server";

/** Contact form posts directly to FormSubmit from the browser. */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Use the contact form on the website. Direct API posts are not supported.",
    },
    { status: 405 }
  );
}
