import BentoGrid from '@/components/layout/BentoGrid'
import Footer from '@/components/layout/Footer'
import InternshipCards from '@/components/layout/InternshipCards'
import { InternshipSlider } from '@/components/layout/InternshipSlider'
import Navbar from '@/components/layout/Navbar'
import Title from '@/components/layout/Title'
import React from 'react'

const Internship = () => {
  return (
    <div>
        <Navbar />
        <Title title="Internship" />
        <InternshipCards/>
        <InternshipSlider/>
        <BentoGrid/>
        <Footer />
    </div>
  )
}

export default Internship