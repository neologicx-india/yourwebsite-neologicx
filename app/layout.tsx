import type { Metadata, Viewport } from 'next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, Phone, MapPin, Mail, MessageCircle } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
export const metadata: Metadata = {
  metadataBase: new URL('https://yourwebsite.neologicx.com'),
  title: {
    template: '%s',
    default: 'Neologicx | Custom Software & Product Engineering Company',
  },
  description: 'Custom software and product engineering for web, mobile, SaaS, business systems, e-commerce and integrations.',
  authors: [{ name: 'Neologicx Resources India Pvt Ltd' }],
  icons: {
    icon: '/icon.ico',
    apple: '/icon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}



const Footer = () => (
  <footer className="bg-[#080d1a] text-white pt-16 pb-8 relative overflow-hidden font-sans">
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Container Box */}
      <div className="border border-white/10 rounded-2xl p-8 md:p-12 bg-white/5 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 shadow-2xl">

        {/* Left Column - Brand */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <Link href="/" className="flex items-center mb-6">
            <Image src="/neo_logo.png" alt="Neologicx Logo" width={160} height={45} className="h-10 w-auto object-contain brightness-0 invert" />
          </Link>
          <h3 className="text-2xl font-bold mb-4 leading-snug tracking-tight">Helping Indian businesses grow online</h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-md mb-8 font-medium">
            One free consultation. No jargon. No obligation. Just clarity on what your digital presence needs to actually work for your business.
          </p>
          <div className="w-10 h-[1px] bg-white/20 mb-8"></div>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IeIsn89ZwrzAlQV0dnwjgUe7ZbIphty-0fC8xEzR2MOWpk3P4_lfCMyzKUU-EsGYuec7Zxqaf" target='blank' className="btn-gradient inline-flex items-center gap-2">
            <CalendarDays className="w-4 h-4" /> Free Consultation
          </Link>
        </div>

        {/* Middle Column - Links */}
        <div className="lg:col-span-3 lg:col-start-7 pt-2">
          <h4 className="font-bold text-base mb-6 tracking-wide">Useful links</h4>
          <nav className="flex flex-col gap-3.5 font-medium text-white/70 text-xs">
            <Link href="/#reality" className="hover:text-primary transition-colors inline-block w-max">Reality Check</Link>
            <Link href="/#who" className="hover:text-primary transition-colors inline-block w-max">Who is this for</Link>
            <Link href="/#numbers" className="hover:text-primary transition-colors inline-block w-max">Results</Link>
            <Link href="/#pricing" className="hover:text-primary transition-colors inline-block w-max">Pricing</Link>
            <Link href="/#process" className="hover:text-primary transition-colors inline-block w-max">Our Process</Link>
            <Link href="/#faq" className="hover:text-primary transition-colors inline-block w-max">FAQs</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors inline-block w-max">Terms &amp; Conditions</Link>
          </nav>
        </div>

        {/* Right Column - Contact */}
        <div className="lg:col-span-4 lg:col-start-10 pt-2">
          <h4 className="font-bold text-base mb-6 tracking-wide">About Us</h4>
          <div className="flex flex-col gap-4 text-white/70 font-medium text-xs">
            <a href="tel:+919414138694" className="flex items-center gap-4 hover:text-primary transition-colors group">
              <Phone className="w-4 h-4 shrink-0 group-hover:text-primary transition-colors text-white" />
              <span>+91-9414138694</span>
            </a>
            <a href="https://wa.me/919414138620" className="flex items-center gap-4 hover:text-primary transition-colors group">
              <MessageCircle className="w-4 h-4 shrink-0 group-hover:text-primary transition-colors text-white" />
              <span>+91-9414138620</span>
            </a>
            <a href="https://www.google.com/search?sca_esv=6b1a8cb4301dfb0a&rlz=1C1CHZL_enIN1171IN1171&sxsrf=APpeQnsXKJb114B7cFo5U1uK06N4tg6OIA:1782712977475&q=neologicx+address&ludocid=13292057421446950892&sa=X&ved=2ahUKEwje3oiu46uVAxV4SGwGHSluGGUQ6BN6BAg6EAI" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 mt-1 hover:text-primary transition-colors group">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 group-hover:text-primary transition-colors text-white" />
              <span className="leading-relaxed">1st Floor, Ishwar Maya, Old Ginani,<br />Bikaner Fort, Bikaner, Rajasthan 334001</span>
            </a>
            <a href="mailto:support@neologicx.com" className="flex items-center gap-4 hover:text-primary transition-colors group mt-1">
              <Mail className="w-4 h-4 shrink-0 group-hover:text-primary transition-colors text-white" />
              <span>support@neologicx.com</span>
            </a>
          </div>

          <div className="flex gap-3 mt-8">
            <a href="https://www.facebook.com/neologicxindia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/neologicx-resources-india-pvt-ltd-/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/neologicx.india/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-xs font-medium text-white/40 tracking-wide">
        © {new Date().getFullYear()} <Link href="https://neologicx.com/" target="_blank" className="hover:text-primary transition-colors">Neologicx</Link>. All rights reserved.
      </div>
    </div>
  </footer>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col pt-16" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
