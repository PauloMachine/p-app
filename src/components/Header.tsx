import React from 'react'

export const Header = () => {
  return (
    <section className='flex container justify-between mx-auto items-center max-w-[1440px]'>
      <div className='flex flex-col max-w-[531px] gap-[35px]'>
        <h1 className='text-6xl font-medium leading-[120%]'>
          Navigating the digital landscape for success
        </h1>
        <p className='text-xl leading-[28px] w-[498px]'>
          Our digital marketing agency helps businesses grow and succeed online through a range of
          services including SEO, PPC, social media marketing, and content creation.
        </p>
        <a
          href='#'
          className='bg-secondary text-white font-grotesk hover:bg-white hover:text-secondary border border-secondary py-[20px] px-[35px] rounded-[14px] w-[264px] text-center'
        >
          Book a consultation
        </a>
      </div>
      <div className='flex justify-center'>
        <img src='/assets/images/hero.png' alt='Hero' className='max-w-full h-auto' />
      </div>
    </section>
  )
}
