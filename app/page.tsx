import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function WebinarLandingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden overflow-x-hidden">
      {/* AI Tech Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-green-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-orange-400 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-pink-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-10 sm:py-14 md:py-24 px-2 sm:px-4 text-center relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Enhanced Badges */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 backdrop-blur-sm border border-emerald-400/30">
              <span className="text-lg">🆓</span>무료
            </span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 backdrop-blur-sm border border-cyan-400/30">
              <span className="text-lg">⚡</span>실시간
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 backdrop-blur-sm border border-pink-400/30">
              <span className="text-lg">🔥</span>한정
            </span>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              운영에 쏟는 시간,
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              90% 줄일 수 있다면?
            </span>
          </h1>
          
          <h2 className="text-base xs:text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-cyan-200">
            『피트니스 노션 × AI 업무 자동화』 무료 웨비나
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 px-2 sm:px-4 text-gray-300 leading-relaxed">
            실제 센터 대표가 만든 시스템으로 운영 자동화를 경험하세요.
          </p>
          
          {/* Enhanced AI Tools */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-10 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 sm:p-4 border border-white/20 flex flex-col items-center w-14 sm:w-20 hover:bg-white/20 transition-all duration-300 group">
              <span className="text-3xl group-hover:scale-110 transition-transform">📝</span>
              <span className="text-xs text-cyan-200 mt-2 font-medium">Notion</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 sm:p-4 border border-white/20 flex flex-col items-center w-14 sm:w-20 hover:bg-white/20 transition-all duration-300 group">
              <span className="text-3xl group-hover:scale-110 transition-transform">🤖</span>
              <span className="text-xs text-purple-200 mt-2 font-medium">ChatGPT</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 sm:p-4 border border-white/20 flex flex-col items-center w-14 sm:w-20 hover:bg-white/20 transition-all duration-300 group">
              <span className="text-3xl group-hover:scale-110 transition-transform">⚡</span>
              <span className="text-xs text-green-200 mt-2 font-medium">Make</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 sm:p-4 border border-white/20 flex flex-col items-center w-14 sm:w-20 hover:bg-white/20 transition-all duration-300 group">
              <span className="text-3xl group-hover:scale-110 transition-transform">🔧</span>
              <span className="text-xs text-orange-200 mt-2 font-medium">Automation</span>
            </div>
          </div>
          
          <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-10 py-4 sm:py-6 rounded-2xl shadow-2xl hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 transition-all duration-300 border-2 border-cyan-400/50 flex items-center gap-2 sm:gap-3 mx-auto group hover:scale-105" aria-label="무료 웨비나 신청하기">
            <Link href="https://tally.so/r/nGE1Zk" target="_blank">
              <span className="text-xl group-hover:rotate-12 transition-transform">👉</span> 지금 바로 무료로 신청하기
            </Link>
          </Button>
          
          <div className="mt-8 text-sm text-gray-300 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <span className="text-cyan-400">📅</span> 일시: 2025년 7월 25일(목) 오후 3시
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-purple-400">📍</span> 장소: 온라인 Zoom (신청자 알림톡으로 링크 제공)
            </p>
          </div>
        </div>
      </section>

      {/* 공감 & 문제 제기 섹션 */}
      <section id="problem" className="w-full py-20 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-8 shadow-2xl">
              <span className="text-4xl">❌</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                센터 운영, 정말 이렇게 계속하실 건가요?
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto shadow-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-6">
                <span className="text-red-400 text-3xl mt-2 flex-shrink-0">❌</span>
                <span className="text-white text-xl leading-relaxed">손으로, 기억력으로 관리하기엔 너무 벅차고,</span>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-red-400 text-3xl mt-2 flex-shrink-0">❌</span>
                <span className="text-white text-xl leading-relaxed">하루하루가 똑같이 반복되기만 하고,</span>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-red-400 text-3xl mt-2 flex-shrink-0">❌</span>
                <span className="text-white text-xl leading-relaxed">매달 이러면 안 된다는 걸 알지만 바뀌는 건 없고…</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-10 border border-emerald-400/30 shadow-xl">
              <p className="text-2xl font-bold text-emerald-200 text-center leading-relaxed">
                "바꿀 수 있는 구조가 이미 있습니다. 지금 시작하세요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 강의자 소개 섹션 */}
      <section id="instructor" className="w-full py-20 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mb-8 shadow-2xl">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                현장에서 직접 만들어 쓴 구조를 공개합니다
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto shadow-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <span className="text-4xl">🏢</span>
                  <span className="text-white font-semibold text-xl">센터 2개 지점 운영</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-4xl">🚀</span>
                  <span className="text-white font-semibold text-xl">피트니스 종사자 성장 플랫폼 LVUP 운영</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-4xl">🤖</span>
                  <span className="text-white font-semibold text-xl">Notion, GPT, Make를 활용한 피트니스 운영 자동화 전문가</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-4xl">📈</span>
                  <span className="text-white font-semibold text-xl">센터운영 10년차 대표가 경험한 내용을 솔루션으로 개발</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/30 flex items-center shadow-xl">
                <p className="text-white font-medium italic text-center text-xl leading-relaxed">
                  "이 강의는 이론이 아니라 현장에서 실제로 작동하는 구조를 직접 보여드립니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 웨비나에서 배울 수 있는 내용 */}
      <section id="content" className="w-full py-20 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-8 shadow-2xl">
              <span className="text-4xl">✅</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                웨비나에서 배울 수 있는 내용
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto shadow-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="font-bold text-white mb-4 text-xl">피트니스 맞춤 Notion 과 AI 활용 방법</h3>
                <p className="text-gray-300 text-base leading-relaxed">센터 운영에 최적화된 노션 템플릿과 AI 활용 전략</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="font-bold text-white mb-4 text-xl">대표 없이도 운영되는 센터 구조</h3>
                <p className="text-gray-300 text-base leading-relaxed">자동화된 시스템으로 대표 부재 시에도 원활한 운영</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="font-bold text-white mb-4 text-xl">상담 고객 관리 & 미등록 고객 관리 자동화 흐름</h3>
                <p className="text-gray-300 text-base leading-relaxed">고객 관리부터 마케팅까지 자동화된 워크플로우</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-3xl p-10 text-center shadow-2xl">
              <p className="text-2xl font-bold leading-relaxed">
                현장 대표가 만들어 실제 사용하는 시스템을 그대로 공개합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 참가 혜택 강조 섹션 */}
      <section id="benefits" className="w-full py-20 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-8 shadow-2xl">
              <span className="text-4xl">🎁</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                참가자 전원에게 드리는 무료 자료
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto shadow-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="font-bold text-white mb-4 text-xl">운영 자동화 전체 흐름도 PDF</h3>
                <p className="text-gray-300 text-base leading-relaxed">센터 운영 자동화의 전체적인 구조와 흐름을 한눈에 파악할 수 있는 가이드</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="font-bold text-white mb-4 text-xl">상담/고객 관리용 Notion 템플릿</h3>
                <p className="text-gray-300 text-base leading-relaxed">바로 사용할 수 있는 실용적인 노션 템플릿 제공</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="font-bold text-white mb-4 text-xl">센터 운영에 도움 되는 커스텀 GPT</h3>
                <p className="text-gray-300 text-base leading-relaxed">피트니스 센터 운영에 특화된 AI 어시스턴트 활용법</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-3xl p-10 text-center shadow-2xl">
              <p className="text-2xl font-bold leading-relaxed">
                "웨비나 이후 바로 실행할 수 있도록 준비했습니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 실제 변화 및 후기 */}
      <section id="testimonials" className="w-full py-20 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-8 shadow-2xl">
              <span className="text-4xl">💬</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                "운영이 자동화된 후, 제 일상이 바뀌었습니다."
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto shadow-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-400/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <span className="text-5xl">🏢</span>
                  <div>
                    <p className="font-bold text-white mb-3 text-xl">"출근 하지 않아도 센터 운영을 할 수 있게 되었습니다."</p>
                    <p className="text-gray-300 text-base">- 자동화 시스템 구축 후</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <span className="text-5xl">⏰</span>
                  <div>
                    <p className="font-bold text-white mb-3 text-xl">"업무 시간이 10/1로 줄어 들었습니다."</p>
                    <p className="text-gray-300 text-base">- 효율성 극대화</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <span className="text-5xl">💬</span>
                  <div>
                    <p className="font-bold text-white mb-3 text-xl">"직원과 카톡 조율이 사라졌습니다."</p>
                    <p className="text-gray-300 text-base">- 자동화된 커뮤니케이션</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <span className="text-5xl">👥</span>
                  <div>
                    <p className="font-bold text-white mb-3 text-xl">"고객 관리가 자동으로 되니 누락 걱정이 없습니다."</p>
                    <p className="text-gray-300 text-base">- 체계적인 고객 관리</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-cyan-200 leading-relaxed">
                "대표가 말하는 진짜 자동화 후기를 들어보세요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LVUP 브랜드 소개 */}
      <section id="brand" className="w-full py-20 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-8 shadow-2xl">
              <span className="text-4xl">🏋️‍♂️</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LVUP 브랜드 소개
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto shadow-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">LVUP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white leading-relaxed">더 쉽게 일하고, 강력하게 성장하는<br />피트니스 업무 시스템</h3>
              <p className="text-gray-300 mb-10 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                10년의 노하우로 완성된 피트니스 업무 체계와 매뉴얼을 누구나 실행 가능한 시스템으로 바꾸었습니다.<br />
                LVUP는 피트니스 종사자들의 성장을 돕고자 업계 노하우를 체계화하여<br />누구나 실행하고 성장할 수 있는 올인원 업무 시스템을 제공합니다.
              </p>
            </div>
            
            <div className="space-y-6 mb-12 max-w-3xl mx-auto">
              <div className="flex items-center gap-6">
                <span className="text-cyan-400 text-2xl">✔️</span>
                <span className="text-white text-xl">노션 기반, 클릭 한 번으로 복제</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-cyan-400 text-2xl">✔️</span>
                <span className="text-white text-xl">회원/직원/매출/마케팅 등 센터 운영 전반 지원</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-cyan-400 text-2xl">✔️</span>
                <span className="text-white text-xl">누구나 쉽게 적응, 완전한 커스터마이징 가능</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-cyan-400 text-2xl">✔️</span>
                <span className="text-white text-xl">성장에 도움이 되는 블로그/자료 제공</span>
              </div>
            </div>
            
            <div className="text-center">
              <a href="https://lvupfitness.kr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-xl group hover:scale-105">
                LVUP 공식 사이트 바로가기 
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 대상 */}
      <section id="recommend" className="w-full py-20 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mb-8 shadow-2xl">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                이런 분들께 추천합니다
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto shadow-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="space-y-8">
              {/* 카드 1 */}
              <div className="flex items-center gap-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <span className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">💼</span>
                <div>
                  <div className="font-bold text-white text-2xl mb-3">피트니스 센터 운영자</div>
                  <div className="text-gray-300 text-xl">업무 효율성을 높이고 싶은 분</div>
                </div>
              </div>
              
              {/* 카드 2 */}
              <div className="flex items-center gap-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <span className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">📱</span>
                <div>
                  <div className="font-bold text-white text-2xl mb-3">디지털 전환 희망자</div>
                  <div className="text-gray-300 text-xl">노션과 AI를 활용하고 싶은 분</div>
                </div>
              </div>
              
              {/* 카드 3 */}
              <div className="flex items-center gap-8 bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <span className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">⚡</span>
                <div>
                  <div className="font-bold text-white text-2xl mb-3">업무 자동화 희망자</div>
                  <div className="text-gray-300 text-xl">반복 업무를 줄이고 싶은 분</div>
                </div>
              </div>
              
              {/* 카드 4 */}
              <div className="flex items-center gap-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <span className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">🚀</span>
                <div>
                  <div className="font-bold text-white text-2xl mb-3">성장 지향적 분</div>
                  <div className="text-gray-300 text-xl">센터 운영을 혁신하고 싶은 분</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 CTA Section */}
      <section id="cta" className="w-full py-20 md:py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            📢 지금 신청하면, 다음 달이 달라집니다!
          </h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-xl">
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 text-3xl">💰</span>
                <span>참가비: <span className="font-bold text-emerald-400">무료</span></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 text-3xl">📅</span>
                <span>일시: 2025년 7월 25일(목) 오후 3시</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-purple-400 text-3xl">📍</span>
                <span>장소: 온라인 (Zoom 링크 별도 알림톡 안내)</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
              <div className="flex items-center justify-center gap-8 mb-8">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold">한정 100명</span>
                <span className="text-2xl font-bold text-emerald-400">무료</span>
              </div>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 transition-all duration-300 w-full sm:w-auto border border-cyan-400/50 flex items-center gap-4 group hover:scale-105" aria-label="무료 웨비나 신청하기">
                <Link href="https://tally.so/r/nGE1Zk" target="_blank">
                  <span className="text-2xl group-hover:rotate-12 transition-transform">👉</span> 무료 웨비나 신청하기
                </Link>
              </Button>
              
              <p className="text-sm text-gray-400 mt-6">* 선착순 마감, 신청 후 알림톡 발송</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-sm sm:text-base text-gray-400 py-10 md:py-12 bg-slate-900/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-medium">ⓒ 2025 LVUP. All rights reserved.</p>
            <p className="mt-2">문의: <a href="mailto:contact@lvup.com" className="underline hover:text-cyan-400 transition-colors">contact@lvup.com</a></p>
          </div>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">홈</a>
            <a href="#problem" className="hover:text-cyan-400 transition-colors">문제제기</a>
            <a href="#instructor" className="hover:text-cyan-400 transition-colors">강의자</a>
            <a href="#content" className="hover:text-cyan-400 transition-colors">웨비나내용</a>
            <a href="#benefits" className="hover:text-cyan-400 transition-colors">참가혜택</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">후기</a>
            <a href="#brand" className="hover:text-cyan-400 transition-colors">브랜드소개</a>
            <a href="#recommend" className="hover:text-cyan-400 transition-colors">추천대상</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 