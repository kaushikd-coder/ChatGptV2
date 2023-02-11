

import { DocumentData } from 'firebase/firestore'

type Props = {
    message: DocumentData
}

function Message( { message }: Props) {

    const isKaushik = message.user.name === "Kaushik"

    return (
        <div className={`py-5 text-white ${isKaushik && 'bg-[#434654]'}`}>
            <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
            <img src={message.user.avatar} alt={message.user.name} className="h-8 w-8 rounded-md"/>
                <p className='pt-1 text-sm '>
                    {message.text}
                </p>
            </div>
        </div>
    )
}

export default Message
