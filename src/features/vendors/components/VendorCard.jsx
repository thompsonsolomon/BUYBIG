import { Link } from 'react-router-dom'
import { Star, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function VendorCard({ vendor, page }) {
  return (
    <Link to={`/vendor/${vendor.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow text-center p-6"
      >
        {/* Vendor Avatar */}
        <div className="mb-4">
          <img
            src={vendor.avatar}
            alt={vendor.name}
            className="w-20 h-20 rounded-full mx-auto object-cover"
          />
        </div>

        {/* Vendor Name */}
        <div className="flex items-center justify-center gap-1 mb-2">
          <h3 className="font-bold text-gray-900 text-lg">{vendor.name}</h3>
          {vendor.verified && (
            <CheckCircle size={18} className="text-blue-500" />
          )}
        </div>

        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
          {vendor.category}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(vendor.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{vendor.rating}</span>
        </div>

        {/* Stats */}
        <div className={"grid grid-cols-2 gap-2 mb-4 py-3 border-y border-gray-200" + (page === "home" ? " hidden" : "")}>
          <div>
            <p className="text-xs text-gray-500">Products</p>
            <p className="font-bold text-orange-600">{vendor.products}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Followers</p>
            <p className="font-bold text-orange-600">
              {(vendor.followers / 1000).toFixed(1)}K
            </p>
          </div>
        </div>

        {/* Sell Status */}
        <div className="text-sm text-green-600 font-semibold">
          ✓ Active Seller
        </div>
      </motion.div>
    </Link>
  )
}
