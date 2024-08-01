import React from 'react'
import TelegramIcon from '../../_components/Icons/Telegram'
import TwitterIcon from '../../_components/Icons/Twitter'
import FacebookIcon from '../../_components/Icons/Facebook'
import InstagramIcon from '../../_components/Icons/Instagram'
import LinkedinIcon from '../../_components/Icons/Linkedin'

export default function SocialIcons() {
    return (
        <div className='text-white shiny-effect-sm mb-[-86px] flex items-center gap-6 md:gap-10'>
            <a href="https://twitter.com/moonshot/" target="_blank" rel="noreferrer" className='p-1 md:p-2 bg-gradient-to-t from-green-500/50 to-green-700/70 hover:from-green-600/50 hover:to-green-800/80 transition-all rounded-full cursor-pointer'>
                <TwitterIcon />
            </a>
            <a href="https://www.facebook.com/moonshot" target="_blank" rel="noreferrer" className='p-1 md:p-2 bg-gradient-to-t from-green-500/50 to-green-700/70 hover:from-green-600/50 hover:to-green-800/80 transition-all rounded-full cursor-pointer'>
                <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/company/moonshot/" target="_blank" rel="noreferrer" className='p-1 md:p-2 bg-gradient-to-t from-green-500/50 to-green-700/70 hover:from-green-600/50 hover:to-green-800/80 transition-all rounded-full cursor-pointer'>
                <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/moonshot" target="_blank" rel="noreferrer" className='p-1 md:p-2 bg-gradient-to-t from-green-500/50 to-green-700/70 hover:from-green-600/50 hover:to-green-800/80 transition-all rounded-full cursor-pointer'>
                <InstagramIcon />
            </a>
            <a href="https://t.me/moonshot" target="_blank" rel="noreferrer" className='p-1 md:p-2 bg-gradient-to-t from-green-500/50 to-green-700/70 hover:from-green-600/50 hover:to-green-800/80 transition-all rounded-full cursor-pointer'>
                <TelegramIcon />
            </a>
        </div>
    )
}
