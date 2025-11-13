import BannerCarousel from './components/BannerCarousel';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white pb-20">
      {/* Search Bar */}
      <div className="bg-white px-4 py-3 border-b border-rose-100/40">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 bg-rose-50/40 rounded-lg px-3 py-2.5">
            <svg className="w-5 h-5 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search companion" 
              className="flex-1 bg-transparent text-sm outline-none text-stone-500"
            />
          </div>
          <button className="bg-sky-100/40 text-sky-400 px-4 py-2.5 rounded text-sm font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Banner/Advertisement with Carousel */}
      <div className="mx-4 mt-4 mb-4">
        <BannerCarousel />
      </div>

      {/* Notification Bar */}
      <div className="mx-4 mb-4">
        <div className="bg-emerald-100/40 text-emerald-500 px-4 py-2.5 rounded text-sm">
          [Michael Smith] received 40 sweet coins from a guest
        </div>
      </div>

      {/* New Recommendations Section */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-bold text-stone-700 mb-3">New Recommendations</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <Link href="/companion/7" className="flex-shrink-0 w-20 text-center hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 rounded-lg mb-2 mx-auto relative overflow-hidden">
              <Image 
                src="/profile/8.webp" 
                alt="Jade Stone" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-5 h-3 bg-sky-100/30 rounded-bl-lg rounded-tr flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                  <div className="w-0.5 h-2 bg-white rounded"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600">Jade Stone</div>
          </Link>
          <Link href="/companion/8" className="flex-shrink-0 w-20 text-center hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 rounded-lg mb-2 mx-auto relative overflow-hidden">
              <Image 
                src="/profile/9.webp" 
                alt="Christopher Dunn" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-5 h-3 bg-emerald-100/30 rounded-bl-lg rounded-tr flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                  <div className="w-0.5 h-2 bg-white rounded"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600">Christopher Dunn</div>
          </Link>
          <Link href="/companion/9" className="flex-shrink-0 w-20 text-center hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 rounded-lg mb-2 mx-auto relative overflow-hidden">
              <Image 
                src="/profile/10.webp" 
                alt="Alex Thompson" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-5 h-3 bg-amber-100/30 rounded-bl-lg rounded-tr flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                  <div className="w-0.5 h-2 bg-white rounded"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600">Alex Thompson</div>
          </Link>
          <Link href="/companion/10" className="flex-shrink-0 w-20 text-center hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 rounded-lg mb-2 mx-auto relative overflow-hidden">
              <Image 
                src="/profile/11.webp" 
                alt="Blake Stone" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-5 h-3 bg-violet-100/30 rounded-bl-lg rounded-tr flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                  <div className="w-0.5 h-2 bg-white rounded"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded"></div>
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-600">Blake Stone</div>
          </Link>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-4 mb-4">
        <div className="flex gap-2">
          <button className="flex-1 border border-rose-100/40 rounded text-sm text-stone-500 px-3 py-2.5 text-left bg-white">
            Category: All
          </button>
          <button className="flex-1 border border-rose-100/40 rounded text-sm text-stone-500 px-3 py-2.5 text-left bg-white">
            Gender: All
          </button>
          <button className="flex-1 border border-rose-100/40 rounded text-sm text-stone-500 px-3 py-2.5 text-left bg-white">
            Level: All
          </button>
        </div>
      </div>

      {/* User Profile Cards */}
      <div className="px-4 space-y-2">
        {/* Profile 1: Michael Smith */}
        <Link href="/companion/1" className="bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] border border-rose-50/40 flex items-start gap-3 hover:bg-rose-50/20 transition-colors">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden relative">
              <Image 
                src="/profile/1.jpg" 
                alt="Michael Smith" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-6 h-4 bg-sky-100/30 rounded-bl-lg rounded-tr flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-2 bg-white rounded"></div>
                <div className="w-0.5 h-3 bg-white rounded"></div>
                <div className="w-0.5 h-2 bg-white rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-stone-700">Michael Smith</span>
              <span className="text-xs text-sky-400 bg-sky-50/40 px-3 py-1 rounded-full inline-flex items-center justify-center">♂</span>
              <span className="text-sm text-stone-500">30</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-sky-50/40 text-sky-400 text-xs px-2 py-0.5 rounded">Online|Voice|Hotline</span>
              <div className="w-3 h-3 bg-amber-100/40 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Magnetic Bass</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Emotional Guide</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Quick Solve</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Mature & Experienced</span>
              
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Profile 2: Lily Anderson */}
        <Link href="/companion/2" className="bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] border border-rose-50/40 flex items-start gap-3 hover:bg-rose-50/20 transition-colors">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden relative">
              <Image 
                src="/profile/2.png" 
                alt="Lily Anderson" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-stone-700">Lily Anderson</span>
              <span className="text-xs text-rose-400 bg-rose-50/40 px-3 py-1 rounded-full inline-flex items-center justify-center">♀</span>
              <span className="text-sm text-stone-500">24</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="bg-sky-50/40 text-sky-400 text-xs px-2 py-0.5 rounded">Online|Voice</span>
              <div className="w-3 h-3 bg-amber-100/40 rounded-full"></div>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Profile 3: David White */}
        <Link href="/companion/3" className="bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] border border-rose-50/40 flex items-start gap-3 hover:bg-rose-50/20 transition-colors">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden relative">
              <Image 
                src="/profile/3.webp" 
                alt="David White" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-6 h-4 bg-emerald-100/30 rounded-bl-lg rounded-tr flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-2 bg-white rounded"></div>
                <div className="w-0.5 h-3 bg-white rounded"></div>
                <div className="w-0.5 h-2 bg-white rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-stone-700">David White</span>
              <span className="text-xs text-sky-400 bg-sky-50/40 px-3 py-1 rounded-full inline-flex items-center justify-center">♂</span>
              <span className="text-sm text-stone-500">28</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-sky-50/40 text-sky-400 text-xs px-2 py-0.5 rounded">Online|Voice|Video</span>
              <div className="w-3 h-3 bg-emerald-100/40 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Deep Voice</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Patient Listener</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Wise Counselor</span>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Profile 4: Emma Williams */}
        <Link href="/companion/4" className="bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] border border-rose-50/40 flex items-start gap-3 hover:bg-rose-50/20 transition-colors">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden relative">
              <Image 
                src="/profile/4.jpeg" 
                alt="Emma Williams" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-stone-700">Emma Williams</span>
              <span className="text-xs text-rose-400 bg-rose-50/40 px-3 py-1 rounded-full inline-flex items-center justify-center">♀</span>
              <span className="text-sm text-stone-500">26</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-sky-50/40 text-sky-400 text-xs px-2 py-0.5 rounded">Online|Voice|Hotline</span>
              <div className="w-3 h-3 bg-amber-100/40 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Sweet Voice</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Comforting</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">24/7 Available</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Friendly</span>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Profile 5: James Miller */}
        <Link href="/companion/5" className="bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] border border-rose-50/40 flex items-start gap-3 hover:bg-rose-50/20 transition-colors">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden relative">
              <Image 
                src="/profile/5.jpeg" 
                alt="James Miller" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-6 h-4 bg-amber-100/30 rounded-bl-lg rounded-tr flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-2 bg-white rounded"></div>
                <div className="w-0.5 h-3 bg-white rounded"></div>
                <div className="w-0.5 h-2 bg-white rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-stone-700">James Miller</span>
              <span className="text-xs text-sky-400 bg-sky-50/40 px-3 py-1 rounded-full inline-flex items-center justify-center">♂</span>
              <span className="text-sm text-stone-500">32</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-sky-50/40 text-sky-400 text-xs px-2 py-0.5 rounded">Online|Voice</span>
              <div className="w-3 h-3 bg-amber-100/40 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Professional</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Business Advisor</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Strategic Thinker</span>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Profile 6: Sarah Johnson */}
        <Link href="/companion/6" className="bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] border border-rose-50/40 flex items-start gap-3 hover:bg-rose-50/20 transition-colors">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden relative">
              <Image 
                src="/profile/6.png" 
                alt="Sarah Johnson" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-stone-700">Sarah Johnson</span>
              <span className="text-xs text-rose-400 bg-rose-50/40 px-3 py-1 rounded-full inline-flex items-center justify-center">♀</span>
              <span className="text-sm text-stone-500">22</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-sky-50/40 text-sky-400 text-xs px-2 py-0.5 rounded">Online|Voice|Video</span>
              <div className="w-3 h-3 bg-emerald-100/40 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Energetic</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Cheerful</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Youthful Spirit</span>
              <span className="border border-rose-200/30 text-rose-400 text-xs px-2 py-0.5 rounded-full">Positive Vibes</span>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100/40 max-w-[428px] mx-auto">
        <div className="flex items-center py-2">
          <button className="flex-1 flex flex-col items-center gap-1 py-1">
            <div className="relative w-6 h-6">
              <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-sky-400 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
            </div>
            <span className="text-xs text-sky-400">Find</span>
          </button>
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
            <svg className="w-6 h-6 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm11 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-5.5-4c.83 0 1.5-.67 1.5-1.5S12.33 7 11.5 7 10 7.67 10 8.5 10.67 10 11.5 10z"/>
            </svg>
            <span className="text-xs text-stone-500">Sweet Shop</span>
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
