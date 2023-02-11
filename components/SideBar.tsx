import React from 'react'
import NewChat from './NewChat'

const SideBar = () => {
    return (
        <div className='p-2 flex flex-col h-screen'>
            <div className=''>
                <div>
                    {/* NewChatButton */}
                        <NewChat />
                    <div>
                        {/* ModelSelection */}
                    </div>

                    {/* Map through the chatRows and render the chatRow component */}
                </div>
            </div>
        </div>
    )
}

export default SideBar
