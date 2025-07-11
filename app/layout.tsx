import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '노션과 AI로 피트니스 센터 업무 자동화 시스템 구축하기',
  description: '어디서든 센터를 경영하라! 디지털 전환과 자동화의 첫걸음',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#6366f1',
  openGraph: {
    title: '노션과 AI로 피트니스 센터 업무 자동화 시스템 구축하기',
    description: '어디서든 센터를 경영하라! 디지털 전환과 자동화의 첫걸음',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
} 