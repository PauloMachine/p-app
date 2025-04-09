import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    number: '02',
    title: 'Research and Strategy Development'
  },
  {
    number: '03',
    title: 'Implementation'
  },
  {
    number: '04',
    title: 'Monitoring and Optimization'
  },
  {
    number: '05',
    title: 'Reporting and Communication'
  },
  {
    number: '06',
    title: 'Continual Improvement'
  }
]

export const WorkingProcess = () => {
  return (
    <section className='flex flex-col mx-auto container gap-[70px] mt-[60px] max-w-[1240px]'>
      <div className='flex items-start gap-[40px]'>
        <div className='flex items-center rounded-[7px] bg-primary p-[7px] h-[51px] w-[412px]'>
          <h2 className='font-medium text-[40px]'>Our Working Process</h2>
        </div>
        <div className='w-[292px]'>
          <p className='text-black text-[18px]'>
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-[30px]'>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-[45px] py-[41px] px-[60px] border border-secondary shadow-dark ${
              index === 0 && 'bg-primary gap-[20px]'
            }`}
          >
            <div className='cursor-pointer flex justify-between items-center'>
              <div className='flex items-center gap-[25px]'>
                <span className='text-[60px] font-medium'>{step.number}</span>
                <span className='text-[30px] font-medium'>{step.title}</span>
              </div>
              <img
                src={`/assets/icons/${index === 0 ? 'plus' : 'more'}.png`}
                alt='Toggle'
                className='w-[58px] h-[58px]'
              />
            </div>
            {step?.description && (
              <div className='border-t border-black pt-[30px]'>
                <p className='text-black text-[18px] w-[1114px]'>{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
