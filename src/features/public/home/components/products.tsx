import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import p1 from '@/assets/products/p(1).png'
import p2 from '@/assets/products/p(2).png'
import p3 from '@/assets/products/p(3).png'
import p4 from '@/assets/products/p(4).png'
import p12 from '@/assets/products/p(4).png'
import p5 from '@/assets/products/p(5).png'
import p6 from '@/assets/products/p(6).png'
import p7 from '@/assets/products/p(7).png'
import p8 from '@/assets/products/p(8).png'
import p9 from '@/assets/products/p(9).png'
import p10 from '@/assets/products/p(10).png'
import p11 from '@/assets/products/p(11).png'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import Image from '@/components/image'

const categories = [
  'All',
  'Living Room',
  'Bedroom',
  'Dining',
  'Office',
  'Outdoor',
  'Kids',
]

const products = [
  { title: 'Sofas', image: p1, category: 'Living Room' },
  { title: 'TV Cabinets', image: p2, category: 'Living Room' },
  { title: 'Center Tables', image: p3, category: 'Living Room' },
  { title: 'Recliner Chairs', image: p4, category: 'Living Room' },

  { title: 'Beds', image: p5, category: 'Bedroom' },
  { title: 'Wardrobes', image: p6, category: 'Bedroom' },
  { title: 'Dressing Tables', image: p7, category: 'Bedroom' },

  { title: 'Dining Tables', image: p8, category: 'Dining' },

  { title: 'Office Chairs', image: p9, category: 'Office' },
  { title: 'Study Tables', image: p10, category: 'Office' },

  { title: 'Kids Beds', image: p11, category: 'Kids' },

  { title: 'Garden Chairs', image: p12, category: 'Outdoor' },
]

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <section id='products' className='container space-y-10 py-20'>
      <div className='space-y-2 text-center'>
        <h2 className='text-3xl font-bold lg:text-4xl'>
          Explore Our{' '}
          <span className='from-accent-foreground to-primary bg-linear-to-r bg-clip-text text-transparent'>
            Products
          </span>
        </h2>
        <p className='text-muted-foreground mx-auto max-w-xl text-lg'>
          Carefully crafted pieces for every corner of your home.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-3'>
        {categories.map((category) => (
          <Badge
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'default' : 'secondary'}
            className='cursor-pointer rounded-full px-4 py-2 text-sm'
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className='grid gap-8 sm:grid-cols-4 lg:grid-cols-6'>
        {filteredProducts.map(({ title, image }) => (
          <div key={title} className='flex flex-col items-center gap-3'>
            <div>
              <Image
                src={image}
                alt={title}
                className='mx-auto h-32 w-full object-contain'
              />
            </div>
            <p className='font-semibold'>{title}</p>
          </div>
        ))}
      </div>

      <div className='pt-8 text-center'>
        <Link to='/products' className={`px-8 ${buttonVariants()}`}>
          See All Products
        </Link>
      </div>
    </section>
  )
}
