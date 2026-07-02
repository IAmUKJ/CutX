"use server";

export async function clipTweet(tweetUrl: string, start: string, end: string) {
  const response = await fetch("http://localhost:9000/clip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tweetUrl, start, end }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}