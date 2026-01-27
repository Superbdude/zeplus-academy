import hero1 from '../assets/images/teenage1.png'
import hero2 from '../assets/images/teenage2.png'
import hero3 from '../assets/images/teenage4.png'

import  { useState, useEffect } from 'react'
import { saveSubmission } from '../utils/storage'
import teentests from '../assets/courses/testimonialteen.png'
import alumni1 from '../assets/img/alumni.png'
import alumni2 from '../assets/img/alumni2.png'
import alumni3 from '../assets/img/alumni3.png'
import vector1 from '../assets/courses/Vector1.png'
import vector2 from '../assets/courses/Vector2.png'
import vector3 from '../assets/courses/Vector3.png'
import vector4 from '../assets/courses/Vector4.png'
import vector5 from '../assets/courses/Vector5.png'
import vector6 from '../assets/courses/Vector6.png'
import markv from '../assets/courses/markv.png'



const Schoolpartner = () => {
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
      const [schoolName, setSchoolName] = useState('')
      const [schoolType, setSchoolType] = useState('')
      const [address, setAddress] = useState('')
      const [contactPerson, setContactPerson] = useState('')
      const [emailAddr, setEmailAddr] = useState('')
      const [phoneNumber, setPhoneNumber] = useState('')
      const [numStudents, setNumStudents] = useState('')
      const [learningMode, setLearningMode] = useState('')
      const [schedule, setSchedule] = useState('')
      const [startDate, setStartDate] = useState('')
      const [comments, setComments] = useState('')
  
      

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
      a: "es! We’re open to partnerships with schools to help train their students in Tech and AI. Schools can contact us directly to discuss collaboration."
    },
    {
        q: "What if my teen doesn’t enjoy the program? ✅",
        a: " We’re confident your teen will love Zeplus Academy. But if after the first four sessions you’re not satisfied, we offer a 100% Satisfaction Guarantee — full refund"
    },
    
  ]
  // No parallax: hero image remains fixed in position when swapping images
  return (
    <section className='w-full font-poppins'>
    <section
        className='w-full font-poppins bg-[#f4ecff]' >
        <div className='md:py-35 py-7 md:max-w-8xl mx-auto'>
              <div className='flex flex-col md:flex-row gap-10 items-center justify-between md:px-40 px-6'>
                    {/* Left side */}
                    <div className='flex flex-col md:max-w-[800px]'>
                        <div className='md:max-w-[650px] mb-5'>
                            <h1 className='md:text-[55px] text-[30px] font-[750] text-[#301D20] [font-family:Playfair_Display,serif] leading-tight md:leading-[1.05] tracking-tight md:max-w-[550px] max-w-full break-words text-left'>Empower Your Students with Future Ready Tech Skills</h1>
                        </div>
                        <div className='md:max-w-[550px]'>
                        <p className='font-[390] md:text-[16px] text-[15px]'>Partner with Zeplus Academy to equip your students (ages 11–20) with coding,
                             AI, and digital innovation skills that prepare them for the future.</p>
                            </div>
                        <div className='md:max-w-[700px] flex flex-col gap-3 mt-3'>
                                
                         <div className='flex md:flex-row flex-col gap-3 mt-2'>
                         <button type='button' onClick={scrollToApply} className='font-[400] text-white flex flex-row gap-2.5 md:text-[16px] text-[13px] items-center justify-center cursor-pointer bg-[#60070B] md:px-15 md:px-5 px-3 md:py-4  py-2.5 rounded-xl ' >
                                      Enroll Your School
                             </button>
                             <button type='button' onClick={scrollToApply} className='text-center cursor-pointer text-[#60070B] border-2 border-[#60070B] md:text-[16px] text-[13px] md:px-20 md:py-4 py-2.5 md:px-5 px-4 font-[420] rounded-xl'>
                                      Book a Call
                           </button>
                      </div>

                             <p className=' text-[13px] md:text-[15px] font-[300] mt-5'>Trusted by 100+ parents  and schools across Nigeria</p>

                        </div>
                    </div>
                    {/* Right side */}
                     {/* Right: image */}
          <div className='flex-1 flex items-center justify-center relative md:max-w-[600px]'>
          <div className="relative flex items-center justify-center w-full h-full ">
            <img
              src={images[current]}
              alt={`hero ${current + 1}`}
              className="rounded-lg h-76 w-86 md:h-auto md:w-full object-contain transition-all duration-700"
              style={{ zIndex: 2 }}
            />
            
          </div>
     </div>
              </div>
        </div>
      </section>


    {/* Why Zplus section */}
   <section className='w-full bg-white font-poppins'>
       <div className='md:max-w-[1350px] mx-auto md:py-20 py-10 flex flex-col  items-center justify-center md:px-0 px-5'>
               <h3 className='font-[420] md:text-[35px] text-[26px]'>Why Partner with Zeplus</h3>
               <p className='font-[395] md:text-[15px] text-[13px] text-center'>Join Africa's leading tech education platform and give your students the competitive edge they need.</p>
          {/* Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
            {/* grid 1 */}
            <div className='bg-[#F9F6F0] flex flex-col gap-2 items-center justify-center rounded-lg px-6 py-10 md:py-20'>
                <img src={vector1} alt='icon' className='w-8 h-8 bg-[#60070B] p-2 rounded' />
                <h3 className='font-[420] md:text-[15px] text-[13px] text-center'>Structured Curriculum</h3>
                <p className='font-[395] md:text-[15px] text-[13px] text-center'>Aligned with global tech standards for youth.</p>
            </div>
            {/* grid 2 */}
            <div className='bg-[#F9F6F0] flex flex-col gap-2 items-center justify-center rounded-lg px-6 py-10 md:py-20'>
                <img src={vector2} alt='icon' className='w-8 h-8 bg-[#60070B] p-2 rounded' />
                <h3 className='font-[420] md:text-[15px] text-[13px] text-center'>Expert Instructors</h3>
                <p className='font-[395] md:text-[15px] text-[13px] text-center'>Certified facilitators with real-world experience.</p>
            </div>
            {/* grid 3 */}
            <div className='bg-[#F9F6F0] flex flex-col gap-2 items-center justify-center rounded-lg px-6 py-10 md:py-20'>
                <img src={vector3} alt='icon' className='w-8 h-8 bg-[#60070B] p-2 rounded' />
                <h3 className='font-[420] md:text-[15px] text-[13px] text-center'>Flexible Options</h3>
                <p className='font-[395] md:text-[15px] text-[13px] text-center'>Learn at your school, Zeplus campus, or virtually.</p>
            </div>
            {/* grid 4 */}
            <div className='bg-[#F9F6F0] flex flex-col gap-2 items-center justify-center rounded-lg px-6 py-10 md:py-20'>
                <img src={vector4} alt='icon' className='w-8 h-8 bg-[#60070B] p-2 rounded' />
                <h3 className='font-[420] md:text-[15px] text-[13px] text-center'>Hands-On Projects</h3>
                <p className='font-[395] md:text-[15px] text-[13px] text-center'>Students build real-life digital solutions.</p>
            </div>
            {/* grid 5 */}
            <div className='bg-[#F9F6F0] flex flex-col gap-2 items-center justify-center rounded-lg px-6 py-10 md:py-20'>
                <img src={vector5} alt='icon' className='w-8 h-8 bg-[#60070B] p-2 rounded' />
                <h3 className='font-[420] md:text-[15px] text-[13px] text-center'>Future-Ready Certificate</h3>
                <p className='font-[395] md:text-[15px] text-[13px] text-center'>Recognized by Zeplus Academy & partners.</p>
            </div>
            {/* grid 6 */}
            <div className='bg-[#F9F6F0] flex flex-col gap-2 items-center justify-center rounded-lg px-6 py-10 md:py-20'>
                <img src={vector6} alt='icon' className='w-8 h-8 bg-[#60070B] p-2 rounded' />
                <h3 className='font-[420] md:text-[15px] text-[13px] text-center'>Recognition Badge</h3>
                <p className='font-[395] md:text-[15px] text-[13px] text-center'>Showcase your school as a Future-Ready Partner.</p>
            </div>
          </div>
               
       </div>
   </section>




  {/* Explore courses section */}
  <section className='w-full font-poppins bg-[#FFF7E6]'>
 <div className='py-15 md:px-0 px-20 flex flex-col md:max-w-7xl mx-auto items-center justify-center'>
  <h3 className='font-[450] md:text-[28px] text-[24px] text-center'>How It Works</h3>
  <p className='font-[415] md:text-[15px] text-[13px] text-center text-[#686882]'>Simple steps to get your school partnership started</p>

  {/* Grid */}
  <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 md:mt-15'>
    {/* grid 1 */}
    <div className='flex flex-col gap-3 items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center'>
          <h3 className='font-[500] bg-[#60070B] text-white px-8 py-4.5 rounded-full text-[24px]'>1</h3>
          <div className='w-[2px] h-[50px] md:w-[50px] md:h-[2px] bg-[#60070B] mt-0 md:mt-0 md:ml-0'></div>
        </div>
        <h3 className='font-[500] md:text-[20px] text-[18px]'>Register Your School</h3>
        <p className='text-[14px] md:text-[16px] font-[395] text-center text-[#686882]'>Complete our partnership enrollment form with your school details.</p>
    </div>
    {/* grid 2 */}
    <div className='flex flex-col gap-3 items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center'>
          <h3 className='font-[500] bg-[#60070B] text-white px-8 py-5 rounded-full text-[24px]'>2</h3>
          <div className='w-[2px] h-[50px] md:w-[50px] md:h-[2px] bg-[#60070B] mt-0 md:mt-0 md:ml-0'></div>
        </div>
        <h3 className='font-[500] md:text-[20px] text-[18px]'>Get a Partnership Call</h3>
        <p className='text-[14px] md:text-[16px] font-[395] text-center text-[#686882]'>Our team schedules a consultation to discuss your needs and goals.</p>
    </div>
    {/* grid 3 */}
    <div className='flex flex-col gap-3 items-center justify-center'>
        <div className='flex flex-col md:flex-row items-center'>
          <h3 className='font-[500] bg-[#60070B] text-white px-8 py-5 rounded-full text-[24px]'>3</h3>
          <div className='w-[2px] h-[50px] md:w-[50px] md:h-[2px] bg-[#60070B] mt-0 md:mt-0 md:ml-0'></div>
        </div>
        <h3 className='font-[500] md:text-[20px] text-[18px]'>Enroll Students</h3>
        <p className='text-[14px] md:text-[16px] font-[395] text-center text-[#686882]'>Register your students and choose the best learning format for your school.</p>
    </div>
    {/* grid 4 */}
    <div className='flex flex-col gap-3 items-center justify-center'>
          <h3 className='font-[500] bg-[#60070B] text-white px-8 py-5 rounded-full text-[24px]'>4</h3>
        <h3 className='font-[500] md:text-[20px] text-[18px]'>Launch the Program</h3>
        <p className='text-[14px] md:text-[16px] font-[395] text-center text-[#686882]'>Begin transforming your students into confident tech innovators</p>
    </div>
  </div>

 </div>
  </section>

  
{/* Apply form section */}
  <section className='w-full font-poppins bg-gradient-to-r from-[#AE6AF8] to-[#EBADF1]'>
<div className='py-15 md:px-0 px-6 md:max-w-[1450px] mx-auto flex flex-col md:flex-row gap-15 items-center justify-center'>
    {/* Left side */}
    <div className='md:max-w-[500px] flex-col gap-2'>
        <h3 className='font-[700] md:text-[35px] text-[25px]'>Join Africa's Tech Revolution  Start With Your School</h3>
        <p className='font-[395] md:text-[15px] text-[13px] text-[#686882]'>Backed by experienced instructors, proven learning outcomes, and an engaging curriculum tailored for African teens.</p>
        <div className='flex flex-col gap-1 mt-4'>
            <div className='flex flex-row gap-3'>
                <span>
                    <img src={markv} alt='icon' className='w-5 h-5  p-1 rounded-full bg-[#60070B] object-contain' />
                </span>
                <p className='md:text-[15px] text-[13px] font-[400]'>500+ teens trained across Africa</p>
            </div>
            {/* point 2 */}
            <div className='flex flex-row gap-3'>
                <span>
                    <img src={markv} alt='icon' className='w-5 h-5  p-1 rounded-full bg-[#60070B] object-contain' />
                </span>
                <p className='md:text-[15px] text-[13px] font-[400]'>10+ partner schools in 3 states</p>
            </div>
            {/* point 3 */}
            <div className='flex flex-row gap-3'>
                <span>
                    <img src={markv} alt='icon' className='w-5 h-5  p-1 rounded-full bg-[#60070B] object-contain' />
                </span>
                <p className='md:text-[15px] text-[13px] font-[400]'>95% student satisfaction rate</p>
            </div>
        </div>
    </div>
    {/* Right side */}

     <form onSubmit={(e) => {
      e.preventDefault()
      const payload = {
        schoolName,
        schoolType,
        address,
        contactPerson,
        email: emailAddr,
        phone: phoneNumber,
        numStudents,
        learningMode,
        schedule,
        startDate,
        comments,
      }
      try { saveSubmission('schoolpartner', payload) } catch (err) {}
      alert('School submission saved.')
      setSchoolName('')
      setSchoolType('')
      setAddress('')
      setContactPerson('')
      setEmailAddr('')
      setPhoneNumber('')
      setNumStudents('')
      setLearningMode('')
      setSchedule('')
      setStartDate('')
      setComments('')
    }} className="w-full md:max-w-[500px] bg-white rounded-xl p-4 sm:p-6 md:p-10 shadow-lg flex flex-col gap-4 text-[12px] sm:text-[14px] md:text-[14px]" id="apply-now">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">School Name *</label>
      <input value={schoolName} onChange={e => setSchoolName(e.target.value)} type="text" placeholder="Enter school name" className="border border-[#E5E5E5] rounded-md p-2 font-[390] text-[12px] sm:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">School Type *</label>
      <select value={schoolType} onChange={e => setSchoolType(e.target.value)} className="border border-[#E5E5E5] rounded-md p-2 bg-[#D9D9D9] text-[12px] font-[395] md:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]">
        <option value="">Select school type</option>
        <option>Primary</option>
        <option>Junior Secondary</option>
        <option>Senior Secondary</option>
      </select>
    </div>
  </div>

  <div className="flex flex-col w-full">
    <label className="font-[400] md:text-[14px] text-[12px] mb-1">School Address *</label>
    <textarea value={address} onChange={e => setAddress(e.target.value)} placeholder="" className="border border-[#E5E5E5] rounded-md p-2 text-[12px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"></textarea>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">Contact Person *</label>
      <input value={contactPerson} onChange={e => setContactPerson(e.target.value)} type="text" placeholder="Principal/Administrator name" className="border border-[#E5E5E5] rounded-md p-2 text-[12px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">Email Address *</label>
      <input value={emailAddr} onChange={e => setEmailAddr(e.target.value)} type="email" placeholder="school@example.com" className="border border-[#E5E5E5] rounded-md p-2 text-[12px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">Phone Number *</label>
      <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="tel" placeholder="+234 xxx xxx xxxx" className="border border-[#E5E5E5] rounded-md p-2 text-[12px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">Number of Students *</label>
      <select value={numStudents} onChange={e => setNumStudents(e.target.value)} className="border border-[#E5E5E5] rounded-md p-2 bg-[#D9D9D9] text-[12px] md:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]">
        <option value="">Select range</option>
        <option>1-50</option>
        <option>51-100</option>
        <option>101-200</option>
        <option>200+</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">Preferred Learning Mode *</label>
      <select value={learningMode} onChange={e => setLearningMode(e.target.value)} className="border border-[#E5E5E5] rounded-md p-2 bg-[#D9D9D9] text-[12px] font-[395] md:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]">
        <option value="">Select mode</option>
        <option>Onsite</option>
        <option>Virtual</option>
        <option>Hybrid</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label className="font-[400] md:text-[14px] text-[12px] mb-1">Preferred Schedule *</label>
      <select value={schedule} onChange={e => setSchedule(e.target.value)} className="border border-[#E5E5E5] rounded-md p-2 bg-[#D9D9D9] text-[12px] font-[395] md:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]">
        <option value="">Select schedule</option>
        <option>Morning</option>
        <option>Afternoon</option>
        <option>Evening</option>
      </select>
    </div>
  </div>

  <div className="flex flex-col w-full">
    <label className="font-[400] md:text-[14px] text-[12px] mb-1">Preferred Start Date</label>
    <input value={startDate} onChange={e => setStartDate(e.target.value)} type="date" className="border border-[#E5E5E5] rounded-md p-2 text-[12px] md:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]"/>
  </div>

  <div className="flex flex-col w-full">
    <label className="font-[400] md:text-[14px] text-[12px] mb-1">Additional Comments</label>
    <textarea value={comments} onChange={e => setComments(e.target.value)} placeholder="" className="border border-[#E5E5E5] rounded-md p-2 text-[12px] font-[395] md:text-[14px] w-full h-[80px]"></textarea>
  </div>

  <button type="submit" className="bg-[#60070B] text-white font-[400] py-3 mt-4 rounded-md text-[13px] md:text-[15px] w-full">
    Submit School Enrollment
  </button>
</form>
    </div>
   
  </section>


  {/* Testimonials */}
  <section className='w-full  bg-[#EEE8DF]'>
    <div className='md:max-w-6xl mx-auto flex flex-col px-5 md:px-0 py-10 '>
       <div className='flex items-center justify-center'>
        <h3 className='bg-[#8F2436] py-2.5 px-5 rounded-full font-[400] text-[13px] text-white'>TESTIMONIALS</h3>
       </div>
      <h3 className='font-[390] md:text-[40px] text-[25px] text-center '>Partner Impact & Success Stories</h3>
      <p className='font-[415] text-[16px] text-center mb-10'>See how schools across Africa are transforming their students' futures</p>
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
                <h2 className='text-[25px] md:text-[40px] font-[700]'>Still Have Questions?</h2>
                <p className='md:text-[15px] text-[13px] text-gray-600'>We’re happy to help!</p>

                {/* Send Us a messaage */}
                <div className='bg-[#8F2436] p-10 md:p-20 rounded-lg mt-5'>
                  <div className='flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center'>
                    <div className='flex-1 md:pr-5 md:border-r md:border-white'>
                      <h3 className='text-[12px] md:text-[15px] text-white'>end us a message at info@zeplusacademy.com 
                           or chat with a Zeplus Advisor for instant guidance.</h3>
                       </div>
                       <div className='flex flex-row gap-5'>
                        <p className='md:text-[15px] text-[13px] text-white bg-[#AE6AF8] py-2.5 px-5 rounded-xl'>Talk to Us</p>
                         <p className='md:text-[14px] text-[13px] bg-white text-[#AE6AF8] py-2.5 px-5 rounded-xl '>Explore Course</p>
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

export default Schoolpartner