import sideImg from '@/assets/Akshayimages/ncairlogo2-removebg-preview.png'
import Image from '@/components/image'

export const About = () => {
  return (
    <section id='about' className='container py-20'>
      <div className='bg-muted/50 rounded-lg border py-12'>
        <div className='flex flex-col-reverse items-center gap-8 px-6 md:flex-row md:gap-12'>
          <div className='shrink-0 sm:w-[400px]'>
            <Image
              src={sideImg}
              alt='About Kumthekar Furniture'
              className='w-full rounded-lg object-contain'
            />
            <div className='-mt-16 rounded-[100%] bg-black/25 p-8 blur-xl dark:bg-white/5'></div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='pb-6'>
              <h2 className='text-3xl font-bold md:text-4xl'>
                <span className='from-accent-foreground to-primary bg-linear-to-r bg-clip-text text-transparent'>
                  Experience
                </span>
              </h2>
              <p className='text-muted-foreground mt-2 text-lg italic'>
                Research Assistant, IIT Bombay —{' '}
                <strong>November 2023 – Present</strong>
              </p>
              <p className='text-muted-foreground mt-4 text-xl'>
                Contributed to the development of sensor-driven embedded systems
                for industrial IoT applications.
              </p>
              <p className='text-muted-foreground mt-4 text-xl'>
                Designed and built custom PCBs, implemented firmware using ESP32
                and nRF52840, and integrated multiple communication protocols
                including BLE, WebSocket, UDP, I2C, and SPI.
              </p>
              <p className='text-muted-foreground mt-4 text-xl'>
                Collaborated with cross-functional teams to deliver real-time
                monitoring systems for automotive, industrial, and smart
                infrastructure use-cases.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
