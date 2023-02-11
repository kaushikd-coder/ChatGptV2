import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
            <h1 className='text-5xl font-bold mb-20'>KaushikGpt 2.0 </h1>
            <div className='flex space-x-2 text-center'>
                
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'> 
                    <SunIcon className="h-8 w-8 "/>
                        <h2>Examples</h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>"Explain quantum computing in simple terms"</p>
                        <p className='infoText'>"Got any creative ideas for a 10 year old’s birthday?"</p>
                        <p className='infoText'>"How do I make an HTTP request in Javascript?"</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                    <BoltIcon className="h-8 w-8 "/>
                        <h2>Capabilities</h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>"Change the ChatGpt Model V2"</p>
                        <p className='infoText'>"Who is S.E Kaushik?"</p>
                        <p className='infoText'>"Hot Toast notifications when ChatGpt is thinking!"</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                    <ExclamationTriangleIcon className="h-8 w-8 "/>
                        <h2>Limitations</h2>
                    </div>

                    <div className='space-y-2'>
                        <p className='infoText'>"May occasionally generate incorrect information"</p>
                        <p className='infoText'>"May occasionally get access your private data!"</p>
                        <p className='infoText'>"Limited knowledge of world and events after 2023"</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage
