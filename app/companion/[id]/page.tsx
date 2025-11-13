'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function CompanionProfilePage() {
  const params = useParams();
  const router = useRouter();
  const companionId = params.id as string;

  // Mock companion data
  const companions: Record<string, {
    id: string;
    name: string;
    avatar: string;
    headerImage: string;
    gender: 'male' | 'female';
    age: number;
    location: string;
    isOnline: boolean;
    startingPrice: number;
    badge?: 'gold' | 'silver' | 'bronze';
    tags: string[];
    signature?: string;
    services: {
      category: string;
      items: {
        name: string;
        price: number;
      }[];
    }[];
  }> = {
    '1': {
      id: '1',
      name: 'Michael Smith',
      avatar: '/profile/1.jpg',
      headerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      gender: 'male',
      age: 30,
      location: 'New York, USA',
      isOnline: true,
      startingPrice: 40,
      badge: 'gold',
      tags: ['Mature & Experienced', 'Magnetic Bass', 'Emotional Guide', 'Quick Solve'],
      signature: 'Here to listen and guide you through life\'s challenges.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 40 },
            { name: 'One hour', price: 70 },
            { name: 'One day', price: 120 },
            { name: 'One week', price: 640 },
            { name: 'One month', price: 2130 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 70 },
            { name: 'One hour', price: 120 },
            { name: 'One day', price: 388 },
          ],
        },
        {
          category: 'Game Play',
          items: [
            { name: 'Half hour', price: 70 },
            { name: 'One hour', price: 120 },
          ],
        },
        {
          category: 'Buyout',
          items: [
            { name: 'Buyout Text/Voice One day', price: 360 },
            { name: 'Buyout Text/Voice One week', price: 2000 },
            { name: 'Buyout Text/Voice One month', price: 6999 },
            { name: 'Buyout Voice Call One day', price: 1100 },
            { name: 'Buyout Voice Call One week', price: 3300 },
            { name: 'Buyout Voice Call One month', price: 8800 },
          ],
        },
      ],
    },
    '2': {
      id: '2',
      name: 'Lily Anderson',
      avatar: '/profile/2.png',
      headerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
      gender: 'female',
      age: 24,
      location: 'Los Angeles, USA',
      isOnline: false,
      startingPrice: 35,
      tags: ['Sweet Voice', 'Comforting', 'Friendly', 'Patient Listener'],
      signature: 'Your warm-hearted companion for emotional support.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 35 },
            { name: 'One hour', price: 60 },
            { name: 'One day', price: 100 },
            { name: 'One week', price: 550 },
            { name: 'One month', price: 1800 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 60 },
            { name: 'One hour', price: 100 },
            { name: 'One day', price: 320 },
          ],
        },
      ],
    },
    '3': {
      id: '3',
      name: 'David White',
      avatar: '/profile/3.webp',
      headerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop',
      gender: 'male',
      age: 28,
      location: 'Chicago, USA',
      isOnline: true,
      startingPrice: 45,
      badge: 'gold',
      tags: ['Professional', 'Business Advisor', 'Strategic Thinker', 'Wise Counselor'],
      signature: 'Strategic guidance for your personal and professional growth.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 45 },
            { name: 'One hour', price: 80 },
            { name: 'One day', price: 140 },
            { name: 'One week', price: 720 },
            { name: 'One month', price: 2400 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 80 },
            { name: 'One hour', price: 140 },
            { name: 'One day', price: 450 },
          ],
        },
        {
          category: 'Game Play',
          items: [
            { name: 'Half hour', price: 80 },
            { name: 'One hour', price: 140 },
          ],
        },
      ],
    },
    '4': {
      id: '4',
      name: 'Emma Williams',
      avatar: '/profile/4.jpeg',
      headerImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop',
      gender: 'female',
      age: 26,
      location: 'Seattle, USA',
      isOnline: true,
      startingPrice: 38,
      tags: ['Sweet Voice', 'Comforting', '24/7 Available', 'Friendly'],
      signature: 'Always here to bring comfort and joy to your day.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 38 },
            { name: 'One hour', price: 65 },
            { name: 'One day', price: 110 },
            { name: 'One week', price: 600 },
            { name: 'One month', price: 2000 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 65 },
            { name: 'One hour', price: 110 },
            { name: 'One day', price: 350 },
          ],
        },
      ],
    },
    '5': {
      id: '5',
      name: 'James Miller',
      avatar: '/profile/5.jpeg',
      headerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
      gender: 'male',
      age: 32,
      location: 'Boston, USA',
      isOnline: true,
      startingPrice: 50,
      badge: 'gold',
      tags: ['Professional', 'Business Advisor', 'Strategic Thinker'],
      signature: 'Expert advice for career and life decisions.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 50 },
            { name: 'One hour', price: 90 },
            { name: 'One day', price: 150 },
            { name: 'One week', price: 800 },
            { name: 'One month', price: 2600 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 90 },
            { name: 'One hour', price: 150 },
            { name: 'One day', price: 480 },
          ],
        },
      ],
    },
    '6': {
      id: '6',
      name: 'Sarah Johnson',
      avatar: '/profile/6.png',
      headerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
      gender: 'female',
      age: 22,
      location: 'Miami, USA',
      isOnline: false,
      startingPrice: 32,
      tags: ['Energetic', 'Cheerful', 'Youthful Spirit', 'Positive Vibes'],
      signature: 'Bringing energy and positivity to every conversation!',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 32 },
            { name: 'One hour', price: 55 },
            { name: 'One day', price: 95 },
            { name: 'One week', price: 520 },
            { name: 'One month', price: 1700 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 55 },
            { name: 'One hour', price: 95 },
            { name: 'One day', price: 300 },
          ],
        },
        {
          category: 'Game Play',
          items: [
            { name: 'Half hour', price: 55 },
            { name: 'One hour', price: 95 },
          ],
        },
      ],
    },
    '7': {
      id: '7',
      name: 'Jade Stone',
      avatar: '/profile/8.webp',
      headerImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
      gender: 'female',
      age: 27,
      location: 'Portland, USA',
      isOnline: true,
      startingPrice: 42,
      badge: 'gold',
      tags: ['Elegant', 'Sophisticated', 'Artistic', 'Creative'],
      signature: 'Bringing elegance and creativity to every interaction.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 42 },
            { name: 'One hour', price: 75 },
            { name: 'One day', price: 130 },
            { name: 'One week', price: 680 },
            { name: 'One month', price: 2200 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 75 },
            { name: 'One hour', price: 130 },
            { name: 'One day', price: 400 },
          ],
        },
      ],
    },
    '8': {
      id: '8',
      name: 'Christopher Dunn',
      avatar: '/profile/9.webp',
      headerImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop',
      gender: 'male',
      age: 29,
      location: 'Denver, USA',
      isOnline: true,
      startingPrice: 48,
      badge: 'gold',
      tags: ['Adventurous', 'Outgoing', 'Motivational', 'Life Coach'],
      signature: 'Inspiring you to reach new heights and embrace adventure.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 48 },
            { name: 'One hour', price: 85 },
            { name: 'One day', price: 145 },
            { name: 'One week', price: 750 },
            { name: 'One month', price: 2400 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 85 },
            { name: 'One hour', price: 145 },
            { name: 'One day', price: 450 },
          ],
        },
        {
          category: 'Game Play',
          items: [
            { name: 'Half hour', price: 85 },
            { name: 'One hour', price: 145 },
          ],
        },
      ],
    },
    '9': {
      id: '9',
      name: 'Alex Thompson',
      avatar: '/profile/10.webp',
      headerImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop',
      gender: 'male',
      age: 31,
      location: 'Austin, USA',
      isOnline: false,
      startingPrice: 46,
      tags: ['Tech-Savvy', 'Innovative', 'Problem Solver', 'Analytical'],
      signature: 'Tech enthusiast ready to help you navigate the digital world.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 46 },
            { name: 'One hour', price: 80 },
            { name: 'One day', price: 135 },
            { name: 'One week', price: 700 },
            { name: 'One month', price: 2300 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 80 },
            { name: 'One hour', price: 135 },
            { name: 'One day', price: 420 },
          ],
        },
      ],
    },
    '10': {
      id: '10',
      name: 'Blake Stone',
      avatar: '/profile/11.webp',
      headerImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop',
      gender: 'male',
      age: 26,
      location: 'Nashville, USA',
      isOnline: true,
      startingPrice: 44,
      tags: ['Musical', 'Expressive', 'Emotional Support', 'Creative'],
      signature: 'Music and conversation to soothe your soul.',
      services: [
        {
          category: 'Text/Voice Messages',
          items: [
            { name: 'Half hour', price: 44 },
            { name: 'One hour', price: 78 },
            { name: 'One day', price: 125 },
            { name: 'One week', price: 650 },
            { name: 'One month', price: 2100 },
          ],
        },
        {
          category: 'Voice Call',
          items: [
            { name: 'Half hour', price: 78 },
            { name: 'One hour', price: 125 },
            { name: 'One day', price: 380 },
          ],
        },
        {
          category: 'Game Play',
          items: [
            { name: 'Half hour', price: 78 },
            { name: 'One hour', price: 125 },
          ],
        },
      ],
    },
  };

  const companion = companions[companionId] || companions['1'];

  return (
    <div className="min-h-screen w-full bg-white pb-20">
      {/* Header Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={companion.headerImage}
          alt={companion.name}
          fill
          className="object-cover"
        />
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]"
        >
          <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]">
        <div className="px-4 pt-4 pb-6">
          {/* Profile Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-lg overflow-hidden relative">
                <Image
                  src={companion.avatar}
                  alt={companion.name}
                  fill
                  className="object-cover"
                />
              </div>
              {companion.badge && (
                <div className="absolute -bottom-1 -right-1 bg-amber-400 text-white text-xs font-bold px-2 py-0.5 rounded">
                  Gold
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl font-bold text-stone-700">{companion.name}</h1>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${companion.isOnline ? 'bg-emerald-400' : 'bg-stone-300'}`}></div>
                <span className="text-sm text-stone-500">{companion.isOnline ? 'Online' : 'Offline'}</span>
              </div>
              <div className="text-sm text-stone-600 mb-2">
                <span className={companion.gender === 'male' ? 'text-sky-400' : 'text-rose-400'}>
                  {companion.gender === 'male' ? '♂' : '♀'}
                </span>
                {' '}
                {companion.age} years old • {companion.location} • Starting from {companion.startingPrice} Sweet Coins
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {companion.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-emerald-50/40 text-emerald-600 text-xs px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-sky-100/40 text-sky-500 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </button>
            </div>
          </div>

          {/* Signature */}
          {companion.signature && (
            <div className="mb-4 pb-4 border-b border-rose-100/40">
              <div className="text-sm text-stone-500 mb-1">Signature:</div>
              <div className="text-sm text-stone-700">{companion.signature}</div>
            </div>
          )}

          {/* Services Table */}
          <div className="mb-6">
            <div className="bg-sky-100/40 rounded-t-lg px-4 py-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-stone-700">Service Items</span>
              <span className="text-sm font-semibold text-stone-700">Price</span>
            </div>
            <div className="border border-rose-100/40 rounded-b-lg overflow-hidden">
              {companion.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="border-b border-rose-100/40 last:border-b-0">
                  <div className="bg-rose-50/20 px-4 py-2">
                    <span className="text-sm font-medium text-stone-700">{service.category}</span>
                  </div>
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-4 py-2.5 flex items-center justify-between border-b border-rose-100/20 last:border-b-0"
                    >
                      <span className="text-sm text-stone-600">{item.name}</span>
                      <span className="text-sm font-medium text-stone-700">{item.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-2 text-xs text-stone-400 px-2">
              Note: Daily, weekly, monthly packages require a cumulative chat duration of no less than 5 hours per day~
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-white border border-rose-100/40 text-stone-600 text-sm font-medium py-3 rounded-lg shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]">
              Tip
            </button>
            <button
              className={`flex-1 text-sm font-medium py-3 rounded-lg shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] ${
                companion.isOnline
                  ? 'bg-emerald-100/40 text-emerald-600'
                  : 'bg-stone-100/40 text-stone-500'
              }`}
            >
              {companion.isOnline ? 'Companion Online' : 'Companion Offline'}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100/40 max-w-[428px] mx-auto">
        <div className="flex items-center py-2">
          <Link href="/" className="flex-1 flex flex-col items-center gap-1 py-1">
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

