import whitedot from '../assets/courses/whitedot.svg'
import hero1bg from '../assets/img/hero1bg.png' 
import fullstackhero from '../assets/images/course3.jpg'
import fullstackai from '../assets/courses/fullai.png'
import mark from '../assets/courses/mark.svg'
import alumni from '../assets/courses/alumni.png'
import alumni2 from '../assets/courses/alumni2.png'
import alumni3 from '../assets/courses/alumni3.png'
import whatsapp from '../assets/courses/whatsapp.png'
import instructor from '../assets/courses/instructor.jpg'
import calendar from '../assets/courses/date.png'
import jsLogo from '../assets/courses/JS.svg'
import nodeLogo from '../assets/courses/node.svg'
import htmlLogo from '../assets/courses/html.svg'
import mongoLogo from '../assets/courses/Mongo.svg'
import nextLogo from '../assets/courses/Next.svg'
import nosqlLogo from '../assets/courses/nosql.svg'
import sqlLogo from '../assets/courses/sql.svg'
import reactLogo from '../assets/courses/React.svg'
import typeLogo from '../assets/courses/typescript.svg'
import cloudLogo from '../assets/courses/cloud.svg'
import cssLogo from '../assets/courses/css.svg'
import bootLogo from '../assets/courses/bootstrap.svg'
import  { useState, useRef } from 'react'
import { saveSubmission } from '../utils/storage'

const Fullstack = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const formRef = useRef<HTMLElement | null>(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [source, setSource] = useState('')
    const [hybrid, setHybrid] = useState('')

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
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
        <div className='md:py-40 py-7 md:max-w-8xl mx-auto font-poppins'>
              <div className='flex flex-col md:flex-row gap-10 items-center justify-between md:px-40 px-6 my-'>
                    {/* Left side */}
                    <div className='flex flex-col md:max-w-[800px]'>
                        <div className='md:max-w-[550px] '>
                            <h1 className='md:text-[50px] text-[27px] font-[700] text-[#301D20] [font-family:Playfair_Display,serif] leading-tight md:leading-[1.05] tracking-tight md:max-w-[550px] max-w-full break-words text-left'>Full Stack Web Development with AI Integration</h1>
                        </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-5'>
                                 <h2 className='md:text-[50px] text-3xl font-[650] text-[#6c0c11]'>650,000 NGN </h2>
                                 <div className='flex flex-row gap-4'>
                                    <p className='font-[695] text-[14px] md:text-[16px] text-[#301D20] [font-family:Playfair_Display,serif]'>Code</p>
                                     <p className='font-[695] text-[14px] md:text-[16px] text-[#301D20] [font-family:Playfair_Display,serif]'>Create</p>
                                     <p className='font-[695] text-[14px] md:text-[16px] text-[#301D20] [font-family:Playfair_Display,serif]'>Conquer</p>
                                 </div>
                                  <div className='md:max-w-[600px] '>
                                    <p className='font-[395] md:text-[16px] text-[14px] text-[#7F676B]'>Become a professional web developer capable of building scalable, AI-powered web applications 
                                        that solve real problems.</p>
                                  </div>
                                   <div className='flex md:flex-row flex-col gap-3 mt-2'>
                                    <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Full%20Stack%20Web%20Development%20with%20AI%20Integration%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer">
                                   <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-20 px-15 py-4 rounded-xl'>
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
                                        <p className='font-[395] md:text-[15px] text-[13px] text-[#301D20]'><span className='font-[600]  '>Duration:</span> 16 weeks</p>
                                    </div>
                                    {/* 2nd */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[395]  md:text-[15px] text-[13px] text-[#301D20]'><span className='font-[600]  '>Learning:</span> Online</p>
                                    </div>
                                   
                                  </div>
                                  <div className='flex md:flex-row flex-col md:gap-18 gap-2 md:mt-3 mt-2'>
                                     {/* 3rd */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[600]  md:text-[15px] text-[13px] text-[#301D20]'>6 hours/week</p>
                                    </div>
                                    {/* 4th */}
                                    <div className='flex flex-row gap-3'>
                                        <span>
                                            <img src={mark} alt='icon' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[395]  md:text-[15px] text-[13px] text-[#301D20]'><span className='font-[600]'>Flexible Schedules:</span> Day or Evening Classes </p>
                                    </div>
                                  </div>

                                  </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='md:max-w-[600px] '>
                        <img src={fullstackhero} alt="Digital Growth" className='w-full md:h-115 h-70 object-cover rounded-lg' />
                    </div>
              </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className='bg-white w-full font-poppins'>
          {/* Course Overview */}
          <div className=' bg-[#F9F6F0] my-10 md:my-15 md:max-w-[1350px] mx-auto md:rounded-2xl'>
             <div className='md:max-w-4xl mx-auto md:px-0 px-6 py-10 md:py-25'>
                <div className='flex flex-col md:gap-8 gap-3 items-center justify-center'>
                <h2 className='md:text-[40px] font-[700] text-[20px] md:text-center text-[#301D20] [font-family:Playfair_Display,serif]'>Learn to Build the Future in 16 Weeks</h2>
                <div className='flex flex-col gap-3 items-center '>
                    <p className='md:text-[16px] text-[13px] md:text-center text-[#958184]'>From front-end design to back-end logic, you’ll gain the full set of skills to bring digital products to life — and supercharge your workflow using AI.</p>
                 
                </div>
             </div>
             </div>
          </div>

          {/* Career Opportunities */}
          <section className='mt-10 bg-[#8F2436] text-white font-poppins md:rounded-3xl md:max-w-[1350px] mx-auto'>
                <div className='md:max-w-7xl mx-auto md:px-10 px-6 py-15 md:py-20'>
                    <div className='flex md:flex-row flex-col gap-10 items-center'>
                        {/* Left Side */}
                        <div className='md:max-w-[650px]'>
                            <div className='flex flex-col md:gap-5 gap-3'>
                                <h2 className='md:text-[40px] text-[20px] font-[550] [font-family:Playfair_Display,serif] '>AI Meets Web Development</h2>
                                <p className='md:text-[16px] text-[13px] font-[380]'>Harness AI to write cleaner code, debug faster, and deploy with confidence.</p>
                                <p className='font-[390]  md:text-[16px] text-[13px]'>You’ll learn how to integrate intelligent automation into your workflow using:</p>
                                <div className='flex flex-col gap-4 mt-3 md:ml-10'>
                                    {/* 1st */}
                                    <div className='flex flex-col gap-0.5'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[13px]'>ChatGPT / GitHub Copilot</p>
                                       
                                   </div>
                                   <p className='font-[400] md:text-[16px] text-[13px] ml-8'>For smart coding assistance.</p>
                                   </div>
                                   {/* 2nd */}
                                   <div className='flex flex-col gap-0.5'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[13px]'>React, Node.js, and Express</p>
                                       
                                   </div>
                                   <p className='font-[400] md:text-[16px] text-[13px] ml-8'>For powerful app development.</p>
                                   </div>
                                   {/* 3rd */}
                                   <div className='flex flex-col gap-0.5'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[13px]'>MongoDB / Firebase</p>
                                       
                                   </div>
                                   <p className='font-[400] md:text-[16px] text-[13px] ml-8'>For flexible database management</p>
                                   </div>
                                      {/* 4th */}
                                      <div className='flex flex-col gap-0.5'>
                                   <div className='flex flex-row gap-4'>
                                        <span>
                                            <img src={whitedot} alt='dot' className='w-4 h-4 mt-1' />
                                        </span>
                                        <p className='font-[400] md:text-[16px] text-[13px]'>Next.js & AI APIs</p>
                                       
                                   </div>
                                   <p className='font-[400] md:text-[16px] text-[13px] ml-8'>For intelligent web experiences.</p>
                                   </div>
                                  
                                   
                                </div>
                                <div className='flex flex-col gap-3'>
                                      <p className='font-[390] md:text-[16px] text-[13px]'>Build full web solutions — from design to deployment — ready to scale globally.</p>
                                  </div>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className='md:max-w-[600px]'>
                            <img src={fullstackai} alt='image' className='w-full md:h-105 h-70 object-cover border-5 border-white rounded-lg' />
                        </div>
                    </div>
                </div>
          </section>

          {/* What You'll Learn */}
          <section className='md:mt-20 mt-15 font-poppins bg-white'>
                <div className='md:max-w-[1350px] mx-auto md:px-0 px-6 py-0 md:mb-20 mb-10'>
                      <div className='flex flex-col gap-3 items-center justify-center md:max-w-3xl mx-auto text-center mb-12'>
                        <h2 className='md:text-[40px] text-[20px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>What You'll Learn</h2>
                        <p className='font-[395]  md:text-[16px] text-[13px] text-[#926470]'>In this immersive 16-week program, you’ll master both front-end and back-end technologies to       
                         build, deploy, and scale full-featured web applications from scratch.</p>
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
                                <p className='font-[500] text-[#6C0D11]   md:text-[16px] text-[13px]'>Front-End Development</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>HTML, CSS, JavaScript mastery.</li>
                               <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>React.js for dynamic interfaces.</li>
                               
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]  md:text-[16px] text-[13px]'>Back-End Development</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Node.js, Express.js, RESTful APIs.</li>
                               <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Database management (MongoDB / SQL).</li>
                                
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]   md:text-[16px] text-[13px]'>AI-Driven Efficiency</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Database management (MongoDB / SQL).</li>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Build applications that integrate AI-driven personalization</li>
                                
                            </div>
                        </div>
                        {/* 4th */}
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-row gap-2'>
                                <span>
                                    <img src={mark} alt='icon' className='w-4 h-4 mt-1 ' />
                                </span>
                                <p className='font-[500] text-[#6C0D11]  md:text-[16px] text-[13px]'>Career & Portfolio</p>
                            </div>
                            <div className='flex flex-col gap-2.5 ml-5'>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]' >Build 3 real-world projects including a capstone startup idea.</li>
                                <li className='font-[395] md:text-[15px] text-[13px] text-[#926470]'>Create a live portfolio website hosted online.</li>
                                
                            </div>
                        </div>
                     </div>
           
                </div>
          </section>

          {/* Master the full stack tools for web */}
           <section className='md:max-w-[1350px] mx-auto font-poppins my-10 px-5'>
            {/* Download Brochure */}
                         <div className='flex items-center justify-center'>
                            <h2 className='text-white bg-gradient-to-r from-[#AE6AF8] to-[#EBADF1] py-1.5 md:px-15 px-5 font-[395] rounded-xl  md:text-[15px] text-[13px]'>Brochure</h2>

                         </div>

                         {/* Full-Stack Developer Library */}
                         <div className='bg-gradient-to-r from-[#AE6AF8] to-[#EBADF1]  rounded-3xl mt-10'>
                                <div className='md:py-20 py-10 md:px-10 px-5 items-center justify-center flex flex-col'>
                                        <div className='md:max-w-[600px] text-center '>
                                             <h2 className=' md:text-[30px] text-[20px] mb-4 font-[700]  text-white'>Master the Tools of the Web, Become a Full-Stack Developer</h2>
                                        </div>
                                    <p className='mb-15 font-[400] text-center md:text-[16px] text-[13px] text-white'>Discover the key technologies and programming languages that shape the modern web.</p>
                                        {/* Grid */}
                                        <div className='md:max-w-[1100px] max-w-[600px] mx-auto text-black'>
                                             <div className='flex flex-row gap-1 md:gap-3 flex-wrap justify-center md:px-0 px-10 '>
                                                   <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={jsLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover rounded-sm'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>Javascript</p>
                                             </div>
                                             {/* 2 */}
                                             <div className='flex flex-row gap-3 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={nodeLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>Node.js</p>
                                             </div>
                                                {/* 3 */}
                                                <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={reactLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>React.js</p>
                                             </div>
                                                {/* 4 */}
                                                <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={htmlLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>HTML</p>
                                             </div>
                                                {/* 5 */}
                                                <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={sqlLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>SQL</p>
                                             </div>
                                                {/* 6 */}
                                                <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={nosqlLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>NoSQL</p>
                                             </div>
                                                {/* 7 */}
                                                <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={bootLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>Bootstrap</p>
                                             </div>
                                                {/* 8 */}
                                                <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={typeLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>typeScript</p>
                                             </div>
                                             {/* 9 */}
                                             <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={cloudLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>Cloud</p>
                                             </div>
                                             {/* 10 */}
                                             <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={cssLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>CSS</p>
                                             </div>
                                             {/* 11 */}
                                             <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={mongoLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>MongoDB</p>
                                             </div>
                                             {/* 12 */}
                                             <div className='flex flex-row gap-2 items-center bg-white rounded-full md:px-7 px-3 py-2 mb-5'>
                                                  <img src={nextLogo} alt='JS' className='md:w-9 md:h-9 w-5 h-5 object-cover'/>
                                                  <p className='font-[500] md:text-ssm text-[14px] text-[#926470]'>Next Js</p>
                                             </div>
                                             </div>
                                        </div>
                                </div>
                         </div>
        </section>

           {/* ALumni */}

         <section className='bg-[#FFFFFF] font-poppins w-full mb-10 py-10 font-poppins'>
  <div className='bg-[#FBFBF9]  '>
    <div className='md:max-w-[1350px] mx-auto py-10  md:py-15 md:px-0 px-6'>
        <div className='md:max-w-3xl mx-auto items-center justify-center text-white mb-10'>
            <h2 className='md:text-[35px] text-[20px] font-[700] text-center [font-family:Playfair_Display,serif] text-[#301D20]'>Here’s why people just like you choose 
Zeplus Academy for Full Stack Development</h2>
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
                <div className='bg-white rounded-lg shadow'>
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



     <section className='md:max-w-7xl mx-auto mt-10 font-poppins' >
               <div className='flex flex-col items-center gap-5 justify-center mb-10'>
                <h2 className='md:text-[45px] text-[30px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Upcoming Sessions</h2>
                

                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 md:my-10 my-5 md:px-0 px-10'>
                            {/* 1st */}
                            <div className='bg-[#EFE1DD] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] text-[#926470]'>February 2026</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-2 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-5 h-5 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm text-[#926470]'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420] text-[#926470]'>Tuesday, February 3, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 2nd */}
                            <div className='bg-[#EFE1DD] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] text-[#926470]'>March 2026</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-2 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-5 h-5 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm text-[#926470]'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420] text-[#926470]'>Tuesday, March 3, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                            {/* 3rd */}
                            <div className='bg-[#EFE1DD] '>
                                 <div className='bg-[#F6F7FD] mt-2'>
                                      <div className='py-4 px-6 '>
                                            <div className='border-b border-gray-300  pb-10'>
                                                <h2 className='text-[25px] font-[550] text-[#926470]'>April 2026</h2>
                                            </div>
                                            <div className='flex flex-col gap-5 my-5'>
                                                  <div className='flex flex-row gap-2 items-center'>
                                                      <span>
                                                        <img src={calendar} alt='calendar' className='w-5 h-5 object-cover' />
                                                      </span>
                                                      <p className='font-[400] text-ssm text-[#926470]'>Start Date</p>
                                                  </div>
                                                  <p className='font-[420] text-[#926470]'>Tuesday, April 7, 2026</p>
                                            </div>
                                      </div>
                                 </div>
                            </div>
                      </div>
                      <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-[#EE5B2A] bg-[#FBEAE5] md:py-3 py-2.5 md:text-[15px] text-[13px] md:px-10 px-5 rounded-full font-poppins'>Enroll Now</h2>
                    </div>
               </div>
     </section>


      {/* Location Section */}
       <section className='md:max-w-6xl mx-auto mt-10 font-poppins bg-[#942E3F] text-white md:rounded-lg'>
        <div className='md:p-15  p-6'>
            <div className='flex flex-col gap-1 items-center mb-4'>
                  <h2 className='text-white font-[600] md:text-[30px] text-[25px]'>Learn Anywhere</h2>
                  <p className='font-[380] md:text-[16px] text-[14px]'>Choose Your Space</p>
            </div>
             <div className='flex md:flex-row flex-col gap-10 items-center'>
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


       <section className='md:max-w-6xl mx-auto mt-10 font-poppins bg-[#EFE1DD] rounded-lg shadow'>
            <div className='md:max-w-4xl mx-auto md:px-0 py-15 px-6 flex flex-col gap-5 items-center'>
                <h2 className='font-[700] md:text-[45px] text-[25px] [font-family:Playfair_Display,serif] text-[#301D20]'>Ready to Defend the Future?</h2>
                <p className='font-[400] text-[13px] md:text-[16px] text-[#926470]'>Become a certified cybersecurity professional with AI 
                    skills — and help build a safer digital Africa.</p>
                    <div className='flex flex-row gap-5'>
                        <div onClick={scrollToForm} role="button" tabIndex={0} className='flex items-center justify-center cursor-pointer w-max mx-auto'>
                        <h2 className='text-[#EE5B2A] bg-[#FBEAE5] border-2 border[#EE5B2A] md:py-4 py-2.5 md:px-10 px-7 rounded-xl font-poppins md:text-[15px] text-[13px]'>Apply Now</h2>
                    </div>
                    <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Full%20Stack%20Web%20Development%20with%20AI%20Integration%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer">
                        <div className='flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-5 py-2.5 md:py-4 rounded-xl'>
                                    <p className='font-[500] md:text-[15px] text-[13px]'>Let's Talk</p>
                                    <span>
                                        <img src={whatsapp} alt='icon' className='w-4 h-4 ' />
                                    </span>
                                   </div></a>
                    </div>
            </div>
       </section>

     

         {/*input form section */}
         
            
             <section ref={formRef} className='md:max-w-6xl mx-auto font-poppins my-20 bg-[]'>
             <div className='bg-[#926470] md:rounded-2xl text-white'>
                     <div className='flex flex-col md:items-center justify-center py-10 md:px-0 px-5 '>
                             <div className='md:max-w-[700px] md:text-center px-5 mb-10'>
                                  <h2 className='md:text-[40px] text-[20px] font-[550]'>Want to join the web developer training?</h2>
                             </div>
                             <div className='flex flex-col md:flex-row md:gap-40 gap-5 mt-'>
                                    <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-5 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p className='md:text-[15px] text-[13px]'>Receive program details</p>
                                    </div>
                                    {/* 2 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-5 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p className='md:text-[15px] text-[13px]'>Discover our methodology</p>
                                    </div>
                                    {/* 3 */}
                                     <div className='flex-row flex gap-2'>
                                          <span>
                                            <img src={mark} alt='mark' className='w-5 h-4 object-cover mt-1 invert' />
                                          </span>
                                          <p className='md:text-[15px] text-[13px]'>Progress in your learning project</p>
                                    </div>
                             </div>
                     </div>
             </div>
             {/* form */}
             <div className='md:max-w-[550px] mx-auto md:mt-20 mt-10 font-poppins '>
                     <div className='md:max-w-[450px] mx-auto text-center md:px-0 px-5'>
                            <h2 className='text-2xl font-[500] text-[#926470]'>Fill out the form to receive the full program</h2>
                     </div>
                     {/* Form fields */}
                     <form onSubmit={(e) => {
                      e.preventDefault()
                      const payload = { firstName, lastName, email, phone, course: 'Full Stack Development', source, hybrid }
                      try { saveSubmission('fullstack', payload) } catch (err) {}
                      alert('Thanks — your submission was saved.')
                      setFirstName('')
                      setLastName('')
                      setEmail('')
                      setPhone('')
                      setSource('')
                      setHybrid('')
                     }} className='flex flex-col md:gap-5 gap-5 mt-10 mb-20 md:px-0 px-8'>
                      <div className='flex md:flex-row flex-col gap-2'>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400] text-[#926470]'>First Name *</label>
                        <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400] text-[#926470]'>Last Name *</label>
                        <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>Email *</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>Phone*</label>
                        <input type='tel' value={phone} onChange={e => setPhone(e.target.value)} className='border border-gray-300  p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
                         </div>
                         
                         {/* Course is implicit for this page (Full Stack) */}

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>How did you hear about Zeplus? *</label>
                        <select value={source} onChange={e => setSource(e.target.value)} className='border border-gray-300  text-[#926470] p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                          <option value="">Select an option</option>
                          <option>Social Media</option>
                          <option>Friend or Family</option>
                          <option>Online Search</option>
                          <option>Advertisement</option>
                          <option>Other</option>
                        </select>
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400] text-[#926470]'>Hybrid *</label>
                        <select value={hybrid} onChange={e => setHybrid(e.target.value)} className='border border-gray-300  text-[#926470] p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'>
                            <option value="">Select an option</option>
                          <option>In-Person</option>
                          <option>Online</option> 
                        </select>
                         </div>
                      <button type="submit" className='bg-[#926470] text-white py-2.5  font-[380] rounded-md mb-20'>Submit</button>
                     </form>
             </div>
        </section>

       
         

         {/* Best Instructors */}
          <section className='md:max-w-6xl mx-auto mt-10 mb-10 md:mb-20 bg-[#8F2436] md:rounded-3xl font-poppins' >
            <div className='flex flex-col md:flex-row gap-10 md:gap-5 md:p-10 p-10'>
                {/* left side */}
                <div className='md:max-w-[600px]'>
                  <div className='flex flex-col gap-5 '>
                    <h2 className='md:text-[32px] text-[20px] font-[500] text-white'>Learn with highly-qualified instructors</h2>
                    <p className='text-white md:text-[16px] text-[13px]'>In addition to being experts in their fields, they are mentors at heart and focus on each student’s needs.</p>
                    <a href="https://wa.me/2348169669110?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Full%20Stack%20Web%20Development%20with%20AI%20Integration%20course%20at%20Zeplus%20Academy."
                                         target="_blank"
                                            rel="noopener noreferrer">
                    <div className='mt-6 flex flex-row gap-2.5 items-center justify-center cursor-pointer bg-[#27D366] md:px-15 px-5 py-2.5 rounded-2xl md:w-60 w-40'>
                     <p className='font-[500] md:text-[16px] text-[13px] '>Let's Talk</p>
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
         <section className=' px-6 py-16 bg-[#FBFAF9]'>
            <div className='md:max-w-7xl mx-auto'>
           <div className='text-center mb-8'>
            <p className='text-[#EE5B2A] w-30 bg-[#FBEAE5] py-2 px-4 text-[13px] mb-3 flex items-center justify-center max-w-[100px] mx-auto rounded-full'>FAQ</p>
             <h2 className='text-[50px] md:text-[40px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Frequently Asked Questions</h2>
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
                     <span className='font-[400] md:text-[15px] text-[13px] text-[#301D20] '>{item.q}</span>
                     <span className='text-[#301D20] font-[390] text-ssm'>{open ? '−' : '+'}</span>
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
                <h2 className='text-[30px] md:text-[50px] font-[700] [font-family:Playfair_Display,serif] text-[#301D20]'>Still Have Questions?</h2>
                <p className='md:text-[15px] text-[13px] text-gray-600 text-[#301D20]'>We’re happy to help!</p>

                {/* Send Us a messaage */}
                <div className='bg-[#8F2436] p-10 md:p-20 rounded-lg mt-5'>
                  <div className='flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center'>
                    <div className='flex-1 md:pr-5 md:border-r md:border-white'>
                      <h3 className='text-[12px] md:text-[15px] text-white'>Send us a message at info@zeplusacademy.com 
                           or chat with a Zeplus Advisor for instant guidance.</h3>
                       </div>
                       <div className='flex flex-row gap-5'>
                        <p className='md:text-[15px] text-[13px] text-white bg-[#EE5B2A] py-2.5 px-5 rounded-xl'>Talk to Us</p>
                         <p className='md:text-[14px] text-[13px] bg-white text-[#EE5B2A] py-2.5 px-5 rounded-xl'>Explore Course</p>
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
export default Fullstack