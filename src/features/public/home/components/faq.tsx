import { ContactForm } from '@/features/public/contact/components/contact-form'

const faq = () => {
  return (
    <>
      <section id='contact'>
        <div className='container py-20'>
          <div className='space-y-2 text-center'>
            <h2 className='text-3xl font-bold lg:text-4xl'>
              Contact{' '}
              <span className='from-accent-foreground to-primary bg-linear-to-r bg-clip-text text-transparent'>
                Me
              </span>
            </h2>
            <p className='text-muted-foreground mx-auto max-w-xl text-lg'>
             Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default faq
