import GameContainer from "@/components/game-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brain Rot Wordle",
  description: "A chaotic Gen Z twist on the classic Wordle game",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
      <GameContainer />
    </main>
  )
}

