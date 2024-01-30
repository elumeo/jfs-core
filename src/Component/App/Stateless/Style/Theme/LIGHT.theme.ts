/* eslint-disable max-lines */
import { alpha, createTheme, PaletteOptions, Theme } from '@mui/material/styles';
import * as Color from 'Constant/Color';
import { grey } from '@mui/material/colors';
const selectedStyles = ({ theme }: { theme: Theme }) => (
  {
    '&.Mui-selected': {
      backgroundColor: `${alpha(Color.common.black, theme.palette.action.selectedOpacity)}`,
      '&:hover': {
        backgroundColor: `${alpha(Color.common.black, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)}`
      }
    },
    '&:hover': {
      backgroundColor: `${alpha(Color.common.black, theme.palette.action.hoverOpacity)}`
    },
    '&.Mui-focusVisible': {
      backgroundColor: `${alpha(Color.common.black, theme.palette.action.selectedOpacity)} !important`,
      '&:hover': {
        backgroundColor: `${alpha(Color.common.black, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)}`
      }
    }
  }
)
const LightPalette: PaletteOptions = {
  primary: Color.primary,
  secondary: Color.apatith,
  warning: Color.warning,
  error: Color.error,
  success: Color.success,
  info: Color.info,
  grey: grey,
  mode: 'light',
  common: Color.common,
  text: {
    primary: grey[900],
    secondary: grey[700],
    disabled: grey[500],
  },
  action: {
    hover: 'rgba(0, 0, 0, 0.12)',
    hoverOpacity: 0.12,
    selected: 'rgba(0, 0, 0, 0.16)',
    selectedOpacity: 0.16,
    focus: 'rgba(0, 0, 0, 0.2)',
    focusOpacity: 0.2,
  },
  background: {
    default: '#e5e2dd',
  },
  ...Color
}

const LIGHT = createTheme({
  palette: LightPalette,
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 14,
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: 'Roboto',
          '&.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after': {
            borderBottomColor: `${Color.secondary.main} !important`,
          },
          '&.jfs-datepicker__day,.react-datepicker .react-datepicker__header': {
            backgroundColor: `${Color.secondary.main}`,
            '&>*,.react-datepicker__day-name': {
              color: `${Color.secondary.contrastText}`,
            }
          },
          '&.jfs-datepicker__day,.react-datepicker .react-datepicker__day--in-selecting-range': ({
            backgroundColor: Color.common.white,
            boxShadow: `inset  0 0 0 1px ${Color.secondary.main}`,
            color: Color.secondary.main,
          }),
          '&.jfs-datepicker__day .react-datepicker__day--selected,.react-datepicker__day--in-range': ({
            backgroundColor: `${Color.secondary.light}cc`,
            color: Color.secondary.contrastText,
            '&:hover': {
              backgroundColor: Color.secondary.main,
              color: Color.secondary.contrastText
            }
          })
        },
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        sizeSmall: {
          '>.MuiSvgIcon-root': { fontSize: '1.2rem' }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        clickable: { '&:hover': { backgroundColor: grey[400] } },
        clickableColorPrimary: { '&:hover': { backgroundColor: Color.primary.dark } },
        clickableColorSecondary: { '&:hover': { backgroundColor: Color.secondary.dark } },
        label: {
          fontSize: '0.925rem',
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: selectedStyles
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: selectedStyles
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: selectedStyles
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: Color.secondary.main,
          '&.MuiTableSortLabel-active': {
            color: Color.secondary.main
          },
          '&.MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
            color: Color.secondary.main
          }
        },
        icon: {
          color: Color.secondary.main

        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: props => ({
          fontSize: LIGHT.typography.body1.fontSize,
          cursor: (props?.variant !== 'head' || props?.disableSort) ? 'default' : 'pointer'
        }),

        stickyHeader: {
          backgroundColor: Color.common.white
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: 1.43,
          letterSpacing: '0.01071em',
        },
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'standard',
      }
    }
  }
})

export default LIGHT;
