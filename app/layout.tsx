import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import Particles from '@/components/Particles'
import GridBg from '@/components/GridBg'
import ScrollReveal from '@/components/ScrollReveal'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Siddharth Parekh — AI & Mobile Engineer',
  description:
    'Portfolio of Siddharth Parekh — Flutter developer, AI systems engineer, and automation specialist based in India.',
  keywords: ['Flutter', 'AI', 'Mobile', 'LangChain', 'n8n', 'India', 'Developer', 'Portfolio'],
  openGraph: {
    title: 'Siddharth Parekh — AI & Mobile Engineer',
    description: 'Flutter developer, AI systems engineer, and automation specialist based in India.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <GridBg />
        <Particles />
        <CustomCursor />
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
