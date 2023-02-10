import { Box, BoxProps } from '@mui/material'
import React from 'react'
type Props = BoxProps & {
  row?: boolean
}
const Flex: React.FC<Props> = ({ row, ...props }) => {
  return <Box display={'flex'} flexDirection={row ? 'row' : 'column'} {...props}></Box>
}
export default Flex
