import { NextResponse } from "next/server";

/**
 * Checking if key(s) sent from client side of not
 *
 * @param body body of request
 * @param key key(s) we want to check
 * @returns
 */
export function checkEntries(
  body: { [key: string]: any },
  key: string | string[]
): boolean {
  if (!Array.isArray(key)) {
    key = [key];
  }

  const bodyKeys = Object.keys(body);
  return key.every((k) => bodyKeys.includes(k));
}

/**
 * Makes a Response type response for apis.
 *
 * @param body body of response
 * @param status status of response
 * @returns
 */
export function responseMaker(
  body: { [key: string]: any },
  status: number = 200,
  headers: { [key: string]: any } = {}
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "content-type": "application/json",
      ...headers,
    },
  });
}
