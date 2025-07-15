import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function WebinarLandingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section id="hero" className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-14 md:py-24 px-4 text-center relative overflow-hidden">
        {/* AI 배경 패턴 */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-10 left-10 w-20 h-20 border border-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border border-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-green-400 rounded-full animate-pulse delay-2000"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* 배지 */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"><span>🆓</span>무료</span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"><span>⏱️</span>실시간</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"><span>🔥</span>한정</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
            운영에 쏟는 시간, 90% 줄일 수 있다면?
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-purple-200">
            『피트니스 노션 × AI 업무 자동화』 무료 웨비나
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 px-2 text-gray-200">
            실제 센터 대표가 만든 시스템으로 운영 자동화를 경험하세요.
          </p>
          {/* AI 툴 로고 */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex flex-col items-center w-16">
              <span className="text-2xl">📝</span>
              <span className="text-xs text-gray-300 mt-1">Notion</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex flex-col items-center w-16">
              <span className="text-2xl">🤖</span>
              <span className="text-xs text-gray-300 mt-1">ChatGPT</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex flex-col items-center w-16">
              <span className="text-2xl">⚡</span>
              <span className="text-xs text-gray-300 mt-1">Make</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex flex-col items-center w-16">
              <span className="text-2xl">🔧</span>
              <span className="text-xs text-gray-300 mt-1">Automation</span>
            </div>
          </div>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 border-2 border-purple-400/50 flex items-center gap-2 mx-auto" aria-label="무료 웨비나 신청하기">
            <Link href="https://tally.so/r/nGE1Zk" target="_blank">
              <span>👉</span> 지금 바로 무료로 신청하기
            </Link>
          </Button>
          <div className="mt-6 text-sm text-gray-300">
            <p>📅 일시: 2025년 7월 25일(목) 오후 3시</p>
            <p>📍 장소: 온라인 Zoom (신청자 알림톡으로 링크 제공)</p>
          </div>
        </div>
      </section>

      {/* 공감 & 문제 제기 섹션 */}
      <section id="problem" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">❌</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                센터 운영, 정말 이렇게 계속하실 건가요?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-red-200">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1 flex-shrink-0">❌</span>
                <span className="text-gray-700 text-lg">손으로, 기억력으로 관리하기엔 너무 벅차고,</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1 flex-shrink-0">❌</span>
                <span className="text-gray-700 text-lg">하루하루가 똑같이 반복되기만 하고,</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1 flex-shrink-0">❌</span>
                <span className="text-gray-700 text-lg">매달 이러면 안 된다는 걸 알지만 바뀌는 건 없고…</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <p className="text-xl font-bold text-green-700 text-center leading-relaxed">
                "바꿀 수 있는 구조가 이미 있습니다. 지금 시작하세요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 강의자 소개 섹션 */}
      <section id="instructor" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                현장에서 직접 만들어 쓴 구조를 공개합니다
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🏢</span>
                  <span className="text-gray-800 font-semibold text-lg">센터 2개 지점 운영</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🚀</span>
                  <span className="text-gray-800 font-semibold text-lg">피트니스 종사자 성장 플랫폼 LVUP 운영</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🤖</span>
                  <span className="text-gray-800 font-semibold text-lg">Notion, GPT, Make를 활용한 피트니스 운영 자동화 전문가</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📈</span>
                  <span className="text-gray-800 font-semibold text-lg">센터운영 10년차 대표가 경험한 내용을 솔루션으로 개발</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200 flex items-center">
                <p className="text-gray-700 font-medium italic text-center text-lg leading-relaxed">
                  "이 강의는 이론이 아니라 현장에서 실제로 작동하는 구조를 직접 보여드립니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 웨비나에서 배울 수 있는 내용 */}
      <section id="content" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                웨비나에서 배울 수 있는 내용
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-4xl mb-6">📝</div>
                <h3 className="font-bold text-gray-800 mb-4 text-xl">피트니스 맞춤 Notion 과 AI 활용 방법</h3>
                <p className="text-gray-600 text-base leading-relaxed">센터 운영에 최적화된 노션 템플릿과 AI 활용 전략</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                <div className="text-4xl mb-6">🤖</div>
                <h3 className="font-bold text-gray-800 mb-4 text-xl">대표 없이도 운영되는 센터 구조</h3>
                <p className="text-gray-600 text-base leading-relaxed">자동화된 시스템으로 대표 부재 시에도 원활한 운영</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="text-4xl mb-6">📊</div>
                <h3 className="font-bold text-gray-800 mb-4 text-xl">상담 고객 관리 & 미등록 고객 관리 자동화 흐름</h3>
                <p className="text-gray-600 text-base leading-relaxed">고객 관리부터 마케팅까지 자동화된 워크플로우</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-8 text-center">
              <p className="text-xl font-bold leading-relaxed">
                현장 대표가 만들어 실제 사용하는 시스템을 그대로 공개합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 참가 혜택 강조 섹션 */}
      <section id="benefits" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🎁</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                참가자 전원에게 드리는 무료 자료
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
                <div className="text-4xl mb-6">📋</div>
                <h3 className="font-bold text-gray-800 mb-4 text-xl">운영 자동화 전체 흐름도 PDF</h3>
                <p className="text-gray-600 text-base leading-relaxed">센터 운영 자동화의 전체적인 구조와 흐름을 한눈에 파악할 수 있는 가이드</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-4xl mb-6">📝</div>
                <h3 className="font-bold text-gray-800 mb-4 text-xl">상담/고객 관리용 Notion 템플릿</h3>
                <p className="text-gray-600 text-base leading-relaxed">바로 사용할 수 있는 실용적인 노션 템플릿 제공</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="text-4xl mb-6">🤖</div>
                <h3 className="font-bold text-gray-800 mb-4 text-xl">센터 운영에 도움 되는 커스텀 GPT</h3>
                <p className="text-gray-600 text-base leading-relaxed">피트니스 센터 운영에 특화된 AI 어시스턴트 활용법</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-8 text-center">
              <p className="text-xl font-bold leading-relaxed">
                "웨비나 이후 바로 실행할 수 있도록 준비했습니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 실제 변화 및 후기 */}
      <section id="testimonials" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">💬</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                "운영이 자동화된 후, 제 일상이 바뀌었습니다."
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-purple-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="flex items-start gap-6">
                  <span className="text-4xl">🏢</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-3 text-xl">"출근 하지 않아도 센터 운영을 할 수 있게 되었습니다."</p>
                    <p className="text-gray-600 text-base">- 자동화 시스템 구축 후</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="flex items-start gap-6">
                  <span className="text-4xl">⏰</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-3 text-xl">"업무 시간이 10/1로 줄어 들었습니다."</p>
                    <p className="text-gray-600 text-base">- 효율성 극대화</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                <div className="flex items-start gap-6">
                  <span className="text-4xl">💬</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-3 text-xl">"직원과 카톡 조율이 사라졌습니다."</p>
                    <p className="text-gray-600 text-base">- 자동화된 커뮤니케이션</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
                <div className="flex items-start gap-6">
                  <span className="text-4xl">👥</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-3 text-xl">"고객 관리가 자동으로 되니 누락 걱정이 없습니다."</p>
                    <p className="text-gray-600 text-base">- 체계적인 고객 관리</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-xl font-bold text-gray-700 leading-relaxed">
                "대표가 말하는 진짜 자동화 후기를 들어보세요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LVUP 브랜드 소개 */}
      <section id="brand" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-gray-100 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🏋️‍♂️</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LVUP 브랜드 소개
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LVUP</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 leading-relaxed">더 쉽게 일하고, 강력하게 성장하는<br />피트니스 업무 시스템</h3>
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                10년의 노하우로 완성된 피트니스 업무 체계와 매뉴얼을 누구나 실행 가능한 시스템으로 바꾸었습니다.<br />
                LVUP는 피트니스 종사자들의 성장을 돕고자 업계 노하우를 체계화하여<br />누구나 실행하고 성장할 수 있는 올인원 업무 시스템을 제공합니다.
              </p>
            </div>
            <div className="space-y-4 mb-10 max-w-2xl mx-auto">
              <div className="flex items-center gap-4">
                <span className="text-indigo-500 text-xl">✔️</span>
                <span className="text-gray-700 text-lg">노션 기반, 클릭 한 번으로 복제</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-indigo-500 text-xl">✔️</span>
                <span className="text-gray-700 text-lg">회원/직원/매출/마케팅 등 센터 운영 전반 지원</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-indigo-500 text-xl">✔️</span>
                <span className="text-gray-700 text-lg">누구나 쉽게 적응, 완전한 커스터마이징 가능</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-indigo-500 text-xl">✔️</span>
                <span className="text-gray-700 text-lg">성장에 도움이 되는 블로그/자료 제공</span>
              </div>
            </div>
            <div className="text-center">
              <a href="https://lvupfitness.kr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg hover:from-indigo-600 hover:to-purple-600 transition text-lg">
                LVUP 공식 사이트 바로가기 ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 대상 */}
      <section id="recommend" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                이런 분들께 추천합니다
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto"></div>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-orange-200">
            <div className="space-y-6">
              {/* 카드 1 */}
              <div className="flex items-center gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
                <span className="text-4xl flex-shrink-0">💼</span>
                <div>
                  <div className="font-semibold text-xl mb-2">피트니스 센터 운영자</div>
                  <div className="text-gray-600 text-lg">업무 효율성을 높이고 싶은 분</div>
                </div>
              </div>
              {/* 카드 2 */}
              <div className="flex items-center gap-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-shadow">
                <span className="text-4xl flex-shrink-0">📱</span>
                <div>
                  <div className="font-semibold text-xl mb-2">디지털 전환 희망자</div>
                  <div className="text-gray-600 text-lg">노션과 AI를 활용하고 싶은 분</div>
                </div>
              </div>
              {/* 카드 3 */}
              <div className="flex items-center gap-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 hover:shadow-lg transition-shadow">
                <span className="text-4xl flex-shrink-0">⚡</span>
                <div>
                  <div className="font-semibold text-xl mb-2">업무 자동화 희망자</div>
                  <div className="text-gray-600 text-lg">반복 업무를 줄이고 싶은 분</div>
                </div>
              </div>
              {/* 카드 4 */}
              <div className="flex items-center gap-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200 hover:shadow-lg transition-shadow">
                <span className="text-4xl flex-shrink-0">🚀</span>
                <div>
                  <div className="font-semibold text-xl mb-2">성장 지향적 분</div>
                  <div className="text-gray-600 text-lg">센터 운영을 혁신하고 싶은 분</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 CTA Section */}
      <section id="cta" className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight">
            📢 지금 신청하면, 다음 달이 달라집니다!
          </h2>
          <div className="space-y-6 mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-2xl">💰</span>
                <span>참가비: <span className="font-bold text-green-400">무료</span></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">📅</span>
                <span>일시: 2025년 7월 25일(목) 오후 3시</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400 text-2xl">📍</span>
                <span>장소: 온라인 (Zoom 링크 별도 알림톡 안내)</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="flex items-center justify-center gap-6 mb-6">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-base font-bold">한정 100명</span>
                <span className="text-xl font-bold text-green-400">무료</span>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 w-full sm:w-auto border border-purple-400/50 flex items-center gap-3" aria-label="무료 웨비나 신청하기">
                <Link href="https://tally.so/r/nGE1Zk" target="_blank">
                  <span>👉</span> 무료 웨비나 신청하기
                </Link>
              </Button>
              <p className="text-sm text-gray-400 mt-4">* 선착순 마감, 신청 후 알림톡 발송</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-xs sm:text-sm text-gray-500 py-8 md:py-10 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p>ⓒ 2025 LVUP. All rights reserved.</p>
            <p className="mt-2 text-gray-400">문의: <a href="mailto:contact@lvup.com" className="underline hover:text-indigo-600">contact@lvup.com</a></p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#hero" className="hover:text-indigo-600">홈</a>
            <a href="#problem" className="hover:text-indigo-600">문제제기</a>
            <a href="#instructor" className="hover:text-indigo-600">강의자</a>
            <a href="#content" className="hover:text-indigo-600">웨비나내용</a>
            <a href="#benefits" className="hover:text-indigo-600">참가혜택</a>
            <a href="#testimonials" className="hover:text-indigo-600">후기</a>
            <a href="#brand" className="hover:text-indigo-600">브랜드소개</a>
            <a href="#recommend" className="hover:text-indigo-600">추천대상</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 