import { SunIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
            <h1 className='text-5xl font-bold mb-20'>ChatGpt 2.0 </h1>
            <div>
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
            </div>
        </div>
    )
}

export default HomePage
