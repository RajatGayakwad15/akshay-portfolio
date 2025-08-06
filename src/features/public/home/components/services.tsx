'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import img1 from '@/assets/IoT Images/Blue Earth Hud.jpg'
import img2 from '@/assets/IoT Images/Gemini_Generated_Image_6p0s1c6p0s1c6p0s.png'
import img3 from '@/assets/IoT Images/Gemini_Generated_Image_dffxdmdffxdmdffx.png'
import img4 from '@/assets/IoT Images/computer-8042828.jpg'
import img5 from '@/assets/IoT Images/download (1).jpg'
import img6 from '@/assets/IoT Images/download (2).jpg'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const projectList = [
  {
    title: 'Machine Health Monitoring [BKT Tires]',
    description:
      'Designed and implemented a vehicle monitoring system with ultrasonic, hall, TPMS, GPS, and MPU sensors...',
    image: img1,
  },
  {
    title: 'DC Current Measurement System',
    description:
      'Developed a current measurement system using a precision shunt resistor and op-amp...',
    image: img2,
  },
  {
    title: 'Elevator Monitoring Device',
    description:
      'IoT-based system with MPU (vibration), encoder (door), ultrasonic (presence)...',
    image: img3,
  },
  {
    title: 'V-Guard Pvt Ltd – RPM Monitoring',
    description:
      'Monitored RPM and vibration of water pumps/fans using multiple sensors...',
    image: img4,
  },
  {
    title: 'Thermocouple Temperature Monitoring',
    description:
      'Multi-node PCB with SPI-connected thermocouples for health monitoring...',
    image: img5,
  },
  {
    title: 'Time-of-Flight Sensor for Detection',
    description:
      'Implemented I2C ToF sensor for people detection and counting...',
    image: img6,
  },
]

export const Services = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4, spacing: 32 },
      },
    },
  })

  const prev = () => instanceRef.current?.prev()
  const next = () => instanceRef.current?.next()

  return (
    <section className='relative container py-20'>
      {/* Title */}
      <div className='mb-12 text-center'>
        <h2 className='text-3xl font-bold md:text-4xl'>
          <span className='from-accent-foreground to-primary bg-linear-to-r bg-clip-text text-transparent'>
            Project Experience
          </span>
        </h2>
        <p className='text-muted-foreground mt-4 text-lg md:text-xl max-w-3xl mx-auto'>
          A curated list of industry-focused engineering projects involving sensor integration, IoT systems, PCB design, and real-time monitoring.
        </p>
      </div>

      {/* Slider + Arrows */}
      <div className='relative'>
        {/* Slider */}
        <div ref={sliderRef} className='keen-slider'>
          {projectList.map(({ title, description, image }) => (
            <div className='keen-slider__slide' key={title}>
              <Card className='h-full'>
                <img
                  src={image}
                  alt={title}
                  className='w-full h-48 object-cover rounded-t-xl'
                />
                <CardHeader className='flex flex-col gap-2'>
                  <CardTitle className='text-lg'>{title}</CardTitle>
                  <CardDescription className='text-muted-foreground'>
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>

        {/* Arrows - Positioned Just Outside Cards */}
        <button
          onClick={prev}
          className='absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-muted hover:bg-primary/10 text-primary border border-primary rounded-full p-2 shadow'
        >
          <ChevronLeft className='h-6 w-6' />
        </button>

        <button
          onClick={next}
          className='absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 bg-muted hover:bg-primary/10 text-primary border border-primary rounded-full p-2 shadow'
        >
          <ChevronRight className='h-6 w-6' />
        </button>
      </div>
    </section>
  )
}
