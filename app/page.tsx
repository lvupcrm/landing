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
            노션과 AI로 피트니스 센터<br className="hidden sm:block" />
            업무 자동화 시스템 구축하기
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 px-2 text-gray-200">
            어디서든 센터를 경영하라!<br />
            디지털 전환과 자동화의 첫걸음
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
              <span className="text-xs text-gray-300 mt-1">AI Tools</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex flex-col items-center w-16">
              <span className="text-2xl">🔧</span>
              <span className="text-xs text-gray-300 mt-1">Automation</span>
            </div>
          </div>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 border-2 border-purple-400/50 flex items-center gap-2 mx-auto" aria-label="무료 강의 신청하기">
            <Link href="https://tally.so/r/nGE1Zk" target="_blank">
              <span>👉</span> 무료 강의 신청하기
            </Link>
          </Button>
          <p className="text-xs text-gray-400 mt-4">* 신청 후 바로 확인 이메일 발송</p>
        </div>
      </section>

      {/* 강의 정보 */}
      <section id="info" className="w-full max-w-6xl py-12 md:py-16 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center">📚 강의 정보</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-2xl mb-2">📅</div>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">강의 일시</p>
              <p className="text-sm sm:text-lg font-semibold leading-tight">2025년 7월 25일 (금)<br />오후 3시</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-2xl mb-2">⏰</div>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">강의 시간</p>
              <p className="text-sm sm:text-lg font-semibold leading-tight">90분<br />실시간 강의</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-2xl mb-2">👥</div>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">수강 인원</p>
              <p className="text-sm sm:text-lg font-semibold leading-tight">한정 100명<br />선착순 마감</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-2xl mb-2">💰</div>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">수강료</p>
              <p className="text-sm sm:text-lg font-semibold text-green-600">무료</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 강의 커리큘럼 */}
      <section id="curriculum" className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center">📋 강의 커리큘럼</h2>
          <div className="flex flex-col gap-6">
            {/* 1️⃣ 오프닝 */}
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg md:text-xl">1️⃣</span>
                <span className="font-semibold text-base md:text-lg">오프닝</span>
              </div>
              <ul className="text-gray-700 text-sm md:text-base list-disc pl-5 space-y-1">
                <li>강의 진행 목적 및 간단한 소개</li>
                <li>센터 운영자가 노션 x AI 활용해야 하는 이유</li>
                <li>AI로 만든 팟캐스트로 노션 자동화 업무에 대한 간략한 소개</li>
              </ul>
            </div>
            {/* 2️⃣ 실제 사례 소개 */}
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg md:text-xl">2️⃣</span>
                <span className="font-semibold text-base md:text-lg">노션×AI 업무 자동화 실제 사례 소개</span>
              </div>
              <ul className="text-gray-700 text-sm md:text-base list-disc pl-5 space-y-1">
                <li>실제 센터 워크스페이스 시연 및 사례 공개</li>
                <li>Make와 GPT로 구현된 실제 업무 자동화 사례 시연</li>
                <li className="ml-4">- 커스텀 GPT 시연</li>
                <li className="ml-4">- 회의록 자동 요약 및 자동 매핑 시연</li>
                <li className="ml-4">- CRM 마케팅 자동화 시연</li>
              </ul>
            </div>
            {/* 3️⃣ 템플릿 & 솔루션 안내 */}
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg md:text-xl">3️⃣</span>
                <span className="font-semibold text-base md:text-lg">템플릿 & 솔루션 안내</span>
              </div>
              <ul className="text-gray-700 text-sm md:text-base list-disc pl-5 space-y-1">
                <li>즉시 도입 가능한 피트니스 운영 템플릿 소개 (회원관리, 상담관리, 매출관리 등)</li>
                <li>노션 템플릿을 직접 설치·구축하는 솔루션 안내</li>
                <li>맞춤형 솔루션 구축 서비스 소개</li>
              </ul>
            </div>
            {/* 4️⃣ 정규 과정 안내 */}
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg md:text-xl">4️⃣</span>
                <span className="font-semibold text-base md:text-lg">정규 과정 안내</span>
              </div>
              <ul className="text-gray-700 text-sm md:text-base list-disc pl-5 space-y-1">
                <li>센터 구조화 & 자동화를 직접 구축할 수 있는 정규 과정(8주 과정) 안내</li>
                <li>과정 상세 내용 및 수강생 기대효과 (업무 자동화 시스템 완성, 데이터 기반 운영, 매출 향상 등)</li>
              </ul>
            </div>
            {/* 5️⃣ Q&A 및 마무리 */}
            <div className="bg-white/90 rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg md:text-xl">5️⃣</span>
                <span className="font-semibold text-base md:text-lg">Q&A 및 마무리</span>
              </div>
              <ul className="text-gray-700 text-sm md:text-base list-disc pl-5 space-y-1">
                <li>운영자들이 주로 궁금해하는 현실적 질문과 답변</li>
              </ul>
            </div>
          </div>
          {/* 강의 자료 링크 */}
          <div className="mt-8 text-center">
            <a href="https://gamma.app/docs/x-AI--hmb3fwl2m0czp0u" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow hover:from-indigo-600 hover:to-purple-600 transition">
              📑 강의 자료 바로가기
            </a>
          </div>
        </div>
      </section>

      {/* LVUP 브랜드 소개 */}
      <section id="brand" className="w-full py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <span className="text-2xl">🏋️‍♂️</span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">LVUP 브랜드 소개</span>
          </h2>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-8 md:p-10 shadow-lg border border-gray-200 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-extrabold tracking-tight text-indigo-600">LVUP</span>
              <span className="text-base font-semibold text-gray-500">피트니스</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">더 쉽게 일하고, 강력하게 성장하는<br />피트니스 업무 시스템</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
              10년의 노하우로 완성된 피트니스 업무 체계와 매뉴얼을 누구나 실행 가능한 시스템으로 바꾸었습니다.<br />
              LVUP는 피트니스 종사자들의 성장을 돕고자 업계 노하우를 체계화하여<br />누구나 실행하고 성장할 수 있는 올인원 업무 시스템을 제공합니다.
            </p>
            <ul className="text-gray-700 text-sm sm:text-base mb-6 flex flex-col gap-2 items-center">
              <li className="flex items-center gap-2"><span className="text-indigo-500">✔️</span> 노션 기반, 클릭 한 번으로 복제</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500">✔️</span> 회원/직원/매출/마케팅 등 센터 운영 전반 지원</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500">✔️</span> 누구나 쉽게 적응, 완전한 커스터마이징 가능</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500">✔️</span> 성장에 도움이 되는 블로그/자료 제공</li>
            </ul>
            <a href="https://lvupfitness.kr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow hover:from-indigo-600 hover:to-purple-600 transition">
              LVUP 공식 사이트 바로가기 ↗
            </a>
          </div>
        </div>
      </section>

      {/* 추천 대상 */}
      <section id="recommend" className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">이런 분들께 추천합니다</span>
          </h2>
          <div className="flex flex-col gap-4 md:gap-5">
            {/* 카드 1 */}
            <div className="flex items-center gap-4 bg-white/90 rounded-2xl shadow-md px-5 py-6 md:py-7 md:px-7 border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all">
              <span className="text-3xl md:text-4xl flex-shrink-0">💼</span>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1">피트니스 센터 운영자</div>
                <div className="text-gray-500 text-sm md:text-base">업무 효율성을 높이고 싶은 분</div>
              </div>
            </div>
            {/* 카드 2 */}
            <div className="flex items-center gap-4 bg-white/90 rounded-2xl shadow-md px-5 py-6 md:py-7 md:px-7 border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all">
              <span className="text-3xl md:text-4xl flex-shrink-0">📱</span>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1">디지털 전환 희망자</div>
                <div className="text-gray-500 text-sm md:text-base">노션과 AI를 활용하고 싶은 분</div>
              </div>
            </div>
            {/* 카드 3 */}
            <div className="flex items-center gap-4 bg-white/90 rounded-2xl shadow-md px-5 py-6 md:py-7 md:px-7 border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all">
              <span className="text-3xl md:text-4xl flex-shrink-0">⚡</span>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1">업무 자동화 희망자</div>
                <div className="text-gray-500 text-sm md:text-base">반복 업무를 줄이고 싶은 분</div>
              </div>
            </div>
            {/* 카드 4 */}
            <div className="flex items-center gap-4 bg-white/90 rounded-2xl shadow-md px-5 py-6 md:py-7 md:px-7 border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all">
              <span className="text-3xl md:text-4xl flex-shrink-0">🚀</span>
              <div>
                <div className="font-semibold text-base md:text-lg mb-1">성장 지향적 분</div>
                <div className="text-gray-500 text-sm md:text-base">센터 운영을 혁신하고 싶은 분</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="w-full py-14 md:py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            노션과 AI 자동화로 센터의 운영을 혁신하세요
          </h2>
          <p className="mb-8 text-sm sm:text-base text-gray-300 leading-relaxed">
            반복 업무는 줄이고, 고객 만족도는 높이는<br className="hidden sm:block" />
            실질적인 전략을 지금 배워보세요!
          </p>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">한정 100명</span>
                <span className="text-lg font-bold text-green-400">무료</span>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 w-full sm:w-auto border border-purple-400/50 flex items-center gap-2" aria-label="무료 강의 신청하기">
                <Link href="https://tally.so/r/nGE1Zk" target="_blank">
                  <span>👉</span> 무료 강의 신청하기
                </Link>
              </Button>
              <p className="text-xs text-gray-400 mt-3">* 선착순 마감, 신청 후 알림톡 발송</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-xs sm:text-sm text-gray-500 py-6 md:py-8 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            <p>ⓒ 2025 LVUP. All rights reserved.</p>
            <p className="mt-2 text-gray-400">문의: <a href="mailto:contact@lvup.com" className="underline hover:text-indigo-600">contact@lvup.com</a></p>
          </div>
          <div className="flex gap-3 mt-2 md:mt-0">
            <a href="#hero" className="hover:text-indigo-600">홈</a>
            <a href="#info" className="hover:text-indigo-600">강의정보</a>
            <a href="#curriculum" className="hover:text-indigo-600">커리큘럼</a>
            <a href="#brand" className="hover:text-indigo-600">브랜드소개</a>
            <a href="#recommend" className="hover:text-indigo-600">추천대상</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#review" className="hover:text-indigo-600">후기</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 