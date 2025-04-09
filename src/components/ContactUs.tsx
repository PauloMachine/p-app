import React, { useState } from 'react'

export const ContactUs = () => {
  const [formType, setFormType] = useState('say-hi')

  return (
    <section className='flex flex-col mx-auto container gap-[70px] mt-[60px] max-w-[1440px]'>
      <div className='flex items-start gap-[40px]'>
        <div className='flex items-center rounded-[7px] bg-primary p-[7px] h-[51px] w-[229px]'>
          <h2 className='font-medium text-[40px]'>Contact Us</h2>
        </div>
        <div className='w-[323px]'>
          <p className='text-black text-[18px]'>
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
      </div>
      <div className='bg-tertiary rounded-[45px] pt-[60px] pb-[80px] pl-[100px] flex justify-between'>
        <div className='flex flex-col gap-[40px] w-[556px]'>
          <div className='flex gap-[35px]'>
            <label className='flex items-center text-[18px] gap-[10px]'>
              <div className='flex justify-center items-center w-[28px] h-[28px] border border-black rounded-full'>
                <input
                  type='radio'
                  name='form'
                  checked={formType === 'say-hi'}
                  onChange={() => setFormType('say-hi')}
                  className='w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary cursor-pointer'
                />
              </div>
              Say Hi
            </label>
            <label className='flex items-center text-[18px] gap-[10px]'>
              <div className='flex justify-center items-center w-[28px] h-[28px] border border-black rounded-full'>
                <input
                  type='radio'
                  name='form'
                  checked={formType === 'quote'}
                  onChange={() => setFormType('quote')}
                  className='w-[16px] h-[16px] rounded-full appearance-none checked:bg-primary cursor-pointer'
                />
              </div>
              Get a Quote
            </label>
          </div>
          <form className='flex flex-col gap-[40px] w-[556px]'>
            <div className='flex flex-col gap-[5px]'>
              <label className='text-black text-[16px]'>Name</label>
              <input
                type='text'
                placeholder='Name'
                className='w-full border border-black rounded-[14px] px-[30px] py-[18px]'
                required
              />
            </div>
            <div className='flex flex-col gap-[5px]'>
              <label className='text-black text-[16px]'>Email*</label>
              <input
                type='email'
                placeholder='Email'
                className='w-full border border-black rounded-[14px] px-[30px] py-[18px]'
                required
              />
            </div>
            <div className='flex flex-col gap-[5px]'>
              <label className='text-black text-[16px]'>Message*</label>
              <textarea
                placeholder='Message'
                rows={formType === 'quote' ? 4 : 8}
                className='w-full min-h-[190px] border border-black rounded-[14px] px-[30px] py-[18px]'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-secondary text-white font-grotesk hover:bg-white hover:text-secondary border border-secondary py-[20px] px-[35px] rounded-[14px] w-auto text-center'
            >
              Send Message
            </button>
          </form>
        </div>
        <div className='flex justify-center'>
          <img src='/assets/images/contact-us.png' alt='Contact Us' className='h-[692px] w-auto' />
        </div>
      </div>
    </section>
  )
}
