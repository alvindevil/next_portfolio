"use client"
import React from 'react'
import Header from '../components/layout/header'
import HeroSection from '../sections/hero'
import ProjectsSection from '../sections/projectSection'
import ExperienceSection from '../sections/expSection'
import SkillsSection from '../sections/skillSection'
import Footer from '../components/layout/footer'

const LandingPgae = () => {
  return (
    <div>
      {/* <Header 
        title="My Portfolio"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/projects', label: 'Projects' },
          { href: '/contact', label: 'Contact' }
        ]}
      /> */}
      
          <div className="overflow-x-hidden">
              <HeroSection
                  prop={{
                      name: "PANTOMATH",
                      experience: "2+ yrs exp.",
                      years: "2+ yrs exp.",
                      startEnd: "2023 → 2025",
                      availability: "Available for work",
                      title: "Tech Entrepreneur",
                      quote:
                          "WHETHER IT’S WRITING CODE OR STRUCTURING A LIFE, I AIM FOR CLARITY, CALM AND LONG-TERM IMPACT. I BELIEVE GOOD SYSTEMS ARE BUILT WITH INTENT AND CONSISTENCY",
                      cvLink: "/files/cv.pdf",
                      contactLink: "mailto:shivam@example.com",
                  }}
              />
          </div>
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <Footer />
          



    </div>
  )
}

export default LandingPgae;
