import React from 'react'
import { NavigationBar } from './components/NavigationBar'
import { Header } from './components/Header'
import { Logotypes } from './components/Logotypes'
import { Services } from './components/Services'
import { CTA } from './components/CTA'
import { CaseStudies } from './components/CaseStudies'
import { WorkingProcess } from './components/WorkingProcess'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <main className='w-full'>
      <div className='flex flex-col mx-auto max-w-[1440px] gap-[70px] px-[100px] pt-[60px]'>
        <NavigationBar />
        <Header />
        <Logotypes />
        <Services />
        <CTA />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </main>
  )
}

export default App
