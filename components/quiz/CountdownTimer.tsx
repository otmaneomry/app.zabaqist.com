'use client'

import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Text, Stack } from '@mantine/core'

interface CountdownTimerProps {
  duration: number // in seconds
  onComplete: () => void
  isPlaying?: boolean
}

export default function CountdownTimer({
  duration,
  onComplete,
  isPlaying = true
}: CountdownTimerProps) {
  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return (
      <Stack gap={0} align="center">
        <Text size="sm" c="dimmed" fw={500}>
          TEMPS RESTANT
        </Text>
        <Text size="2rem" fw={700} c={remainingTime < 60 ? 'red' : 'teal'}>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </Text>
      </Stack>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        // `--zb-mint` resolved to sRGB: this library's types demand literal
        // `#rrggbb`, so it cannot take the CSS variable.
        colors={['#1c7a63', '#F7B801', '#F97316', '#EF4444']}
        colorsTime={[duration, duration / 2, duration / 4, 0]}
        onComplete={onComplete}
        size={180}
        strokeWidth={12}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}
