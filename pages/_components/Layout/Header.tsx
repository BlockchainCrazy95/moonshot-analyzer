import React from 'react'
// import WalletButton from './WalletButton'

export default function Header() {

    return (
        <main className='z-10 absolute w-full px-4 lg:px-12 2xl:px-20 py-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className="avatar">
                        <img src="./images/logo.svg" draggable={false} className='!w-40' />
                    </div>
                </div>
                <div className='flex items-center gap-2 sm:gap-4 lg:gap-6 text-lg'>
                    {/* <div className='flex items-center gap-4'>
                        <WalletButton />
                    </div> */}
                </div>
            </div>
        </main>
    )
}
