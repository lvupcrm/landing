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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">1부</span>
                  <h3 className="font-semibold text-lg">노션 기초 설정 & 실습</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>피트니스 센터 전용 노션 템플릿 소개</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>회원 관리 시스템 구축</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>예약 및 결제 시스템 연동</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>실습: 내 센터에 바로 적용해보기</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">2부</span>
                  <h3 className="font-semibold text-lg">AI 자동화 시스템 & 실습</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>ChatGPT 활용 업무 자동화</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>고객 응대 자동화</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>마케팅 콘텐츠 자동 생성</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>실습: AI 자동화 직접 체험</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 강사 소개 */}
      <section id="instructor" className="w-full py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-8">👨‍🏫 강사 소개</h2>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                <span role="img" aria-label="강사">🧑‍💻</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-2">LVUP 피트니스</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3">
                  10년 이상의 현장 경험을 바탕으로 센터의 디지털 트랜스포메이션을 이끄는 전문가
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:scale-105 transition">피트니스 센터 운영 10년+</span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:scale-105 transition">노션 전문가</span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:scale-105 transition">AI 자동화 전문가</span>
                </div>
              </div>
            </div>
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

      {/* FAQ 섹션 */}
      <section id="faq" className="w-full max-w-3xl mx-auto py-10 md:py-14 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center">❓ 자주 묻는 질문</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow p-5">
            <div className="font-semibold mb-2">Q. 정말 무료인가요?</div>
            <div className="text-gray-600 text-sm">네, 본 강의는 한정 인원에 한해 100% 무료로 제공됩니다.</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <div className="font-semibold mb-2">Q. 강의 신청 후 바로 안내를 받을 수 있나요?</div>
            <div className="text-gray-600 text-sm">신청 즉시 확인 이메일이 발송됩니다. (스팸함도 확인해 주세요)</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <div className="font-semibold mb-2">Q. 실습은 어떻게 진행되나요?</div>
            <div className="text-gray-600 text-sm">실시간 Zoom에서 직접 실습하며, Q&A도 바로 진행합니다.</div>
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section id="review" className="w-full max-w-3xl mx-auto py-10 md:py-14 px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center">⭐ 수강생 후기</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-semibold">"노션과 AI 자동화 실습이 정말 실무에 바로 도움이 됐어요!"</span>
            </div>
            <div className="text-xs text-gray-500">- 김OO, 센터장</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-semibold">"무료인데도 커리큘럼이 알차고, 바로 적용할 수 있었습니다."</span>
            </div>
            <div className="text-xs text-gray-500">- 이OO, 트레이너</div>
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
              <p className="text-xs text-gray-400 mt-3">* 선착순 마감, 신청 후 즉시 확인 이메일 발송</p>
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
            <a href="#instructor" className="hover:text-indigo-600">강사소개</a>
            <a href="#recommend" className="hover:text-indigo-600">추천대상</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#review" className="hover:text-indigo-600">후기</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 