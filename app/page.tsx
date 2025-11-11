import BannerCarousel from './components/BannerCarousel';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white pb-20">
      {/* Search Bar */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2.5">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search companion" 
              className="flex-1 bg-transparent text-sm outline-none text-gray-600"
            />
          </div>
          <button className="bg-blue-100 text-blue-600 px-4 py-2.5 rounded text-sm font-medium">
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
        <div className="bg-green-500 text-white px-4 py-2.5 rounded text-sm">
          [Mu Chen] received 40 sweet coins from a guest
        </div>
      </div>

      {/* New Recommendations Section */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-bold text-black mb-3">New Recommendations</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex-shrink-0 w-20 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mb-2 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="text-xs text-black">Unknown</div>
          </div>
          <div className="flex-shrink-0 w-20 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg mb-2 mx-auto flex items-center justify-center">
              <div className="w-12 h-12 bg-green-300 rounded"></div>
            </div>
            <div className="text-xs text-black">Cao Dong</div>
          </div>
          <div className="flex-shrink-0 w-20 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mb-2 mx-auto flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
            </div>
            <div className="text-xs text-black">Xin Le</div>
          </div>
          <div className="flex-shrink-0 w-20 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mb-2 mx-auto flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
            </div>
            <div className="text-xs text-black">Bo Shi</div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-4 mb-4">
        <div className="flex gap-2">
          <button className="flex-1 border border-gray-300 rounded text-sm text-gray-600 px-3 py-2.5 text-left">
            Category: All
          </button>
          <button className="flex-1 border border-gray-300 rounded text-sm text-gray-600 px-3 py-2.5 text-left">
            Gender: All
          </button>
          <button className="flex-1 border border-gray-300 rounded text-sm text-gray-600 px-3 py-2.5 text-left">
            Level: All
          </button>
        </div>
      </div>

      {/* User Profile Cards */}
      <div className="px-4 space-y-2">
        {/* Profile 1: Mu Chen */}
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-start gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-6 h-4 bg-blue-400 rounded-bl-lg rounded-tr flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-2 bg-white rounded"></div>
                <div className="w-0.5 h-3 bg-white rounded"></div>
                <div className="w-0.5 h-2 bg-white rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-black">Mu Chen</span>
              <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-flex items-center justify-center">♂</span>
              <span className="text-sm text-gray-500">30</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">Online|Voice|Hotline</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full">Magnetic Bass</span>
              <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full">Emotional Guide</span>
              <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full">Quick Solve</span>
              <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full">Mature & Experienced</span>
              <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full">Night Owl</span>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Profile 2: Lin Li */}
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-start gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
              <svg className="w-10 h-10 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-black">Lin Li</span>
              <span className="text-xs text-pink-700 bg-pink-100 px-3 py-1 rounded-full inline-flex items-center justify-center">♀</span>
              <span className="text-sm text-gray-500">24</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">Online|Voice</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-[428px] mx-auto">
        <div className="flex items-center justify-around py-2">
          <button className="flex flex-col items-center gap-1 py-1">
            <div className="relative w-6 h-6">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-600">Select & Order</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-1">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-xs text-gray-600">Random Order</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-1">
            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm11 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-5.5-4c.83 0 1.5-.67 1.5-1.5S12.33 7 11.5 7 10 7.67 10 8.5 10.67 10 11.5 10z"/>
            </svg>
            <span className="text-xs text-gray-600">Sweet Shop</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-1">
            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="text-xs text-gray-600">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
