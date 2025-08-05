import { Link } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'
import Img3 from '@/assets/Akshayimages/selfi.jpg'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { LightBulbIcon } from '@/components/icons'
import Image from '@/components/image'
import heroBg from '/src/assets/hero-bg.avif'

export const Hero = () => {
  return (
    <section
      className='-mt-14'
      style={{
        // backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='dark:bg-background/90 h-full w-full bg-white/80'>
        <div className='container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2'>
          <div className='space-y-6 text-center lg:text-start'>
            <main className='text-3xl font-bold md:text-6xl'>
              <h1 className='inline'>
                <span className='from-accent-foreground to-primary inline bg-linear-to-r bg-clip-text text-transparent'>
                  Akshay Sabale
                </span>{' '}
              </h1>{' '}
              <h2 className='inline'>
                <span className='from-primary to-accent-foreground inline bg-linear-to-r bg-clip-text text-transparent'>
                  Research Assistant
                </span>
              </h2>
            </main>

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

          {/* Hero Card Section */}
          <div className='z-10 flex w-full justify-center'>
            <Link to={'/'}>
              {/* <Card className='group relative h-auto w-[320px] overflow-hidden shadow-black/10 drop-shadow-xl dark:shadow-white/10'> */}
              <div className='flex flex-col items-center gap-4 p-6'>
                {/* Circular Image */}
                <Image
                  src={Img3}
                  className='lg:h-82 lg:w-82 h-62 w-62 rounded-full border-4 border-white object-cover shadow-md'
                />

                {/* Text Below Image */}
                {/* <div className='text-center'>
                  <div className='text-xl font-bold text-white'>
                    Style Guide
                  </div>
                  <div className='mt-1 text-sm text-white/70'>
                    
                    Aug 5, 2025 – 11:00 AM
                  </div> */}
              </div>

              {/* Icon below text */}
              {/* <div className='bg-primary/20 mt-2 rounded-2xl p-2'>
                  <LightBulbIcon className='text-white' />
                </div> */}
              {/* </div> */}
              {/* </Card> */}
            </Link>
          </div>

          {/* Light effect */}
          <div className='light-effect'></div>
        </div>
      </div>
    </section>
  )
}
