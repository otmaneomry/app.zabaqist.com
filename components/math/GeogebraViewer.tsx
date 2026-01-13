'use client'

import React, { useState } from 'react'
import { Card } from '@mantine/core'
import dynamic from 'next/dynamic'

// Dynamically import GeoGebra with no SSR
const Geogebra = dynamic(
  () => import('react-geogebra').then((mod) => mod.default || mod),
  { ssr: false }
) as any

interface GeogebraViewerProps {
  appName?: 'graphing' | 'geometry' | 'classic' | '3d' | 'scientific'
  width?: number
  height?: number
  showToolBar?: boolean
  showAlgebraInput?: boolean
  showMenuBar?: boolean
  material_id?: string
  appletOnLoad?: (api: any) => void
  commands?: string[]
}

/**
 * Component for embedding GeoGebra interactive visualizations
 *
 * @param appName - Type of GeoGebra app (default: 'graphing')
 * @param width - Width in pixels (default: 800)
 * @param height - Height in pixels (default: 600)
 * @param showToolBar - Show toolbar (default: false)
 * @param showAlgebraInput - Show algebra input (default: true)
 * @param showMenuBar - Show menu bar (default: false)
 * @param material_id - GeoGebra material ID to load
 * @param appletOnLoad - Callback when applet loads with API access
 *
 * Example:
 * <GeogebraViewer
 *   appName="graphing"
 *   material_id="your-material-id"
 *   appletOnLoad={(api) => {
 *     api.evalCommand('f(x) = ln(x)')
 *   }}
 * />
 */
export default function GeogebraViewer({
  appName = 'graphing',
  width = 800,
  height = 600,
  showToolBar = false,
  showAlgebraInput = true,
  showMenuBar = false,
  material_id,
  appletOnLoad,
  commands = []
}: GeogebraViewerProps) {
  const [isReady, setIsReady] = useState(false)

  const handleAppletOnLoad = (api: any) => {
    // Version 2.0 - Fixed to always call callback
    console.log('🔵 GeoGebra applet loaded (v2.0)')
    console.log('🔵 API parameter from react-geogebra:', api)
    console.log('🔵 API parameter type:', typeof api)

    // Always call the custom callback regardless of api parameter
    // The callback will handle getting the API from window.ggbApplet
    if (appletOnLoad) {
      console.log('🔵 Calling custom appletOnLoad callback (will use window.ggbApplet)...')
      try {
        appletOnLoad(api) // Pass whatever we got, callback will use window.ggbApplet instead
      } catch (error) {
        console.error('❌ Error in appletOnLoad callback:', error)
      }
    } else {
      console.log('⚠️ No custom appletOnLoad callback provided')
    }

    setIsReady(true)
  }

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Geogebra
          appName={appName}
          width={width}
          height={height}
          showToolBar={showToolBar}
          showAlgebraInput={showAlgebraInput}
          showMenuBar={showMenuBar}
          material_id={material_id}
          appletOnLoad={handleAppletOnLoad}
        />
      </div>
    </Card>
  )
}
