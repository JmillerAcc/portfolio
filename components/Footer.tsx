import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'>your</span> digital presence to the next level?
                </h1>
                <p className='text-white-200 md:mt-10 my-5'>
                    Reach out to me today and let&apos;s get talk about how I can help you achieve your goals.
                </p>
                <a href='mailto:jmiller@accuridecorp.com' className='cursor-pointer'>
                    <MagicButton
                     title='Contact Me'
                     icon={<FaLocationArrow />}
                     position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center px-10 pb-20'>
                <p className='md:text-base text-sm md:font-normal font-light text-center'>
                    Copyright &copy; 2024
                </p>
                 <div className='flex md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id}>
                        <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </div>
                ))}
            </div>
            </div>
    </footer>
  )
}

export default Footer