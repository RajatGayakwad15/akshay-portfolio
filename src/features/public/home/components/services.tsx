import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LightBulbIcon } from '@/components/icons'

const projectList = [
  {
    title: 'Machine Health Monitoring [BKT Tires]',
    description:
      'Designed and implemented a vehicle monitoring system with ultrasonic, hall, TPMS, GPS, and MPU sensors. Built PCB and electronics. Used SPI, I2C, WebSocket, BLE, HTTP, UDP with nRF52840 and ESP32.',
  },
  {
    title: 'DC Current Measurement System',
    description:
      'Developed a current measurement system using a precision shunt resistor and op-amp. Wireless data via UDP for real-time monitoring.',
  },
  {
    title: 'Elevator Monitoring Device',
    description:
      'IoT-based system with MPU (vibration), encoder (door), ultrasonic (presence). Sends real-time data via WebSocket.',
  },
  {
    title: 'V-Guard Pvt Ltd – RPM Monitoring',
    description:
      'Monitored RPM and vibration of water pumps/fans using multiple sensors. Built for industry-grade accuracy.',
  },
  {
    title: 'Thermocouple Temperature Monitoring',
    description:
      'Multi-node PCB with SPI-connected thermocouples for health monitoring. Wireless UDP data transmission.',
  },
  {
    title: 'Time-of-Flight Sensor for Detection',
    description:
      'Implemented I2C ToF sensor for people detection and counting.',
  },
]

export const Services = () => {
  return (
    <section className='relative container py-20'>
      {/* Title & Description at top */}
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

      {/* Cards Grid */}
      <div className='grid gap-6 md:gap-8 lg:grid-cols-2'>
        {projectList.map(({ title, description }) => (
          <Card key={title}>
            <CardHeader className='flex items-start gap-4 space-y-0'>
              <div className='bg-primary/20 mt-1 rounded-2xl p-2'>
                <LightBulbIcon className='text-primary h-6 w-6' />
              </div>
              <div>
                <CardTitle className='text-lg'>{title}</CardTitle>
                <CardDescription className='text-muted-foreground mt-2'>
                  {description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
