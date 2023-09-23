import { MD5 } from "@/utilities/encrypt";
import { checkEntries, responseMaker } from "@/utilities/helper";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!checkEntries(body, ["email", "password"])) {
    return responseMaker({ error: "Insufficient entries!" }, 500);
  }

  const { email, password } = body;

  const res = await fetch("http://localhost:3001/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password: MD5.encrypt(password) }),
  });

  if (!res.ok) {
    return responseMaker({ error: "Error in creating record" }, 501);
  }

  const data = await res.json();

  console.log(data);

  responseMaker({data})
}

export async function PUT(request: Request) {}
