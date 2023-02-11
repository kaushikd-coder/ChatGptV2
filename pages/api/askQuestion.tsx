import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';
import admin from "firebase-admin";
import { adminDb } from '../../firebaseAdmin';
import { Message } from '../../typings';

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({
            answer: 'Please provide a prompt'
        })
        return;
    }

    if (!chatId) {
        res.status(400).json({
            answer: 'Please provide a chatId'
        })
        return;
    }

    const response = await query(prompt, chatId, model);
    
    const message: Message = {
        text: response || "Kaushik was unable to find an answer for that!",
        createdAt:  new Date().toLocaleTimeString(),
        // store.Timestamp.now()
        user: {
            _id: "Kaushik",
            name: "Kaushik",
            avatar: "https://avatars.githubusercontent.com/u/80564718?s=400&u=ba4f8f25cd4fdfca1097cb235c08e68f6fe75da3&v=4"
        }
    };

    await adminDb
        .collection("users")
        .doc(session?.user?.email)
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);

    res.status(200).json({ answer: message.text });
}
