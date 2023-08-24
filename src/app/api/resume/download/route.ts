import { profile } from "@/data";
import dayjs from "dayjs";
import fs from "fs";
import { NextResponse, type NextRequest } from "next/server";
import path from "path";
import { isMobile } from "react-device-detect";

export async function GET(request: NextRequest) {
  const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const ipAddress = request.ip ?? request.headers.get("x-real-ip");
  const forwardedFor = request.headers.get("x-forwarded-for");

  let text = "Ada yang download resume\n\n";
  text += `Device: ${isMobile ? "Mobile" : "Desktop"}\n`;
  text += `IP Address: ${ipAddress}\n`;
  text += `Forwarded For: ${forwardedFor}\n`;
  text += `Time: ${dayjs().format("DD MMMM YYYY HH:mm:ss")}`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage?text=${encodeURI(text)}&chat_id=${TELEGRAM_CHAT_ID}`);

  const filePath = path.resolve(".", "public", profile.resume_path);
  const resumeBuffer = fs.readFileSync(filePath);

  return new NextResponse(resumeBuffer, {
    headers: {
      "Content-Disposition": `attachment; filename=CV Andrio Sirait - ${dayjs().format("MMM YYYY")}.pdf`,
    },
  });
}
