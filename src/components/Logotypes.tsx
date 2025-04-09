import React from 'react'

export const Logotypes = () => {
  return (
    <section>
      <div className='container flex justify-between flex-wrap mx-auto max-w-[1440px]'>
        {['amazon.png', 'dribble.png', 'hubspot.png', 'notion.png', 'netflix.png', 'zoom.png'].map(
          (partner, index) => (
            <div key={index} className='w-24 h-10'>
              <img
                src={`/assets/images/partners/${partner}`}
                alt={partner.split('.')[0]}
                className='object-contain w-full h-full filter brightness-0 saturate-100'
              />
            </div>
          )
        )}
      </div>
    </section>
  )
}
