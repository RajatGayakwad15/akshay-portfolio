import FAQ from '@/features/public/home/components/faq'
import { About } from './components/about'
import { BrandUsp } from './components/brand-usp'
import { Cta } from './components/cta'
import { Hero } from './components/hero'
import { Products } from './components/products'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      {/* <section id="brand-usp">
        <BrandUsp />
      </section>

      <section id="products">
        <Products />
      </section> */}

      <section id="project">
        <Services />
      </section>

      <section id="experince">
        <About />
      </section>

      {/* <section id="testimonials">
        <Testimonials />
      </section>

      <section id="cta">
        <Cta />
      </section> */}

      <section id="contact">
        <FAQ />
      </section>
    </>
  )
}

export default Home
