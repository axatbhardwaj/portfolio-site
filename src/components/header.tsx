import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Axat Bhardwaj" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Delhi , India
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Blockchain and Backedn Dev @valory
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
    I am a passionate software engineer based in India, currently working in the dynamic environment of a startup where I specialize in blockchain technologies. My professional work is fueled by a deep-seated enthusiasm for all things tech, from operating systems ,mobile devices to the latest hardware releases and specially in Ethereum and its ecosystem.
      </p>
    </header>
  )
}
