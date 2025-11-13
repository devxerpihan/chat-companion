'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ChatListPage() {
  const conversations = [
    {
      id: '1',
      name: 'Michael Smith',
      lastMessage: 'Thanks for the great conversation!',
      time: '2h ago',
      unread: 2,
      avatar: '/profile/1.jpg',
      isOnline: true,
      gender: 'male',
    },
    {
      id: '2',
      name: 'Lily Anderson',
      lastMessage: 'I\'ll be available later today',
      time: '5h ago',
      unread: 0,
      avatar: '/profile/2.png',
      isOnline: false,
      gender: 'female',
    },
    {
      id: '3',
      name: 'David White',
      lastMessage: 'That sounds like a great plan',
      time: '1d ago',
      unread: 1,
      avatar: '/profile/3.webp',
      isOnline: true,
      gender: 'male',
    },
    {
      id: '4',
      name: 'Emma Williams',
      lastMessage: 'Have a wonderful day!',
      time: '2d ago',
      unread: 0,
      avatar: '/profile/4.jpeg',
      isOnline: false,
      gender: 'female',
    },
    {
      id: '5',
      name: 'James Miller',
      lastMessage: 'Let me know if you need anything',
      time: '3d ago',
      unread: 0,
      avatar: '/profile/5.jpeg',
      isOnline: true,
      gender: 'male',
    },
    {
      id: '6',
      name: 'Sarah Johnson',
      lastMessage: 'Thanks for reaching out!',
      time: '1w ago',
      unread: 0,
      avatar: '/profile/6.png',
      isOnline: false,
      gender: 'female',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-rose-100/40">
        <h1 className="text-lg font-semibold text-stone-700">Chats</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 border-b border-rose-100/40">
        <div className="flex items-center gap-2 bg-rose-50/40 rounded-lg px-3 py-2.5">
          <svg className="w-5 h-5 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search conversations" 
            className="flex-1 bg-transparent text-sm outline-none text-stone-500"
          />
        </div>
      </div>

      {/* Conversation List */}
      <div className="px-4 py-2 space-y-1">
        {conversations.map((conversation) => (
          <Link
            key={conversation.id}
            href={`/chat/${conversation.id}`}
            className="bg-white rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] border border-rose-50/40 flex items-center gap-3 hover:bg-rose-50/20 transition-colors"
          >
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-lg overflow-hidden relative">
                <Image 
                  src={conversation.avatar} 
                  alt={conversation.name} 
                  fill
                  className="object-cover"
                />
              </div>
              {conversation.isOnline && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-100/40 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-semibold text-stone-700">{conversation.name}</span>
                <span className={`text-xs ${conversation.gender === 'male' ? 'text-sky-400 bg-sky-50/40' : 'text-rose-400 bg-rose-50/40'} px-2 py-0.5 rounded-full inline-flex items-center justify-center`}>
                  {conversation.gender === 'male' ? '♂' : '♀'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-stone-500 truncate flex-1">{conversation.lastMessage}</p>
                <div className="flex items-center gap-2 ml-2">
                  <span className="text-xs text-stone-400">{conversation.time}</span>
                  {conversation.unread > 0 && (
                    <span className="bg-sky-100/40 text-sky-500 text-xs font-medium px-2 py-0.5 rounded-full min-w-[20px] text-center">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
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
            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs text-sky-400">Chat</span>
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

