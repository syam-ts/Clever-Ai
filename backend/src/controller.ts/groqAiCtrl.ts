import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function main(req: any, res: any) {
  try {
    const { content } = req.body;

    const chatCompletion = await getResult(content);

    const data = chatCompletion.choices[0]?.message?.content;

    res.json({ data });
  } catch (err: any) {
    res.json({ message: "Error fetching chat completion:", err });
  }
}

export async function getResult(content: any) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama3-8b-8192",
  });
}
