import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypingAnimation({ 
  text, 
  className,
  delay = 0,
  speed = 100 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(false)

    const startTimeout = setTimeout(() => {
      setIsTyping(true)
      let index = 0
      
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, delay, speed])

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {isTyping && (
        <span className="inline-block w-[3px] h-[1.2em] bg-current animate-pulse ml-1" />
      )}
    </span>
  )
}