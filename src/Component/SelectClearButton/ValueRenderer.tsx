import { Chip, ChipProps, Stack, Typography } from '@mui/material'
import React from 'react'

export type ValueType<IsMulti = boolean> = IsMulti extends true ? string[] : string
export type Props = {
  renderAsChip: boolean
  maxValuesToDisplayInInput: number,
  values: ValueType<true>
  labelsByValue: Record<string, string>
  canUnselect: boolean
  unselect: (value: ValueType<true>[number]) => void
} & ChipProps
const ValueRenderer: React.FC<Props> = ({
  renderAsChip,
  maxValuesToDisplayInInput,
  values,
  labelsByValue,
  canUnselect,
  unselect,
  ...props
}) => {
  return <>
    <Stack direction='row' spacing={1}>{
      values.map((value, i) =>
        !maxValuesToDisplayInInput || i < maxValuesToDisplayInInput
          ?
          renderAsChip
            ? (
              <Chip
                key={`select-chip-${i}`}
                label={labelsByValue[value] ?? value}
                size={'small'}
                onMouseDown={(event) => event.stopPropagation()}
                {...props}
                onDelete={
                  canUnselect
                    ? () => unselect(value)
                    : undefined
                }
              />
            )
            : <Typography key={`select-text-${i}`}>{labelsByValue[value] ?? value}{values.at(i + 1) ? ',' : ''}</Typography>
          : null
      )}
      {values.length > maxValuesToDisplayInInput
        ? <Typography>... +{
          (values.length - maxValuesToDisplayInInput)
        }
        </Typography> : null}
    </Stack>
  </>
}
export default ValueRenderer
