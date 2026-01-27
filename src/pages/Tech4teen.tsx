import { Link } from 'react-router-dom'

import hero1 from '../assets/images/teenage1.png'
import hero2 from '../assets/images/teenage2.png'
import hero3 from '../assets/images/teenage3.png'
import code1 from '../assets/courses/code.png'
import teenheroImage2 from '../assets/img/teenager.png'
import python from '../assets/images/teen1.png'
import console from '../assets/courses/console.png'
import code from '../assets/images/teenai.png'
import domain from '../assets/courses/domain.png'
import checkmark from '../assets/courses/checkmark.png'
import checkmate from '../assets/courses/checkmate.png'
import todo from '../assets/courses/to-do.png'
import arrow from '../assets/courses/arrow.png'
import grad from '../assets/courses/grad.png'
import streaming from '../assets/courses/streaming.png'
import offer1 from '../assets/courses/offer1.png'
import offer2 from '../assets/courses/offer2.png'
import offer3 from '../assets/courses/offer3.png'
import offer4 from '../assets/courses/offer4.png'
import offer5 from '../assets/courses/offer5.png'
import partnerwithus from '../assets/courses/partnerwithus.png'
import  { useState, useEffect } from 'react'
import { saveSubmission } from '../utils/storage'
import teentests from '../assets/courses/testimonialteen.png'
import test1 from '../assets/courses/test1.jpg'
import test2 from '../assets/courses/test2.png'
import test3 from '../assets/courses/test3.png'
import alumni1 from '../assets/img/alumni.png'
import alumni2 from '../assets/img/alumni2.png'
import alumni3 from '../assets/img/alumni3.png'



const Tech4teen = () => {
  const scrollToApply = () => {
    const el = document.getElementById('apply-now')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Image carousel + parallax
  const images = [hero1, hero2, hero3]
  const [current, setCurrent] = useState<number>(0)

  // Cycle images every 10 seconds
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 10000)
    return () => clearInterval(id)
  }, [])

  const [openIndex, setOpenIndex] = useState<number | null>(0)
      
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const fd = new FormData(form)
    const payload = Object.fromEntries(fd.entries())
    saveSubmission('Tech4teen', payload)
    form.reset()
  }
      

      const faqs = [
    {
      q: "What are classes like?",
      a: "Our classes are interactive, engaging, and project-based. Students work on real coding projects while learning fundamental concepts. Each session includes live instruction, hands-on practice, and collaborative activities with peers."
    },
    
    {
      q: "Who teaches the classes?",
      a: "What makes us truly unique is the quality of our instructors. We’re highly selective—we hire only the top 2% of applicants. Our instructors bring a rare blend of friendly, effective teaching and deep programming expertise."
    },
    {
      q: "What makes Zeplus Academy different?",
      a: "Unlike one-off coding courses, Zeplus Academy offers a structured, step-by-step program that takes students from beginners to advanced levels. Each course builds on the last, ensuring real skill development, clear milestones, purposeful outcomes, and a real-world internship at the end."
    },
    {
      q: "Which course should my child enroll in?",
      a: "We’re here to help you find the perfect starting point! Just answer a few quick questions about your child’s age, experience, and goals—and we’ll give you a personalized program recommendation instantly. Find the right program for your child"
    },
    {
      q: "How much does it cost?",
      a: "Tuition is ₦300,000 for the full 3-month session."
    },
    {
      q: "Can schools partner with Zeplus Academy?",
      a: "Yes! We’re open to partnerships with schools to help train their students in Tech and AI. Schools can contact us directly to discuss collaboration."
    },
    {
        q: "What if my teen doesn’t enjoy the program? ✅",
        a: " We’re confident your teen will love Zeplus Academy. But if after the first two sessions you’re not satisfied, we offer a 100% Satisfaction Guarantee — full refund"
    },
    
  ]
  // No parallax: hero image remains fixed in position when swapping images
  return (
    <section className='w-full font-poppins'>
    <section
        className='w-full font-poppins bg-[#f4ecff]' >
        <div className='md:py-40 py-15 md:max-w-8xl mx-auto'>
              <div className='flex flex-col md:flex-row md:gap-10 gap-5 items-center justify-between md:px-40 px-6'>
                    {/* Left side */}
                    <div className='flex flex-col md:max-w-[800px]'>
                        <div className='md:max-w-[650px] mb-5'>
                            <h1 className='md:text-[55px] text-[30px] font-[750] text-[#301D20] [font-family:Playfair_Display,serif] leading-tight md:leading-[1.05] tracking-tight md:max-w-[550px] max-w-full break-words text-left'>Unlock the Future with AI – Empower Your Teen with Cutting-Edge Skills</h1>
                        </div>
                        <div className='md:max-w-[550px]'>
                        <p className='font-[390] md:text-[16px] text-[15px]'>We equip African teens (ages 11–19) with the knowledge and skills in Artificial Intelligence, Machine Learning, and Coding to thrive in today’s tech-driven world. Our hands-on, project-based approach ensures your teen stays ahead in the ever-evolving digital landscape5</p>
                            </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-3'>
                                
                         <div className='flex md:flex-row flex-col gap-3 mt-2'>
                         <button type='button' onClick={scrollToApply} className='font-[400] text-white flex flex-row gap-2.5 md:text-[16px] text-[13px] items-center justify-center cursor-pointer bg-[#EE5B2A] md:px-15 px-3 py-2.5 md:py-4 rounded-xl ' >
                                      Enroll Your Teen Now
                             </button>
                         <Link to='/schoolpartner'>   <p className='text-center cursor-pointer text-[#EE5B2A] border-2 border-[#EE5B2A] md:text-[16px] text-[13px] md:px-12 md:py-4 py-2.5 md:px-15 px-4 font-[420] rounded-xl'>
                                      Partner With Us (For Schools)
                           </p></Link>
                      </div>

                             <p className=' text-[14px] md:text-[15px] font-[300] mt-5'>Trusted by 100+ parents  and schools across Nigeria</p>

                        </div>
                    </div>
                    {/* Right side */}
                     {/* Right: image */}
          <div className='flex-1 flex items-center justify-center relative md:max-w-[600px]'>
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src={images[current]}
              alt={`hero ${current + 1}`}
              className="rounded-lg h-80 w-96 md:h-auto md:w-full object-contain transition-all duration-700"
              style={{ zIndex: 2 }}
            />
            
          </div>
     </div>
              </div>
        </div>
      </section>


    {/* Why Zplus section */}
   <section className='w-full bg-[#FAF6F6] font-poppins'>
       <div className='md:max-w-4xl mx-auto md:py-20 py-10 flex flex-col gap-4 items-center justify-center md:px-0 px-5'>
               <h3 className='font-[580] md:text-[26px] text-[25px]'>About the Program</h3>
               <p className='font-[395] md:text-[15px] text-[13px] text-center'>We’re on a mission to empower African teens with the skills and confidence to lead the AI revolution. </p>
               <p className='font-[395] md:text-[15px] text-[13px] text-center'>The AI for Teens Program prepares young minds with the knowledge of coding, AI, and machine learning to shape the future and take on tech-driven careers.</p>
               <h2 className='md:text-[30px] text-[24px] font-[580] text-center'>Why AI Literacy for African Teens?</h2>
               <p className='font-[395] md:text-[15px] text-[13px] text-center'>As technology continues to shape industries, AI is at the forefront. Our teens deserve the opportunity to learn AI not just use it.</p>
              <p className='font-[395] md:text-[15px] text-[13px] text-center'>With Zeplus Academy, your teen will gain the skills needed to thrive in a world that’s being transformed by tech.</p>
               <div className='border border-[#9C0E76] bg-[#F7E1E1F2] py-6 rounded-lg md:px-10 px-5 mt-4'>
                   <h3 className='font-[395] md:text-[15px] text-[13px] text-center'>Classes hold Saturdays only (3 hours per week) — making it easy to balance school and learning tech.</h3>
               </div>
       </div>
   </section>




  {/* Explore courses section */}
  <section className='w-full font-poppins bg-[#F7E3E3]'>
 <div className='py-15 md:px-0 px-5 flex flex-col gap-3 md:max-w-5xl mx-auto items-center justify-center'>
  <h3 className='font-[500] md:text-[26px] text-[22px] text-center'>Explore Our Exciting AI & Coding Courses for Teens</h3>
  <p className='font-[395] md:text-[15px] text-[13px] text-center'>Choose from any of our exciting courses — each designed to spark curiosity and build real-world skills.</p>

{/* Grid */}
     <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10' >
        {/* grid 1 */}
        <div className='bg-white py-8 px-5 rounded-lg shadow flex flex-col gap-4'>
          <span>
            <img src={python} alt='icon' className='w-12 h-12 mb-2' />
          </span>
          <h3 className='font-[420] md:text-[15px] text-[13px]'>AI Essentials for Beginners</h3>
          <p className='font-[395] md:text-[15px] text-[13px]'>Dive into the basics of AI, machine learning, and algorithms. Build a foundation for more advanced learning.</p>
             <div className='flex items-center justify-between mt-4'>
               <span className='text-[13px] md:text-[15px] font-[425] text-[#60070B]'>Ages 11-19</span>
               <button onClick={scrollToApply} className='bg-[#8F2436] text-white py-2 px-5 rounded-full text-[13px] md:text-[14px] font-[395] '>Enroll Now</button>
             </div>
        </div>
        {/* grid 2 */}
         <div className='bg-white py-8 px-5 rounded-lg shadow flex flex-col gap-4'>
          <span>
            <img src={domain} alt='icon' className='w-12 h-12 mb-2' />
          </span>
          <h3 className='font-[420] md:text-[15px] text-[13px]'>Web Development</h3>
          <p className='font-[395] md:text-[15px] text-[13px]'>Design and build your own websites from scratch. Learn HTML, CSS, and JavaScript to create stunning web experiences.</p>
             <div className='flex items-center justify-between mt-4'>
               <span className='text-[13px] md:text-[15px] font-[425] text-[#60070B]'>Ages 11-19</span>
               <button onClick={scrollToApply} className='bg-[#8F2436] text-white py-2 px-5 rounded-full text-[13px] md:text-[14px] font-[395] '>Enroll Now</button>
             </div>
        </div>
        {/* grid 3 */}
         <div className='bg-white py-8 px-5 rounded-lg shadow flex flex-col gap-4'>
          <span>
            <img src={console} alt='icon' className='w-12 h-12 mb-2' />
          </span>
          <h3 className='font-[420] md:text-[15px] text-[13px]'>AI & Machine Learning Foundations</h3>
          <p className='font-[395] md:text-[15px] text-[13px]'>Learn the core principles of AI and how to create real-world applications.</p>
             <div className='flex items-center justify-between mt-4'>
               <span className='text-[13px] md:text-[15px] font-[425] text-[#60070B]'>Ages 11-19</span>
               <button onClick={scrollToApply} className='bg-[#8F2436] text-white py-2 px-5 rounded-full text-[13px] md:text-[14px] font-[395] '>Enroll Now</button>
             </div>
        </div>
        {/* grid 4 */}
         <div className='bg-white py-8 px-5 rounded-lg shadow flex flex-col gap-4'>
          <span>
            <img src={code} alt='icon' className='w-12 h-12 mb-2' />
          </span>
          <h3 className='font-[420] md:text-[15px] text-[13px]'>AI Creativity Lab (Generative AI, Chatbots, Art + Code)</h3>
          <p className='font-[395] md:text-[15px] text-[13px]'> Blend creativity with technology — create AI art, chatbots, and interactive digital experiences.</p>
             <div className='flex items-center justify-between mt-4'>
               <span className='text-[13px] md:text-[15px] font-[425] text-[#60070B]'>Ages 11-19</span>
               <button onClick={scrollToApply} className='bg-[#8F2436] text-white py-2 px-5 rounded-full text-[13px] md:text-[14px] font-[395] '>Enroll Now</button>
             </div>
        </div>
     </div>
 </div>
  </section>

  {/* Programs details */}
  <section className='w-full bg-[#FAF6F6] font-poppins'>
   <div className='py-15 md:px-0 px-5 flex flex-col md:max-w-6xl mx-auto '>
        <h3 className='font-[420] md:text-[26px] text-[22px] text-center'>Program Details</h3>
        <div className='flex flex-col md:flex-row md:gap-10 gap-5 mt-10 items-center justify-center'>
            {/* Left */}
            <div className='grid grid-cols-2 md:grid-cols-2 gap-5 md:max-w-[500px]'>
              {/* grid 1 */}
              <div className='border border-[#F2A807] bg-[#FFF7E6] p-6 rounded-lg flex flex-col gap-2 w-full'>
                <h3 className='font-[420] md:text-[15px] text-[13px]'>Duration</h3>
                <p className='font-[395] md:text-[15px] text-[13px]'>3 Months</p>
              </div>
              {/* grid 2 */}
              <div className='border border-[#F2A807] bg-[#FFF7E6] p-6 rounded-lg flex flex-col gap-2 w-full'>
                <h3 className='font-[420] md:text-[15px] text-[13px]'>Schedule</h3>
                <p className='font-[395] md:text-[15px] text-[13px]'>Saturdays Only</p>
                <p className='font-[395] md:text-[15px] text-[13px]'>(3 Hours/Week)</p>
              </div>
              {/* grid 3 */}
              <div className='border border-[#F2A807] bg-[#FFF7E6] p-6 rounded-lg flex flex-col gap-2 w-full'>
                <h3 className='font-[420] md:text-[15px] text-[13px]'>Mode</h3>
                <p className='font-[395] md:text-[15px] text-[13px]'>Online live</p>
              </div>
              {/* grid 4 */}
              <div className='border border-[#F2A807] bg-[#FFF7E6] p-6 rounded-lg flex flex-col gap-2 w-full'>
                <h3 className='font-[420] md:text-[15px] text-[13px]'>Age Range</h3>
                <p className='font-[395] md:text-[15px] text-[13px]'>11-19 years</p>
              </div>
            </div>
            {/* Right */}
            <div className='bg-[#8F2436] p-11.5 rounded-lg flex flex-col md:gap-2 gap-4 md:max-w-[600px] text-white'>
              <h3 className='font-[420] md:text-[20px] text-[18px] mb-4'>Why Join?</h3>
              <div className='flex flex-row gap-3'>
                <span>
                  <img src={checkmark} alt='icon' className='w-5 h-5 ' />
                </span>
                <p className='font-[395] md:text-[15px] text-[13px]'>All classes are conducted online.</p>
              </div>
              <div className='flex flex-row gap-3'>
                <span>
                  <img src={checkmark} alt='icon' className='md:w-5 md:h-5 w-8 h-5 ' />
                </span>
                <p className='font-[395] md:text-[15px] text-[13px]'>Develop creativity, confidence, and problem-solving skills</p>
              </div>
              <div className='flex flex-row gap-3'>
                <span>
                  <img src={checkmark} alt='icon' className='md:w-5 md:h-5 w-7 h-5 ' />
                </span>
                <p className='font-[395] md:text-[15px] text-[13px]'>Be mentored by expert designers and developers</p>
              </div>
              <div className='flex flex-row gap-3'>
                <span>
                  <img src={checkmark} alt='icon' className='md:w-5 md:h-5 w-6.5 h-5 ' />
                </span>
                <p className='font-[395] md:text-[15px] text-[13px]'>Join a community of Africa's future innovators</p>
              </div>
            </div>
        </div>
        {/* Fee */}
        <div className='flex items-center justify-center mt-10'>
          <p className='bg-[#A55AFF] text-white py-2 md:px-15 px-10  rounded-lg md:text-[15px] text-[13px] font-[420]'>FEE: N250,000</p>
        </div>
    </div>
  </section>

{/* Program Benefits */}
<section className='bg-[#F7E3E3] w-full font-poppins'>
  <div className='flex flex-col md:max-w-6xl mx-auto md:px-0 px-5 py-10'>
    <div className='md:max-w-4xl mx-auto'>
      <h3 className='font-[420] md:text-[26px] text-[22px] text-center'>Program Benefits</h3>
      <p className='font-[395] md:text-[15px] text-[13px] text-center'>Everything your teen needs to thrive  included at no extra cost!
At Zeplus Academy, we believe every young African deserves access to the best tools, mentors, and resources to succeed in tech.</p>
</div>
{/* Grid */}
<div className='grid md:grid-cols-3 gap-5 grid-cols-1 mt-10 '>
  {/* grid 1 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Interactive Live Classes</p>
  </div>
  {/* grid 2 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Structured, Comprehensive Curriculum</p>
  </div>
  {/* grid 3 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Daily Homework Help</p>
  </div>
  {/* grid 4 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Hands-on, Project-Based Learning</p>
  </div>
  {/* grid 5 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>1-on-1 Office Hours (Advanced Courses)</p>
  </div>
  {/* grid 6 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Downloadable Class Slides</p>
  </div>
  {/* grid 7 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Video Recordings of Every Class</p>
  </div>
  {/* grid 8 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Weekly Progress Reports</p>
  </div>
  {/* grid 9 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Certified, Experienced Instructors</p>
  </div>
  {/* grid 10 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>24/7 Access to Our Learning Platform</p>
  </div>
  {/* grid 11 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>Supportive Student Community</p>
  </div>
  {/* grid 12 */}
  <div className='flex flex-row gap-4 '>
    <span>
     <img src={checkmate} alt='icon' className='w-5 h-5 ' />
    </span>
    <p className='font-[395] md:text-[15px] text-[13px]'>2-Session Money-Back Guarantee</p>
  </div>
</div>
  </div>
</section>


{/* Student Experiences */}
<section className='bg-gradient-to-r from-[#AE6AF8] to-[#EBADF1] w-full font-poppins'>
 <div className='md:max-w-6xl mx-auto md:px-0 px-5 py-10 flex flex-col gap-5 items-center justify-center'>
  <h3 className='font-[420] md:text-[26px] text-[22px] text-white'>Your Student Will Experience</h3>
<div className='flex flex-col md:flex-row gap-10'>
  {/* Left */}
  <div className='flex flex-col gap-7 md:max-w-[600px]'>
    {/* item 1 */}
    <div className='flex-row flex gap-3 bg-white p-4'>
      <span>
        <img src={streaming} alt='icon' className='w-10 h-10 ' />
      </span>
      <div className='flex flex-col gap-1'>
        <h3 className='font-[420] md:text-[15px] text-[13px]'>3 Hours of Live Instruction</h3>
        <p className='text-[12px] md:text-[14px] font-[380]'>Weekly interactive sessions with expert instructors</p>
      </div>
    </div>
    {/* item 2 */}
     <div className='flex-row flex gap-3 bg-white p-4'>
      <span>
        <img src={todo} alt='icon' className='w-10 h-10 ' />
      </span>
      <div className='flex flex-col gap-1'>
        <h3 className='font-[420] md:text-[15px] text-[13px]'>2 Total Projects</h3>
        <p className='text-[12px] md:text-[14px] font-[380]'>4 class projects + 8 homework projects to build your portfolio</p>
      </div>
    </div>
    {/* item 3 */}
     <div className='flex-row flex gap-3 bg-white p-4'>
      <span>
        <img src={code1} alt='icon' className='w-10 h-10 ' />
      </span>
      <div className='flex flex-col gap-1'>
        <h3 className='font-[420] md:text-[15px] text-[13px]'>Development Environment</h3>
        <p className='text-[12px] md:text-[14px] font-[380]'>Fully unlocked tools and platforms for hands-on learning</p>
      </div>
    </div>
    {/* item 4 */}
     <div className='flex-row flex gap-3 bg-white p-4'>
      <span>
        <img src={grad} alt='icon' className='w-10 h-10 ' />
      </span>
      <div className='flex flex-col gap-1'>
        <h3 className='font-[420] md:text-[15px] text-[13px]'>Beyond-Classroom Support</h3>
        <p className='text-[12px] md:text-[14px] font-[380]'>Including live homework help and mentorship</p>
      </div>
    </div>
  </div>
  {/* Right */}
  <div className='flex flex-col gap-4 md:max-w-[500px]'>
    {/* image */}
    <div>
      <img src={teenheroImage2} alt='alumni' className='w-full md:h-auto h-auto object-cover rounded-lg border-3 border-white' />
    </div>
    {/* text */}
   <button
    type='button'
    onClick={scrollToApply}
    className='w-full flex flex-row gap-3 items-center justify-center bg-[#9533FC] p-4 cursor-pointer rounded'
    aria-label='Enroll Your Teen Today - scroll to apply form'
   >
     <p className='text-[13px] md:text-[15px] font-[395] text-white '>Enroll Your Teen Today </p>
     <span>
       <img src={arrow} alt='icon' className='w-5 h-5 invert' />
     </span>
   </button>
  </div>
</div>
 </div>
</section>



{/* Partner */}
<section className='w-full bg-[#EEE8DF] font-poppins'>
 <div className='py-15 md:px-0 px-5 md:max-w-6xl mx-auto flex flex-col gap-3'>
    <div className='md:max-w-2xl mx-auto'>
   <h3 className='font-[420] md:text-[26px] text-[22px] text-center'>Partner With Zeplus Academy  Empower Your Students in Tech</h3>
   <p className='text-center text-[13px] md:text-[15px] font-[380] '>Are you a Junior or Senior Secondary School passionate about giving
     your students an edge in digital skills? Partner with Zeplus Academy to bring our "Tech for Teens" program directly to your school.</p>
     </div>
     {/*  grid */}
     <div className='flex flex-col md:flex-row gap-10 mt-10 items-center justify-center'>
        {/* left */}
        <div className='md:max-w-[600px] flex flex-col gap-4 '>
          <h3 className='font-[420] md:text-[22px] text-[20px] text-center mb-2'>We offer:</h3>
          {/* grid 1 */}
          <div className='flex flex-row gap-3'>
            <span>
              <img src={offer1} alt='icon' className='w-5 h-5 ' />
            </span>
            <p className='text-[14px] md:text-[16px] font-[380]'>Custom partnership packages for school clubs or weekend sessions</p>
          </div>
          {/* grid 2 */}
          <div className='flex flex-row gap-3'>
            <span>
              <img src={offer2} alt='icon' className='w-5 h-5 ' />
            </span>
            <p className='text-[14px] md:text-[16px] font-[380]'>Expert Zeplus-certified instructors</p>
          </div>
          {/* grid 3 */}
          <div className='flex flex-row gap-3'>
            <span>
              <img src={offer3} alt='icon' className='w-5 h-5 ' />
            </span>
            <p className='text-[14px] md:text-[16px] font-[380]'>Flexible on-site or online learning options</p>
          </div>
          {/* grid 4 */}
          <div className='flex flex-row gap-3'>
            <span>
              <img src={offer4} alt='icon' className='w-5 h-5 ' />
            </span>
            <p className='text-[14px] md:text-[16px] font-[380]'>Student progress reports and certifications</p>
          </div>
          {/* grid 5 */}
          <div className='flex flex-row gap-3'>
            <span>
              <img src={offer5} alt='icon' className='w-5 h-5 ' />
            </span>
            <p className='text-[14px] md:text-[16px] font-[380]'>Opportunities for school-wide innovation challenges and exhibitions</p>
          </div>
          <Link
            to='/becomepartner'
            className='mt-4 flex flex-row gap-2 items-center justify-center bg-[#8F2436] px-5 py-2 cursor-pointer rounded-full w-45'
            aria-label='Partner with us'
          >
            <p className='text-white text-[13px] md:text-[15px] font-[390]'>Partner with us</p>
            <span>
              <img src={arrow} alt='icon' className='w-4 h-4 invert' />
            </span>
          </Link>
        <p className=' text-[13px] md:text-[15px] font-[380]'>Let's equip your students for a tech-driven future together</p>
        </div>
        {/* right */}
        <div className='md:max-w-[500px] md:mt-10'>
          <img src={partnerwithus} alt='partner' className='w-full md:h-auto h-auto object-cover rounded-lg' />
        </div>
     </div>
 </div>
</section>
       


  {/* Testimonials */}
  <section className='w-full mt-10 bg-[#F7E1E1F2]'>
    <div className='md:max-w-6xl mx-auto flex flex-col px-5 md:px-0 py-10'>
      <h3 className='font-[420] md:text-[26px] text-[22px] text-center mb-10'>What Parents & Students Are Saying</h3>
      {/* testimonials image */}
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='relative w-full'>
          <img src={teentests} alt='testimonials' className='w-full max-h-[400px] object-cover rounded-lg' />
          <div className='absolute inset-0 bg-gradient-to-br from-[#60070B]/40 to-[#9C0E76]/40 rounded-lg'></div>
          {/* Video Play Icon */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-white/90 hover:bg-white rounded-full p-6 cursor-pointer transition-all duration-300 shadow-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12 text-[#60070B]' viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* image grid */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
          {/* grid 1 */}
          <div className='relative group cursor-pointer overflow-hidden rounded-lg md:mt-'>
            <img src={test1} alt='testimonial' className='w-full h-[280px] object-cover rounded-lg ' />
            <div className='absolute inset-0  flex flex-col justify-end p-6'>
              <h4 className='text-white font-[500] md:text-[15px] text-[15px] '>Bright</h4>
              <p className='text-white/90 font-[395] md:text-[14px] text-[12px]'>Full stack Dev, Nigeria</p>
            </div>
          </div>
          {/* grid 2 */}
          <div className='relative group cursor-pointer overflow-hidden rounded-lg'>
            <img src={test2} alt='testimonial' className='w-full h-[280px] object-cover rounded-lg ' />
            <div className='absolute inset-0  flex flex-col justify-end p-6'>
              <h4 className='text-white font-[500] md:text-[15px] text-[15px] '>Mosope</h4>
              <p className='text-white/90 font-[395] md:text-[14px] text-[12px]'>Product Designer, United King</p>
            </div>
          </div>
          {/* grid 3 */}
          <div className='relative group cursor-pointer overflow-hidden rounded-lg md:mt-'>
            <img src={test3} alt='testimonial' className='w-full h-[280px] object-cover rounded-lg ' />
            <div className='absolute inset-0   flex flex-col justify-end p-6'>
              <h4 className='text-white font-[500] md:text-[15px] text-[15px] '>Rebeeca</h4>
              <p className='text-white/90 font-[395] md:text-[14px] text-[12px]'>Product Designer, Nigeri</p>
            </div>
          </div>
        </div>
      </div>
      {/* Alumni section */}
      <div className='pt-20 grid md:grid-cols-3 grid-cols-1 gap-10'>
        {/* grid 1 */}
        <div className='bg-white rounded-lg py-10 px-6 flex flex-col gap-3'>
          <div className='flex flex-row gap-4'>
            <img src={alumni1} alt='image' className='w-12 h-12 rounded-full object-cover ' />
            <div className='flex flex-col '>
              <h3 className='font-[420] text-[14px] md:text-[16px]'>Mrs. Adeola O.</h3>
              <p className='text-[13px] md:text-[15px] font-[400]'>Head of ICT, Bright Future Secondary School</p>
            </div>
          </div>
          <p className='text-[13px] md:text-[15px] font-[380]'>“Our students are now developing their own AI projects — it’s amazing to see the transformation.”</p>
        </div>
        {/* grid 2 */}
         <div className='bg-white rounded-lg py-10 px-6 flex flex-col gap-3'>
          <div className='flex flex-row gap-4'>
            <img src={alumni2} alt='image' className='w-12 h-12 rounded-full object-cover ' />
            <div className='flex flex-col '>
              <h3 className='font-[420] text-[14px] md:text-[16px]'> Mrs. Ifeoma</h3>
              <p className='text-[13px] md:text-[15px] font-[400]'>Parent of AI for Teens Studenter, Alumni</p>
            </div>
          </div>
          <p className='text-[13px] md:text-[15px] font-[380]'>“Zeplus Academy has given my teen the confidence to pursue a career in tech. She’s already started building her own app!”</p>
        </div>
        {/* grid 3 */}
         <div className='bg-white rounded-lg py-10 px-6 flex flex-col gap-3'>
          <div className='flex flex-row gap-4'>
            <img src={alumni3} alt='image' className='w-12 h-12 rounded-full object-cover ' />
            <div className='flex flex-col '>
              <h3 className='font-[420] text-[14px] md:text-[16px]'>Mrs. Adenike</h3>
              <p className='text-[13px] md:text-[15px] font-[400]'>Vice Principal</p>
            </div>
          </div>
          <p className='text-[13px] md:text-[15px] font-[380]'>“The improvement in our students’ confidence and technical ability is remarkable. Zeplus Academy makes AI simple, exciting, and practical. We’ll definitely continue this partnership.” </p>
        </div>
      </div>
    </div>

{/* Apply Now Section */}
    <section id='apply-now' className='w-full bg-[#8F2436] mt-20'>
            <div className='md:max-w-[1300px] mx-auto md:px-0 px-5 md:py-10 py-10'>
          <div className='flex flex-col md:flex-row gap-6 text-white items-center justify-center'>
                {/* Left */}
                 <div className='flex flex-col md:max-w-[750px] gap-6'>
                  <div className='md:max-w-[500px]'>
                    <h2 className='text-[20px] md:text-[32px] font-[500]'>At Zeplus Academy, we inspire young minds to explore, create, and lead with technology.</h2>
                  </div>
                  <div className='md:max-w-[500px]'>
                    <h2 className='text-[15px] font-[400]'>Our goal is to equip teens with future  ready Tech and AI skills through hands on learning 
                      that blends creativity, innovation, and problem solving. </h2>
                  </div>
                  <div>
                    <p className='md:text-[17px] text-[14px] font-[400]'>We don’t just teach tech  we nurture young innovators ready to shape Africa’s digital future.</p>
                  </div>
                 </div>
                  {/* Right */}
                 <div className=' bg-[#C491C0] rounded-xl w-full md:max-w-[700px]' >
                   <div className='flex flex-col  justify-center p-5'>
                     <h2 className='text-[23px] md:text-[32px] text-black'>Ready to launch your career?</h2>
                     {/* Form fields */}
                     <form onSubmit={handleSubmit} className='flex flex-col md:gap-5 gap-5 mt-10 md:mb-20 mb-10  md:max-w-[500px] mx-auto'>
                      <input type='hidden' name='course' value='Tech4teen' />
                         <div className='flex md:flex-row flex-col md:gap-2 gap-5'>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>First Name *</label>
                            <input name='firstName' type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                   <label className='font-[400]'>Last Name *</label>
                            <input name='lastName' type='text' className='border border-gray-300 p-2 rounded-md' />
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Email *</label>
                            <input name='email' type='text' className='border border-gray-300 p-2 rounded-md' />
                         </div>

                         <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>Phone*</label>
                            <input name='phone' type='tel' className='border border-gray-300 p-2 rounded-md' />
                         </div>
                          
                          <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>What Course would you like to learn? *</label>
                              <select name='courseSelection' className='border border-gray-300 p-2 rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300' >
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
                              <label className='font-[400]'>Hybrid *</label>
                            <select name='hybrid' className='border border-gray-300 p-2 font-[380] rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-300'>
                                <option value=''>Select an option</option>
                                <option value='In-Person'>In-Person</option>
                                <option value='Online'>Online</option>                                 
                            </select>
                        </div>
                        <button type='submit' className='bg-black text-white py-2.5  font-[380] rounded-md md:mb-20 mb-10 w-40 md:text-[15px] text-[14px]'>Submit</button>
                     </form>
                    
                      
                   </div>
                 </div>

          </div>


            </div>



        </section>

         {/* GOT QUESTIONS? */}
         <section className=' px-6 py-16 bg-[#FEF2F2]'>
            <div className='md:max-w-7xl mx-auto'>
           <div className='text-center mb-8'>
             <h2 className='text-[32px] md:text-[40px] font-[700]'>Got Questions? We're Here to Help!</h2>
             <p className='text-[15px] text-gray-600 mt-2'>Get quick answers to what parents often ask:</p>
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
                     <span className='font-[400] md:text-[15px] text-[13px] '>{item.q}</span>
                     <span className='text-[#7C1042] font-[390] text-ssm'>{open ? '−' : '+'}</span>
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
                        className='text-[13px] text-gray-700 font-[390]'
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                     </div>
                   )}
                 </div>
               )
             })}
           </div>
           <div className='flex flex-col gap-2 pt-10 items-center justify-center'>
                <h2 className='text-[32px] md:text-[40px] font-[700]'>Still Have Questions?</h2>
                <p className='md:text-[15px] text-[13px] text-gray-600'>We’re happy to help!</p>

                {/* Send Us a messaage */}
                <div className='bg-[#8F2436] p-10 md:p-20 rounded-lg mt-5'>
                  <div className='flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center'>
                    <div className='flex-1 md:pr-5 md:border-r md:border-white'>
                      <h3 className='text-[12px] md:text-[15px] text-white'>end us a message at info@zeplusacademy.com 
                           or chat with a Zeplus Advisor for instant guidance.</h3>
                       </div>
                       <div className='flex flex-row gap-5'>
                        <p className='md:text-[15px] text-[13px] text-white bg-[#5E0BD1] py-2.5 px-5 rounded'>Talk to Us</p>
                         <p className='md:text-[14px] text-[13px] bg-white text-[#5E0BD1] py-2.5 px-5 rounded '>Explore Course</p>
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

export default Tech4teen