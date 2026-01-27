import { useRef } from 'react'
import { saveSubmission } from '../utils/storage'

const Becomepartner = () => {
  const formRef = useRef<HTMLElement | null>(null)
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const fd = new FormData(form)
    const payload = Object.fromEntries(fd.entries())
    try { saveSubmission('becomepartner', payload) } catch (err) {}
    alert('Partnership submission saved.')
    form.reset()
  }
  return (
    <section className='w-full font-poppins'>
      {/* Banner Section */}
      <section className='w-full bg-[#8F2436] text-white py-20 px-5 md:px-20 flex flex-col md:items-center justify-center font-poppins'>
         <h2 className='md:text-[40px] text-[20px] font-[600] '>Partner With Zeplus Academy</h2>
         <p className='md:text-[20px] text-[15px]'>Together, we can equip 100,000 African youth with future-proof skills.</p>
         <div className='flex flex-row gap-4 mt-8'>
          <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='bg-[#FFFFFF] md:px-8 px-5 py-2 rounded-lg text-[#60070B] md:text-[15px] text-[13px]'>Start Partnership</button>
          <button className='text-white bg-transparent border border-white md:px-8 px-5 py-2 rounded-lg md:text-[15px] text-[13px]'>Learn More</button>
         </div>
      </section>

      {/* second section */}
      <section className='bg-[#FAF6F6] w-full py-20 px-5 md:px-20 font-poppins'>
         <div className='md:max-w-[900px] mx-auto flex-col items-center justify-center text-center'>
          <h2 className='md:text-[30px] text-[20px] font-[600]'>Africa is Rising — But the Skills Gap is Widening</h2>
         <p className='md:text-[15px] text-[13px] font-[395] text-[#686882] mt-2 '>Zeplus Academy is bridging that gap by training the next generation of designers, tech professionals, and digital innovators. We collaborate with companies, NGOs, schools, governments, startups, and global organizations 
          to unlock opportunities for young Africans through impact-driven, AI-enhanced digital education.</p>
          <div className='mt-10 md:max-w-[800px] mx-auto border border-[#9C0E76] rounded-lg bg-white p-8 items-center flex text-center'>
            <p className='md:text-[15px] text-[13px] font-[400]'>If your mission aligns with empowerment, innovation, community development, and future workforce readiness, then we're the partner you've been looking for.</p>
          </div>
         </div>
      </section>

      {/* third section */}
      <section className='w-full bg-white py-20 px-5 md:px-20 font-poppins'>
        <div className='md:max-w-6xl mx-auto flex flex-col gap-5 md:gap-10 items-center justify-center '>
          <h2 className='md:text-[30px] text-[20px] font-[600]'>Why Partner With Zeplus Academy?</h2>
          {/* cards-1 */}
          <div className='bg-[#F7E3E3] p-5 md:p-10 flex flex-col gap-3 rounded-lg'>
            <div className='flex flex-row gap-3'>
              <span className='bg-[#60070B] px-4 py-2 rounded-lg'>🎯</span>
              <h3 className='md:text-[15px] text-[13px] font-[600]'>A Proven Pathway to Skill Development</h3>
            </div>
            <div className='md:ml-15 flex flex-col gap-4'>
            <p className='md:text-[15px] text-[13px] font-[395] text-[#686882]'>We train youth in the most in-demand fields using project-based, industry-aligned curricula that prepare them for real work environments.</p>
            {/* grids */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
               {/* Grid Item 1 */}
               <div className='bg-white p-3 flex items-center justify-center rounded-lg'>
                <p className='text-[#60070B] md:text-[15px] text-[13px] font-[400]'>UI/UX Design with AI Skills</p>
               </div>
                {/* Grid Item 2 */}
                <div className='bg-white p-3 flex items-center justify-center rounded-lg'>
                <p className='text-[#60070B] md:text-[15px] text-[13px] font-[400]'>Data Analytics</p>
               </div>
                {/* Grid Item 3 */}
                <div className='bg-white p-3 flex items-center justify-center rounded-lg'>
                <p className='text-[#60070B] md:text-[15px] text-[13px] font-[400]'>Cybersecurity</p>
               </div>
                {/* Grid Item 4 */}
                <div className='bg-white p-3 flex items-center justify-center rounded-lg'>
                <p className='text-[#60070B] md:text-[15px] text-[13px] font-[400]'>Full Stack Development</p>
               </div>
               {/* Grid Item 5 */}
               <div className='bg-white p-3 flex items-center justify-center rounded-lg'>
                <p className='text-[#60070B] md:text-[15px] text-[13px] font-[400]'>Digital Marketing</p>
               </div>
            </div>
            </div>
          </div>
          {/* cards-2 */}
          <div className='bg-[#F7E3E3] p-5 md:p-10 flex flex-col gap-3 rounded-lg'>
            <div className='flex flex-row gap-3'>
              <span className='bg-[#60070B] px-4 py-2 rounded-lg'>🤖</span>
              <h3 className='md:text-[15px] text-[13px] font-[600]'>AI-Augmented Learning for the Future Workforce</h3>
            </div>
            <div className='md:ml-15'>
            <p className='md:text-[15px] text-[13px] font-[395] text-[#686882]'>Our programs integrate AI tools, automation, and smart learning systems, giving learners the competitive edge required in modern tech roles.</p>
            </div>
          </div>
          {/* cards-3 */}
           <div className='bg-[#F7E3E3] p-5 md:p-10 flex flex-col gap-3 rounded-lg'>
            <div className='flex flex-row gap-3'>
              <span className='bg-[#60070B] px-4 py-2 rounded-lg'>🌍</span>
              <h3 className='md:text-[15px] text-[13px] font-[600]'>Community-Centered Impact</h3>
            </div>
            <div className='md:ml-15'>
            <p className='md:text-[15px] text-[13px] font-[395] text-[#686882]'>We are committed to empowering young Africans across Nigeria and beyond — especially underserved communities who need access the most.</p>
            </div>
          </div>
          {/* cards-4 */}
           <div className='bg-[#F7E3E3] p-5 md:p-10 flex flex-col gap-3 rounded-lg'>
            <div className='flex flex-row gap-3'>
              <span className='bg-[#60070B] px-4 py-2 rounded-lg'>📈</span>
              <h3 className='md:text-[15px] text-[13px] font-[600]'>Scalable Training for Organizations</h3>
            </div>
            <div className='md:ml-15'>
            <p className='md:text-[15px] text-[13px] font-[395] text-[#686882]'>Whether you want to train 10 people or 10,000, our blended learning model (online + hybrid) makes it seamless.</p>
            </div>
          </div>
          {/* cards-5 */}
           <div className='bg-[#F7E3E3] p-5 md:p-10 flex flex-col gap-3 rounded-lg'>
            <div className='flex flex-row gap-3'>
              <span className='bg-[#60070B] px-4 py-2 rounded-lg'>👥</span>
              <h3 className='md:text-[15px] text-[13px] font-[600]'>A Talent Pipeline You Can Trust</h3>
            </div>
            <div className='md:ml-15'>
            <p className='md:text-[15px] text-[13px] font-[395] text-[#686882]'>Partners gain access to a steady stream of trained, vetted, job-ready graduates — ideal for internships, junior roles, and community tech programs.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section className='w-full bg-[#FAF6F6] py-20 md:px-20 px-5 font-poppins'>
       <div className='flex flex-col gap-10 md:max-w-5xl mx-auto '>
        <h2 className='flex items-center justify-center md:text-[25px] text-[20px] font-[420]'>Partnership Opportunities</h2>
        {/* lists */}
        <div className='flex flex-col gap-10'>
          {/* item-1 */}
          <div className='bg-white p-10 rounded-lg'>
            <div className='flex flex-row gap-5'>
              <span className='text-xl'>✔</span>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>Corporate Training & Upskilling</h3>            
            </div>
             <p className='text-[13px] md:text-[15px] font-[395] text-[#686882] ml-10'>Equip your team with modern digital skills that boost productivity and innovation.</p>
          </div>
          {/* item-2 */}
          <div className='bg-white p-10 rounded-lg'>
            <div className='flex flex-row gap-5'>
              <span className='text-xl'>✔</span>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>Youth-Focused Empowerment Projects</h3>            
            </div>
             <p className='text-[13px] md:text-[15px] font-[395] text-[#686882] ml-10'>Work with us to deliver community training, scholarships, or government-backed initiatives.</p>
          </div>
          {/* item-3 */}
          <div className='bg-white p-10 rounded-lg'>
            <div className='flex flex-row gap-5'>
              <span className='text-xl'>✔</span>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>Talent Pipeline & Recruitment Partnerships</h3>            
            </div>
             <p className='text-[13px] md:text-[15px] font-[395] text-[#686882] ml-10'>Hire skilled graduates from our academy for internships, apprenticeships, or junior roles.</p>
          </div>
          {/* item-4 */}
          <div className='bg-white p-10 rounded-lg'>
            <div className='flex flex-row gap-5'>
              <span className='text-xl'>✔</span>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>Co-Branded Programs & Bootcamps</h3>            
            </div>
             <p className='text-[13px] md:text-[15px] font-[395] text-[#686882] ml-10'>Run specialized design or tech bootcamps powered by Zeplus Academy's curriculum and facilitators.</p>
          </div>
          {/* item-5 */}
          <div className='bg-white p-10 rounded-lg'>
            <div className='flex flex-row gap-5'>
              <span className='text-xl'>✔</span>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>Sponsor a Student / Scholarship Fund</h3>            
            </div>
             <p className='text-[13px] md:text-[15px] font-[395] text-[#686882] ml-10'>Give deserving young Africans access to quality tech education — fully or partially funded.</p>
          </div>
          {/* item-6 */}
          <div className='bg-white p-10 rounded-lg'>
            <div className='flex flex-row gap-5'>
              <span className='text-xl'>✔</span>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>Institutional & NGO Collaborations</h3>            
            </div>
             <p className='text-[13px] md:text-[15px] font-[395] text-[#686882] ml-10'>Partner with us on educational projects that drive large-scale social impact across Africa.</p>
          </div>
        </div>
       </div>
      </section>
      {/* 4th section */}
      <section className='w-full bg-white py-20 md:px-20 px-5 font-poppins'>
       <div className='flex flex-col gap-10 items-center md:max-w-6xl mx-auto'>
        <h2 className='md:text-[25px] text-[20px] font-[550]'>Who We Work With</h2>
        {/* grids */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
          {/* grid-1 */}
          <div className='flex flex-row gap-3 p-5 bg-[#F7E3E3] rounded-lg items-center'>
            <span className='md:text-2xl text-[13px]'>🏢</span>
            <p className='md:text-[15px] text-[13px] font-[405]'>Technology companies</p>
          </div>
          {/* grid-2 */}
           <div className='flex flex-row gap-3 p-5 bg-[#F7E3E3] rounded-lg items-center'>
            <span className='md:text-2xl text-[13px]'>🚀</span>
            <p className='md:text-[15px] text-[13px] font-[405]'>Startups and innovation hubs</p>
          </div>
          {/* grid-3 */}
           <div className='flex flex-row gap-3 p-5 bg-[#F7E3E3] rounded-lg items-center'>
            <span className='md:text-2xl text-[13px]'>🤝</span>
            <p className='md:text-[15px] text-[13px] font-[405]'>NGOs and non-profits</p>
          </div>
          {/* grid-4 */}
           <div className='flex flex-row gap-3 p-5 bg-[#F7E3E3] rounded-lg items-center'>
            <span className='md:text-2xl text-[13px]'>🏛️</span>
            <p className='md:text-[15px] text-[13px] font-[405]'>Government and public sector programs</p>
          </div>
          {/* grid-5 */}
           <div className='flex flex-row gap-3 p-5 bg-[#F7E3E3] rounded-lg items-center'>
            <span className='md:text-2xl text-[13px]'>🎓</span>
            <p className='md:text-[15px] text-[13px] font-[405]'>Universities, academies, and training institutes</p>
          </div>
          {/* grid-6 */}
           <div className='flex flex-row gap-3 p-5 bg-[#F7E3E3] rounded-lg items-center'>
            <span className='md:text-2xl text-[13px]'>🌍</span>
            <p className='md:text-[15px] text-[13px] font-[405]'>International development bodies</p>
          </div>
        </div>

        <div className='bg-[#FFF7E6] border border-[#F2A807] p-5 flex items-center rounded-lg '>
          <p className='text-[13px] md:text-[15px] font-[405]'>If your goal is skills, jobs, innovation, and impact, we're aligned.</p>
        </div>
       </div>
      </section>
      {/* 5th section */}
      <section className='w-full bg-[#FAF6F6] py-20 md:px-20 px-5 font-poppins'>
      <div className='md:max-w-6xl mx-auto flex flex-col gap-10 '>
        <h2 className='md:text-[25px] text-[20px] font-[550] flex items-center justify-center'>How Partnership Works</h2>
        <div className='flex flex-col gap-6'>
          {/* 1st */}
          <div className='flex flex-row gap-3'>
            <span className='bg-[#60070B] rounded-full px-5.5 py-3 text-white font-[405] flex items-center'>1</span>
            <div className='flex flex-col gap-1'>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>Tell us your goals</h3>
              <p className='md:text-[15px] text-[13px] text-[#686882] font-[395]'>Share your objectives for talent, training, CSR, or community impact.</p>
            </div>
          </div>
          {/* 2 */}
          <div className='flex flex-row gap-3'>
            <span className='bg-[#60070B] rounded-full px-5 py-3 text-white font-[405] flex items-center'>2</span>
            <div className='flex flex-col gap-1'>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>We design a custom solution</h3>
              <p className='md:text-[15px] text-[13px] text-[#686882] font-[395]'>Our team creates a tailored partnership program for your organization.</p>
            </div>
          </div>
          {/* 3 */}
          <div className='flex flex-row gap-3'>
            <span className='bg-[#60070B] rounded-full px-5 py-3 text-white font-[405] flex items-center'>3</span>
            <div className='flex flex-col gap-1'>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>We deploy and execute</h3>
              <p className='md:text-[15px] text-[13px] text-[#686882] font-[395]'>Using our facilitators, LMS, curriculum, and AI tools to deliver results.</p>
            </div>
          </div>
          {/* 4 */}
          <div className='flex flex-row gap-3'>
            <span className='bg-[#60070B] rounded-full px-5 py-3 text-white font-[405] flex items-center'>4</span>
            <div className='flex flex-col gap-1'>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>You track results</h3>
              <p className='md:text-[15px] text-[13px] text-[#686882] font-[395]'>Monitor skills gained, projects completed, talent employed, or community impact.</p>
            </div>
          </div>
          {/* 5 */}
          <div className='flex flex-row gap-3'>
            <span className='bg-[#60070B] rounded-full px-5 py-3 text-white font-[405] flex items-center'>5</span>
            <div className='flex flex-col gap-1'>
              <h3 className='text-[13px] md:text-[15px] font-[420]'>We scale together</h3>
              <p className='md:text-[15px] text-[13px] text-[#686882] font-[395]'>Reach more youth and transform more lives across Africa.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* second to last section */}
      <section className='w-full bg-[#8F2436] text-white py-20 px-5 md:px-20 font-poppins'>
        <div className='md:max-w-6xl mx-auto flex items-center justify-center flex-col gap-5'>
        <h2 className='md:text-[25px] text-[20px] font-[550]'>Let's Build Africa's Future Workforce — Together</h2>
        <p className='text-[13px] md:text-[15px] font-[395]'>Partnering with Zeplus Academy means contributing to a bold mission:</p>
        <p className='md:text-[15px] text-[13px] font-[395]'>Empowering Africa's next generation of designers, developers, analysts, strategists, and innovators.</p>
        <div className='bg-[] p-5 flex items-center'>
          <p className='md:text-[15px] text-[13px] font-[395]'>Your partnership can create real change. Let's make it happen.</p>
        </div>
        <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className='px-6 py-2 text-[#60070B] bg-white md:text-[15px] text-[13px] font-[405] rounded-lg'>Start a Partnership Today</button>
      </div>
      </section>

      {/* last-form section */}
      <section ref={formRef} className='w-full bg-[#FAF6F6] md:py-20 py-10 md:px-20 px-5 font-poppins'>
      <div className='flex flex-col gap-5 md:max-w-6xl mx-auto '>
        <h2 className='md:text-[20px] text-[20px] font-[600]'>Ready to Collaborate?</h2>
        <p className='md:text-[15px] text-[13px] font-[395]'>Let's discuss how we can work together to empower African youth with future-ready skills. Fill out the form and we'll get back to you within 24 hours.</p>

        {/* contact/address-info */}
        <div className='flex flex-col gap-4 '>
          {/* email */}
          <div className='flex flex-row gap-3'>
            <span className='text-xl'>📧</span>
            <p className='md:text-[15px] text-[13px] font-[395]'>partnerships@zeplusacademy.com</p>
          </div>
          {/* cell-phone */}
          <div className='flex flex-row gap-3'>
            <span className='text-xl'>📱</span>
            <p className='md:text-[15px] text-[13px] font-[395]'>+234 816 966 9110</p>
          </div>
          {/* address */}
          <div className='flex flex-row gap-3'>
            <span className='text-xl'>📍</span>
            <p className='md:text-[15px] text-[13px] font-[395]'>Magodo Phase 2, Lagos</p>
          </div>
          {/* website */}
          <div className='flex flex-row gap-3'>
            <span className='text-xl'>🌐</span>
            <p className='md:text-[15px] text-[13px] font-[395]'>www.zeplusacademy.com</p>
          </div>
        </div>
        {/* form */}
        <div className='bg-white p-5 mt-7'>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
           {/* Full Name */}
           <div className='flex flex-col gap-1'>
            <label className='text-[13px] md:text-[15px] font-[400]'>Full Name *</label>
            <input name='fullName' type='text' placeholder='Your full name' className='font-[395] border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
           </div>
           {/* Email */}
           <div className='flex flex-col gap-1'>
            <label className='text-[13px] md:text-[15px] font-[400]'>Email Address *</label>
            <input name='email' type='email' placeholder='Your.email@company.com' className=' font-[395] border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
           </div>
           {/* Company/ organization */}
           <div className='flex flex-col gap-1'>
            <label className='text-[13px] md:text-[15px] font-[400]'>COMPANY/ORGANZATION *</label>
            <input name='company' type='text' placeholder='Your organization name' className=' font-[395] border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300' />
           </div>

           {/* Partnership selection */}
           <div className='flex flex-col gap-2'>
                              <label className='font-[400]'>PARTNERSHIP TYPE *</label>
                              <select name='partnershipType' className=' font-[395] border border-gray-300 p-2 bg-[#D9D9D9] rounded-md text-sm font-[380] focus:outline-none focus:ring focus:ring-gray-300'>
                                   <option>Please Select</option>
                                   <option>Corporate Training & Upskilling</option>
                                   <option>Youth-Focused Empowerment Projects </option>
                                    <option>Talent Pipeline & Recruitment Partnerships</option>
                                     <option>Co-Branded Programs & Bootcamps</option>
                                      <option>Sponsor a Student / Scholarship Fund</option>
                                       <option>Institutional & NGO Collaborations </option>
                                   
                              </select>
                         </div>
            <div className='col-span-1 md:col-span-2 mt-2'>
              <button type='submit' className='bg-[#60070B] text-white w-40 flex items-center justify-center px-5 py-3 md:text-[15px] text-[13px] rounded-lg mt-7'>Submit</button>
            </div>
          </form>
        </div>
       
      </div>
      </section>
    </section>
  )
}

export default Becomepartner