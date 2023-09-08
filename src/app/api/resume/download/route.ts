import { profile } from "@/data";
import dayjs from "dayjs";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.resolve(".", "public", profile.resume_path);
  const resumeBuffer = fs.readFileSync(filePath);

  return new NextResponse(resumeBuffer, {
    headers: {
      "Content-Disposition": `attachment; filename=CV Andrio Sirait - ${dayjs().format("MMM YYYY")}.pdf`,
    },
  });
}
