import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

const testimonials = [
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp'
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp'
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp'
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp'
  },
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp'
  }
]

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      origin: 'center',
      perView: 1.9,
      spacing: 0
    },
    mode: 'snap'
  })

  return (
    <section className='flex flex-col mx-auto container gap-[70px] mt-[40px] max-w-[1440px]'>
      <div className='flex items-start gap-[40px]'>
        <div className='flex items-center rounded-[7px] bg-primary p-[7px] h-[51px] w-[255px]'>
          <h2 className='font-medium text-[40px]'>Testimonials</h2>
        </div>
        <div className='w-[473px]'>
          <p className='text-black text-[18px]'>
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital
            Marketing Services
          </p>
        </div>
      </div>

      <div className='flex flex-col bg-secondary justify-between items-center rounded-[45px] h-[625px] overflow-x-hidden py-[80px]'>
        <div ref={sliderRef} className='keen-slider flex'>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className='keen-slider__slide flex flex-col items-start text-center gap-[20px]'
            >
              <div
                className='bg-no-repeat bg-center bg-contain flex items-center justify-center w-[606px] h-[266px]'
                style={{ backgroundImage: `url("/assets/images/bubble.png")` }}
              >
                <div className='h-[190px]'>
                  <p className='text-white text-[18px] w-[502px]'>{t.quote}</p>
                </div>
              </div>
              <div className='flex flex-col items-start ml-[80px]'>
                <p className='text-[20px] text-primary font-medium'>{t.name}</p>
                <p className='text-[18px] text-white'>{t.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between w-[506px]'>
          <img
            width={20}
            height={20}
            className='cursor-pointer'
            src={`/assets/icons/arrow-left-off.png`}
            onClick={() => instanceRef.current?.moveToIdx(currentSlide - 1)}
          />
          <div className='flex gap-[20px] h-[14px]'>
            {testimonials.map((_, idx) => (
              <img
                key={idx}
                width={14}
                height={14}
                className='cursor-pointer'
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                src={`/assets/icons/star-${currentSlide === idx ? 'green' : 'white'}.png`}
              />
            ))}
          </div>
          <img
            width={20}
            height={20}
            className='cursor-pointer'
            src={`/assets/icons/arrow-right.png`}
            onClick={() => instanceRef.current?.moveToIdx(currentSlide + 1)}
          />
        </div>
      </div>
    </section>
  )
}
