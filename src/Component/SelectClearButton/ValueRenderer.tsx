import { Chip, ChipProps, Stack, Typography } from '@mui/material'
import React from 'react'

export type ValueType<IsMulti = boolean> = IsMulti extends true ? string[] : string
export type Props = ChipProps & {
  renderAsChip: boolean
  maxValuesToDisplayInInput: number,
  values: ValueType<true>
  labelsByValue: Record<string, string>
  canUnselect: boolean
  unselect: (value: ValueType<true>[number]) => void
}
const ValueRenderer: React.FC<Props> = ({
  renderAsChip,
  maxValuesToDisplayInInput,
  values,
  labelsByValue,
  canUnselect,
  unselect,
  ...props
}) => {
  return renderAsChip
    ? <>
      <Stack direction='row' spacing={1}>{
        values.map((v, i) =>
          !maxValuesToDisplayInInput || i < maxValuesToDisplayInInput
            ?
            (
              <Chip
                key={`select-chip-${i}`}
                label={labelsByValue[v]}
                size={'small'}
                onMouseDown={(event) => event.stopPropagation()}
                {...props}
                onDelete={
                  canUnselect
                    ? () => unselect(v)
                    : undefined
                }
              />
            )
            : null
        )}
        {values.length > maxValuesToDisplayInInput
          ? <Typography>+{
            (values.length - maxValuesToDisplayInInput)
          }
          </Typography> : null}
      </Stack>
    </>
    : <>{values.map(v => labelsByValue[v]).join(', ')}</>
}
export default ValueRenderer
