import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
// images
import hero1 from "../../assets/images/hero1.jpg"
import hero2 from "../../assets/images/hero2.jpg"
import hero3 from "../../assets/images/hero3.jpg"
import { banners } from "../../utils/data"
export default function Hero() {
 return (
  <>
   {/* Mobile */}
   <div className="block md:hidden">
    <HeroMobile />
   </div>

   {/* Desktop */}
   <div className="hidden md:block">
    <HeroDesktop />
   </div>
  </>
 )
}

export const HeroDesktop = () => {
 return (
  <section className="bg-background pl-4 pr-0 py-8 md:py-16">

   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* LEFT TEXT SECTION */}
    <div className="flex-1  relative w-[50%] min-w-[50%] align-middle flex items-center flex-col justify-center h-[300px] md:h-[500px]">
     <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight"
     >
      Shop Smarter on{" "}
      <span className="text-primary-600">Buybig</span>
     </motion.h1>

     <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-gray-500 mt-4 text-sm md:text-base"
     >
      A fast multi-vendor marketplace powered by smart search, trusted vendors,
      and AI-driven recommendations.
     </motion.p>

     {/* BUTTONS */}
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start"
     >
      <Link
       to="/shop"
       className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition"
      >
       Start Shopping
      </Link>

      <Link
       to="/vendors"
       className="border border-primary-600 text-primary-600 px-6 py-3 rounded-xl hover:bg-primary-50 transition"
      >
       Become a Vendor
      </Link>
     </motion.div>
    </div>

    {/* RIGHT CAROUSEL SECTION */}
    <motion.div
     initial={{ opacity: 0, scale: 0.95 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.6 }}
     className="flex-1 w-[100%]"
    >

     <div className="rounded-2xl overflow-hidden shadow-card">

      <Swiper
       modules={[Autoplay, Pagination]}
       autoplay={{ delay: 3500 }}
       pagination={{ clickable: true }}
       loop={true}
       className="h-64 md:h-96"
      >

       {banners.map((item, index) => (
        <SwiperSlide key={index}>
         <div
          className="h-full w-full relative flex items-left  justify-center text-left px-6"
          style={{
           backgroundImage: `url(${item.image})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
          }}
         >

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* TEXT */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-white h-full md:items-start md:text-left px-6">           <h2 className="text-2xl md:text-4xl font-bold">
           {item.title}
          </h2>
           <p className="text-white/80 mt-2 text-sm md:text-base">
            {item.desc}
           </p>
          </div>

         </div>
        </SwiperSlide>
       ))}

      </Swiper>

     </div>

    </motion.div>

   </div>
  </section>
 )
}

export const HeroMobile = () => {
 const images = [hero1, hero2, hero3]

 return (
  <section className="relative bg-background overflow-hidden">

   <div className="max-w-7xl mx-auto min-h-[50vh] flex flex-col md:flex-row items-center">

    {/* ================= LEFT TEXT ================= */}
    <div className="relative z-20 flex flex-col flex-1  items-center justify-center px-6 py-10 md:py-0 text-center md:text-left">

     <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold text-white leading-tight"
     >
      Shop Smarter on <span className="text-primary-600">Buybig</span>
     </motion.h1>

     <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-white mt-4 text-sm md:text-base"
     >
      A fast multi-vendor marketplace powered by smart search, trusted vendors,
      and AI-driven recommendations.
     </motion.p>

     <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start"
     >
      <Link
       to="/shop"
       className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition"
      >
       Start Shopping
      </Link>

      <Link
       to="/vendors"
       className="border border-primary-600 text-primary-600 px-6 py-3 rounded-xl hover:bg-primary-50 transition"
      >
       Become a Vendor
      </Link>
     </motion.div>

    </div>

    {/* ================= RIGHT CAROUSEL ================= */}
    <div className="absolute md:relative inset-0 md:inset-auto flex-1 w-full h-[50dvh]">

     <Swiper
      modules={[Autoplay]}
      autoplay={{
       delay: 3000,
       reverseDirection: true
      }}
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      className="h-full w-full"
     >

      {images.map((img, i) => (
       <SwiperSlide key={i}>
        <div
         className="w-full h-[80vh] md:h-[400px] bg-cover bg-center scale-110 md:scale-100 transition-all duration-700"
         style={{ backgroundImage: `url(${img})` }}
        />

        {/* dark overlay only for mobile readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>

       </SwiperSlide>
      ))}

     </Swiper>

    </div>

   </div>
  </section>

 )
}