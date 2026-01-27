
const two = '/2.png'
const three = '/3.png'
const five = '/5.png'
import hero1bg from '../assets/img/hero1bg.png'
import { saveSubmission } from '../utils/storage'
import  { useState } from 'react'

interface CurriculumDay {
  icon: string;
  day: string;
  title: string;
  points: string[];
  outcome: string;
}

const AIBootcamp = () => {

      const [schoolName, setSchoolName] = useState('')
      const [schoolAddress, setSchoolAddress] = useState('')
      const [] = useState('')
      const [contactPerson, setContactPerson] = useState('')
      const [emailAddr, setEmailAddr] = useState('')
      const [phoneNumber, setPhoneNumber] = useState('')
      const [numStudents, setNumStudents] = useState('')
      const [learningMode, setLearningMode] = useState('')
      const [] = useState('')
      const [startDate, setStartDate] = useState('')
      const [comments, setComments] = useState('')


     const [openIndex, setOpenIndex] = useState<number | null>(0)
   const [activeDay, setActiveDay] = useState(1);

   const scrollToApply = () => {
    const el = document.getElementById('apply-now')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

const curriculum: Record<number, CurriculumDay> = {
  1: {
    icon: five,
    day: "Day 1",
    title: "Understanding Artificial Intelligence",
    points: [
      "What AI really means (simple, relatable explanations)",
      "Difference between AI, computers, and robots",
      "Myths vs reality of AI",
      "How AI 'learns' using data",
      "AI in phones, social media, banking, and transportation",
      "African-relevant examples (fintech, agriculture, health, education)",
      "Benefits and limitations of AI",
    ],
    outcome:
      "Students can clearly explain AI and recognize its impact in everyday life.",
  },

  2: {
    icon: two,
    day: "Day 2",
    title: "Thinking Like a Computer & Building with AI",
    points: [
      "How computers follow instructions",
      "Basic logic and problem-solving skills",
      "Introduction to coding concepts using visual tools",
      "Design a simple AI-inspired solution",
      "Use guided tools to simulate AI behavior",
      "Apply creativity, logic, and teamwork",
    ],
    outcome:
      "Students develop structured thinking and experience building AI-inspired solutions.",
  },

  3: {
    icon: three,
    day: "Day 3",
    title: "Capstone Presentation & Certification",
    points: [
      "Present their group project",
      "Explain the problem they solved",
      "Demonstrate what they learned about AI",
      "Receive certificates of completion",
    ],
    outcome:
      "Students gain confidence, communication skills, and formal recognition of achievement.",
  },
};



const faqs = [
    {
      q: "Who is this bootcamp for?",
      a: "This bootcamp is designed for junior and senior secondary school students aged 11–18 who want to explore AI in a fun, engaging, and accessible way."
    },
    {
      q: "Do students need prior coding knowledge?",
      // example with bullets — use HTML markup (will be rendered below)
      a: "No, prior coding knowledge is not required. <ul><li>The bootcamp introduces AI concepts from the basics</li><li>Visual tools and guided activities make learning accessible for all students</li></ul>"
    },
    {
      q: "What devices are required?",
      a: "Basic devices such as laptops or tablets are preferred, but students may share devices if needed. A classroom space with basic power supply is required."
    },
    {
      q: "How many students can participate?",
      a: "Group size is flexible and based on your school's capacity. We can accommodate various class sizes to fit your needs."
    },
    {
      q: "Is the content safe and age-appropriate?",
      a: "Yes, the content is designed specifically for teens, ensuring it is safe, structured, and age-appropriate for secondary school students."
    },
    {
      q: "Do students receive certificates?",
      a: "Yes, every participant receives a Zeplus Academy Certificate of Completion upon finishing the bootcamp."
    },
    {
      q: "How is pricing handled?",
      a: "Pricing is handled on a per-school basis. Contact us at info@zeplusacademy.com for a customized quote tailored to your school's requirements."
    },
    

  ]

  return (
    <section className='w-full bg-white font-poppins'>
        {/* section 1 */}
      <section
        className='w-full font-poppins'
        style={{
            backgroundColor: '#f8eee8',
          backgroundImage: `url(${hero1bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
       <div className='md:py-40 py-7 md:max-w-8xl mx-auto'>

         <div className='flex flex-col md:flex-row gap-10  md:gap-15 items-start justify-between md:px-40 px-6 my-10'>
            <div className='flex-1'>
                <div className='flex flex-col gap-4 mb-4'>
                    <p className='bg-[#8F24361A] rounded-4xl py-1 px-3 text-[14px] text-center text-[#8F2436] self-start'>🚀 5-Day AI Bootcamp for Schools</p>
                    <h1 className='text-[30px] md:text-[60px] font-bold leading-tight text-[#301D20] [font-family:Playfair_Display,serif] leading-tight md:leading-[1.05] tracking-tight'>Prepare Your Students for an <span className='text-[#8F2436]'>AI-Powered</span> Future</h1>
                </div>
                <p className='mt-4 text-[14px] md:text-[16px] text-gray-700'>AI Ignite Bootcamp is a 3-day, school-delivered Artificial Intelligence program designed to introduce secondary school students (ages 11–18) to AI concepts, ethical awareness, and hands-on problem-solving — safely, practically, and age-appropriately.</p>
                <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                    <button  className='bg-[#EE5B2B] text-white rounded-xl px-12 py-4 font-[500] md:text-[16px] text-[14px] hover:bg-[#d14a22] transition duration-300' onClick={scrollToApply}>Register Your School</button>
                    <button  className='border-[#8F2436] border-2 rounded-xl px-10 py-4 font-[500] md:text-[16px] text-[14px] text-[#8F2436] hover:bg-[#8F2436] hover:text-white transition duration-300' onClick={scrollToApply}>Request a Bootcamp Visit</button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                    <div className='flex items-center gap-3'>
                        <img src="/svg.png" alt="check" className='w-4 h-4 flex-shrink-0' />
                        <p className='text-[14px] md:text-[14px]'>AI literacy for the next generation</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="/svg.png" alt="check" className='w-4 h-4 shrink-0' />
                        <p className='text-[14px] md:text-[14px]'>No prior coding experience required</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="/svg.png" alt="check" className='w-4 h-4 flex-shrink-0' />
                        <p className='text-[14px] md:text-[14px]'>Certificate awarded to every participant</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="/svg.png" alt="check" className='w-4 h-4 flex-shrink-0' />
                        <p className='text-[14px] md:text-[14px]'>Delivered directly in your school</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="/svg.png" alt="check" className='w-4 h-4 flex-shrink-0' />
                        <p className='text-[14px] md:text-[14px]'>Hands-on learning + capstone project</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="/svg.png" alt="check" className='w-4 h-4 flex-shrink-0' />
                        <p className='text-[14px] md:text-[14px]'>Designed for African classrooms</p>
                    </div>
                </div>
            </div>
            <img src="/overlay.png" alt="overlay" className='w-full md:w-auto max-w-lg' />
         </div>
       </div>
       
      </section>


        {/* section 2 */}
      <section className='bg-[#FBFAF9] py-20'>
        <div className='md:max-w-8xl mx-auto px-6 md:px-25'>
        <div className='text-center mb-4'>
        <p className='text-[#EE5B2B] bg-[#EE5B2B1A] rounded-4xl py-1 px-5 text-[13px] text-center inline-block'>About the Bootcamp</p>
        </div>
        <h1 className='text-[24px] md:text-[40px] font-bold text-center text-[#301D20] [font-family:Playfair_Display,serif]'>What is AI Ignite Bootcamp?</h1>
        <p className="max-w-xl mx-auto text-[14px] md:text-[16px] text-center mb-10 text-[#7E676B] mt-2">
        AI Ignite Bootcamp is a 3-day intensive introduction to Artificial Intelligence created specifically for junior and senior secondary school students. 
        The program focuses on <span className="font-bold text-black">understanding AI</span>, not just using tools.
        </p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
  <div className="bg-white rounded-xl shadow-2xl p-10 w-fit flex flex-col items-center text-center">
    <img src="/Overlay4.png" alt="o" className="mb-2 w-12 h-12" />
    <h3 className="text-[15px] font-semibold mb-2">Understanding AI</h3>
    <p className="max-w-[180px] text-[#7E676B] text-[15px]">
      Not just using tools — students learn how AI works and thinks
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-2xl p-10 w-fit flex flex-col items-center text-center">
    <img src="/Overlay1.png" alt="o" className="mb-2 w-12 h-12" />
    <h3 className="text-[15px] font-semibold mb-2">Onsite Delivery</h3>
    <p className="max-w-[180px] text-[#7E676B] text-[15px]">
      Delivered at your school by trained Zeplus Academy facilitators
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-2xl p-10 w-fit flex flex-col items-center text-center">
    <img src="/Overlay2.png" alt="o" className="mb-2 w-12 h-12" />
    <h3 className="text-[15px] font-semibold mb-2">Critical Thinking</h3>
    <p className="max-w-[180px] text-[#7E676B] text-[15px]">
      Students learn to evaluate technology shaping their future
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-2xl p-10 w-fit flex flex-col items-center text-center">
    <img src="/Overlay3.png" alt="o" className="mb-2 w-12 h-12" />
    <h3 className="text-[15px] font-semibold mb-2">Age-Appropriate</h3>
    <p className="max-w-[180px] text-[#7E676B] text-[15px]">
      Safe, structured content designed specifically for teens
    </p>
  </div>
      </div>

        <div className="bg-[#F9F5F1] p-4 md:max-w-[1350px] mx-auto text-center mt-20">
          <p className="text-[13px] md:text-[15px] text-[#7E676B] max-w-2xl mx-auto">
            Students learn how AI works, where it appears in daily life, and how to think critically and ethically about technology shaping their future. This bootcamp is delivered onsite at partner schools by <span className="font-bold text-black">trained Zeplus Academy facilitators.</span>
          </p>
        </div>
        </div>
      </section>

        {/* section 3 */}
      <section className='bg-[#F9F5F1] py-20'>
        <div className='md:max-w-[1350px] mx-auto px-6'>
            <div className='text-center mb-4'>
            <p className='text-[#8F2436] bg-[#8F24361A] rounded-4xl py-2 px-5 text-[14px] text-center inline-block'>What Students Will Learn</p>
            <h1 className='font-bold md:text-[40px] text-[20px] text-[#301D20] [font-family:Playfair_Display,serif]'>3-Day Curriculum Breakdown</h1>
            <p className='text-[#7E676B] md:text-[15px] text-[14px]'>A structured, engaging journey from AI basics to hands-on project creation</p>
            </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 md:gap-7 mt-6 md:mt-10">
    {[1, 2, 3].map((day) => (
    <button
      key={day}
      onClick={() => setActiveDay(day)}
      className={`flex items-center gap-2 px-5 md:px-10 py-4 rounded-2xl transition-all
        ${
          activeDay === day
            ? "bg-[#8B2D3B] text-white"
            : "bg-white text-[#6B5A5E]"
        }`}
    >
      <span
        className={`w-5 h-5 flex items-center justify-center text-xs rounded-full
          ${
            activeDay === day
              ? "bg-white/20 text-white"
              : "bg-[#F3F0ED]"
          }`}
      >
        {day}
      </span>
      <span className="text-xs md:text-sm font-medium">Day {day}</span>
    </button>
  ))}
</div>
<div className="mt-8 md:mt-16 bg-white rounded-3xl p-4 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-10 justify-center md:max-w-6xl mx-auto">
  {/* LEFT */}
  <div className="flex-1">
    <div className="flex items-start gap-3 mb-2">
      <img src={curriculum[activeDay].icon} alt={`Icon for ${curriculum[activeDay].day}`} className="w-14 h-14" />
      <div>
        <p className="md:text-[15px] text-[14px] text-[#EE5B2B] font-medium">{curriculum[activeDay].day}</p>
        <h2 className="text-[16px] md:text-3xl font-serif font-semibold mb-6">
        {curriculum[activeDay].title}
        </h2>
      </div>
      
    </div>

    <p className="text-[16px] font-medium mb-4">Students explore:</p>

    <ul className="space-y-3">
      {curriculum[activeDay].points.map((point, index) => (
        <li key={index} className="flex items-start gap-5 md:text-[16px] text-[14px] text-[#6B5A5E] ">
          <span className="text-[#F26A3D] mt-1 text-[20px] ">›</span>
          {point}
        </li>
      ))}
    </ul>
  </div>

  {/* RIGHT */}
  <div className="bg-[#FAF7F4] rounded-2xl px-4 pt-4 pb-2 max-w-md w-full md:max-w-md inline-block">
    <p className="text-[16px] font-medium text-[#8B2D3B] mb-2">
      📌 Learning Outcome
    </p>
    <p className="md:text-[19px] text-[15px] font-serif">
      {curriculum[activeDay].outcome}
    </p>
  </div>
</div>
      </section>

      {/* section 4 */}
     <section className="bg-[#FBFAF9] md:py-20 py-10">
  <div className="px-6 md:max-w-[1450px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
      
      {/* LEFT CARD */}
      <div className=" md:p-8 flex flex-col justify-between h-full">
        <div>
          <p className="text-[#EE5B2B] bg-[#EE5B2B1A] rounded-full py-2 px-5 md:text-[15px] text-[13px] inline-block mb-3">
            Capstone Project
          </p>

          <h1 className="font-bold text-[25px] md:text-[40px] mb-3">
            AI for Real-Life Problems
          </h1>

          <p className="text-[#7E676B] md:text-[16px] text-[15px] mb-6">
            Students work in small groups to design a simple AI-inspired solution
            to a real-world problem. This hands-on experience builds collaboration,
            creativity, and problem-solving skills.
          </p>

          <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex gap-3 items-center">
              <img src="/house.png" className="w-6 h-6" />
              <p className="text-[14px]">Smart school attendance ideas</p>
            </div>

            <div className="flex gap-3 items-center">
              <img src="/car.png" className="w-6 h-6" />
              <p className="text-[14px]">AI for road safety awareness</p>
            </div>

            <div className="flex gap-3 items-center">
              <img src="/book.png" className="w-6 h-6" />
              <p className="text-[13px]">AI to support learning or health</p>
            </div>

            <div className="flex gap-3 items-center">
              <img src="/leaf.png" className="w-6 h-6" />
              <p className="text-[14px]">
                AI ideas for agriculture or environment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-[#8F2436] rounded-3xl p-8 text-white flex flex-col justify-between h-full">
        <div>
          <h3 className="md:text-[30px] text-[20px] font-semibold mb-6">
            Important to Know
          </h3>

          <div className="space-y-0.5">
            <div className="flex gap-2 items-center">
              <div className="p-3">
                <img src="/star.png" className="w-10 h-10" />
              </div>
              <p className="md:text-[16px] text-[13px]">No advanced coding required</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="p-3">
                <img src="/bulb.png" className="w-10 h-10" />
              </div>
              <p className="md:text-[16px] text-[13px]">
                Creativity and problem-solving focused
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="p-3">
                <img src="/shield.png" className="w-10 h-10" />
              </div>
              <p className="md:text-[16px] text-[13px]">Safe, age-appropriate tools</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="p-3">
                <img src="/people.png" className="w-10 h-10" />
              </div>
              <p className="md:text-[16px] text-[13px]">Facilitator-guided</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* section 5 */}
<section className="bg-[#F9F5F1] py-16 px-6 lg:px-20 ">
  {/* Subtitle */}
  <div className="text-center mb-4">
  <p className='text-[#8F2436] bg-[#8F24361A] rounded-4xl py-2 px-5 md:text-[15px] text-[13px] text-center inline-block'>Certificates & Learning Outcomes</p>
  </div>

  {/* Main Heading */}
  <h2 className="text-[25px] lg:text-[40px] font-serif font-semibold text-center mb-12 text-[#301D20] [font-family:Playfair_Display,serif]">
    What Students Gain
  </h2>

  {/* Learning Outcomes Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:px-20 px-6 md:max-w-8xl mx-auto">
    <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FDE6E0] md:p-3 py-2.5 px-3.5 rounded-lg">
        {/* Icon placeholder */}
        <img src="/grad.png" alt="Certificate icon" className="md:w-6 md:h-6 w-9 h-8" />
      </div>
      <p className="md:text-[16px] text-[13.5px] font-medium">Zeplus Academy Certificate of Completion</p>
    </div>

    <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FDE6E0] p-3 rounded-lg">
        <img src="/heart.png" alt="AI literacy icon" className="w-6 h-6" />
      </div>
      <p className="md:text-[16px] text-[13.5px] font-medium">Foundational AI literacy</p>
    </div>

    <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FDE6E0] md:p-3 py-3 px-3.5 rounded-lg">
        <img src="/spanner.png" alt="Problem solving icon" className="md:w-6 md:h-6 h-6 w-8" />
      </div>
      <p className="md:text-[16px] text-[13.5px] font-medium">Problem-solving & logical thinking skills</p>
    </div>

    <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FDE6E0] md:p-3 py-3 px-3.5 rounded-lg">
        <img src="/persons.png" alt="Team icon" className="w-6 h-6" />
      </div>
      <p className="md:text-[16px] text-[13.5px] font-medium">Team collaboration experience</p>
    </div>

    <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FDE6E0] md:p-3 py-3 px-3.5 rounded-lg">
        <img src="/mic.png" alt="Presentation icon" className="md:w-6 md:h-6 w-8 h-6" />
      </div>
      <p className="md:text-[16px] text-[13.5px] font-medium">Presentation & communication confidence</p>
    </div>
  </div>

  {/* Certificates Usage Section */}
  <div className="bg-white rounded-xl md:p-15 px-10 py-10 flex flex-col lg:flex-row items-start gap-10 shadow-sm  md:max-w-[1350px] mx-auto">
    {/* Certificate Card */}
    <div className="border-2 rounded-xl md:p-20 p-10 relative flex flex-col items-center justify-center min-w-[200px] bg-white">
      <div className="absolute -top-6 -right-5 bg-[#F26A3D] rounded-full w-14 h-14 flex items-center justify-center">
        <img src="/sta.png" alt="Star icon" className="w-7 h-7" />
      </div>
      <div className="bg-[#FDE6E0] p-4 rounded-full mb-4">
        <img src="/grad.png" alt="Certificate" className="w-10 h-10" />
      </div>
      <p className="md:text-[16px] text-[14px] font-medium text-center">Certificate of Completion</p>
      <p className="text-[15px] font-semibold text-center text-[#8B2D3B] mt-1">
        AI Ignite Bootcamp
      </p>
    </div>

    {/* Usage Info */}
    <div className="flex-1">
      <h3 className="text-[20px] font-semibold mb-4">Certificates can be used for:</h3>
      <ul className="space-y-3 md:text-[16px] text-[13px] text-[#6B5A5E]">
        <li className="flex items-center gap-3">
          <img src="/note.png" alt="School portfolio" className="w-10 h-10" />
          School portfolios
        </li>
        <li className="flex items-center gap-3">
          <img src="/starr.png" alt="Academic records" className="w-10 h-10" />
          Academic enrichment records
        </li>
        <li className="flex items-center gap-3">
          <img src="/bag.png" alt="Future careers" className="w-10 h-10" />
          Early exposure to future tech careers
        </li>
      </ul>
    </div>
  </div>
</section>

{/* section 6 */}
<section className="bg-[#8F2436] py-16 md:py-25 px-6 lg:px-20">
  {/* Subtitle */}
  <div className="text-center mb-4">
  <p className='text-white bg-[#FFFFFF1A] rounded-4xl py-2 px-7 md:text-[14px] text-[13px] text-center inline-block'>Why Schools Partner With Us</p>
  </div>

  {/* Main Heading */}
  <h2 className="text-[20px] lg:text-[40px] font-serif font-semibold text-center mb-3 text-white">
    A Trusted AI Education Partner
  </h2>
  <p className='text-center md:text-[16px] text-[13px] mb-8 text-white'>Schools choose Zeplus Academy because we understand education and technology</p>

  {/* Learning Outcomes Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    <div className="bg-[#FFFFFF1A] rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FFFFFF1A] p-3 rounded-lg">
        {/* Icon placeholder */}
        <img src="/gra.png" alt="Certificate icon" className="w-10 h-10" />
      </div>
      <p className="md:text-[16px] text-[14px] font-medium text-white">Specialize in youth-focused tech education</p>
    </div>

    <div className="bg-[#FFFFFF1A] rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FFFFFF1A] p-3 rounded-lg">
        <img src="/round.png" alt="AI literacy icon" className="md:w-10 md:h-10 w-9 h-8" />
      </div>
      <p className="md:text-[16px] text-[14px] font-medium text-white">Deliver structured, safe, and engaging learning</p>
    </div>

    <div className="bg-[#FFFFFF1A] rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FFFFFF1A] p-3 rounded-lg">
        <img src="/shield.png" alt="Problem solving icon" className="w-10 h-10" />
      </div>
      <p className="md:text-[16px] text-[14px] font-medium text-white">Understand African classroom realities</p>
    </div>

    <div className="bg-[#FFFFFF1A] rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FFFFFF1A] p-3 rounded-lg">
        <img src="/peo.png" alt="Team icon" className="md:w-10 md:h-10 w-9.5 h-7" />
      </div>
      <p className="md:text-[16px] text-[14px] font-medium text-white">Work collaboratively with school administrators and teachers</p>
    </div>

    <div className="bg-[#FFFFFF1A] rounded-xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-[#FFFFFF1A] p-3 rounded-lg">
        <img src="/hand.png" alt="Presentation icon" className="w-10 h-10" />
      </div>
      <p className="md:text-[16px] text-[14px] font-medium text-white">Presentation & communication confidence</p>
    </div>
  </div>

  {/* Certificates Usage Section */}
  <div className="bg-[#FFFFFF0D] rounded-xl p-8 gap-10 shadow-sm flex flex-col items-center">
   

    {/* Usage Info */}
    <div className="items-center flex flex-col gap-2">
        <img src="/svg.png" alt="svg" />
      <h3 className="md:text-lg text-[15px] font-semibold mb-4 text-white">We don't replace your curriculum — <span className='text-[#EE5B2B]'>we enhance it</span>.</h3>
      
    </div>
  </div>
</section>

{/* section 7 */}
<section className="bg-[#FBFAF9] py-20">
      <div className="md:max-w-[1400px] mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#EE5B2B1A] text-[#EE5B2B] text-[14px] px-7 py-2 rounded-full">
            Bootcamp Schedule & Requirements
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-[20px]  md:text-[45px] font-serif font-semibold text-[#2d1e1b] mb-12">
          Delivery Format
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Schedule Overview */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="md:text-[20px] text-[17px] font-serif font-semibold text-[#2d1e1b] mb-6">
              Schedule Overview
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8F24361A] flex items-center justify-center">
                  <img src="/calendar.png" alt="calendar" className='w-7 h-7'/>
                </div>
                <div>
                  <p className="text-[16px] text-[#7E676B] mb-1">Duration</p>
                  <p className="font-medium text-[16px]">3 consecutive days</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8F24361A] flex items-center justify-center">
                  <img src="/loation.png" alt="location" className='w-7 h-7'/>
                </div>
                <div>
                  <p className="text-[16px] text-[#7E676B] mb-1">Format</p>
                  <p className="font-medium text-[16px]">Onsite at school</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8F24361A] flex items-center justify-center">
                  <img src="/clock.png" alt="clock" className='w-7 h-7'/>
                </div>
                <div>
                  <p className="text-[16px] text-[#7E676B] mb-1">Sessions</p>
                  <p className="font-medium text-[16px]">2–3 hours daily</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8F24361A] flex items-center justify-center">
                  <img src="per.png" alt="person" className='w-7 h-7'/>
                </div>
                <div>
                  <p className="text-[16px] text-[#7E676B] mb-1">Group size</p>
                  <p className="font-medium text-[16px]">
                    Flexible (based on school capacity)
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-[#F9F5F1] rounded-2xl shadow-sm p-6">
            <h3 className="text-md font-serif font-semibold text-[#2d1e1b] mb-6">
              Requirements
            </h3>

            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow">
                  <img src="/locaorange.png" alt="clock" className='w-7 h-7'/>
                </div>
                <p className="font-medium text-[16px]">Classroom or hall space</p>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow">
                  <img src="/spark.png" alt="clock" className='w-7 h-7'/>
                </div>
                <p className="font-medium text-[16px]">Basic power supply</p>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow">
                  <img src="/tv.png" alt="clock" className='w-7 h-7'/>
                </div>
                <p className="font-medium text-[16px]">Projector or screen (preferred)</p>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow">
                  <img src="/laptop.png" alt="clock" className='w-7 h-7'/>
                </div>
                <p className="font-medium text-[16px]">Students may share devices if needed</p>
              </li>
            </ul>

            <div className="mt-6 bg-white rounded-xl px-5 py-4 text-[16px] text-gray-500 flex items-center gap-3">
              <img src="/wifi.png" alt="wifi" /> No advanced internet or prior experience required.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* section 8 */}
    <section className="bg-[#fdf9f6] py-20">
      <div className="md:max-w-[1400px] mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#8F24361A] text-[#8F2436] text-[14px] px-7 py-2 rounded-full">
            Testimonials
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center md:text-[45px] text-[25px] font-serif font-[700] text-[#2d1e1b] mb-14 text-[#301D20] [font-family:Playfair_Display,serif]">
          What People Are Saying
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm px-10 py-12">
            <div className="bg-[#8F24361A] text-3xl mb-3 w-14 h-14 flex items-center justify-center rounded-md">
                <img src="/quote.png" alt="quote" className='w-10 h-10'/>
            </div>
            <div className="flex mb-4 text-yellow-400">
              ★★★★★
            </div>
            <p className="text-gray-600 mb-6 text-[15px]">
              "AI Ignite Bootcamp gave our students exposure to technology we
              couldn't offer internally. The delivery was structured,
              engaging, and age-appropriate."
            </p>
            <hr className="mb-4" />
            <p className="font-medium text-[15px]">School Administrator</p>
            <p className="text-[15px] text-gray-500">Partner School</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm px-10 py-12">
            <div className="bg-[#8F24361A] text-3xl mb-3 w-14 h-14 flex items-center justify-center rounded-md">
                <img src="/quote.png" alt="quote" className='w-10 h-10'/>
            </div>
            <div className="flex mb-4 text-yellow-400">
              ★★★★★
            </div>
            <p className="text-gray-600 mb-6 text-[15px]">
              "The facilitators connected AI concepts to real life. Students
              were curious, confident, and excited to learn."
            </p>
            <hr className="mb-4" />
            <p className="font-medium text-[15px]">Teacher</p>
            <p className="text-[15px] text-gray-500">Technology Department</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm px-10 py-12">
            <div className="bg-[#8F24361A] text-3xl mb-3 w-14 h-14 flex items-center justify-center rounded-md">
                <img src="/quote.png" alt="quote" className='w-10 h-10'/>
            </div>
            <div className="flex mb-4 text-yellow-400">
              ★★★★★
            </div>
            <p className="text-gray-600 mb-6 text-[15px]">
              "My child came home explaining AI concepts clearly and
              confidently. This program truly sparked interest in learning."
            </p>
            <hr className="mb-4" />
            <p className="font-medium text-[15px]">Parent</p>
            <p className="text-[15px] text-gray-500">Guardian</p>
          </div>
        </div>
      </div>
    </section>

     {/* GOT QUESTIONS? */}
         <section className=' px-6 md:py-16 py-10 bg-[#FBFAF9]'>
            <div className='md:max-w-7xl mx-auto'>
           <div className='text-center mb-8'>
            <p className='text-[#EE5B2A] w-30 bg-[#FBEAE5] py-2 px-4 text-[13px] mb-3 flex items-center justify-center max-w-[100px] mx-auto rounded-full'>FAQ</p>
             <h2 className='text-[25px] md:text-[50px] font-[700] text-[#301D20] [font-family:Playfair_Display,serif]'>Frequently Asked Questions</h2>
             <p className='md:text-[17px] text-[14px] text-gray-600 mt-2'>Get quick answers to what parents often ask:</p>
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
                     <span className='font-[400] md:text-[16px] text-[15px] '>{item.q}</span>
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
                        className='text-[15px] text-gray-700 font-[390]'
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                     </div>
                   )}
                 </div>
               )
             })}
           </div>
           </div>
         </section>

         {/* form section */}
         {/* Apply form section */}
  <section className='w-full font-poppins bg-[#F9F5F1]'>
<div className='md:py-25 py-10 md:px-0 px-6 md:max-w-[1450px] mx-auto flex flex-col md:flex-row gap-15 items-center justify-center'>
    {/* Left side */}
    <div className='md:max-w-[500px] flex-col gap-2'>
         {/* Badge */}
        <div className="flex justify-left mb-4">
          <span className="bg-[#8F24361A] text-[#8F2436] text-xs px-4 py-1 rounded-full">
            Register Your School
          </span>
        </div>
        <h3 className='font-[700] md:text-[45px] text-[25px]'>Bring AI Ignite Bootcamp to Your School</h3>
        <p className='font-[395] md:text-[16px] text-[14px] text-[#686882]'>Fill out the form and our team will reach out to discuss scheduling, requirements, and pricing details.</p>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='flex flex-row gap-3'>
                <span>
                    <img src="/svg.png" alt='icon' className='w-7 h-7' />
                </span>
                <p className='md:text-[16px] text-[14px] font-[400]'>No commitment required to inquire</p>
            </div>
            {/* point 2 */}
            <div className='flex flex-row gap-3'>
                <span>
                    <img src="/svg.png" alt='icon' className='w-7 h-7' />
                </span>
                <p className='md:text-[16px] text-[14px] font-[400]'>Response within 2 business days</p>
            </div>
            {/* point 3 */}
            <div className='flex flex-row gap-3'>
                <span>
                    <img src="/svg.png" alt='icon' className='w-7 h-7' />
                </span>
                <p className='md:text-[16px] text-[14px] font-[400]'>Flexible scheduling options</p>
            </div>
            {/* point 4 */}
            <div className='flex flex-row gap-3'>
                <span>
                    <img src="/svg.png" alt='icon' className='w-7 h-7' />
                </span>
                <p className='md:text-[16px] text-[14px] font-[400]'>Customizable to your school's needs</p>
            </div>
        </div>
    </div>
    {/* Right side */}

     <form onSubmit={(e) => {
      e.preventDefault()
      const payload = {
        schoolName,
        schoolAddress,
        contactPerson,
        email: emailAddr,
        phone: phoneNumber,
        numStudents,
        startDate,
        facilities: learningMode,
        comments,
        status: 'Unconfirmed',
      }
      try { saveSubmission('aibootcamp', payload) } catch (err) {}
      alert('School submission saved.')
      setSchoolName('')
      setSchoolAddress('')
      setContactPerson('')
      setEmailAddr('')
      setPhoneNumber('')
      setNumStudents('')
      setLearningMode('')
      setStartDate('')
      setComments('')
    }} className="w-full md:max-w-[550px] bg-white md:rounded-xl p-7 md:p-10 shadow-lg flex flex-col gap-6 text-[12px] sm:text-[14px] md:text-[14px]" id="apply-now">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">School Name *</label>
      <input value={schoolName} onChange={e => setSchoolName(e.target.value)} type="text" placeholder="Enter school name" className="border border-[#E5E5E5] rounded-md p-2 font-[390] text-[15px] sm:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
    <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">School Address/Region *</label>
      <input value={schoolAddress} onChange={e => setSchoolAddress(e.target.value)} type="text" placeholder="City, State/Region" className="border border-[#E5E5E5] rounded-md p-2 font-[390] text-[15px] sm:text-[14px] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">Contact Person *</label>
      <input value={contactPerson} onChange={e => setContactPerson(e.target.value)} type="text" placeholder="Name & Role" className="border border-[#E5E5E5] rounded-md p-2 text-[15px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
    <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">Phone Number *</label>
      <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="tel" placeholder="+234 xxx xxx xxxx" className="border border-[#E5E5E5] rounded-md p-2 text-[15px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
  </div>
  <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">Email Address *</label>
      <input value={emailAddr} onChange={e => setEmailAddr(e.target.value)} type="email" placeholder="school@example.com" className="border border-[#E5E5E5] rounded-md p-2 text-[15px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    
    <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">Number of Students *</label>
      <input value={numStudents} onChange={e => setNumStudents(e.target.value)} type="text" placeholder="Estimated Number" className="border border-[#E5E5E5] rounded-md p-2 text-[15px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>

    <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">Preferred Bootcamp Date *</label>
      <input value={startDate} onChange={e => setStartDate(e.target.value)} type="text" placeholder="Month/Term" className="border border-[#E5E5E5] rounded-md p-2 text-[15px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>
  </div>
    
    <div className="flex flex-col">
      <label className="font-[400] md:text-[15px] text-[14px] mb-1">Available Facilities *</label>
      <input value={learningMode} onChange={e => setLearningMode(e.target.value)} type="text" placeholder="eg. Computer Lab, Projector etc." className="border border-[#E5E5E5] rounded-md p-2 text-[15px] md:text-[14px] font-[395] w-full focus:outline-none focus:border-[#E5E5E5]"/>
    </div>

  <div className="flex flex-col w-full">
    <label className="font-[400] md:text-[15px] text-[14px] mb-1">Additional Notes</label>
    <textarea value={comments} onChange={e => setComments(e.target.value)} placeholder="" className="border border-[#E5E5E5] rounded-md p-2 text-[15px] font-[395] md:text-[14px] w-full h-[60px]"></textarea>
  </div>

  <button type="submit" className="bg-[#EE5B2B] text-white font-[400] py-3 mt-4 rounded-md text-[14px] md:text-[16px] w-full">
    Submit School Registration
  </button>
</form>
    </div>
   
  </section>
    </section>
  )
}
export default AIBootcamp
