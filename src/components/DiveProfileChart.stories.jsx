import React from 'react'

import { DiveProfileChart } from './DiveProfileChart'

import { useDive } from '../hooks/useDive'

import * as dives from '../dives'
import { useGenerator } from '../hooks/useGenerator'

export default {
  title: 'Components/DiveProfileChart',
  component: DiveProfileChart,
  argTypes: {
    dive: {
      options: Object.keys(dives),
      mapping: dives,
      control: {
        type: 'select'
      }
    }
  }
}

export const Default = ({ dive, ...args }) => {
  const { samples } = useDive(dive)

  return (
    <DiveProfileChart samples={samples} {...args} />
  )
}

Default.args = {
  dive: 'diveY2022M04D12T0704'
}

export const Generator = ({ dive, ...options }) => {
  const { samples } = useGenerator(options)

  return (
    <DiveProfileChart samples={samples} />
  )
}
Generator.args = {
  samplingIntervals: 20,
  withPerlinNoise: false,
  segments: [
    {
      time: 0,
      depth: 0
    },
    {
      time: 2 * 60,
      depth: 35
    },
    {
      time: 12 * 60,
      depth: 35
    },
    {
      time: 14 * 60 + 13,
      depth: 15
    },
    {
      time: 15 * 60 + 43,
      depth: 6
    },
    {
      time: 16 * 60 + 45,
      depth: 6
    },
    {
      time: 17 * 60 + 45,
      depth: 3
    },
    {
      time: 21 * 60 + 40,
      depth: 3
    },
    {
      time: 22 * 60 + 40,
      depth: 0
    }
  ]
}