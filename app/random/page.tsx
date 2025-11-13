'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RandomOrderPage() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>('normal');
  const [selectedServiceType, setSelectedServiceType] = useState<string>('text-voice');
  const [quantity, setQuantity] = useState(1);
  const [otherRequirements, setOtherRequirements] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [excludeOrdered, setExcludeOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'balance' | 'card'>('balance');

  const staffLevels = [
    { id: 'normal', label: 'Normal' },
    { id: 'gold', label: 'Gold' },
    { id: 'store', label: 'Store' },
    { id: 'god', label: 'God-tier' },
  ];

  const serviceTypes = [
    { id: 'text-voice', label: 'Text/Voice Message' },
    { id: 'voice-call', label: 'Voice Call' },
  ];

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="min-h-screen w-full bg-white pb-24">
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
        <h1 className="text-base font-semibold text-stone-700">Random Order</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Gender Selection */}
        <div>
          <h2 className="text-sm font-medium text-stone-600 mb-3">Who would you like to chat with?</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedGender('male')}
              className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                selectedGender === 'male'
                  ? 'border-sky-200/50 bg-sky-50/40 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]'
                  : 'border-rose-100/40 bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]'
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span className={`text-sm ${selectedGender === 'male' ? 'text-sky-400' : 'text-stone-500'}`}>
                Male
              </span>
            </button>
            <button
              onClick={() => setSelectedGender('female')}
              className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                selectedGender === 'female'
                  ? 'border-rose-200/50 bg-rose-50/40 shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]'
                  : 'border-rose-100/40 bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]'
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span className={`text-sm ${selectedGender === 'female' ? 'text-rose-400' : 'text-stone-500'}`}>
                Female
              </span>
            </button>
          </div>
        </div>

        {/* Staff Level Selection */}
        <div>
          <h2 className="text-sm font-medium text-stone-600 mb-3">What level of companion would you like to chat with?</h2>
          <div className="flex flex-wrap gap-2">
            {staffLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] ${
                  selectedLevel === level.id
                    ? 'bg-sky-50/40 text-sky-400 border border-sky-200/30'
                    : 'bg-white text-stone-500 border border-rose-100/40'
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Type Selection */}
        <div>
          <h2 className="text-sm font-medium text-stone-600 mb-3">Service Type</h2>
          <div className="flex flex-wrap gap-2">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedServiceType(type.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)] ${
                  selectedServiceType === type.id
                    ? 'bg-sky-50/40 text-sky-400 border border-sky-200/30'
                    : 'bg-white text-stone-500 border border-rose-100/40'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-stone-600">Order Details</h2>
          
          {/* Purchase Quantity */}
          <div>
            <label className="block text-xs text-stone-500 mb-2">Purchase Quantity</label>
            <div className="flex items-center gap-2 border border-rose-100/40 rounded-lg overflow-hidden bg-white">
              <button
                onClick={decrementQuantity}
                className="px-4 py-2.5 bg-sky-50/40 text-sky-400 font-medium"
              >
                -
              </button>
              <div className="flex-1 text-center py-2.5 text-stone-700 font-medium">
                {quantity}
              </div>
              <button
                onClick={incrementQuantity}
                className="px-4 py-2.5 bg-sky-50/40 text-sky-400 font-medium"
              >
                +
              </button>
            </div>
          </div>

          {/* Other Requirements */}
          <div>
            <label className="block text-xs text-stone-500 mb-2">Other Requirements</label>
            <input
              type="text"
              value={otherRequirements}
              onChange={(e) => setOtherRequirements(e.target.value)}
              placeholder="Enter any special requirements..."
              className="w-full px-3 py-2.5 border border-rose-100/40 rounded-lg text-sm text-stone-700 placeholder-stone-400 bg-white outline-none focus:border-sky-200/50"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-xs text-stone-500 mb-2">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your card number..."
              className="w-full px-3 py-2.5 border border-rose-100/40 rounded-lg text-sm text-stone-700 placeholder-stone-400 bg-white outline-none focus:border-sky-200/50"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExcludeOrdered(!excludeOrdered)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                excludeOrdered
                  ? 'border-emerald-300/50 bg-emerald-100/40'
                  : 'border-stone-300 bg-white'
              }`}
            >
              {excludeOrdered && (
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <label className="text-sm text-stone-600">
              Exclude companions who have already been ordered from
            </label>
          </div>
        </div>

        {/* Payment Options */}
        <div>
          <h2 className="text-sm font-medium text-stone-600 mb-3">Payment Method</h2>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod('balance')}
              className="w-full flex items-center gap-3 p-3 border border-rose-100/40 rounded-lg bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]"
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                paymentMethod === 'balance'
                  ? 'border-emerald-300/50 bg-emerald-100/40'
                  : 'border-stone-300 bg-white'
              }`}>
                {paymentMethod === 'balance' && (
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                )}
              </div>
              <svg className="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.81 0-1.79-1.49-2.69-3.66-3.21z"/>
              </svg>
              <span className="text-sm text-stone-600">Balance Payment</span>
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className="w-full flex items-center gap-3 p-3 border border-rose-100/40 rounded-lg bg-white shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]"
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                paymentMethod === 'card'
                  ? 'border-emerald-300/50 bg-emerald-100/40'
                  : 'border-stone-300 bg-white'
              }`}>
                {paymentMethod === 'card' && (
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                )}
              </div>
              <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-sm text-stone-600">Card Payment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-rose-100/40 max-w-[428px] mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <span className="text-sm text-stone-500">Total Price: </span>
          <span className="text-base font-semibold text-stone-700">$-</span>
        </div>
        <button className="px-6 py-2.5 bg-emerald-100/40 text-emerald-600 rounded-lg text-sm font-medium shadow-[0_1px_2px_0_rgb(0_0_0_/0.02)]">
          Order Now
        </button>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100/40 max-w-[428px] mx-auto">
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
            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-xs text-sky-400">Random</span>
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

