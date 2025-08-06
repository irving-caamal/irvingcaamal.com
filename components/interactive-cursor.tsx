'use client'

import { useEffect, useState } from 'react'

export function InteractiveCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorType, setCursorType] = useState('default')

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || typeof target.matches !== 'function') return
      
      if (target.matches('button, a, [data-cursor="pointer"]')) {
        setIsHovering(true)
        setCursorType('pointer')
      } else if (target.matches('[data-cursor="text"]')) {
        setIsHovering(true)
        setCursorType('text')
      } else if (target.matches('[data-cursor="view"]')) {
        setIsHovering(true)
        setCursorType('view')
      } else {
        setIsHovering(false)
        setCursorType('default')
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
      setCursorType('default')
    }

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 2 : 1})`,
          opacity: isHovering ? 0.5 : 0.3,
        }}
      />
    </>
  )
}
