'use client'

import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'

export interface RootProps extends ComponentProps<typeof Select.Root> {}

export function Root(props: RootProps) {
  return <Select.Root {...props} />
}
