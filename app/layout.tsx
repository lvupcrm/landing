import './globals.css'
import type { Metadata, Viewport } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '노션과 AI로 피트니스 센터 업무 자동화 시스템 구축하기',
  description: '어디서든 센터를 경영하라! 디지털 전환과 자동화의 첫걸음',
  openGraph: {
    title: '노션과 AI로 피트니스 센터 업무 자동화 시스템 구축하기',
    description: '어디서든 센터를 경영하라! 디지털 전환과 자동화의 첫걸음',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#6366f1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  )
} 