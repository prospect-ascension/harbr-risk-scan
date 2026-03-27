import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
        <Image
          src="/harbr-logo.png"
          alt="Harbr Data"
          width={140}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </div>
    </header>
  )
}
