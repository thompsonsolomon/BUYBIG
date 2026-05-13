import { motion } from "framer-motion"

export default function Categories({ categories }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Shop by Category
        </h2>
        <button className="text-sm font-medium text-yellow-600 hover:underline">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, i) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-5 text-center cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-yellow-100 via-transparent to-yellow-50" />

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-white text-2xl shadow-md group-hover:scale-110 transition">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 font-semibold text-gray-800 group-hover:text-gray-900 transition">
              {category.name}
            </h3>

            {/* Subtle underline animation */}
            <div className="mt-2 h-[2px] w-0 bg-yellow-500 mx-auto group-hover:w-8 transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}