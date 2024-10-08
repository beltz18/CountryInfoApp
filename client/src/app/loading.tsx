import React from 'react'
import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-400 to-sky-200">
        <div className="w-48 h-48 mb-8 relative">
          <svg
            className="animate-spin-slow"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E0F2FE"
              strokeWidth="7"
            />
            <path
              d="M50 5 A45 45 0 0 1 50 95 A45 45 0 0 1 50 5 Z"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="7"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M5 50 A45 45 0 0 0 95 50 A45 45 0 0 0 5 50 Z"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="7"
              opacity="0.3"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-sky-600 animate-spin" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-sky-900 mb-4">Loading</h1>
        <p className="text-sky-700">We are preparing things for you...</p>
      </div>
    </>
  )
}

export default Loading