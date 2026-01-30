import { useState } from 'react'
import { saveSubmission } from '../utils/storage'
import { useNavigate } from 'react-router-dom'
import envelope from '../assets/images/envellop.png'
import './Insider.css'

const Insider = () => {
  // Phone number field for better lead qualification - v3
  const navigate = useNavigate()
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { firstName: first, lastName: last, email, phoneNumber: phone }
    try {
      saveSubmission('insider', payload)
    } catch (err) {
      // ignore
    }
    console.log('subscribe', payload)
    navigate('/insider/thank-you')
  }

  return (
    <div className="insider-page font-poppins">
      <div className="insider-card md:py-30 py-10 px-10">
        <button className="insider-close" onClick={() => navigate(-1)} aria-label="close">×</button>
        <div className="insider-body">
          <div className="insider-left">
            <img src={envelope} alt="envelope" />
          </div>
          <div className="insider-right">
            <h2 className="insider-title md:text-[30px] text-[23px] font-[500]">Become an Insider to</h2>
            <ul className="insider-bullets md:text-[16px] text-[12px] font-[300]">
              <li>Be a part of our journey</li>
              <li>Get early access to insights &amp; opportunities in tech</li>
              <li>Get all the support you need to thrive as a person &amp; as a Techie</li>
            </ul>

            <form className="insider-form flex flex-col gap-5" onSubmit={handleSubmit}>
              <input placeholder="First Name" className='' value={first} onChange={e => setFirst(e.target.value)} />
              <input placeholder="Last Name" value={last} onChange={e => setLast(e.target.value)} />
              <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
              <button
                type="submit"
                className="insider-submit"
                disabled={!first || !last || !email || !phone}
                style={{
                  background: (first && last && email && phone) ? '#8F2436' : '#cfcfcf',
                  cursor: (first && last && email && phone) ? 'pointer' : 'not-allowed',
                  opacity: (first && last && email && phone) ? 1 : 0.7
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insider
