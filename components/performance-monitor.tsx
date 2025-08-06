'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Activity, Zap, Clock, Gauge } from 'lucide-react'

interface PerformanceMetrics {
  fps: number
  loadTime: number
  memoryUsage: number
  renderTime: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  })

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        
        setMetrics(prev => ({
          ...prev,
          fps,
          loadTime: performance.timing ? 
            performance.timing.loadEventEnd - performance.timing.navigationStart : 0,
          memoryUsage: (performance as any).memory ? 
            Math.round((performance as any).memory.usedJSHeapSize / 1048576) : 0,
          renderTime: currentTime - lastTime
        }))

        frameCount = 0
        lastTime = currentTime
      }

      animationId = requestAnimationFrame(measureFPS)
    }

    measureFPS()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const getPerformanceColor = (value: number, type: 'fps' | 'memory' | 'load') => {
    switch (type) {
      case 'fps':
        return value >= 55 ? 'text-green-500' : value >= 30 ? 'text-yellow-500' : 'text-red-500'
      case 'memory':
        return value <= 50 ? 'text-green-500' : value <= 100 ? 'text-yellow-500' : 'text-red-500'
      case 'load':
        return value <= 2000 ? 'text-green-500' : value <= 5000 ? 'text-yellow-500' : 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <Card className="morphism-card border-white/10">
      <CardHeader>
        <CardTitle className="text-gradient flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Performance Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">FPS</span>
            </div>
            <div className={`text-2xl font-bold ${getPerformanceColor(metrics.fps, 'fps')}`}>
              {metrics.fps}
            </div>
            <Badge variant="outline" className="text-xs mt-1">
              {metrics.fps >= 55 ? 'Excellent' : metrics.fps >= 30 ? 'Good' : 'Poor'}
            </Badge>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Load</span>
            </div>
            <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, 'load')}`}>
              {(metrics.loadTime / 1000).toFixed(1)}s
            </div>
            <Badge variant="outline" className="text-xs mt-1">
              {metrics.loadTime <= 2000 ? 'Fast' : metrics.loadTime <= 5000 ? 'Average' : 'Slow'}
            </Badge>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Gauge className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Memory</span>
            </div>
            <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, 'memory')}`}>
              {metrics.memoryUsage}MB
            </div>
            <Badge variant="outline" className="text-xs mt-1">
              {metrics.memoryUsage <= 50 ? 'Optimal' : metrics.memoryUsage <= 100 ? 'Good' : 'High'}
            </Badge>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Activity className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Render</span>
            </div>
            <div className="text-2xl font-bold text-blue-500">
              {metrics.renderTime.toFixed(0)}ms
            </div>
            <Badge variant="outline" className="text-xs mt-1">
              Real-time
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
