import React, { useState, useRef } from 'react'
import { saveSubmission } from '../utils/storage'
import whitedot from '../assets/courses/whitedot.svg'
import hero1bg from '../assets/img/hero1bg.png' 
import heropic from '../assets/images/course5.jpg'
import aiassist from '../assets/images/digitaltools.png'
import mark from '../assets/courses/mark.svg'
import alumni from '../assets/courses/alumni.png'
import alumni2 from '../assets/courses/alumni2.png'
import alumni3 from '../assets/courses/alumni3.png'
import whatsapp from '../assets/courses/whatsapp.png'
import instructor from '../assets/courses/instructor.jpg'

const Digital = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const formRef = useRef<HTMLElement | null>(null)

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const payload = Object.fromEntries(fd.entries())
        saveSubmission('digital', payload)
        e.currentTarget.reset()
    }

  const faqs = [
    {
      q: "What is Zeplus Academy?",
      a: "Zeplus Academy is a forward-thinking tech academy dedicated to empowering African youth with practical skills in product development, design, and technology. We train innovators to create solutions that drive Africa’s progress."
    },
    {
      q: "What courses are available?",
      // example with bullets — use HTML markup (will be rendered below)
      a: `<p>We offer hands-on programs in:</p>
          <ul class="list-disc ml-5">
            <li>UI/UX Design with AI Skills, Data Analytics, Full Stack Development, Cybersecurity</li>
            <li>Digital Marketing.    Each course is project-based and career-focused.</li>
            </ul>`
    },
    {
      q: "Who can join Zeplus Academy?",
      a: "Anyone aged 16–35 with a passion for innovation, creativity, and technology can apply—whether you’re a beginner or looking to advance your tech career."
    },
    {
      q: "Do I need prior experience?",
      a: "No experience required! Our beginner-friendly programs start from the basics and guide you step-by-step through practical projects."
    },
    {
      q: "How long do courses last?",
      a: "Programs typically run 12–16 weeks, depending on the track. combining live classes, mentorship, and portfolio-building projects."
    },
    {
      q: "Is the training online or physical?",
      a: "Zeplus Academy offers online and hybrid learning options, with sessions accessible anywhere and physical classes in Magodo, Lagos."
    },
    {
      q: "What makes Zeplus Academy different from other tech schools?",
      a: "We don’t just teach skills — we mentor innovators. Our programs integrate real-life projects, leadership development, and access to Africa’s growing tech ecosystem."
    },
    {
        q: "How much do courses cost?",
        a: "Course fees vary by program. We provide flexible payment options, installment plans, and occasional scholarship opportunities for outstanding applicants."
    },
    {
        q: "How can I apply or enroll??",
        a: "Simply visit our website’s “Apply Now” section, choose your preferred course, and complete the short application form. Our admissions team will contact you within 48 hours."
    },
     {
        q: "Can organizations partner with Zeplus Academy?",
        a: "Yes! We collaborate with companies, NGOs, and institutions to train and empower youth across Africa.   📧 partners@zeplusacademy.com"
    },
    {
        q: "How can I contact Zeplus Academy?",
        a: "You can reach our support team via email at support@zeplusacademy.com, WhatsApp, or visit our office at Magodo Phase 2 Estate, Lagos."
    },

  ]

  return (
    <section className='w-full bg-white'>
      <section
        className='w-full font-poppins'
        style={{
          backgroundImage: `url(${hero1bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='md:py-40 py-7 md:max-w-8xl mx-auto'>
              <div className='flex flex-col md:flex-row gap-10 items-center justify-between md:px-40 px-6 my-'>
                    {/* Left side */}
                    <div className='flex flex-col md:max-w-[800px]'>
                        <div className='md:max-w-[550px] '>
                            <h1 className='md:text-[50px] text-[26px] font-[700] text-[#301D20] [font-family:Playfair_Display,serif] leading-tight md:leading-[1.05] tracking-tight md:max-w-[550px] max-w-full break-words text-left'>
                            Master the Art of Digital Growth in the Age of AI
                            </h1>
                        </div>
                        <div className='md:max-w-[700px] flex flex-col md:gap-3 gap-1 mt-5'>
                                 <h2 className='md:text-[50px] text-3xl font-[650] text-[#6c0c11]'>400,000 NGN </h2>
                                  <p className='font-[500] md:text-[16px] text-[14px] text-[#7F676B]'>Turn clicks into customers.</p>
                                  <p className='font-[500] md:text-[16px] text-[14px] text-[#7F676B]'>Build brands that matter</p>
                                  <p className='font-[500] md:text-[16px] text-[14px] text-[#7F676B]'>Lead Africa’s digital future.</p>
                                   <div className='flex md:flex-row flex-col gap-3 mt-2'>
                                    <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Digital%20Marketing%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer">
                                   <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer  bg-[#27D366] md:px-20 px-15 py-4 rounded-xl'>
                                    <p className='font-[500] md:text-[16px] text-[14px]'>Let's Talk</p>
                                    <span>
                                        <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
                                    </span>
                                   </div></a>
                                    <p onClick={scrollToForm} role="button" tabIndex={0} className='cursor-pointer ttext-[#8F2436] hover:text-white bg-transparent hover:bg-[#8F2436] border-2 border-[#8F2436] md:px-15 md:py-3 py-2.5 px-5
                                     font-[500] rounded-xl text-center md:text-[16px] text-[14px]'>Download Brochure</p>
                                  </div>
        
                                     {/* Duration */}
                                  <div className='md:max-w-[650px] mt-4'>
                                    <div className='flex md:flex-row flex-col md:gap-10 gap-2'>
                                    {/* 1st */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[395] md:text-[15px] text-[14px] text-[#301D20]'><span className='font-[600]'>Duration:</span> 12 weeks</p>
                                    </div>
                                    {/* 2nd */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[395] md:text-[15px] text-[14px] text-[#301D20]'><span className='font-[600]'>Learning:</span> Online </p>
                                    </div>
                                   
                                  </div>
                                  <div className='flex md:flex-row flex-col md:gap-18 gap-2 md:mt-3 mt-2'>
                                     {/* 3rd */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[600] md:text-[15px] text-[14px] text-[#301D20]'>6 hours/week</p>
                                    </div>
                                    {/* 4th */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[395] md:text-[15px] text-[14px] text-[#301D20]'><span className='font-[600]'>Flexible Schedules:</span> Day or Evening Classes</p>
                                    </div>
                                  </div>

                                  </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='md:max-w-[600px]'>
                        <img src={heropic} alt="Digital Growth" className='w-full md:h-115 h-70 object-cover rounded-lg' />
                    </div>
              </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className='bg-white w-full font-poppins'>
          {/* Course Overview */}
          <div className=' bg-[#F9F6F0] md:max-w-[1350px] md:rounded-2xl mx-auto my-10 md:my-15'>
             <div className='md:max-w-4xl mx-auto md:px-0 px-6 py-10 md:py-20'>
                <div className='flex flex-col md:gap-8 gap-3 md:items-center justify-center'>
                <h2 className='md:text-[40px] font-[700] text-[25px] text-[#301D20] [font-family:Playfair_Display,serif]'>Course Overview</h2>
                <div className='flex flex-col gap-4'>
                    <p className='md:text-[16px] text-[13px] text-[#958184]'>Welcome to the <span className='font-[600]'> Zeplus Academy Digital Marketing with
                         AI Skills Course,</span> where creativity meets data, and strategy meets technology.</p>
                    <p className='md:text-[16px] text-[13px] text-[#958184]'>in just<span className='font-[600]'> 3 transformative months,</span> you’ll learn to 
                    design and execute digital marketing campaigns powered by<span className='font-[600]'> AI, analytics, and
                         automation —</span> the same tools shaping the world’s most successful brands.</p>
                    <p className='md:text-[16px] text-[13px] text-[#958184]'>Whether you dream of becoming a<span className='font-[600]'> digital strategist,
                         growth marketer, or entrepreneur,</span> this course 
                        equips you with hands-on skills to<span className='font-[600]'> drive engagement, boost sales, and
                             scale brands</span> in Africa’s fast-evolving digital economy.</p>
                </div>
             </div>
             </div>
          </div>

          {/* Career Opportunities */}
          <section className='mt-10 bg-[#8F2436] text-white font-poppins md:max-w-[1350px] mx-auto md:rounded-2xl mb-10'>
                <div className='md:max-w-7xl mx-auto md:px-10 px-6 py-15 md:py-20'>
                    <div className='flex md:flex-row flex-col gap-10'>
                        {/* Left Side */}
                        <div className='md:max-w-[650px]'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='md:text-[40px] text-[25px] font-[700] [font-family:Playfair_Display,serif]'>Career Pathways</h2>
                                <p className='font-[390] md:text-[15px] text-[13px]'>This course opens multiple high-growth career opportunities across industries and entrepreneurship:</p>
                                <div className='flex flex-col gap-4 mt-3 md:ml-10'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[15px] text-[13px]'>Digital Marketing Strategist</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[15px] text-[13px]'>Social Media Manager</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[15px] text-[13px]'>Growth Hacker / Marketing Analyst</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[15px] text-[13px]'>SEO/SEM Specialist</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[15px] text-[13px]'>Brand Communication Consultant</p>
                                   </div>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[15px] text-[13px]'>Freelance Digital Marketer / Entrepreneur</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[600px]'>
                            <img src={aiassist} alt='image' className='w-full md:h-105 h-60 object-cover rounded-lg border-5 border-white' />
                        </div>
                    </div>
                </div>
          </section>

          {/* What You'll Learn */}
          <section className='md:mt-10 mt-10 font-poppins bg-white'>
                <div className='md:max-w-[1350px] mx-auto md:px-0 px-6 py-0 mb-10'>
                      <div className='flex flex-col gap-3 items-center justify-center md:max-w-3xl mx-auto text-center mb-12'>
                        <h2 className='md:text-[40px] text-[20px] font-[600] [font-family:Playfair_Display,serif] text-[#301D20]'>What You'll Learn</h2>
                        <p className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Our practical, result-driven curriculum blends marketing psychology, storytelling, and 
                          technology to give you a complete growth toolkit:</p>
                      </div>

                      {/* Learning Modules */}
                     <div className='flex flex-col gap-8'>
                        {/* Module 1 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 1: Foundations of Digital Marketing</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-4'>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Understand how marketing works in the digital world</li>
                             <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Learn SEO, SEM, content marketing, and brand positioning.</li>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Master the tools that power online growth — from Google Analytics to Meta Ads.</li>
                        </div>
                        </div>
                        {/* Module 2 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 2: Social Media Mastery</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Build engaging content that connects with audiences on Instagram, TikTok, LinkedIn, and X.</li>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Learn social media strategy, ad targeting, and influencer collaboration.</li>
                           <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Analyze performance using AI-powered insights.</li>
                        </div>
                        </div>
                        {/* Module 3 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 3: Email & Content Marketing Automation</h3>
                        <div className='flex flex-col gap-4 md:ml-10 ml-5'>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Craft high-converting email campaigns using AI tools like Mailchimp and HubSpot.</li>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Build content funnels that turn leads into loyal customers.</li>
                           <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Automate workflows for consistency and performance.</li>
                        </div>
                        </div>
                        {/* Module 4 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 4: Performance Marketing & Analytics</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Learn paid ads strategy on Google, Meta, and TikTok.</li>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Use data to optimize campaigns for better ROI.</li>
                           <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Translate numbers into actionable growth insights.</li>
                        </div>
                        </div>
                        {/* Module 5 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 5: AI in Digital Marketing</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                           <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Discover how ChatGPT, Jasper, and Midjourney can supercharge your content.</li>
                           <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Use AI for predictive analytics, ad copy, and marketing automation.</li>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Stay ahead of the competition with intelligent campaign design.</li>
                        </div>
                        </div>
                        {/* Module 6 */}
                        <div className='flex flex-col gap-3'>
                        <h3 className='font-[450] text-[#6c0c11] md:text-[15px] text-[13px]'>Module 6: Capstone Project</h3>
                        <div className='flex flex-col gap-3 md:ml-10 ml-5'>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Create a full digital marketing campaign for a real brand.</li>
                           <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Present and pitch your strategy to industry mentors.</li>
                            <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Graduate with a <span className='font-[600]'>professional portfolio</span> ready to show employers and clients</li>
                        </div>
                        </div>
                     </div>
           
                </div>
          </section>

          {/* Why choose Zeplus */}
          <section className='md:max-w-[1300px] mx-auto md:px-0 px-6 pt-10 md:pt-10 mb-10'>
                    <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-[#942E3F] bg-[#EFE1DD] md:py-3 py-2.5 md:px-14 px-5 text-[13px] md:text-[16px] rounded-xl font-poppins'>Brochure</h2>
                    </div>

                        {/* why choose */}
                        <div className='bg-[#8F2436] md:rounded-3xl text-white font-poppins mt-10 '>
                            <div className='md:py-15 py-10 md:px-0 px-6'>
                              <div className='flex flex-col gap-4 items-center justify-center text-center md:max-w-4xl mx-auto'>
                                      <h2 className='md:text-[40px] text-[22px] font-[700]'>Why Choose Zeplus Academy?</h2>
                                      <p className='font-[390] md:text-ssm text-sm '>Because at Zeplus, we don’t just teach skills — we build leaders.</p>
                                     <div className='md:max-w-xl'>
                                         <p className='font-[400] md:text-[15px] text-[13px]'>Our mission is to empower African youth with digital excellence and 
                                            AI innovation to shape the continent’s digital economy.</p>
                                     </div>

                               
                              </div>
                              <div className='md:max-w-4xl mx-auto mnd:px-0 px-5 mt-6 items-center justify-center flex'>
                                     {/* lists */}
                                    <div className='flex flex-col md:gap-3 gap-4 mt-2 '>
                                            {/* 1st */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-[15px] text-[13px]'>AI-Powered Learning</p>
                                                </div>
                                                <p className='md:text-ssm text-sm md:ml-14 ml-5'>Stay relevant with AI tools integrated into every lesson</p>
                                            </div>
                                            {/* 2nd */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-[15px] text-[13px]'>Hands-on Projects</p>
                                                </div>
                                                <p className='md:text-[15px] text-[13px] md:ml-18 ml-5'>Work on real brand campaigns and data-driven growth tasks.</p>
                                            </div>
                                            {/* 3rd */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-[15px] text-[13px]'>Expert Instructors</p>
                                                </div>
                                                <p className='md:text-[15px] text-[13px] md:ml-20 ml-5'>Learn from professionals transforming Africa’s digital space.</p>
                                            </div>
                                            {/* 4th */}
                                            <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1'>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-[15px] text-[13px]'>Career Mentorship</p>
                                                </div>
                                                <p className='md:text-[15px] text-[13px] md:ml-18 ml-5'>Get 1:1 coaching and portfolio reviews.</p>
                                            </div>
                                            {/* 5th */}
                                             <div className='flex md:flex-row flex-col md:gap-4 gap-1'>
                                                <div className='flex flex-row gap-1 '>
                                                     <span>
                                                        <img src={mark} alt='icon' className='w-4 h-4 mt-0.5 invert' />
                                                     </span>
                                                     <p className='font-[450] md:text-[15px] text-[13px]'>Community of Innovators</p>
                                                </div>
                                                <p className='md:text-[15px] text-[13px] md:mr-0 ml-5'>Join a thriving ecosystem of creative minds and tech leaders.</p>
                                            </div>
                                    </div>
                              </div>
                             </div>
                        </div>
          </section>

           {/* ALumni */}

          <section className='bg-[#FFFFFF] font-poppins w-full mb-10 py-10 font-poppins'>
  <div className='bg-[#FBFBF9]  '>
    <div className='md:max-w-[1350px] mx-auto py-10 md:px-0 px-6'>
        <div className='md:max-w-3xl mx-auto items-center justify-center text-white mb-10'>
            <h2 className='md:text-[30px] text-[20px] font-[700] text-center [font-family:Playfair_Display,serif] text-[#301D20]'>Here’s why people just like you choose 
Zeplus Academy for Data Analytics</h2>
            </div>

            {/*  grids */}
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center'>
                {/* 1st */}
                <div className='bg-white rounded-lg shadow'>
                    <div className='flex flex-col gap-5 p-6 md:py-10'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni} alt='image' className='md:w-16 md:h-16 w-12 h-12 rounded-full object-cover' />
                            <div className='flex flex-col gap'>
                                <h3 className='font-[460] md:text-[15px] text-[13px] text-[#958184]'>Tunde</h3>
                                <p className='font-[360] md:text-[15px] text-[13px] text-[#958184]'>ui/ux Designer</p>
                            </div>
                        </div>
                        <div className='mb-5.5'>
                            <p className='font-[400] md:text-[15px] text-[13px] text-[#958184]'>“Zeplus Academy transformed how I approach technology and problem-solving. 
The instructors were not just teachers — they were mentors who guided me every step of the way. Every project challenged me to think deeper and create smarter. It’s more than a school; it’s a launchpad for anyone serious about a tech career.”</p>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className='bg-white rounded-lg shadow '>
                    <div className='flex flex-col gap-5 p-6 md:py-12'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni2} alt='image' className='md:w-16 md:h-16 w-12 h-12 rounded-full object-cover' />
                             <div className='flex flex-col gap'>
                                <h3 className='font-[460] md:text-[15px] text-[13px] text-[#958184]'>Gift</h3>
                                <p className='font-[360] md:text-[15px] text-[13px] text-[#958184]'>Freelancer, Alumni</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-[400] md:text-[15px] text-[13px] text-[#958184]'>"Before joining Zeplus Academy, I doubted my ability to thrive in tech. But the structured learning path, interactive classes, and supportive community changed that. I went from a beginner to confidently working on real projects that make impact. The experience gave me the confidence to build and lead in the digital space.”</p>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className='bg-white rounded-lg shadow'>
                    <div className='flex flex-col gap-5 p-6 md:py-10'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni3} alt='image' className='md:w-16 md:h-16 w-12 h-12 rounded-full object-cover' />
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-[460] md:text-[15px] text-[13px] text-[#958184]'>Jude</h3>
                                <p className='font-[360] md:text-[15px] text-[13px] text-[#958184]'>Cybersecurity</p>
                            </div>
                        </div>
                        <div className='mb-11'>
                            <p className='font-[400] md:text-[15px] text-[13px] text-[#958184]'>“What stood out to me most about Zeplus Academy was how practical everything felt. We didn’t just learn theories  we applied them immediately. From hands-on cybersecurity labs to teamwork simulations, it felt like real industry work. I left feeling ready for any challenge.”</p>
                        </div>
                    </div>
                </div>
                </div>
    </div>
  </div>
</section>


     <section className='md:max-w-6xl mx-auto mt-10 bg-[#8F2436] md:rounded-2xl font-poppins' >
            <div className='py-10  md:py-15 md:px-0 px-6 flex flex-col gap-6 items-center justify-center text-white'>
                   <h2 className='font-[550] md:text-[40px] text-[25px] [font-family:Playfair_Display,serif] text-white'>Who Can Enroll?</h2>
                   <div className='flex flex-col md:gap-2.5 gap-4'>
                    {/* 1st */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                        </span>
                        <p className='font-[395] text-[13px] md:text-[16px]'>Aspiring marketers and entrepreneurs.</p>
                    </div>
                    {/* 2nd */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                        </span>
                        <p className='font-[395] text-[13px] md:text-[16px]'>Graduates or professionals looking to upskill.</p>
                    </div>
                    {/* 3rd */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                        </span>
                        <p className='font-[395] text-[13px] md:text-[16px]'>Creators who want to scale their online presence.</p>
                    </div>
                    {/* 4th */}
                    <div className='flex flex-row gap-4'>
                        <span>
                            <img src={whitedot} alt='dot' className='w-5 h-5 md:w-4 md:h-4 mt-1' />
                        </span>
                        <p className='font-[395] text-[13px] md:text-[16px]'>Anyone ready to build a profitable career in the digital space.</p>
                    </div>
                   </div>
            </div>
     </section>


      {/* Program highlights details */}
      <section className='md:max-w-[1350px] mx-auto bg-[#F9F6F0] mb-10 pt-10 pb-15 mt-15 font-poppins md:rounded-lg'>
        <div className='bg-[#EFE1DD] '>
            <div className='py-10 md:max-w-4xl flex flex-col gap-6 items-center justify-center md:px-0 px-6 mx-auto'>
                     <h2 className='md:text-[30px] text-[25px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Program Details</h2>

                     {/* lists */}
                     <div className='flex flex-col gap-2.5'>
                        {/* 1st */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[13px] md:text-[16px]'><span className='font-[600]'>Durations:</span> 3 months</p>
                        </div>
                        {/* 2nd */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[13px] md:text-[16px]'><span className='font-[600]'>Schedule:</span>Weekends — Sunday (10 AM – 1 PM or 2 PM – 6 PM)</p>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[13px] md:text-[16px]'><span className='font-[600]'>Location:</span> Hybrid (Online + Zeplus Studio, Magodo Phase 2, Lagos)</p>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-row gap-3'>
                            <span>
                                <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                            </span>
                            <p className='font-[390] text-[13px] md:text-[16px]'><span className='font-[600]'>Next Session:</span> February 2/ March 2/ April 7</p>
                        </div>
                     </div>
            </div>
        </div>

        {/* Your Journey start here */}
        <div className='md:max-w-7xl mx-auto pt-30 '>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <div>
                    <h2 className='md:text-[35px] text-[25px] font-[700] text-center [font-family:Playfair_Display,serif] text-[#301D20]'>Your Journey at Zeplus Academy</h2>
                </div>
                {/* steps */}
                <div className='flex flex-col gap-3 md:mt-10 mt-6 md:max-w-4xl mx-auto md:px-0 px-8'>
                    {/* 1st */}
                    <div onClick={scrollToForm} role="button" tabIndex={0} className='flex flex-col gap-2 border-b border-[#926470] pb-4 md:px-0 px-6 items-center cursor-pointer'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2 className='md:text-[15px] text-[13px] text-[#926470]'>Apply Now</h2>
                        <p className='text-center text-[13px] md:text-[16px] text-[#926470]'>Submit your interest and reserve your seat.</p>
                    </div>
                    {/* 2nd */}
                    <div className='flex flex-col gap-2 border-b border-[#926470] pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2 className='md:text-[15px] text-[13px] text-[#926470]'>Join Orientation</h2>
                        <p className='text-center text-[13px] md:text-[16px] text-[#926470]'>Get introduced to our vibrant learning community.</p>
                    </div>
                    {/* 3rd */}
                    <div className='flex flex-col gap-2 border-b border-[#926470] pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2 className='md:text-[15px] text-[13px] text-[#926470]'>Learn by Doing</h2>
                        <p className='text-center text-[13px] md:text-[16px] text-[#926470]'>Experience immersive, project-based sessions.</p>
                    </div>
                    {/* 4th */}
                    <div className='flex flex-col gap-2 border-b border-[#926470] pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2 className='md:text-[15px] text-[13px] text-[#926470]'>Build Your Brand</h2>
                        <p className='text-center text-[13px] md:text-[16px] text-[#926470]'>Create campaigns that get results.</p>
                    </div>
                    {/* 5th */}
                    <div className='flex flex-col gap-2 border-b  border-[#926470] pb-4 md:px-0 px-6 items-center'>
                        <img src={mark} alt='icon' className='w-5 h-5 md:w-4 md:h-4' />
                        <h2 className='md:text-[15px] text-[13px] text-[#926470]'>Graduate & Launch</h2>
                        <p className='text-center text-[13px] md:text-[16px] text-[#926470]'>Access job placement and freelancing opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/*  Bonus and Benefits section */}
         <section className='md:max-w-[1350px] mx-auto md:py-10 py-5 font-poppins'>
            <div className='flex items-center justify-center mb-6'>
                <h2 className='text-[25px] md:text-[40px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Bonuses & Benefits</h2>
            </div>
            {/* bonus lists */}
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 md:px-0 px-10 pt-5'>
                {/* 1st */}
                <div className='border-2 border-[#EE5B2A] text-center p-6 rounded-2xl'>
                    <h2 className='md:text-[15px] text-[13px] text-[#EE5B2A]'>Lifetime access to the Zeplus Alumni Network.</h2>
                </div>
                {/* 2nd */}
                <div className='border-2 border-[#EE5B2A] text-center p-6 rounded-2xl'>
                    <h2 className='md:text-[15px] text-[13px] text-[#EE5B2A]'>Opportunity to work with Zeplus partner brands</h2>
                </div>
                {/* 3rd */}
                <div className='border-2 border-[#EE5B2A] text-center p-6 rounded-2xl'>
                    <h2 className='md:text-[15px] text-[13px] text-[#EE5B2A]'>Portfolio showcase at Zeplus Demo Day.</h2>
                </div>
                {/* 4th */}
                <div className='border-2 border-[#EE5B2A] text-center p-6 rounded-2xl'>
                    <h2 className='md:text-[15px] text-[13px] text-[#EE5B2A]'>Access to AI tools and templates.</h2>
                </div>
            </div>

            <div className='bg-[#301D20] rounded-xl md:mt-15 mt-10 md:px-0 px-6'>
                <div className='md:max-w-4xl md:py-20 py-10 mx-auto items-center flex justify-center'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='md:text-[35px] text-[25px] font-[600] text-center text-white'>Are you ready to own the digital space?</h2>
                        <p className='text-center md:text-[15px] text-[13px] text-white'>Join Zeplus Academy and become one of Africa’s next digital growth leaders.</p>
                            <div className='flex flex-row md:gap-10 gap-4 justify-center mt-3'>
                            <div>
                                <h2 onClick={scrollToForm} role="button" tabIndex={0} className='text-[#EE5B2A] bg-[#FBEAE5] border-2 border-[#EE5B2A] md:py-3 py-2.5 md:px-16 px-7 md:text-[15px] text-[13px] rounded-xl cursor-pointer'>Apply Now</h2>
                            </div>
                             <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Digital%20Marketing%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer">
                              <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-5 py-2.5  md:py-3.5 rounded-xl'>
                                    <p className='font-[500] md:text-[15px] text-[13px] '>Let's Talk</p>
                                    <span>
                                        <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
                                    </span>
                                   </div></a>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         {/*input form section */}
         
            
             {/* form */}
             <section ref={formRef} className='md:max-w-7xl mx-auto md:mt-20 mt-10 md:px-0 px-8 font-poppins'>
                     <div className=' text-center md:px-0  '>
                            <h2 className='md:text-2xl text-[20px] font-[500] text-[#301D20]'>Fill out the form below to receive the program that you're interested in.</h2>
                     </div>
                     {/* Form fields */}
                     <form onSubmit={handleSubmit} className='flex flex-col md:gap-5 gap-5 mt-10 md:mb-20 mb-10  md:max-w-[500px] mx-auto'>
                      <input type='hidden' name='course' value='Digital Marketing' />
                         <div className='flex md:flex-row flex-col md:gap-2 gap-5'>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400] text-[#926470]'>First Name *</label>
                            <input name='firstName' type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400] text-[#926470]'>Last Name *</label>
                            <input name='lastName' type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>Email *</label>
                            <input name='email' type='text' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>Phone*</label>
                            <input name='phone' type='tel' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>How did you hear about Zeplus? *</label>
                            <select name='source' className='border border-gray-300 p-2 text-[#926470] rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                                <option value=''>Select an option</option>
                                <option value='Social Media'>Social Media</option>
                                <option value='Friend or Family'>Friend or Family</option>
                                <option value='Online Search'>Online Search</option>
                                <option value='Advertisement'>Advertisement</option>
                                <option value='Other'>Other</option>
                            </select>
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>Hybrid *</label>
                            <select name='hybrid' className='border border-gray-300 p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'>
                                <option value=''>Select an option</option>
                                <option value='In-Person'>In-Person</option>
                                <option value='Online'>Online</option>                                 
                            </select>
                        </div>
                        <button type='submit' className='bg-[#301D20] text-white py-2.5  font-[380] rounded-md md:mb-20 mb-10 w-40 md:text-[15px] text-[14px]'>Submit</button>
                     </form>
             </section>
         

         {/* Best Instructors */}
          <section className='md:max-w-6xl mx-auto mt-10 md:mb-20 mb-10 bg-[#8F2436] md:rounded-2xl font-poppins' >
            <div className='flex flex-col md:flex-row gap-10 md:gap-5 p-10 md:py-15 md:px-10'>
                {/* left side */}
                <div className='md:max-w-[600px]'>
                  <div className='flex flex-col gap-5 '>
                    <h2 className='md:text-[32px] text-[20px] font-[500] text-white'>Learn with highly-qualified instructors</h2>
                    <p className='text-white md:text-[15px] text-[13px]'>In addition to being experts in their fields, they are mentors at heart and focus on each student’s needs.</p>
                     <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Digital%20Marketing%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer">
                    <div className='mt-6 flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-5 py-2.5 rounded-2xl md:w-60 w-40'>
                     <p className='font-[500] md:text-[15px] text-[13px]'>Let's Talk</p>
                     <span>
                     <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
                    </span>
                </div></a>
                  </div>
                </div>
                {/** right side */}
                <div className='md:max-w-[600px] hidden md:block'>
                    <div className='w-full h-full'>
                        <img src={instructor} alt='instructors' className='rounded-xl md:w-110 md:h-80 w-full  object-cover' />
                    </div>
                </div>
            </div>
          </section>

         {/* GOT QUESTIONS? */}
         <section className=' px-6 md:py-16 py-5 bg-[#FBFAF9]'>
            <div className='md:max-w-7xl mx-auto'>
           <div className='text-center mb-8'>
            <p className='text-[#EE5B2A] w-30 bg-[#FBEAE5] py-2 px-4 text-[13px] mb-3 flex items-center justify-center max-w-[100px] mx-auto rounded-full'>FAQ</p>
             <h2 className='text-[50px] md:text-[50px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Frequently Asked Questions</h2>
             <p className='md:text-[15px] text-[13px] text-gray-600 mt-2 text-[#301D20]'>Everything you need to know</p>
           </div>

           <div className='space-y-3 md:max-w-3xl mx-auto'>
             {faqs.map((item, idx) => {
               const open = openIndex === idx
               return (
                 <div key={idx} className='bg-white rounded-xl shadow-sm overflow-hidden'>
                   <button
                     onClick={() => setOpenIndex(open ? null : idx)}
                     aria-expanded={open}
                     aria-controls={`faq-${idx}`}
                     className='w-full flex items-center justify-between p-5 text-left'
                   >
                     <span className='font-[400] md:text-[15px] text-[13px] text-[#301D20]'>{item.q}</span>
                     <span className='text-[#7C1042] font-[390] text-ssm text-[#301D20]'>{open ? '−' : '+'}</span>
                   </button>

                   {open && (
                     <div
                       id={`faq-${idx}`}
                       className='px-5 pb-5 transition-opacity duration-200 ease-in-out'
                       role='region'
                       aria-labelledby={`faq-button-${idx}`}
                     >
                      {/* render HTML markup (bullets) when present */}
                      <div
                        className='text-[13px] text-[#301D20] font-[390]'
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                     </div>
                   )}
                 </div>
               )
             })}
           </div>
           <div className='flex flex-col gap-2 pt-10 items-center justify-center'>
                <h2 className='text-[30px] md:text-[40px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Still Have Questions?</h2>
                <p className='md:text-[15px] text-[13px] text-[#301D20]'>We’re happy to help!</p>

                {/* Send Us a messaage */}
                <div className='bg-[#8F2436] p-10 md:p-20 rounded-2xl mt-5'>
                  <div className='flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center'>
                    <div className='flex-1 md:pr-5 md:border-r md:border-white'>
                      <h3 className='text-[13px] md:text-[15px] text-white'>Send us a message at info@zeplusacademy.com 
                           or chat with a Zeplus Advisor for instant guidance.</h3>
                       </div>
                       <div className='flex flex-row gap-5'>
                        <p className='md:text-[15px] text-[13px] text-white bg-[#EE5B2A] py-2.5 px-5 rounded'>Talk to Us</p>
                         <p className='md:text-[14px] text-[13px] bg-white text-[#EE5B2A] py-2.5 px-5 rounded '>Explore Course</p>
                       </div>
                  </div>
                </div>
              </div>
           </div>
         </section>

      </section>
    </section>
  )
}
export default Digital