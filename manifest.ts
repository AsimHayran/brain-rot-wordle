import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brain Rot Wordle",
    short_name: "BrainRottle",
    description: "A chaotic Gen Z twist on the classic Wordle game",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ff00ff",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

