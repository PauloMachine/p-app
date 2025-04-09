import React from 'react'

const studies = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
]

export const CaseStudies = () => {
  return (
    <section className='flex flex-col mx-auto container gap-[70px] mt-[70px] max-w-[1240px]'>
      <div className='flex items-start gap-[40px]'>
        <div className='flex items-center rounded-[7px] bg-primary p-[7px] h-[51px] w-auto'>
          <h2 className='font-medium text-[40px]'>Case Studies</h2>
        </div>
        <div className='w-[580px]'>
          <p className='text-black text-[18px]'>
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case
            Studies
          </p>
        </div>
      </div>
      <div className='flex rounded-[45px] bg-secondary px-[60px] py-[70px] gap-[64px] w-full h-[326px] justify-center'>
        {studies.map((text, index) => (
          <div key={index} className={index !== studies.length - 1 ? 'border-r pr-[64px]' : ''}>
            <div className='flex flex-col w-[286px] gap-[20px] h-[163px]'>
              <p className='text-white text-[18px]'>{text}</p>
              <div className='flex items-center  hover:underline gap-[5px]'>
                <a href='#' className='text-primary text-[20px]'>
                  Learn more
                </a>
                <img
                  alt='Learn more'
                  src='/assets/icons/arrow-green.png'
                  className='w-auto h-[38px] cursor-pointer'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
