import whitedot from '../assets/courses/whitedot.svg'
import hero1bg from '../assets/img/hero1bg.png' 
import cybtheropic from '../assets/images/course8.png'

import introcybertoolsimg from '../assets/images/introcyber.png'
import mark from '../assets/courses/mark.svg'
import alumni from '../assets/images/tunde.jpg'
import alumni2 from '../assets/images/gift.png'
import alumni3 from '../assets/images/jude.jpg'
import whatsapp from '../assets/courses/whatsapp.png'
import instructor from '../assets/courses/instructor.jpg'
import calendar from '../assets/courses/date.png'


import React, { useState, useRef } from 'react'
import { saveSubmission } from '../utils/storage'

const IntroCybersecurity = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const formRef = useRef<HTMLElement | null>(null)

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const fd = new FormData(form)
      const payload = Object.fromEntries(fd.entries())
      saveSubmission('introcybersecurity', payload)
      form.reset()
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
                        <div className='md:max-w-[600px] '>
                            <h1 className='md:text-[50px] text-[26px] font-[700] text-[#301D20] [font-family:Playfair_Display,serif] leading-tight md:leading-[1.05] tracking-tight md:max-w-[600px] max-w-full break-words text-left'>Introduction to Cybersecurity</h1>
                        </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-5'>
                                 <h2 className='md:text-[50px] text-3xl font-[650] text-[#6c0c11]'>350,000 NGN </h2>
                                 <div className='flex flex-row gap-4'>
                                    <p className='font-[405] text-[14px] md:text-[16px] text-[#301D20]'>Protect the Digital Future — Learn the Art of Defense and Resilience.</p>
                                     
                                 </div>
                                  <div className='md:max-w-[600px] '>
                                    <p className='font-[390] md:text-[16px] text-[14px] text-[#7F676B]'>Step into the frontline of digital protection. This course is designed to equip you with the technical knowledge, problem-solving mindset, and practical skills needed to defend networks, data, and systems from cyber threats in an increasingly connected world.</p>
                                  </div>
                                   <div className='flex md:flex-row flex-col gap-3 mt-2'>
                                    <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Data%20Analytics%20with%20AI%20and%20Visualization%20Tools%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                   <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer  bg-[#27D366] md:px-20 px-15 py-4 rounded-xl'>
                                    <p className='font-[500] md:text-[16px] text-[14px] '>Let's Talk</p>
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
                                        <p className='font-[395] md:text-[15px] text-[13px] text-[#301D20]'><span className='font-[600]'>Duration:</span> 12 weeks</p>
                                    </div>
                                    {/* 2nd */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[395] md:text-[15px] text-[13px] text-[#301D20]'><span className='font-[600]'>Learning:</span> Online </p>
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
                                        <p className='font-[395] md:text-[15px] text-[13px] text-[#301D20]'><span className='font-[600]'>Flexible Schedules:</span> Day or Evening Classes <br />Part time also available once a week</p>
                                    </div>
                                  </div>

                                  </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='md:max-w-[600px] '>
                        <img src={cybtheropic} alt="Digital Growth" className='w-full md:h-115 h-70 object-cover rounded-lg' />
                    </div>
              </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className='bg-white w-full font-poppins'>
          {/* Course Overview */}
          <div className=' bg-[#F9F6F0] md:max-w-[1350px] mx-auto my-10 md:my-15 md:rounded-2xl'>
             <div className='md:max-w-5xl mx-auto md:px-0 px-6 py-10 md:py-10'>
                <div className='flex flex-col gap-8 items-center justify-center'>
                <h2 className='md:text-[30px] font-[600] text-[22px] md:text-center text-[#301D20] [font-family:Playfair_Display,serif]'>Become a Certified Cybersecurity Professional in Just 12 Weeks</h2>
                
                    <p className='md:text-[16px] text-[13px] md:text-center text-[#958184]'>Develop the confidence to identify vulnerabilities, counter attacks, and secure the technologies that power modern life. Learn through simulations, ethical hacking, and mentorship from industry experts.</p>                
                <div className='bg-[#FFFFFF] px-10 pb-15 pt-10 flex flex-col gap-5 rounded-2xl'>
                    <h2 className='md:text-[24px] text-[18px] font-[600] flex items-center justify-center text-[#301D20] [font-family:Playfair_Display,serif]'>Why Learn Cybersecurity?</h2>
                    <div className='flex flex-col gap-3'>
                    <div className='flex flex-row gap-3 items-center'>
                   <span>
                    <img src={mark} alt='icon' className='w-5 h-5 '/>
                   </span>
                     <p className='font-[395] md:text-[15px] text-[13px] text-[#301D20]'>In a world where data drives everything,<span className='font-[430]'> security is no longer optional</span>  — it’s critical. Every day, organizations face cyber attacks targeting sensitive data, systems, and infrastructure.</p>
                    </div>
                    {/* 2nd */}
                    <div className='flex flex-row gap-3 items-center'>
                   <span>
                    <img src={mark} alt='icon' className='w-3.5 h-3.5 '/>
                   </span>
                     <p className='font-[395] md:text-[15px] text-[13px] text-[#301D20]'>Cybersecurity professionals are now among the most <span className='font-[430]'>in-demand experts worldwide</span>, safeguarding the digital future.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 md:ml-6'>
                    <p className='md:text-[15px] text-[13px] font-[395] text-[#301D20]'>This course gives you a strong foundation in security concepts, attack prevention, and ethical hacking — preparing you for roles that protect organizations, governments, and individuals.</p>
                    <p className='md:text-[15px] text-[13px] font-[395] text-[#301D20]'>Whether you’re a beginner or an IT enthusiast, this is your entry point into one of the most impactful tech careers today.</p>
                </div>
                </div>
                
             </div>
             </div>
          </div>

          

          {/* What You'll Learn */}
          <section className='md:mt-15 mt-10 font-poppins bg-white'>
                <div className='md:max-w-[1350px] mx-auto md:px-0 px-6 py-0 md:mb-10'>
                      <div className='flex flex-col gap-3 items-center justify-center md:max-w-3xl mx-auto text-center md:mb-12 mb-10'>
                        <h2 className='md:text-[40px] text-[25px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>What You'll Learn</h2>
                        <p className='font-[395] md:text-[16px] text-[13px] text-[#926470]'>In this 12-week immersive program, you’ll go from understanding the basics of digital defense to building the technical and
                                                     analytical skills needed to detect and mitigate cyber threats.</p>
                      </div>

                      {/* Learning Modules */}
                     <div className='flex flex-col gap-5'>
                        {/* Modules list */}
                        {/* 1st */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2.5'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11] md:text-[16px] text-[13px]'>Incident Response & Risk Management</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Learn to detect, contain, and recover from security breaches.</li>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Develop response strategies for cyber incidents</li>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Understand risk analysis and security policies for organizations.</li>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11] md:text-[16px] text-[13px]'>Cybersecurity Foundations</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Understand key security concepts, threats, and terminologies.</li>
                               <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Explore how data breaches and vulnerabilities occur.</li>
                                 <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Learn about the principles of confidentiality, integrity, and availability.</li>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11] md:text-[16px] text-[13px]'>Network & Systems Security</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                               <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Master firewalls, VPNs, and access control strategies.</li>
                               <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Learn how to secure network infrastructure and devices.</li>
                               <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Configure secure systems across different environments.</li>

                            </div>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11] md:text-[16px] text-[13px]'>Cyber Threats & Attacks</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Identify common attack types: phishing, malware, ransomware, and social engineering</li>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Understand how hackers exploit system weaknesses — and how to stop them.</li>
                                 <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Learn security best practices for individuals and organizations.</li>
                            </div>
                        </div>
                        
                     </div>
                   <div className='mt-20 flex items-center justify-center'>
                     <button className='text-[#ffffff] bg-[#EE5B2A] md:py-3 py-2.5 md:px-14 px-5 text-[13px] md:text-[16px] rounded-xl font-poppins'>Brochure</button>
                   </div>
                </div>
          </section>

          <section className='md:max-w-[1350px] mx-auto mt-10 font-poppins py-15 md:py-20 md:px-15 px-6 bg-[#8F2436] text-white rounded-2xl'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                {/* left side */}
                <div className='md:max-w-[500px] flex flex-col gap-3'>
                   <h2>Tools & Technologies</h2>
                   <p>Work hands-on with industry-standard tools that power AI innovation</p>
                   <div className='flex flex-col gap-2.5 '>
                     {/* 1st */}
                     <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[400]'>TensorFlow</p>
                     </div>
                        {/* 2nd */}
                         <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[400]'>PyTorch</p>
                     </div>
                        {/* 3rd */}
                         <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[400]'>Keras</p>
                     </div>
                     {/* 4th */}
                      <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[400]'>NumPy</p>
                     </div>
                     {/* 5th */}
                      <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[400]'> OpenCV</p>
                     </div>
                     {/* 6th */}
                      <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[400]'>Google Colab</p>
                     </div>
                   </div>
                </div>
                {/* right side */}
                <div className='md:max-w-[600px] md:ml-20'>
                    <img src={introcybertoolsimg} alt='image' className='w-full h-72 object-cover rounded-lg border-5 border-white' />
                </div>
            </div>
          </section>

          {/* Why you choose Us Zeplus academy */}
         <section className='md:max-w-[1350px] mx-auto my-10 font-poppins py-15 md:py-20 md:px-15 px-6 bg-[#8F2436] text-white rounded-2xl'>
              <div className='flex flex-col gap-2 '> 
                <h2 className='md:text-[30px] text-[20px] font-[600] flex items-center justify-center'>Why Choose Zeplus Academy?</h2>
                <p className='md:text-[15px] text-[13px] font-[395]'>Zeplus Academy prepares you to become more than just a learner — you become a<span className='font-[430]'> protector of the digital world.</span></p>
               
                <div className='flex flex-col gap-2 mt-2'>
                    {/* 1st */}
                    <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[400]'>Our Edge</p>
                    </div>
                    {/* 2nd */}
                     <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[430]'>Project-Based Learning:<span className='font-[395]'>Work on real-world simulations and defense challenges</span></p>
                    </div>
                    {/* 3rd */}
                      <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[430]'>Mentorship-Driven:<span className='font-[395]'>Learn directly from cybersecurity analysts and ethical hackers</span></p>
                    </div>
                    {/* 4th */}
                      <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[430]'>Community Support:<span className='font-[395]'> Join a network of professionals shaping Africa’s tech security.</span></p>
                    </div>
                    {/* 5th */}
                      <div className='flex flex-row gap-3 items-center'>
                        <span>
                            <img src={whitedot} alt='icon' className='w-3 h-3' />
                        </span>
                        <p className='md:text-[15px] text-[13px] font-[430]'>Career Launch Focus:<span className='font-[395]'> Get guidance for certifications and job placement.</span></p>
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
                <div className='bg-white rounded-lg shadow '>
                    <div className='flex flex-col gap-5 p-6 md:py-10'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni} alt='image' className='md:w-16 md:h-16 w-12 h-12 rounded-full object-cover' />
                            <h3 className='font-[460] md:text-[15px] text-[14px] text-[#958184]'>Tunde</h3>
                        </div>
                        <div className='mb-5.5'>
                            <p className='font-[400] md:text-[15px] text-[14px] text-[#958184]'>“Zeplus Academy transformed how I approach technology and problem-solving. The instructors 
                                were not just teachers — they were mentors who guided me every step of the way. Every project challenged me to 
                                think deeper and create smarter. It’s more than a school; it’s a launchpad for anyone serious about a tech career.”</p>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className='bg-white rounded-lg shadow'>
                    <div className='flex flex-col gap-5 p-6 md:py-12'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni2} alt='image' className='md:w-16 md:h-16 w-12 h-12 rounded-full object-cover' />
                            <h3 className='font-[460] md:text-[15px] text-[14px] text-[#958184]'> Adaeze</h3>
                        </div>
                        <div>
                            <p className='font-[400] md:text-[15px] text-[14px] text-[#958184]'>Before joining Zeplus Academy, I doubted my ability to thrive in tech. But the
                                 structured learning path, interactive classes, and supportive community changed that. I went from a beginner to confidently working on real
                                 projects that make impact. The experience gave me the confidence to build and lead in the digital space.”</p>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className='bg-white rounded-lg shadow'>
                    <div className='flex flex-col gap-5 p-6 md:py-10'>
                        <div className='flex flex-row gap-5 items-center '>
                            <img src={alumni3} alt='image' className='md:w-16 md:h-16 w-12 h-12 rounded-full object-cover' />
                            <h3 className='font-[460] md:text-[15px] text-[14px] text-[#958184]'>Amarachi</h3>
                        </div>
                        <div className='mb-11'>
                            <p className='font-[400] md:text-[15px] text-[14px] text-[#958184]'>What stood out to me most about Zeplus Academy was how practical everything felt.
                                 We didn’t just learn theories — we applied them immediately. From hands-on cybersecurity labs
                                 to teamwork simulations, it felt like real industry work. I left feeling ready for any challenge.”</p>
                        </div>
                    </div>
                </div>
                </div>
    </div>
  </div>
</section>


     <section className='md:max-w-7xl mx-auto mt-10 font-poppins' >
               <div className='flex flex-col items-center gap-5 justify-center mb-10'>
                <h2 className='md:text-[45px] text-[30px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Upcoming Sessions</h2>
                

                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-0 px-10'>
                            {/* 1st */}
                            <div className='bg-[#8F2436] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] text-[#301D20]'>February 2025</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-2 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-5 h-5 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm text-[#301D20]'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420] text-[#301D20]'>Tuesday, February 3, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 2nd */}
                            <div className='bg-[#8F2436]'>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] text-[#301D20]'>March 2026</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-2 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-5 h-5 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm text-[#301D20]'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420] text-[#301D20]'>Tuesday, March 3, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 3rd */}
                            <div className='bg-[#8F2436] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] text-[#301D20]'>April 2026</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-2 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-5 h-5 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm text-[#301D20]'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420] text-[#301D20]'>Tuesday, April 7, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                      </div>
                      <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-[#942E3F] bg-[#EFE1DD] py-2.5 md:px-10 px-5 rounded-xl font-poppins md:text-[15px] text-[13px]'>Enroll Now</h2>
                    </div>
               </div>
     </section>


      {/* Location Section */}
       <section className='md:max-w-6xl mx-auto mt-10 font-poppins bg-[#8F2436] text-white md:rounded-lg'>
        <div className='md:p-20  p-6'>
            <div className='flex flex-col gap-1 md:items-center mb-4'>
                  <h2 className='text-white font-[600] md:text-[30px] text-[25px]'>Learn Anywhere</h2>
                  <p className='font-[380] md:text-[16px] text-[14px]'>Choose Your Space</p>
            </div>
             <div className='flex md:flex-row flex-col gap-10 md:items-center'>
                {/* left side */}
                <div className='md:max-w-[650px] md:border-r border-white ssm:border-b md:pr-6 md:pb-6'>
                   <h2 className='md:text-[15px] text-[13px] font-[395]'><span className='font-[420]'>Learn From:</span> Your comfort zone</h2>
                </div>
                {/* right side */}
                <div className='md:max-w-[400px] flex items-center'>
                    <div className=''>
                        <h2 className='font-[380]'>Online: Online via zeplus virtual hub</h2>
                    </div>
                </div>
             </div>
        </div>
       </section>


       <section className='md:max-w-6xl mx-auto mt-10 font-poppins bg-[#F6F7FD] rounded-lg'>
            <div className='md:max-w-4xl mx-auto md:px-0 py-15 px-6 flex flex-col gap-5 items-center'>
                <h2 className='font-[600] md:text-[45px] text-[25px] text-[#301D20]'>Ready to Redesign the Future?</h2>
                <p className='font-[400] text-[13px] md:text-[16px] text-[#301D20]'>Whether you’re a creative beginner or a professional looking to upgrade your 
          skills, this course will unlock your potential to design for impact</p>
          
               <div className='flex flex-col gap-5 md:mt-4'>
                <div className='flex md:flex-row flex-col gap-3 md:gap-10'>
                    <div className='flex flex-row gap-1'>
                             <span>
                             <img src={mark} alt='icon' className='w-4 h-4 mt-0.5' />
                             </span>
                            <p className='font-[450] md:text-[15px] text-[13px] text-[#301D20]'>Join the movement</p>
                         </div>
                         {/* 2nd */}
                         <div className='flex flex-row gap-1'>
                             <span>
                             <img src={mark} alt='icon' className='w-4 h-4 mt-0.5' />
                             </span>
                            <p className='font-[450] md:text-ssm text-sm text-[#301D20]'>Turn data into change</p>
                         </div>
                </div>
                    <div className='flex flex-row gap-5'>
                        <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-white bg-[#EE5B2A] md:py-3 py-2.5 md:px-10 px-5 rounded-xl font-poppins md:text-[15px] text-[13px]'>Brochure</h2>
                    </div>
                    <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Data%20Analytics%20with%20AI%20and%20Visualization%20Tools%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer"
                                        >
                        <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-5 py-3 rounded-xl'>
                                    <p className='font-[500] md:text-[15px] text-[13px]'>Talk to a Career Advisor</p>
                                    <span>
                                        <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
                                    </span>
                                   </div></a>
                    </div>
                    </div>
            </div>
       </section>

     

         {/*input form section */}
         

             <section ref={formRef} className='md:max-w-6xl mx-auto font-poppins md:my-20 my-15 bg-[#F6F7FD]'>
             <div className='bg-[#8F2436] md:rounded-2xl text-white'>
                     <div className='flex flex-col items-center justify-center py-10 md:py-15 md:px-0 px-5 '>
                             <div className='md:max-w-[700px] text-center px-5 mb-10'>
                                  <h2 className='md:text-[40px] text-[20px] font-[550]'>Want to join the Cybersecurity training?</h2>
                             </div>
                             <div className='flex flex-col md:flex-row md:gap-40 gap-5 mt-'>
                                    <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-5 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p className='font-[400] text-[14px] md:text-[16px]'>Receive program details</p>
                                    </div>
                                    {/* 2 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-5 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p className='font-[400] text-[14px] md:text-[16px]'>Discover our methodology</p>
                                    </div>
                                    {/* 3 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-5 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p className='font-[400] text-[14px] md:text-[16px]'>Progress in your learning project</p>
                                    </div>
                             </div>
                     </div>
             </div>
             {/* form */}
             <div className='md:max-w-[550px] mx-auto mt-10 md:mt-20 font-poppins '>
                     <div className='md:max-w-[450px] mx-auto text-center'>
                            <h2 className='text-2xl font-[500] text-[#926470]'>Fill out the form to receive the full program</h2>
                     </div>
                     {/* Form fields */}
                    <form onSubmit={handleSubmit} className='flex flex-col md:gap-5 gap-5 mt-10 md:mb-20 mb-10 md:px-0 px-8  md:max-w-[500px] mx-auto'>
                      <input type='hidden' name='course' value='Introduction Cybersecurity' />
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
                            <select name='source' className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
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
                        <button type='submit' className='bg-[#926470] text-white py-2.5  font-[380] rounded-md md:mb-20 mb-10 w-40 md:text-[15px] text-[14px]'>Submit</button>
                     </form>
             </div>
        </section>

       
         

         {/* Best Instructors */}
          <section className='md:max-w-6xl mx-auto mt-10 mb-20 bg-[#8F2436] md:rounded-2xl font-poppins' >
            <div className='flex flex-col md:flex-row gap-10 md:gap-5 p-10 md:py-20 md:px-10'>
                {/* left side */}
                <div className='md:max-w-[600px]'>
                  <div className='flex flex-col gap-5 '>
                    <h2 className='md:text-[32px] text-[20px] font-[500] text-white'>Learn with highly-qualified instructors</h2>
                    <p className='text-white md:text-[15px] text-[13px]'>In addition to being experts in their fields, they are mentors at heart and focus on each student’s needs.</p>
                    <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Data%20Analytics%20with%20AI%20and%20Visualization%20Tools%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer"
                                        >
                    <div className='mt-6 flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-5 py-2.5 rounded md:w-60 w-40'>
                     <p className='font-[500] md:text-[15px] text-[13px] '>Let's Talk</p>
                     <span>
                     <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
                    </span>
                </div></a>
                  </div>
                </div>
                {/** right side */}
                <div className='md:max-w-[600px] hidden md:block'>
                    <div className='w-full h-full'>
                        <img src={instructor} alt='instructors' className='rounded-xl md:w-110 md:h-80 w-full object-cover' />
                    </div>
                </div>
            </div>
          </section>

         {/* GOT QUESTIONS? */}
         <section className=' px-6 py-16 bg-[#FBFAF9]'>
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
                <div className='bg-[#8F2436] p-10 md:p-20 rounded-xl mt-5'>
                  <div className='flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center'>
                    <div className='flex-1 md:pr-5 md:border-r md:border-white'>
                      <h3 className='text-[12px] md:text-[15px] text-white'>Send us a message at info@zeplusacademy.com 
                           or chat with a Zeplus Advisor for instant guidance.</h3>
                       </div>
                       <div className='flex flex-row gap-5'>
                        <p className='md:text-[15px] text-[13px] text-white bg-[#EE5B2A] py-2.5 px-5 rounded-xl'>Talk to Us</p>
                         <p className='md:text-[15px] text-[13px] bg-white text-[#EE5B2A] py-2.5 px-5 rounded-xl'>Explore Course</p>
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
export default IntroCybersecurity