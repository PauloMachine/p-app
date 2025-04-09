import React from 'react'

const members = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    img: '/assets/images/members/member-1.png',
    bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    img: '/assets/images/members/member-2.png',
    bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    img: '/assets/images/members/member-3.png',
    bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    img: '/assets/images/members/member-4.png',
    bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    img: '/assets/images/members/member-5.png',
    bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    img: '/assets/images/members/member-6.png',
    bio: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries'
  }
]

export const Team = () => {
  return (
    <section className='flex flex-col mx-auto container gap-[70px] mt-[60px] max-w-[1241px]'>
      <div className='flex items-start gap-[40px]'>
        <div className='flex items-center rounded-[7px] bg-primary p-[7px] h-[51px] w-[115px]'>
          <h2 className='font-medium text-[40px]'>Team</h2>
        </div>
        <div className='w-[473px]'>
          <p className='text-black text-[18px]'>
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>
      </div>
      <div className='flex flex-wrap gap-[40px]'>
        {members.map((member, index) => (
          <div
            key={index}
            className='bg-white flex flex-col border border-secondary shadow-dark w-[386px] h-[331px] rounded-[45px] px-[35px] py-[40px] gap-[28px]'
          >
            <div className='flex items-end gap-[20px] border-b border-black pb-[28px]'>
              <div className='flex flex-col items-end'>
                <img src={member.img} alt={member.name} className='w-auto h-auto' />
              </div>
              <div className='flex flex-col items-end justify-between h-[110px]'>
                <a href='#'>
                  <img
                    src='/assets/icons/linkedin.png'
                    alt='LinkedIn'
                    className='w-[34px] h-[34px] items-end'
                  />
                </a>
                <div className='w-[197px] mb-[10px]'>
                  <h5 className='text-black font-medium text-[20px]'>{member.name}</h5>
                  <p className='text-black text-[18px]'>{member.role}</p>
                </div>
              </div>
            </div>
            <span className='text-black font-[18px]'>{member.bio}</span>
          </div>
        ))}
      </div>
      <div className='flex justify-end'>
        <a
          href='#'
          className='bg-secondary text-white font-grotesk hover:bg-white hover:text-secondary border border-secondary py-[20px] px-[35px] rounded-[14px] w-[269px] text-center mt-[-20px]'
        >
          See all team
        </a>
      </div>
    </section>
  )
}
