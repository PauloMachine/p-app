import React from 'react'

export const CTA = () => {
  return (
    <section className='flex justify-between container mx-auto w-[1240px] h-[347px] bg-tertiary p-[60px] rounded-[45px] mt-[40px]'>
      <div className='flex flex-col w-[500px] gap-[26px]'>
        <h4 className='text-[30px] font-medium'>Let's make things happen</h4>
        <p className='text-[18px] text-black'>
          Contact us today to learn more about how our digital marketing services can help your
          business grow and succeed online.
        </p>
        <a
          href='#'
          className='bg-secondary text-white font-grotesk hover:bg-white hover:text-secondary border border-secondary py-[20px] px-[35px] rounded-[14px] w-[264px] text-center'
        >
          Get your free proposal
        </a>
      </div>
      <div className='flex justify-center mt-[-80px] mr-[80px]'>
        <img
          src='/assets/images/cta.png'
          alt='Get your free proposal'
          className='w-[359px] h-[395px]'
        />
      </div>
    </section>
  )
}
