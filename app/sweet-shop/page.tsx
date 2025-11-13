'use client';

import Link from 'next/link';

export default function SweetShopPage() {
  return (
    <div className="min-h-screen w-full bg-white pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b-4 border-black">
        <h1 className="text-2xl font-black text-black">SWEET SHOP</h1>
      </div>

      {/* Bento Grid - Full Page */}
      <div className="p-4 h-[calc(100vh-120px)]">
        <div className="grid grid-cols-2 auto-rows-fr gap-4 h-full">
          {/* Random Order - Large 2x2 */}
          <button
            className="col-span-2 row-span-2 bg-yellow-400 text-black border-4 border-black p-6 flex flex-col items-center justify-center gap-4 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-xl font-black text-center uppercase leading-tight">Random Order</span>
          </button>

          {/* Lull to Sleep - 1x1 */}
          <button
            className="bg-pink-400 text-black border-4 border-black p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <text x="10" y="16" fontSize="10" fontWeight="bold" fill="currentColor">Zz</text>
            </svg>
            <span className="text-sm font-black text-center uppercase leading-tight">Lull to Sleep</span>
          </button>

          {/* Ecosystem - 1x1 */}
          <button
            className="bg-amber-100 text-purple-900 border-4 border-black p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <rect x="8" y="12" width="8" height="2" rx="1"/>
              <rect x="6" y="16" width="12" height="2" rx="1"/>
              <rect x="4" y="20" width="16" height="2" rx="1"/>
              <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span className="text-sm font-black text-center uppercase leading-tight">Ecosystem</span>
          </button>

          {/* Request a Song - 1x1 */}
          <button
            className="bg-teal-600 text-white border-4 border-black p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
            <span className="text-sm font-black text-center uppercase leading-tight">Request a Song</span>
          </button>

          {/* Script Murder Mystery - 1x1 */}
          <button
            className="bg-purple-600 text-white border-4 border-black p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <ellipse cx="12" cy="14" rx="6" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
              <circle cx="14" cy="12" r="1.5" fill="currentColor"/>
            </svg>
            <span className="text-sm font-black text-center uppercase leading-tight">Script Murder</span>
          </button>

          {/* Magic Box - 1x1 */}
          <button
            className="bg-white text-black border-4 border-black p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 6h8M8 10h8M8 14h8" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span className="text-sm font-black text-center uppercase leading-tight">Magic Box</span>
          </button>

          {/* Voice Transmission - Full Width */}
          <button
            className="col-span-2 bg-blue-700 text-white border-4 border-black p-5 flex flex-row items-center justify-between gap-4 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <div className="flex flex-col gap-2">
              <span className="text-lg font-black uppercase">Voice Transmission</span>
            </div>
            <svg className="w-12 h-12 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M9 21h6" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </button>

          {/* Fortune-telling - Full Width */}
          <button
            className="col-span-2 bg-blue-700 text-white border-4 border-black p-5 flex flex-row items-center justify-between gap-4 transition-transform hover:scale-[0.98] active:scale-[0.96]"
          >
            <div className="flex flex-col gap-2">
              <span className="text-lg font-black uppercase">Sweetness Fortune-telling</span>
            </div>
            <svg className="w-12 h-12 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect x="16" y="8" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black max-w-[428px] mx-auto">
        <div className="flex items-center py-2">
          <Link 
            href="/"
            className="flex-1 flex flex-col items-center gap-1 py-1"
          >
            <div className="relative w-6 h-6">
              <svg className="w-6 h-6 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-stone-300 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
            </div>
            <span className="text-xs text-stone-500">Find</span>
          </Link>
          <Link href="/random" className="flex-1 flex flex-col items-center gap-1 py-1">
            <svg className="w-6 h-6 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-xs text-stone-500">Random</span>
          </Link>
          <Link href="/chat" className="flex-1 flex flex-col items-center gap-1 py-1">
            <svg className="w-6 h-6 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs text-stone-500">Chat</span>
          </Link>
          <Link href="/sweet-shop" className="flex-1 flex flex-col items-center gap-1 py-1">
            <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm11 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-5.5-4c.83 0 1.5-.67 1.5-1.5S12.33 7 11.5 7 10 7.67 10 8.5 10.67 10 11.5 10z"/>
            </svg>
            <span className="text-xs text-sky-400">Sweet Shop</span>
          </Link>
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-1 py-1">
            <svg className="w-6 h-6 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="text-xs text-stone-500">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
