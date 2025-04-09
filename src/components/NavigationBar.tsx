import React from 'react'

export const NavigationBar = () => {
  return (
    <header className='container mx-auto flex justify-between items-center max-w-[1440px]'>
      <div className='flex row gap-[10px] items-center'>
        <a href='/' className='logo'>
          <img src='/assets/logos/logo.png' alt='Logo' className='max-h-[36px]' />
        </a>
      </div>
      <ul className='hidden lx:flex gap-[40px] items-center'>
        <li>
          <a href='#' className='hover:underline font-grotesk'>
            About Us
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline font-grotesk size-[20px] '>
            Services
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline font-grotesk size-[20px]'>
            Use Cases
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline font-grotesk size-[20px]'>
            Pricing
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline font-grotesk size-[20px]'>
            Blog
          </a>
        </li>
        <li>
          <a
            href='#'
            className='bg-white text-black font-grotesk hover:bg-secondary hover:text-white border border-secondary py-[20px] px-[35px] rounded-[14px] w-[231px]'
          >
            Request a quote
          </a>
        </li>
      </ul>
      <button type='button' className='block lx:hidden'>
        <img src='/assets/icons/hamburger-menu.png' alt='Menu' className='h-6 w-6' />
      </button>
    </header>
  )
}
