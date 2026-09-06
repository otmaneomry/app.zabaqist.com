'use client'

/**
 * A Mantine button that navigates.
 *
 * `<Button component={Link}>` cannot be written from a server component:
 * `component` is a function, and functions do not cross the server/client
 * boundary. This wrapper keeps that call on the client so pages can stay
 * server-rendered.
 */

import React from 'react'
import {Link} from '@/i18n/navigation'
import { Button, type ButtonProps } from '@mantine/core'

export default function LinkButton({
  href,
  children,
  ...props
}: ButtonProps & { href: string; children: React.ReactNode }) {
  return (
    <Button component={Link} href={href} {...props}>
      {children}
    </Button>
  )
}
