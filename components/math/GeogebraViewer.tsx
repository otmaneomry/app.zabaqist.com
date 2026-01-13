'use client'

import React from 'react'
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
  appletOnLoad
}: GeogebraViewerProps) {
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
          appletOnLoad={appletOnLoad}
        />
      </div>
    </Card>
  )
}
