import whatsapp from '../assets/courses/whatsapp.png'
// TODO: replace with your real whatsapp number in international format (no + or leading zeros)
const WHATSAPP_NUMBER = '+2348169669110' // example: +234**********
const DEFAULT_MESSAGE = 'Hi, I have a question about your courses.'

export default function WhatsAppBubble() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with one of our advisors on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0.5 no-underline"
    >
      {/* Bubble */}
      <div className="bg-[#1CCF66] text-white rounded-full py-3 px-5 shadow-lg flex items-center text-sm font-poppins max-w-[250px] truncate">
        <span className="truncate ">Let's Talk</span>
      </div>

      {/* WhatsApp round icon */}
      <div className="relative">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          {/* WhatsApp white icon (inline SVG) */}
         <img src={whatsapp} alt="WhatsApp Icon" className="w-8 h-8 invert" />
        </div>

        {/* small decorative pointer triangle to mimic bubble tail (positioned between bubble and icon) */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M0 6c2 2 6 4 10 4 1.333 0 2.667-.222 4-1.333C14 8 16 6 20 6v-2c-4 0-6-2-6-2s-2 2-4 2c-4 0-8 2-10 4z" fill="#F0FFF4" opacity="0.05" />
        </svg>
      </div>
    </a>
  )
}
