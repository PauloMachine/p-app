import React from 'react'

const services = [
  {
    title: 'Search engine',
    titleWrap: 'optimization',
    bgCard: 'bg-tertiary',
    bgText: 'bg-primary',
    learnMore: 'green',
    img: '/assets/images/cards/card-1.png'
  },
  {
    title: 'Pay-per-click',
    titleWrap: 'advertising',
    bgCard: 'bg-primary',
    bgText: 'bg-white',
    learnMore: 'green',
    img: '/assets/images/cards/card-2.png'
  },
  {
    title: 'Social Media',
    titleWrap: 'Marketing',
    bgCard: 'bg-secondary',
    bgText: 'bg-white',
    learnMore: 'black',
    img: '/assets/images/cards/card-3.png'
  },
  {
    title: 'Email',
    titleWrap: 'Marketing',
    bgCard: 'bg-tertiary',
    bgText: 'bg-primary',
    learnMore: 'green',
    img: '/assets/images/cards/card-4.png'
  },
  {
    title: 'Content',
    titleWrap: 'Creation',
    bgCard: 'bg-primary',
    bgText: 'bg-white',
    learnMore: 'green',
    img: '/assets/images/cards/card-5.png'
  },
  {
    title: 'Analytics and',
    titleWrap: 'Tracking',
    bgCard: 'bg-secondary',
    bgText: 'bg-primary',
    learnMore: 'black',
    img: '/assets/images/cards/card-6.png'
  }
]

export const Services = () => {
  return (
    <section className='flex flex-col mx-auto container gap-[70px] mt-[50px] max-w-[1440px]'>
      <div className='flex items-start gap-[40px]'>
        <div className='flex items-center rounded-[7px] bg-primary p-[7px] h-[51px] w-[178px]'>
          <h2 className='font-medium text-[40px]'>Services</h2>
        </div>
        <div className='w-[580px]'>
          <p className='text-black text-[18px]'>
            At our digital marketing agency, we offer a range of services to help businesses grow
            and succeed online. These services include:
          </p>
        </div>
      </div>
      <div className='flex flex-wrap gap-[40px]'>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgCard} rounded-[45px] overflow-hidden flex flex-wrap items-center justify-between w-[600px] h-[310px] border border-secondary shadow-dark p-[50px]`}
          >
            <div className='flex flex-col justify-between gap-[93px] '>
              <div className='flex flex-col'>
                <div className={`inline-flex w-fit ${service.bgText} rounded-[7px] px-[7px]`}>
                  <h3 className='text-[30px] font-medium'>{service.title}</h3>
                </div>
                <div className={`inline-flex w-fit ${service.bgText} rounded-[7px] px-[7px]`}>
                  <h3 className='text-[30px] font-medium'>{service.titleWrap}</h3>
                </div>
              </div>
              <div className='flex items-center gap-[15px]'>
                <img
                  alt='Learn more'
                  className='w-[41px] h-[41px] cursor-pointer'
                  src={`/assets/icons/${
                    service.learnMore === 'green' ? 'arrow-green' : 'arrow-black'
                  }.png`}
                />
                <a
                  href='#'
                  className={`flex items-center text-${
                    service.learnMore === 'green' ? 'black' : 'white'
                  } text-[20px]`}
                >
                  Learn more
                </a>
              </div>
            </div>
            <img src={service.img} alt={service.title} className='w-[210px] h-auto' />
          </div>
        ))}
      </div>
    </section>
  )
}
