import React from 'react'
import TelegramIcon from '../../_components/Icons/Telegram'
import TwitterIcon from '../../_components/Icons/Twitter'
import FacebookIcon from '../../_components/Icons/Facebook'
import InstagramIcon from '../../_components/Icons/Instagram'
import LinkedinIcon from '../../_components/Icons/Linkedin'

export default function CustomSocialIcons() {
    return (
        <div className='text-white shiny-effect-sm mt-5 flex justify-evenly items-center gap-3 md:gap-4'>
            <a href="https://twitter.com/moonshot/" target="_blank" rel="noreferrer" className='p-1 md:p-2 transition-all rounded-full cursor-pointer'>
                <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/moonshot" target="_blank" rel="noreferrer" className='p-1 md:p-2 transition-all rounded-full cursor-pointer'>
                <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/moonshot/" target="_blank" rel="noreferrer" className='p-1 md:p-2 transition-all rounded-full cursor-pointer'>
                <LinkedinIcon  className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/moonshot" target="_blank" rel="noreferrer" className='p-1 md:p-2 transition-all rounded-full cursor-pointer'>
                <InstagramIcon  className="w-6 h-6" />
            </a>
            <a href="https://t.me/moonshot" target="_blank" rel="noreferrer" className='p-1 md:p-2 transition-all rounded-full cursor-pointer'>
                <TelegramIcon  className="w-6 h-6" />
            </a>
        </div>
    )
}
