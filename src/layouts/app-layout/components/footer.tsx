import React from 'react'
import { Phone, Mail, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer id='footer'>
      <hr className='mx-auto w-11/12' />

      <section className='container flex flex-col items-center justify-center gap-4 py-8 text-center md:flex-row md:justify-between md:text-left'>
        <div className='text-muted-foreground flex items-center gap-2 text-lg'>
          <Phone size={20} />
          <span>
            <a href='tel:+918600858026' className='hover:underline'>
              <strong>+91 8600858026</strong>
            </a>
          </span>
        </div>

        <div className='text-muted-foreground flex items-center gap-2 text-lg'>
          <Mail size={20} />
          <span>
            <a
              href='mailto:ableakshay100@gmail.com'
              className='hover:underline'
            >
              <strong>sableakshay100@gmail.com</strong>
            </a>
          </span>
        </div>

        <div className='text-muted-foreground flex items-center gap-2 text-lg'>
          <Linkedin size={20} />
          <a
            href='https://www.linkedin.com/in/akshaysable17/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-accent-foreground hover:underline'
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      <hr className='mx-auto w-11/12' />
    </footer>
  )
}
