'use client'

import React, { useEffect } from 'react'
import Logo from '@/components/shared/logo'
import DiscordButton from '@/components/ui/discord-button';


const LoginContainer = ({ form }) => {

  useEffect(() => {
    // Function to initialize and resize the canvas
    const initializeCanvas = () => {
      const canvas = document.querySelector('canvas')
      const ctx = canvas.getContext('2d')

      // Set canvas dimensions
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Set up letters and columns
      const letters = '2345678901x?>./;%^&*()#'.split('')
      const fontSize = 24
      const columns = canvas.width / fontSize
      const drops = Array(Math.floor(columns)).fill(1)

      // Draw function
      const draw = () => {
        ctx.fillStyle = 'rgba(7, 7, 13, .1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        drops.forEach((drop, index) => {
          const text = letters[Math.floor(Math.random() * letters.length)]
          ctx.fillStyle = '#0f0'
          ctx.fillText(text, index * fontSize, drop * fontSize)
          drops[index] = drop + 1

          if (drops[index] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[index] = 0
          }
        })
      }

      // Loop the animation
      const intervalId = setInterval(draw, 60)

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId)
    }

    // Initialize canvas
    initializeCanvas()

    // Handle window resize
    window.addEventListener('resize', initializeCanvas)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', initializeCanvas)

  }, [])
  return (
    <div>
      <div
        className="py-10 px-4 flex min-h-full flex-1 flex-col justify-center bg-background/35  backdrop-blur-sm border border-border rounded-2xl sm:p-20 "
      >

        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo
            width={55}
            height={55}
          />

          <h2
            className="text-2xl mt-6 text-center font-semibold leading-9 tracking-tight text-foreground xs:text-3xl sm:text-4xl sm:mt-10 sm:mb-6">
            Login to your account
          </h2>
        </div>

        <div className="flex items-center mt-5">
          <div className="flex-grow border-t border-border"></div>
          <DiscordButton/>
          <div className="flex-grow border-t border-border"></div>
        </div>

        <div className="mx-3 mt-4 sm:mx-auto sm:w-full sm:max-w-screen-sm">
          {form}
        </div>
      </div>
    </div>
  )
}

export default LoginContainer
