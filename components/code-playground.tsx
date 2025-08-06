'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Copy, Check } from 'lucide-react'

const codeExamples = [
  {
    title: 'React Hook - useIntersectionObserver',
    language: 'typescript',
    code: `import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return [ref, isIntersecting] as const
}`,
    description: 'Custom hook for intersection observer with TypeScript'
  },
  {
    title: 'Advanced CSS Animation',
    language: 'css',
    code: `.morphing-card {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.morphing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.morphing-card:hover::before {
  left: 100%;
}`,
    description: 'Advanced CSS with morphing effects and animations'
  },
  {
    title: 'Performance Optimization',
    language: 'typescript',
    code: `// Debounced search with cleanup
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

// Memoized expensive calculation
const ExpensiveComponent = memo(({ data }: { data: any[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: heavyComputation(item)
    }))
  }, [data])

  return <div>{/* Render processed data */}</div>
})`,
    description: 'Performance optimization techniques with React'
  }
]

export function CodePlayground() {
  const [activeExample, setActiveExample] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeExamples[activeExample].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="morphism-card border-white/10 glow-hover">
      <CardHeader>
        <CardTitle className="text-gradient flex items-center gap-2">
          <Play className="w-5 h-5" />
          Live Code Examples
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {codeExamples.map((example, index) => (
            <Button
              key={index}
              variant={activeExample === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveExample(index)}
              className={activeExample === index ? "bg-gradient-to-r from-purple-600 to-pink-600" : ""}
            >
              {example.title.split(' - ')[0]}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{codeExamples[activeExample].language}</Badge>
              <span className="text-sm text-muted-foreground">
                {codeExamples[activeExample].description}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="morphism-card"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples[activeExample].code}</code>
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
