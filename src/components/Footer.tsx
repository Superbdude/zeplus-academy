import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import fb from '../assets/social/fbook.png';
import x from '../assets/social/xx.png';
import instagram from '../assets/social/instagram.png';
import youtube from '../assets/social/youtube.png';

const Footer = () => {
  return (
    <section className='w-full  bg-[#F6F7FD] pt-10 pb-4 px-'>
        <div className='bg-[#301D20] md:px-15 px-10 py-15 md:rounded-lg  flex flex-col gap-2'>
            <div className='grid md:grid-cols-3 grid-col-1 gap-2 md:gap-30  pb-10 border-b-2 border-white'>
            {/* Column 1 */}
            <div className='flex flex-col md:gap-2 gap-2'>
                <img src={logo} alt='logo' className='w-32 h-auto mb-2 invert'/>
                <h3 className='text-white font-[380] md:text-[14px] text-[12px] '>6E Adekunle Banjo Avenue, Magodo Phase , Lagos.</h3>
                <h3 className='text-white font-[380] md:text-[14px] text-[12px] '>+234 816 966 9110</h3>
                <h3 className='text-white font-[380] md:text-[14px] text-[12px] '>Zeplusacademy@gmail.com</h3>
            </div>
            {/* Column 2 */}
            <div className='flex flex-col md:gap-2 gap-2'>
                <h3 className='text-white font-[400] md:text-[14px] text-[12px] '>Courses</h3>
           <Link to='/uidesign'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>UI/UX Design</h3></Link>
           <Link to='/data'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>Data Analytics</h3></Link>
           <Link to='/fullstack'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>Full Stack Development</h3></Link>
           <Link to='/cybersecurity'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>Cybersecurity</h3></Link>
           <Link to='/aimachine'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>AI & Machine Learning</h3></Link>
           <Link to='/digital'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>Digital Marketing</h3></Link>
            </div>

            {/* Column 3 */}
            <div className='flex flex-col md:gap-2 gap-2'>
            <h3 className='text-white font-[400] md:text-[14px] text-[12px] '>Partnerships</h3>
            <Link to='/tech4teen'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>Tech4Teen</h3></Link>
            <Link to='/schoolpartner'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>Become a Partner</h3></Link>
             <Link to='/becomepartner'><h3 className='text-white font-[380] md:text-[14px] text-[12px] '>School Partnership</h3></Link>
            </div>
            </div>
            {/* social media */}
            <div className='flex flex-row mt-6 gap-4'>
             <h3 className='text-white font-[400] md:text-[14px] text-[12px] pr-5 border-r-2 border-white'>Follow us</h3>
             <div className='flex flex-row gap-4'>
                <img src={fb} alt='facebook' className='w-5 h-5  cursor-pointer'/>
                <img src={instagram} alt='instagram' className='w-5 h-5  cursor-pointer'/>
                <img src={x} alt='x' className='w-5 h-5 cursor-pointer'/>
                <img src={youtube} alt='youtube' className='w-5 h-5 cursor-pointer'/>
             </div>
            </div>
        </div>
    </section>
  )
}

export default Footer