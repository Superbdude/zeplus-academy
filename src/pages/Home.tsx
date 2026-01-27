import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { saveSubmission } from '../utils/storage'
import gridicon from '../assets/img/gridicon.svg'
import grid2icon from '../assets/img/gridicon2.svg'
import grid3icon from '../assets/img/gridicon3.svg'
import grid4icon from '../assets/img/gridicon4.svg'
import fill from '../assets/img/fill.svg'
import withai from '../assets/img/withai.svg'
import imgccard from '../assets/images/course1.jpg'
import imgcard2 from '../assets/images/course2.jpg'
import imgcard3 from '../assets/images/course3.jpg'
import imgcard4 from '../assets/images/course4.jpg'
import imgcard5 from '../assets/images/course5.jpg'
import imgcard6 from '../assets/images/course6.jpg'
import imgcard7 from '../assets/images/ethai.png'
import imgcard8 from '../assets/images/course8.png'
import imgcard9 from '../assets/images/course9.png'
import imgcard11 from '../assets/images/course11.png'
import imgcard12 from '../assets/images/couses12.png'
import teenheroImage2 from '../assets/img/teenager.png'
import testImage from '../assets/img/testimonialimg.jpg'
import test1 from '../assets/img/test1.png'
import test2 from '../assets/img/test2.jpg'
import test3 from '../assets/img/test3.png'
import alumni1 from '../assets/images/tunde.jpg'
import alumni2 from '../assets/images/gift.png'
import alumni3 from '../assets/images/jude.jpg'
import hero1bg from '../assets/img/hero1bg.png'
import heroherohome from '../assets/img/heroherohome.png' 
import programIcon from '../assets/images/programme.svg'
import cyberIconImg from '../assets/images/cybers.svg'
import softwareIcon from '../assets/images/software.svg'
import aiIconImg from '../assets/images/arti.svg'
import gameimg from '../assets/images/game.png'
import webdevimg from '../assets/images/webdev.png'
import frontimg from '../assets/images/front.png'




const Home = () => {
  // Courses data for the Programs section. Each course has 1 primary category used for filtering.
  const courses = [
    {
      id: 'uidesign',
      title: 'UI/UX Design Career Accelerator',
      desc:
        'Master user experience, interface design, and product strategy through hands-on projects.Build a design portfolio and learn modern tools',
      img: imgccard,
      tag: 'Career change',
      badge: 'with AI Skills',
      link: '/uidesign',
      category: 'software'
    },
    {
      id: 'data',
      title: 'Data Analytics',
      desc:
        'Learn to analyze, visualize, and make data-driven decisions. Work with real datasets using Excel, SQL, Power BI, and Python for analytics.',
      img: imgcard2,
      tag: 'Introduction',
      badge: 'with AI Skills',
      link: '/data',
      category: 'software'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development Bootcamp',
      desc: 'Become a professional web developer capable  of building scalable digital products from scratch.',
      img: imgcard3,
      tag: 'Introduction',
      badge: null,
      link: '/fullstack',
      category: 'software'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Bootcamp',
      desc:
        'Master the essentials of network defense, ethical hacking, and data protection. ',
      img: imgcard4,
      tag: 'Career change',
      badge: 'with AI Skills',
      link: '/cybersecurity',
      category: 'cybersecurity'
    },
    {
      id: 'digital',
      title: 'Digital Marketing',
      desc: 'Solve complex problems with data and machine learning.',
      img: imgcard5,
      tag: 'Introduction',
      badge: 'with AI Skills',
      link: '/digital',
      category: 'software'
    },
    {
      id: 'aimachine',
      title: 'AI & Machine Learning Engineering',
      desc: 'Shape the future with cutting-edge artificial intelligence.',
      img: imgcard6,
      tag: 'Introduction',
      badge: null,
      link: '/aimachine',
      category: 'ai'
    }
  ]

  // Additional course collections specific to each filter. We keep the
  // original `courses` array as the full "Programmes" view and show only
  // the arrays below when their filter is active.
  const cybersecurityCourses = [
    {
      id: 'cyber-ai-tools',
      title: 'Cybersecurity & Ethical Hacking with AI tools',
      desc: 'Combine cybersecurity techniques with AI-assisted tools for analysis and threat detection.',
      img: imgcard7,
      tag: 'Introduction',
       badge: 'with AI Skills',
      link: '/cybersecurityai',
      category: 'cybersecurity'
    },
    {
      id: 'intro-cyber',
      title: 'Introduction to Cybersecurity',
      desc: 'Foundations of cybersecurity: principles, threats, and basic defensive practices.',
      img: imgcard8,
      tag: 'Introduction',
      badge: null,
      link: '/introcybersecurity',
      category: 'cybersecurity'
    }
  ]

  const softwareCourses = [
    {
      id: 'game-dev-intro',
      title: 'Introduction to Game Development',
      desc: 'Learn game loops, basic 2D/3D concepts and ship your first playable prototype.',
      img: gameimg,
      tag: 'Introduction',
      badge: null,
      link: '/gamedevelopment',
      category: 'software'
    },
    {
      id: 'web-dev-intro',
      title: 'Introduction to Web Development',
      desc: 'HTML, CSS and JavaScript fundamentals to start building websites.',
      img: webdevimg,
      tag: 'Introduction',
      badge: null,
      link: '/introweb',
      category: 'software'
    },
    // Reuse the existing Full Stack course content (keeps the same route/image)
    
    {
      id: 'frontend-react',
      title: 'Front End Development (React JS)',
      desc: 'Build reactive, component-driven front ends using React and modern tooling.',
      img: frontimg,
      tag: 'Introduction',
      badge: null,
      link: '/frontend',
      category: 'software'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development Bootcamp',
      desc: 'Become a professional web developer capable  of building scalable digital products from scratch.',
      img: imgcard3,
      tag: 'Introduction',
      badge: null,
      link: '/fullstack',
      category: 'software'
    },
  ]

  const aiCourses = [
    {
      id: 'gen-ai-professional',
      title: 'Generative AI for Professional',
      desc: 'Master generative AI tools and techniques to enhance productivity and innovation in your professional workflow.',
      img: imgcard9,
      tag: 'Career change',
      badge: 'with AI Skills',
      link: '/generative',
      category: 'ai'
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      desc: 'Dive deep into neural networks, backpropagation, and advanced architectures to build intelligent systems.',
      img: imgcard11,
      tag: 'Introduction',
      badge: 'with AI Skills',
      link: '/deeplearning',
      category: 'ai'
    },
    {
      id: 'ai-ml-mastery',
      title: 'AI Machine Learning Mastery Program',
      desc: 'Comprehensive program covering machine learning algorithms, model deployment, and real-world AI applications.',
      img: imgcard2,
      tag: 'Introduction',
      badge: null,
      link: '/aimachine',
      category: 'ai'
    },
    {
      id: 'intro-ai',
      title: 'Introduction to Artificial Intelligence',
      desc: 'Foundation course covering AI fundamentals, concepts, and applications to kickstart your AI journey.',
      img: imgcard12,
      tag: 'Introduction',
      badge: 'with AI Skills',
      link: '/introai',
      category: 'ai'
    }
  ]

  // Filter state for top-level program buttons and animation key to retrigger animations
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [animKey, setAnimKey] = useState<number>(0)
  const navigate = useNavigate()

  const handleFilter = (filter: string) => {
    setActiveFilter(filter)
    // bump anim key so children remount and CSS animations play
    setAnimKey((k) => k + 1)
  }
  const scrollToApply = () => {
    const el = document.getElementById('apply-now')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Compute displayed courses depending on the active filter.
  // - 'all' shows the original `courses` (Programmes)
  // - each other filter shows only the dedicated collection defined above
  const displayedCourses =
    activeFilter === 'all'
      ? courses
      : activeFilter === 'cybersecurity'
      ? cybersecurityCourses
      : activeFilter === 'software'
      ? softwareCourses
      : activeFilter === 'ai'
      ? aiCourses
      : []

  // Image carousel + parallax

  // Apply form state
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [hybrid, setHybrid] = useState<string>('')
  const [courseChoice, setCourseChoice] = useState<string>('')
  const [referral, setReferral] = useState<string>('')
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [statusMsg, setStatusMsg] = useState<string | null>(null)

  // No parallax: hero image remains fixed in position when swapping images
  return (
    <section className='w-full font-poppins'>
    <section
        className='w-full font-poppins'
        style={{
          backgroundImage: `url(${hero1bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='md:py-40 py-5 md:max-w-8xl mx-auto'>
              <div className='flex flex-col md:flex-row md:gap-10  gap-10  items-center justify-between md:px-40 px-6'>
                    {/* Left side */}
                    <div className='flex flex-col md:gap-3 md:max-w-[800px] md:pb-20'>
                        <div className='md:max-w-[700px] mb-2'>
                            <h1 className='md:text-[55px] text-[27px] font-[700] text-[#301D20] [font-family:Playfair_Display,serif] leading-tight md:leading-[1.15] tracking-tight md:max-w-[700px]'>Build Your Future in Tech.  Learn, Innovate, and Lead <span className='text-[#8F2436]'>with  Zeplus Academy.</span></h1>
                        </div>
                        <div className='md:max-w-[600px] md:mt-5'>
                        <p className='font-[580] md:text-[18px] text-[15px] text-[#301D20] [font-family:Playfair_Display,serif]'>We equip African youth with the most in-demand skills in 
                            UI/UX Design, Data Analystics, Full stack Development, Cybersecurity, and AI.</p>
                            </div>
                        <div className='md:max-w-[700px] flex flex-col gap-2 mt-1'>
                                
                         <div className='flex flex-row  md:gap-5 gap-2.5 mt-10'>
                         <button type='button' onClick={scrollToApply} className='font-[600] text-white flex flex-row gap-4 md:text-[17px] text-[15px] md:items-center md:justify-center cursor-pointer bg-[#EE5B2A] md:px-20 px-10 py-4 rounded-xl ' >
                                      Enroll Now
                             </button>
                             <button type='button' onClick={scrollToApply} className='cursor-pointer text-[#8F2436] hover:text-white bg-transparent hover:bg-[#8F2436]  border-2 border-[#8F2436] md:text-[17px] text-[15px] md:px-12 md:py-3 py-3 md:px-5 px-4 font-[500] rounded-xl'>
                                      Download Brochure
                           </button>
                      </div>
        
                                   
                                  
                        </div>
                    </div>
                    {/* Right side */}
                     {/* Right: image */}
          <div className='flex-1 flex items-center justify-center relative md:max-w-[600px]'>
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src={heroherohome}
              alt="hero image"
              className="rounded-lg h-96 w-106 md:h-120 md:w-full  object-cover transition-all duration-700"
              style={{ zIndex: 2 }}
            />
           
          </div>
     </div>
              </div>
        </div>
      </section>


    {/* Why Zplus section */}
    <section className='w-full bg-[#FBFAF9] font-poppins'>
       <div className='md:max-w-7xl mx-auto md:px-7 px-5 md:py-25 py-10'>
               <div className='text-center  md:max-w-[500px] mx-auto'>
                     <h2 className=' md:text-[45px] text-2xl font-[690] mb-1 text-[#301D20] [font-family:Playfair_Display,serif]'>Why Zeplus Academy</h2>
                     <div className='md:max-w-[400px] mx-auto'>
                        <p className='md:text-[18px] text-[14px] font-[395] text-[#7F676B]'>We don't just teach tech - we prepare Africa's youth to lead innovation</p>
                     </div>
               </div>
       <div className='grid md:grid-cols-4 grid-cols-1 gap-6 md:gap-10 mt-10'>
                  {/* Card 1 */}
         <div className='shadow bg-[#FFFFFF] rounded-xl animate-slide-up-bounce' style={{ animationDelay: '0ms' }}>
                       <div className='flex md:py-10 py-9 px-6 flex-col'>
                            <div className='bg-[#8F2436] p-2 md:rounded-[20px] md:w-16 md:h-16 w-12 h-12 rounded-2xl flex items-center justify-center mb-6'>
                              <img src={gridicon} alt='icon' className='w-8 h-8 '  />
                            </div>
                            <h2 className='mb-4 md:text-[18px] text-[15px] font-[500] text-[#301D20] [font-family:Playfair_Display,serif]'>Project-Based Learning</h2>
                            <p className='md:text-[15px] text-[13px] text-[#7F676B]'>Build real-world solutions from day one with hands-on projects that mirror industry challenges.</p>
                       </div>
         </div>

                 {/* Card 2 */}
         <div className='shadow bg-[#FFFFFF] rounded-xl animate-slide-up-bounce' style={{ animationDelay: '120ms' }}>
                       <div className='flex md:py-10 py-9 px-6 flex-col'>
                            <div className='bg-[#8F2436] p-2 md:rounded-[20px] md:w-16 md:h-16 w-12 h-12 rounded-2xl flex items-center justify-center mb-6'>
                              <img src={grid2icon} alt='icon' className='w-8 h-8 '/>
                            </div>
                            <h2 className='mb-4 md:text-[18px] text-[15px] font-[500] text-[#301D20] [font-family:Playfair_Display,serif]'>Expert Mentorship</h2>
                            <p className='md:text-[15px] text-[13px] text-[#7F676B]'>Learn directly from professionals in leading tech companies across Africa and beyond.</p>
                       </div>
        </div>
                  {/* Card 3 */}
                   <div className='shadow bg-[#FFFFFF] rounded-xl animate-slide-up-bounce' style={{ animationDelay: '240ms' }}>
                       <div className='flex md:py-10 py-9 px-6 flex-col'>
                            <div className='bg-[#8F2436] p-2 md:rounded-[20px] md:w-16 md:h-16 w-12 h-12 rounded-2xl flex items-center justify-center mb-6'>
                              <img src={grid3icon} alt='icon' className='w-8 h-8 ' />
                            </div>
                            <h2 className='mb-4 md:text-[18px] text-[15px] font-[500] text-[#301D20] [font-family:Playfair_Display,serif]'>Career & Job Prep Support</h2>
                            <p className='md:text-[15px] text-[13px text-[#7F676B]'>Resume building, interview prep, and internship placement to launch your career.</p>
                       </div>
                 </div>
                  {/* Card 4 */}
                   <div className='shadow bg-[#FFFFFF] rounded-xl animate-slide-up-bounce' style={{ animationDelay: '360ms' }}>
                       <div className='flex md:py-10 py-9 px-6 flex-col'>
                            <div className='bg-[#8F2436] p-2 md:rounded-[20px] md:w-16 md:h-16 w-12 h-12 rounded-2xl flex items-center justify-center mb-6'>
                              <img src={grid4icon} alt='icon' className='w-8 h-8 ' />
                            </div>
                            <h2 className='mb-4 md:text-[18px] text-[15px] font-[500] text-[#301D20] [font-family:Playfair_Display,serif]'>Vibrant Community</h2>
                            <p className='md:text-[15px] text-[13px] text-[#7F676B]'>Connect, collaborate, and grow with like-minded innovators across Africa.</p>
                       </div>
                 </div>
            </div> 
                                       {/* End of cards */}
                                       <div className='text-center  md:max-w-[500px] mx-auto mt-10 font-poppins '>
                                           <p className='text-[17px]  font-[400] text-[#EE5B2A]'>Specialized AI-powered learning units</p>
                                       </div>
       </div>

    </section>

  {/* Programs courses Section */}
  <section id='programs' className='w-full bg-white font-poppins '>
  <div className='md:max-w-7xl mx-auto md:px-0 px-5 md:pt-20 pt-10'>
      <div className=' flex flex-col md:items-center md:justify-center md:text-center '>
        <div>
          <h2 className=' mb-2 font-Sora md:text-5xl text-[20px] font-[690]  text-[#301D20] [font-family:Playfair_Display,serif]'>Programs to Power Your Future</h2>
          <div className=''>
      <p className='md:text-[16px] text-[14px] font-[395] text-[#7F676B]'>Choose your path. Explore new possibilities. Land the career you deserve.</p>
          </div>
        </div>
      <div className='flex md:flex-row flex-col md:gap-10 gap-2 md:justify-center mt-6'>
            <div className='flex flex-row md:space-x-6 space-x-1.5 items-center ssm:text-[7px]'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4 invert' />
              <p className='md:text-[15px] text-[13px] md:font-[395] text-[#7F676B]'>40 to 360 hours</p>
            </div>
            {/* 2 */}
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-xs'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4 invert' />
              <p className='md:text-[15px] text-[13px] md:font-[395] text-[#7F676B]'>Live classes</p>
            </div>
            {/* 3 */}
            <div className='flex flex-row md:space-x-6 space-x-2 items-center ssm:text-xs'>
              <img src={fill} alt='Cybersecurity' className='md:w-5 md:h-5 w-4 h-4 invert' />
              <p className='md:text-[15px] text-[13px] md:font-[395] text-[#7F676B]'>On site or online</p>
            </div>
        </div>
      </div>
  </div>

      {/* courses Cards section*/}
      <div className='md:max-w-[1440px] mx-auto md:px-0 px-6 md:mt-12 mt-5 font-poppins'>
        {/* Top filter buttons */}
        <div className='bg-[#301D20] md:max-w-5xl mx-auto px-6  rounded-xl '>
  <div className='flex flex-row md:gap-6 gap-3 justify-start md:justify-center text-white items-center mb-4 py-3 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-2'>
          {[
            { id: 'all', label: 'Programmes', icon: programIcon },
            { id: 'cybersecurity', label: 'Cybersecurity', icon: cyberIconImg },
            { id: 'software', label: 'Software', icon: softwareIcon },
            { id: 'ai', label: 'Artificial Intelligence', icon: aiIconImg }
          ].map((b) => (
            <button
              key={b.id}
              onClick={() => handleFilter(b.id)}
              className={`flex items-center gap-2 md:gap-3 px-7 md:px-5 py-2 rounded-lg items-center justify-center transition-colors duration-200 font-poppins text-[13px] md:text-[15px] font-[390] whitespace-nowrap snap-start ${
                activeFilter === b.id ? 'bg-[#8F2436] text-white' : 'text-white]'
              }`}
            >
              {/* icon: when the button is active we add the `active` class so CSS can invert it to white */}
              <img
                src={b.icon}
                alt={`${b.label} icon`}
                className={`w-4 h-4 md:w-5 md:h-5 invert object-contain filter-icon ${activeFilter === b.id ? 'active' : ''}`}
              />
              <span>{b.label}</span>
            </button>
          ))}
        </div>
        </div>
        {/* grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mt-6 md:mt-10 md:px-30 px-5'>
          {displayedCourses.map((course, idx) => (
              <div
                key={`${course.id}-${animKey}-${idx}`}
                className='border border-gray-200 rounded-2xl p-5 transform transition duration-300 hover:shadow-lg cursor-pointer animate-slide-in-right opacity-0'
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className='w-full h-52 mb-5 rounded-2xl bg-gray-100 overflow-hidden flex items-center justify-center'>
                  <img src={course.img} alt={course.title} className='h-full w-[100%] object-cover' />
                </div>
                <div className='flex flex-row gap-4 mb-4 text-sm items-center'>
                  <h3 className='bg-[#EFE1DD] text-[#8F2436] px-4 md:py-1 py-1.5 rounded-full text-[10px] md:text-[13px]'>{course.tag}</h3>
                  {course.badge && (
                    <div className='flex flex-row items-center bg-gradient-to-br from-[#9533FC] to-[#FF5FC8] px-5 md:py-1 py-1.5 rounded-full text-white'>
                      <img src={withai} alt='icon' className='w-4 h-4 mr-2' />
                      <p className='md:text-[13px] text-[10px]'>{course.badge}</p>
                    </div>
                  )}
                </div>
                <div className='flex flex-col text-sm'>
                  <h2 className='text-ssm font-[750] mb-3 text-[#301D20] [font-family:Playfair_Display,serif]'>{course.title}</h2>
                  <p className='font-light text-sm mb-3 text-[#7F676B]'>{course.desc}</p>
                  <button
                    type='button'
                    onClick={() => navigate(course.link)}
                    className='text-white bg-[#301D20] text-center py-2.5 rounded cursor-pointer hover:bg-[#301D20] transition-colors duration-300 w-[100%] mt-3 text-ssm'
                  >
                    View course
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>

       {/* Teen4Teens */}
       <section className='w-full  bg-[#F9F6F0] mt-20 font-poppins md:max-w-7xl mx-auto md:rounded-2xl'>
            <div className='md:max-w-6xl w-full mx-auto md:px-0 px-6 md:py-25 py-10'>
         <div className='flex flex-col md:flex-row gap-10 text-white'>
               {/* Left */}
               <div className='flex-1 flex flex-col md:max-w-[550px] order-2 md:order-1'>
                     <div className='flex flex-row gap-1 md:mb-6 mb-3'>
                      <h2 className='md:text-5xl text-3xl font-[700]  text-[#301D20] text-[#301D20] [font-family:Playfair_Display,serif] 1'>Tech<span className='md:text-6xl text-4xl font-font family/Font1'>4</span>Teen</h2>
                      <p className='text-sm font-medium md:mt-9 mt-4 text-[#F67D55]'>NEW</p>
                     </div>
                     <div className='flex flex-col mt'>
                         <h2 className='md:text-xl text-[20px] text-[#301D20] font-[500] mb-4 font-Sora'>This is a  3-month weekend training Program designed specially for young African tech enthusiasts aged 11–19.</h2>
                         <div className='md:max-w-[450px] mb-4'>
                          <p className='md:text-[15px] text-[14px] text-[#301D20]'>Our goal is to help African teens discover the power of
                           technology early — by learning, building, and innovating through fun, practical, and creative projects.</p>
                         </div>
                         <div className=''>
                          <h2 className='md:text-[24px] text-[20px]  font-[450] font-poppin text-[#301D20]'>Ready to Begin?</h2>
                          <p className='md:text-[15px] text-[14px] font-[396] mb-4 text-[#301D20]'>Give your child  a head start in tech.</p>
                          {/* ENROLL Button */}
                         <div className='mt-6'>
                           <Link to='/tech4teen' className='bg-[#F67D55] rounded-lg md:px-15  px-5 py-3 md:text-[16px] text-[14px]'>Enroll Now</Link>
                         </div>
                         </div>
                     </div>
               </div>
                {/* Right */}
                <div className='flex-1 md:max-w-[600px] flex items-center justify-center order-1 md:order-2'>
                      <img
                        src={teenheroImage2}
                        alt='Hero'
                        className='md:w-116 md:h-96 w-full h-72 md:mr-10 object-cover rounded-xl border-2 border-white'
                        
                      />
                </div>
         </div>
            </div>


       </section>


  {/* Testimonials */}
     <section id='testimonials' className='w-full bg-[#FFFFFF] font-poppins'>
            <div className='md:max-w-7xl mx-auto md:px-0 px-5 pt-10 pb-10'>
                   <div className='text-center items-center justify-center mx-auto'>
                   <div className='bg-[#8F2436] w-30 rounded-full items-center justify-center mx-auto mb-5 mt-10'>
                     <h2 className='py-2 px-4 text-white text-[12px] font-[430]'>TESTIMONIALS</h2>
                   </div>
                    <p className=' font-[700] text-[25px] md:text-[50px] mb-4 text-[#301D20] [font-family:Playfair_Display,serif]'>Hear what they say about us.</p>
                   </div>
                   {/* gradient taller than image */}
                   <div
                    className='relative rounded-lg overflow-hidden py-3'
                  >
                    <img
                      src={testImage}
                      alt='image'
                      className='max-w-[100%] mx-auto md:rounded-xl block'
                    />

                    {/* gradient overlay (on top of the image) */}
                    <div
                      className='absolute inset-0 '
                      style={{
                        background:
                          'linear-gradient(180deg, #342b4180 0%, #3e3a3a66 50%, #32303480 100%)',
                        zIndex: 10
                      }}
                    />

                    {/* centered text overlay above the gradient */}
                    <div
                      className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none md:mt-25 mt-10'
                      style={{ zIndex: 20 }}
                    >
                      <p className='text-white text-center px-4 md:px-8 text-ssm font-light md:text-2xl font-Sora md:mb-3'>
                        “I had an amazing experience at Zeplus Academy.”
                      </p>
                      <h2 className='text-white md:text-[22px] text-sm font-light font-sora md:mb-3'>-</h2>
                      <h2 className='text-white md:text-[22px] text-sm font-light font-sora'>UIUX Designer, Nigeria</h2>
                    </div>
                  </div>

                  {/* the 3 below testimonials images */}
                  <div className='flex flex-col md:flex-row gap-6 mt-10'>
                    {/* Testimonial 1 with overlay text */}
                    <div className='relative w-full max-w-xs mx-auto rounded-lg overflow-hidden md:mt-5'>
                      <img src={test1} alt='testimonial1' className='w-full md:h-56 h-auto object-cover' />

                      {/* small gradient overlay */}
                      <div
                        className='absolute inset-0 md:h-56 md:rounded-lg'
                        style={{
                          background: 'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)',
                          zIndex: 10
                        }}
                      />

                      {/* centered text on the small image */}
                      <div className='absolute inset-0 flex flex-col items-baseline justify-center mt-20 px-4' style={{ zIndex: 20 }}>
                        <p className='text-white text-[14px] md:text-[19px] font-light font-Sora'>Jude</p>
                        <h2 className='text-white text-ssm font-sora font-light'>Cybersecurity, Nigeria</h2>
                      </div>
                    </div>
                    {/* Testimonial 2 with overlay text */}
                    <div className='relative w-full max-w-[400px] mx-auto rounded-lg overflow-hidden'>
                      <img src={test2} alt='testimonial1' className='w-fit h-65 block' />

                      {/* small gradient overlay */}
                      <div
                        className='absolute inset-0'
                        style={{
                          background: 'linear-gradient(180deg, rgba(34, 31, 33, 0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(34, 33, 37, 0.6) 100%)',
                          zIndex: 10
                        }}
                      />

                      {/* centered text on the small image */}
                      <div className='absolute inset-0 flex flex-col items-baseline justify-center mt-30 px-4 py-6' style={{ zIndex: 20 }}>
                        <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>Tunde</p>
                        <h2 className='text-white text-ssm font-sora font-light'>Product Designer, United Kingdom</h2>
                      </div>
                    </div>
                    {/* Testimonial 3 with overlay text */}
                    <div className='relative w-full max-w-xs mx-auto rounded-lg overflow-hidden md:mt-5'>
                      <img src={test3} alt='testimonial1' className='w-full md:h-56 h-auto block' />

                      {/* small gradient overlay */}
                      <div
                        className='absolute inset-0 md:h-56 md:rounded-lg'
                        style={{
                          background: 'linear-gradient(180deg, rgba(59,27,108,0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(59,27,108,0.6) 100%)',
                          zIndex: 10
                        }}
                      />

                      {/* centered text on the small image */}
                      <div className='absolute inset-0 flex flex-col items-baseline justify-center mt-20 px-4 py-6' style={{ zIndex: 20 }}>
                        <p className='text-white text-[14px] md:text-[18px] font-light font-Sora'>Rebecca</p>
                        <h2 className='text-white text-ssm font-sora font-light '>Product Designer, Nigeria</h2>
                      </div>
                    </div>
                  </div>

                  
            </div>
             {/* Alumni Section */}
                   <div className='md:px-40 px-10 mt-10 '>
                       
                  <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-5 items-center justify-center '>
                    {/* Alumni 1 */}
                    <div className='bg-[#FFFFFF] rounded-xl px-6 pt-10 pb-20 flex flex-col shadow '>
                       <div className='flex flex-row gap-3 mb-5'>
                         <img src={alumni1} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
                         <div className='flex flex-col'>
                          <h2 className='font-poppins text-[14px] md:text-[15px] font-[500] text-[#301D20]'>Tunde</h2>
                          <p className='font-poppins text-[14px] md:text-[15px] font-[396] text-[#301D20]'>UI/UX Designer</p>
                         </div>
                       </div>
                       <div className='md:max-w-[350px]'>
                        <p className='font-poppins text-[15px] md:text-[16px] font-[375] text-[#301D20]'>“Zeplus Academy transformed how I approach technology and problem-solving. 
The instructors were not just teachers — they were mentors who guided me every step of the way. Every project challenged me to think deeper and create smarter. It’s more than a school; it’s a launchpad for anyone serious about a tech career.”</p>
                       </div>
                    </div>
                    {/* Alumni 2 */}
                    <div className='bg-[#FFFFFF] rounded-xl px-6 pt-10 pb-9 flex flex-col shadow '>
                       <div className='flex flex-row gap-3 mb-5'>
                         <img src={alumni2} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
                         <div className='flex flex-col'>
                          <h2 className='font-poppins text-[14px] md:text-[15px] font-[500] text-[#301D20]'>Gift</h2>
                          <p className='font-poppins text-[14px] md:text-[15px] font-[396] text-[#301D20]'>Freelancer, Alumni</p>
                         </div>
                       </div>
                       <div className='md:max-w-[350px] '>
                        <p className='font-poppins text-[15px] md:text-[16px] font-[375] mb-12 text-[#301D20]'>“Before joining Zeplus Academy, I doubted my ability to thrive in tech. But the structured learning path, interactive classes, and supportive community changed that. I went from a beginner to confidently working on real projects that make impact.
                           The experience gave me the confidence to build and lead in the digital space.”</p>
                       </div>
                    </div>
                    {/* Alumni 3 */}
                    <div className='bg-[#FFFFFF] rounded-xl px-6 pt-10 pb-16 flex flex-col shadow'>
                       <div className='flex flex-row gap-3 mb-5'>
                         <img src={alumni3} alt='alumni1' className='w-12 h-12 object-cover rounded-full' />
                         <div className='flex flex-col'>
                          <h2 className='font-poppins text-[14px] md:text-[15px] font-[500] text-[#301D20]'>Jude</h2>
                          <p className='font-poppins text-[14px] md:text-[15px] font-[396] text-[#301D20]'>Cybersecurity</p>
                         </div>
                       </div>
                       <div className='md:max-w-[350px]'>
                        <p className='font-poppins text-[15px] md:text-[16px] font-[375] mb-12 text-[#301D20]'>“What stood out to me most about Zeplus Academy was how practical everything felt. We didn’t just learn theories  we applied them immediately. From hands-on cybersecurity labs to teamwork simulations, it felt like real industry work. I left feeling ready for any challenge.”</p>
                       </div>
                    </div>
                  </div>
                   </div>

        </section>

        {/* Apply Now Section */}
  <section id='apply-now' className='w-full bg-[#8F2436] mt-20 mb-15 font-poppins'>
            <div className='md:max-w-[1300px] mx-auto md:px-0 px-5 md:py-30 py-15'>
          <div className='flex flex-col md:flex-row gap-6 text-white items-center justify-center'>
                {/* Left */}
                 <div className='flex flex-col md:max-w-[750px] gap-6'>
                  <div className='md:max-w-[500px]'>
                    <h2 className='text-[22px] md:text-[32px] font-[500]'>At Zeplus Academy, our mission is to empower you with future-ready Tech and AI skills</h2>
                  </div>
                  <div className='md:max-w-[500px]'>
                    <h2 className='md:text-[16px] text-[13px] font-[400]'>The perfect blend of creativity, strategy, and technology you need to stand out,
                      build impact-driven products, and thrive in today’s competitive job market. </h2>
                  </div>
                  <div>
                    <p className='md:text-[16px] font-[400] text-[13px]'>We don’t just train designers; we shape innovators and problem-solvers ready to lead Africa’s digital transformation</p>
                  </div>
                 </div>
                  {/* Right */}
                 <div className=' bg-[#C491C0] rounded-xl w-full md:max-w-[700px]' >
                   <div className='flex flex-col  justify-center p-5'>
                     <h2 className='text-[26px] md:text-[32px] text-black'>Ready to launch your career?</h2>
                     {/* Form fields */}
                     <form
                       className='flex flex-col gap-3 mt-5 '
                       onSubmit={(e: FormEvent) => {
                         e.preventDefault()
                         setStatusMsg(null)
                         if (!firstName || !lastName || !email || !phone || !courseChoice) {
                           setStatusMsg('Please fill all required fields (marked *).')
                           return
                         }
                         setSubmitting(true)
                         try {
                           const payload = {
                             firstName,
                             lastName,
                             email,
                             phone,
                             hybrid,
                             course: courseChoice,
                             referral
                           }
                           saveSubmission('apply_now', payload)
                          // notify any open admin dashboard to refresh immediately
                          try {
                            window.dispatchEvent(new CustomEvent('zeplus:submission', { detail: { formType: 'apply_now' } }))
                          } catch (e) {
                            // ignore if CustomEvent isn't supported in some environments
                          }
                           setStatusMsg('Thank you — your application was submitted.')
                           // reset
                           setFirstName('')
                           setLastName('')
                           setEmail('')
                           setPhone('')
                           setHybrid('')
                           setCourseChoice('')
                           setReferral('')
                         } catch (err) {
                           setStatusMsg('Failed to submit — try again.')
                         } finally {
                           setSubmitting(false)
                         }
                       }}
                     >
                         <div className='flex md:flex-row flex-col gap-2'>
                              <div className='flex flex-col gap-2 w-full'>
                                       <label className='font-[400]'>First Name *</label>
                                  <input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type='text'
                                    required
                                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300'
                                  />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                  <label className='font-[400]'>Last Name *</label>
                                <input
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                  type='text'
                                  required
                                  className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300'
                                />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Email *</label>
                              <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                required
                                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300'
                              />
                         </div>

                                 <div className='flex md:flex-row flex-col gap-2'>
                              <div className='flex flex-col gap-2 w-full'>
                              <label className='font-[400]'>Phone*</label>
                              <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type='tel'
                                required
                                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300'
                              />
                         </div>
                              <div className='flex flex-col gap-2 w-full'>
                              <label className='font-[400]'>Hybrid *</label>
                              <select
                                value={hybrid}
                                onChange={(e) => setHybrid(e.target.value)}
                                className='border border-gray-300 p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'
                              >
                                <option value=''>Select an option</option>
                                <option value='In-Person'>In-Person</option>
                                <option value='Online'>Online</option>
                              </select>
                         </div>
                         </div>
                          
                          <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>What Course would you like to learn? *</label>
                              <select
                                value={courseChoice}
                                onChange={(e) => setCourseChoice(e.target.value)}
                                required
                                className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'
                              >
                                <option value=''>Select a Course</option>
                                <option value='AI'>AI</option>
                                <option value='Cybersecurity'>Cybersecurity</option>
                                <option value='Digital Marketing'>Digital Marketing</option>
                                <option value='Full Stack Development'>Full Stack Development</option>
                                <option value='Data Analytics'>Data Analytics</option>
                                <option value='UI/UX Design'>UI/UX Design</option>
                                <option value='Cybersecurity & Ethical Hacking'>Cybersecurity & Ethical Hacking</option>
                                <option value='Introduction to Cybersecurity'>Introduction to Cybersecurity</option>
                                <option value='Game Development'>Game Development</option>
                                <option value='Web Development'>Web Development</option>
                                <option value='Front End Development'>Front End Development</option>
                                <option value='Generative AI'>Generative AI</option>
                                <option value='Deep Learning'>Deep Learning</option>
                                <option value='Introduction to Artificial Intelligence'>Introduction to Artificial Intelligence</option>
                              </select>
                         </div>

                        

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>How did you hear about Zeplus? *</label>
                              <select
                                value={referral}
                                onChange={(e) => setReferral(e.target.value)}
                                className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'
                              >
                                <option value=''>Select an option</option>
                                <option value='Social Media'>Social Media</option>
                                <option value='Friend or Family'>Friend or Family</option>
                                <option value='Online Search'>Online Search</option>
                                <option value='Advertisement'>Advertisement</option>
                                <option value='Other'>Other</option>
                              </select>
                         </div>

                                  
                       <div className='flex items-center gap-3'>
                         <button disabled={submitting} className='bg-[#EE5B2A] text-white py-2.5  font-[380] rounded-md  w-40'>
                           {submitting ? 'Submitting...' : 'Submit'}
                         </button>
                         {statusMsg && <p className='text-sm text-white'>{statusMsg}</p>}
                       </div>
                     </form>

                    
                      
                   </div>
                 </div>

          </div>


            </div>



        </section>
    </section>
  )
}

export default Home