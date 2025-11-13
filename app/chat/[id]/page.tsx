'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ChatPage() {
  const params = useParams();
  const router = useRouter();
  const chatId = params.id as string;
  const [message, setMessage] = useState('');

  // Mock conversation data based on chat ID
  const conversations: Record<string, {
    name: string;
    avatar: string;
    gender: 'male' | 'female';
    isOnline: boolean;
    messages: Array<{
      id: string;
      text: string;
      sender: 'user' | 'companion';
      time: string;
    }>;
  }> = {
    '1': {
      name: 'Michael Smith',
      avatar: '/profile/1.jpg',
      gender: 'male',
      isOnline: true,
      messages: [
        { id: '1', text: 'Hello! How can I help you today?', sender: 'companion', time: '10:30 AM' },
        { id: '2', text: 'Hi! I\'m looking for someone to talk to about my day.', sender: 'user', time: '10:32 AM' },
        { id: '3', text: 'I\'d be happy to listen! Tell me about it.', sender: 'companion', time: '10:33 AM' },
        { id: '4', text: 'It\'s been a really stressful week at work. I feel overwhelmed.', sender: 'user', time: '10:35 AM' },
        { id: '5', text: 'I understand how that feels. Work stress can be really challenging. What specifically is making you feel overwhelmed?', sender: 'companion', time: '10:36 AM' },
        { id: '6', text: 'Just too many deadlines and not enough time. Thanks for listening!', sender: 'user', time: '10:40 AM' },
        { id: '7', text: 'You\'re welcome! Remember, it\'s okay to take breaks and prioritize your well-being. Thanks for the great conversation!', sender: 'companion', time: '10:42 AM' },
      ],
    },
    '2': {
      name: 'Lily Anderson',
      avatar: '/profile/2.png',
      gender: 'female',
      isOnline: false,
      messages: [
        { id: '1', text: 'Hey there! 👋', sender: 'companion', time: 'Yesterday' },
        { id: '2', text: 'Hi Lily! How are you?', sender: 'user', time: 'Yesterday' },
        { id: '3', text: 'I\'m doing great, thanks for asking! I\'ll be available later today if you want to chat.', sender: 'companion', time: 'Yesterday' },
      ],
    },
    '3': {
      name: 'David White',
      avatar: '/profile/3.webp',
      gender: 'male',
      isOnline: true,
      messages: [
        { id: '1', text: 'Good morning! Ready for our session?', sender: 'companion', time: '9:00 AM' },
        { id: '2', text: 'Yes, I am!', sender: 'user', time: '9:05 AM' },
        { id: '3', text: 'Perfect! That sounds like a great plan. Let\'s dive in.', sender: 'companion', time: '9:06 AM' },
      ],
    },
    '4': {
      name: 'Emma Williams',
      avatar: '/profile/4.jpeg',
      gender: 'female',
      isOnline: false,
      messages: [
        { id: '1', text: 'Thank you for the wonderful conversation yesterday!', sender: 'companion', time: '2 days ago' },
        { id: '2', text: 'You\'re so welcome! Have a wonderful day!', sender: 'user', time: '2 days ago' },
      ],
    },
    '5': {
      name: 'James Miller',
      avatar: '/profile/5.jpeg',
      gender: 'male',
      isOnline: true,
      messages: [
        { id: '1', text: 'Hello! I\'m here to help with any questions you might have.', sender: 'companion', time: '11:00 AM' },
        { id: '2', text: 'Thanks! Let me know if you need anything.', sender: 'user', time: '11:15 AM' },
      ],
    },
    '6': {
      name: 'Sarah Johnson',
      avatar: '/profile/6.png',
      gender: 'female',
      isOnline: false,
      messages: [
        { id: '1', text: 'Hi! Thanks for reaching out! How can I assist you today?', sender: 'companion', time: '1 week ago' },
        { id: '2', text: 'Just wanted to say hello!', sender: 'user', time: '1 week ago' },
      ],
    },
  };

  const conversation = conversations[chatId] || conversations['1'];

  const handleSend = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-rose-100/40 flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="flex items-center justify-center w-8 h-8"
        >
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <Link href={`/chat/${chatId}`} className="flex items-center gap-3 flex-1">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg overflow-hidden relative">
              <Image 
                src={conversation.avatar} 
                alt={conversation.name} 
                fill
                className="object-cover"
              />
            </div>
            {conversation.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-100/40 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-stone-700">{conversation.name}</h1>
              <span className={`text-xs ${conversation.gender === 'male' ? 'text-sky-400 bg-sky-50/40' : 'text-rose-400 bg-rose-50/40'} px-2 py-0.5 rounded-full inline-flex items-center justify-center`}>
                {conversation.gender === 'male' ? '♂' : '♀'}
              </span>
            </div>
            <p className="text-xs text-stone-400">
              {conversation.isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        </Link>
        <button className="p-2">
          <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-24">
        {conversation.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] rounded-lg p-3 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] ${
              msg.sender === 'user'
                ? 'bg-sky-50/40 text-stone-700'
                : 'bg-rose-50/40 text-stone-700'
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className="text-xs text-stone-400 mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-rose-100/40 max-w-[428px] mx-auto px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="p-2 text-stone-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <div className="flex-1 flex items-center gap-2 bg-rose-50/40 rounded-full px-4 py-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm outline-none text-stone-700 placeholder-stone-400"
            />
            <button className="text-stone-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className={`p-2 rounded-full ${
              message.trim()
                ? 'bg-sky-100/40 text-sky-500'
                : 'bg-stone-100 text-stone-300'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
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

