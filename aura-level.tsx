"use client"

import { motion } from "framer-motion"

interface AuraLevelProps {
  auraLevel: number
  generationalDamage: boolean
  damageTypes: string[]
}

export default function AuraLevel({ auraLevel, generationalDamage, damageTypes }: AuraLevelProps) {
  // Determine aura color based on level
  const getAuraColor = () => {
    if (auraLevel >= 10) return "from-purple-500 via-pink-500 to-yellow-500" // Ascended
    if (auraLevel >= 5) return "from-green-500 to-blue-500" // Positive
    if (auraLevel >= 0) return "from-blue-400 to-teal-300" // Neutral
    if (auraLevel >= -5) return "from-orange-500 to-red-500" // Negative
    return "from-red-700 via-purple-900 to-black" // Cursed
  }

  // Get aura status text
  const getAuraStatus = () => {
    if (auraLevel >= 10) return "ASCENDED ✨"
    if (auraLevel >= 5) return "BLESSED 🙏"
    if (auraLevel >= 0) return "NEUTRAL 😐"
    if (auraLevel >= -5) return "CURSED 💀"
    return "GENERATIONAL DAMAGE 👹"
  }

  // Get damage type descriptions
  const getDamageDescription = () => {
    if (!generationalDamage || damageTypes.length === 0) return null

    const descriptions: Record<string, string> = {
      keyGlitch: "Keys glitching",
      letterSwap: "Letters swapping",
      visualDistortion: "Visual glitches",
      timeWarp: "Time distortion",
      invertedControls: "Inverted controls",
    }

    return damageTypes.map((type) => descriptions[type] || type).join(", ")
  }

  return (
    <motion.div
      className={`w-full max-w-sm mx-auto rounded-lg px-4 py-2 mb-4 relative overflow-hidden
        ${generationalDamage ? "border-2 border-red-500 animate-pulse" : ""}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${getAuraColor()} opacity-50`}></div>

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">Aura:</span>
          <motion.span
            className={`font-bold ${auraLevel >= 0 ? "text-white" : "text-red-300"}`}
            key={auraLevel}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {auraLevel}
          </motion.span>
        </div>

        <motion.div
          className="text-white font-bold"
          animate={
            generationalDamage
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, -2, 2, 0],
                }
              : {}
          }
          transition={{
            repeat: generationalDamage ? Number.POSITIVE_INFINITY : 0,
            duration: 0.5,
          }}
        >
          {getAuraStatus()}
        </motion.div>
      </div>

      {generationalDamage && (
        <motion.div
          className="relative mt-1 text-xs text-red-300 font-bold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          Active effects: {getDamageDescription()}
        </motion.div>
      )}
    </motion.div>
  )
}

