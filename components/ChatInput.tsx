"use client"

import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React from 'react'
import { db } from '../firebase'
import { toast } from 'react-hot-toast'
import ModelSelection from './ModelSelection'
import useSwr from "swr"
import { Message } from '../typings'


type Props = {
    chatId: string
}

function ChatInput({ chatId }: Props) {

    const [prompt, setPrompt] = React.useState('')
    const { data: session } = useSession()

    const { data: model } = useSwr('model', {
        fallbackData: 'text-davinci-003'
    })

    // TODO: useSwr to get the model
    

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!prompt) {
            return
        }

        const input = prompt.trim()
        setPrompt('');

        const message: Message = {
            text: input,
            createdAt: new Date().toLocaleTimeString(),
            // serverTimestamp()
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}&color=fff&background=000`
            }
        }

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)

        // Toast Notification to say loading
        const notification = toast.loading('Kaushik is typing...')

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session
            }),
        }).then((res) => {
            // Toast Notification to say Success
            toast.success('Kaushik has responded!', {
                id: notification,
            })
        }).catch(err => {
            console.log(err)
            
        })
    }

    return (
        <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm '>
            <form onSubmit={sendMessage} className='p-5 space-x-5 flex'>
                <input
                    value={prompt}
                    className='flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300'
                    disabled={!session}
                    onChange={(e) => setPrompt(e.target.value)}
                    type='text' placeholder='Type your message here...'
                />

                <button disabled={!prompt || !session} type='submit'
                    className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed'
                >
                    <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
                </button>
            </form>

            <div className='md:hidden'>
                {/* ModelSelection */}
                <ModelSelection />
            </div>
        </div>
    )
}

export default ChatInput
