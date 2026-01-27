import { useNavigate } from 'react-router-dom'
import envelope from '../assets/images/velop.png'
import './ThankYou.css'

const ThankYou = () => {
  const navigate = useNavigate()

  return (
    <div className="thank-page font-poppins">
      <div className="thank-card thank-card-full md:py-15 py-10 md:px-30 px-10">
        <button className="thank-close" onClick={() => navigate('/')} aria-label="close">×</button>
        <div className="thank-body">
          <div className="thank-left">
            <img src={envelope} alt="envelope" />
          </div>
          <div className="thank-right">
            <h2 className="thank-title font-[405] md:text-[28px] text-[20px]">Thank you for subscribing to our newsletter!</h2>
            <p className="thank-sub font-[400]">We promise not to spam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
