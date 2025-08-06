import { Link } from '@tanstack/react-router'
import Img3 from '@/assets/Akshayimages/selfi.jpg'
import { buttonVariants } from '@/components/ui/button'
import Image from '@/components/image'

export const Hero = () => {
  return (
    <section className='relative isolate'>
      {/* Subtle background gradient */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/60 to-transparent dark:from-black dark:via-neutral-900 dark:to-black'></div>

      <div className='container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2'>
        {/* Left Text Content */}
        <div className='space-y-6 text-center lg:text-start'>
          <h1 className='text-3xl font-bold md:text-6xl leading-tight'>
            <span className='inline bg-gradient-to-r from-accent-foreground to-primary bg-clip-text text-transparent'>
              Akshay Sabale
            </span>{' '}
            <br />
            <span className='inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent'>
              Research Assistant
            </span>
          </h1>

          <p className='text-muted-foreground mx-auto text-xl md:w-10/12 lg:mx-0'>
            Indian Institute of Technology, Bombay.
          </p>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <button
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/akshaysable17/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className={`w-full md:w-1/3 ${buttonVariants({ variant: 'outline' })}`}
            >
              Connect me
            </button>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className='flex justify-center'>
          <Link to='/'>
            <div className='relative group'>
              <div className='relative z-10'>
                <Image
                  src={Img3}
                  className='h-60 w-60 md:h-72 md:w-72 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-xl'
                />
              </div>

              {/* Glowing ring effect */}
              <div className='absolute inset-0 z-0 rounded-full blur-2xl opacity-40 group-hover:opacity-90 transition-all duration-500 bg-gradient-to-br from-primary to-accent-foreground'></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
