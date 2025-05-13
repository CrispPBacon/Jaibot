import openai from "../config/openai.js";
import Conversation from "../models/conversation.js";
import Message from "../models/message.js";

export async function generateTitle(content) {
  const titlePrompt = [
    {
      role: "system",
      content:
        "You are a helpful assistant that summarizes conversations into short, clear titles. Limit the title to 3–5 words.",
    },
    {
      role: "user",
      content: "Give this conversation a short and descriptive title.",
    },
    {
      role: "user",
      content,
    },
  ];

  return await getChatCompletion(titlePrompt);
}

export async function createNewChat(user_id, content) {
  const initialPrompt = [
    {
      role: "assistant",
      content:
        "You are a helpful assistant that summarizes conversations. Limit it to maximum of 10 sentences.",
    },
    { role: "user", content },
  ];

  const title = await generateTitle(content);

  const initialResponse = await getChatCompletion(initialPrompt);

  const conversation_data = await new Conversation({ user_id, title }).save();

  const message_data = await newMessage(
    user_id,
    "user",
    content,
    conversation_data._id
  );

  const ai_message_data = await newMessage(
    user_id,
    "assistant",
    initialResponse,
    conversation_data._id
  );

  console.log(message_data, ai_message_data);
  // console.log(initialResponse);

  return conversation_data;
}

export async function getChatCompletion(messages, model = "gpt-4o-mini") {
  const completion = await openai.chat.completions.create({
    model,
    messages,
    store: true,
  });

  return completion.choices[0].message.content;
}

export async function newMessage(user_id, role, content, conversation_id) {
  //   const messages = [];
  //   const message = { role: "user", content };
  //   messages.push(message);

  const data = await new Message({
    user_id,
    role,
    content,
    conversation_id,
  }).save();
  return data;
}
