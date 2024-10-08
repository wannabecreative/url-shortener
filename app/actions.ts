"use server";

export async function createUrl({
  target,
  randomId,
  id,
}: {
  target: string;
  randomId: boolean;
  id?: string;
}) {
  const response = await fetch(process.env.BASE_URL + "/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ target, randomId, id }),
  });

  return await response.json();
}
