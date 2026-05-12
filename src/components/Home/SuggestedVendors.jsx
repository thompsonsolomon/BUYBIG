import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SuggestedVendors({ vendors }) {
  const [index, setIndex] = useState(0)

  const CARD_WIDTH = 280 // must match your card width + gap

  // duplicate for infinite illusion
  const looped = [...vendors, ...vendors]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 2500) // delay between steps

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-10 mb-10 px-4 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl text-black font-semibold">Suggested for you</h2>
        <span className="text-sm text-gray-500">Sponsored</span>
      </div>

      {/* Track */}
      <motion.div
        animate={{ x: -index * CARD_WIDTH }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        onAnimationComplete={() => {
          // reset smoothly when reaching end
          if (index >= vendors.length) {
            setIndex(0)
          }
        }}
        className="flex gap-4"
      >
        {looped.map((vendor, i) => (
          <div
            key={i}
            className="min-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0"
          >
            <img
              src={vendor.banner}
              className="w-full h-36 object-cover"
            />

            <div className="p-3 flex gap-3">
              <img
                src={vendor.logo}
                className="w-12 h-12 rounded-xl"
              />
              <div>
                <h3 className="font-semibold  text-sm">{vendor.name}</h3>
                <p className="text-xs text-gray-500">{vendor.category}</p>
                <p className="text-xs text-yellow-500">⭐ {vendor.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}