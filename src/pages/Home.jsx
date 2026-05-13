// import React from 'react'
// import SuggestedVendors from '../components/Home/SuggestedVendors'
// import { vendors } from '../utils/data'

// function Home() {
//   return (
//    <div>
//     <Hero />
//     <SuggestedVendors vendors={vendors} />
//    </div>
//   )
// }

// export default Home


import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products, vendors, categories } from '../utils/data'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import VendorCard from '../features/vendors/components/VendorCard'
import ProductCard from '../features/products/components/ProductCard'
import Hero from '../components/Home/Hero'
import Cart from './Cart'
import Categories from '../components/Home/Cartegories'
import SuggestedVendors from '../components/Home/SuggestedVendors'

const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop',
    title: 'Summer Sale',
    subtitle: 'Get 50% off on selected items',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=400&fit=crop',
    title: 'Tech Mega Deal',
    subtitle: 'Exclusive electronics offers',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1588872657840-11f894fe8590?w=1200&h=400&fit=crop',
    title: 'Back to School',
    subtitle: 'Everything you need in one place',
  },
]

export default function Home() {
  const [featuredProducts] = useState(products.slice(0, 8))

  return (
    <div className="bg-gray-50">
      {/* Hero Carousel */}
      <Hero />


      {/* Categories Section */}
      {/* <Categories categories={categories} /> */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-lg my-8">
        
        <SuggestedVendors vendors={vendors} />

      </section>



      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/shop" className="text-blue-500 hover:text-blue-600 font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 md:p-12 text-white text-center cursor-pointer"
        >
          <h3 className="text-3xl font-bold mb-4">Flash Sale</h3>
          <p className="text-lg mb-6">
            Limited time offer - Save up to 70% on selected items
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Shop Flash Sale
          </button>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-bold text-gray-900 mb-1">Fast Shipping</h4>
              <p className="text-gray-600 text-sm">Delivery in 2-5 business days</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-bold text-gray-900 mb-1">Secure Payment</h4>
              <p className="text-gray-600 text-sm">Your data is always protected</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">↩️</div>
              <h4 className="font-bold text-gray-900 mb-1">Easy Returns</h4>
              <p className="text-gray-600 text-sm">30-day money-back guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
