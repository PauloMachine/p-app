import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-col container mx-auto rounded-t-[45px] mt-[60px] bg-secondary h-[514px] pt-[55px] pb-[50px] px-[60px] gap-[50px]'>
      <div className='flex justify-between h-[30px]'>
        <a href='#'>
          <img src='/assets/logos/logo-light.png' alt='Logo' className='h-[29px]' />
        </a>
        <ul className='flex flex-wrap gap-[40px]'>
          <li>
            <a href='#' className='text-white text-[18px] underline'>
              About us
            </a>
          </li>
          <li>
            <a href='#' className='text-white text-[18px] underline'>
              Services
            </a>
          </li>
          <li>
            <a href='#' className='text-white text-[18px] underline'>
              Use Cases
            </a>
          </li>
          <li>
            <a href='#' className='text-white text-[18px] underline'>
              Pricing
            </a>
          </li>
          <li>
            <a href='#' className='text-white text-[18px] underline'>
              Blog
            </a>
          </li>
        </ul>
        <ul className='flex gap-4'>
          <li>
            <a href='#'>
              <img src='/assets/icons/linkedin-light.png' alt='LinkedIn' className='h-[30px]' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/assets/icons/facebook-light.png' alt='Facebook' className='h-[30px]' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='/assets/icons/twitter-light.png' alt='Twitter' className='h-[30px]' />
            </a>
          </li>
        </ul>
      </div>
      <div className='flex justify-between h-[185px]'>
        <div className='flex flex-col gap-[27px] w-[332px]'>
          <div className='flex items-center rounded-[7px] bg-primary p-[7px] h-[26px] w-[126px]'>
            <h4 className='font-medium text-[20px]'>Contact us:</h4>
          </div>
          <div className='flex flex-col gap-[20px] w-[332px]'>
            <p className='text-white text-[18px]'>Email: info@positivus.com</p>
            <p className='text-white text-[18px]'>Phone: 555-567-8901</p>
            <p className='text-white text-[18px]'>
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <form className='flex items-center gap-[20px] px-[58px] py-[40px] bg-dark rounded-[14px] w-[634px]'>
          <input
            type='email'
            placeholder='Email'
            className='w-[285px] border text-white border-white bg-dark rounded-[14px] px-[30px] py-[18px]'
            required
          />
          <button
            type='submit'
            className='bg-primary text-black font-grotesk hover:bg-white hover:text-secondary border border-secondary py-[20px] px-[35px] rounded-[14px] w-[249px] text-center text-[18px]'
          >
            Subscribe to news
          </button>
        </form>
      </div>
      <div className='flex gap-[40px] text-white text-[18px] border-t border-white mt-[20px] pt-[50px]'>
        <p>&copy; 2023 Positivus. All Rights Reserved.</p>
        <a href='#' className='underline'>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
