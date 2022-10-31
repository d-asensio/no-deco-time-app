import { Fragment, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { DiveList } from '../components'
import { useSelector } from '../store'
import {
  diveIdListSelector,
  diveSelector,
  divesService,
  isDiveHighlightedSelector
} from '../entities'

import { formatTimeMinutes } from '../utils/formatTime'
import { formatNumber } from '../utils/formatNumber'
import { run } from '@regenerate/core'
import { useDebouncedCallback } from 'use-debounce'
import eventBus from '../eventBus'

function DiveItem ({ diveId }) {
  const navigate = useNavigate()

  const handleNavigate = useCallback(() => navigate(`/dive/${diveId}`), [
    diveId
  ])

  const { name, date, rating, profile, geographicCoordinates } = useSelector((state) =>
    diveSelector(state, diveId)
  )

  const isHighLighted = useSelector(
    state => isDiveHighlightedSelector(state, diveId)
  )

  const handleHoverDebounced = useDebouncedCallback((coords) => {
    eventBus.emit('MAP_FOCUS_ON_COORDINATES', coords)
  }, 500, { trailing: true })

  const handleHover = useCallback(() => {
    run(divesService.highlightDive(diveId))
    handleHoverDebounced(geographicCoordinates)
  }, [geographicCoordinates])

  const handleMouseLeave = useCallback(() => {
    run(divesService.highlightDive(null))
    handleHoverDebounced.cancel()
  }, [])

  return (
    <DiveList.Item
      name={name}
      date={date}
      rating={rating}
      samples={profile.dataPoints}
      maximumDepth={formatNumber({
        value: profile.maximumDepth,
        units: 'm',
        precision: 2
      })}
      totalDuration={formatTimeMinutes(profile.totalDuration)}
      highlighted={isHighLighted}
      onClick={handleNavigate}
      onHover={handleHover}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export const DiveLog = () => {
  const diveIdList = useSelector(diveIdListSelector)

  if (!diveIdList) return null

  return (
    <DiveList>
      {diveIdList.map((diveId, index) => (
        <Fragment key={diveId}>
          <DiveItem diveId={diveId} />
          {index !== diveIdList.length - 1 && <DiveList.Divider />}
        </Fragment>
      ))}
    </DiveList>
  )
}
