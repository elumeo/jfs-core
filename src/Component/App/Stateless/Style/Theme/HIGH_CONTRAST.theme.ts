/* eslint-disable max-lines */
import { alpha, createTheme, Theme } from '@mui/material/styles';
import * as BaseColor from 'Constant/Color';
import { grey } from '@mui/material/colors';

const Color = {
  ...BaseColor,
  primary: {
    light: '#FF9AD7',
    main: '#FF8FD3',
    dark: '#FF79CA',
    contrastText: BaseColor.common.black,
  },
  secondary: {
    light: '#6ED9DE',
    main: '#1DC2C9',
    dark: '#15a6ac',
    contrastText: BaseColor.common.black,
  },
  info: {
    light: '#5BD3FF',
    main: '#00BBFF',
    dark: '#008EC1',
    contrastText: BaseColor.common.black,
  },
  success: {
    light: '#93E893',
    main: '#56B956',
    dark: '#3A9B3A',
    contrastText: BaseColor.common.black,
  },
  warning: {
    light: '#FFDA2E',
    main: '#FFC25B',
    dark: '#FFB333',
    contrastText: BaseColor.common.black,
  },
  error: {
    light: '#FF7A7A',
    main: '#FF5A5A',
    dark: '#FF4A4A',
    contrastText: BaseColor.common.black,
  }
}

const selectedStyles = ({ theme }: { theme: Theme }) => (
  {
    '&.Mui-selected': {
      backgroundColor: `${alpha(Color.common.white, theme.palette.action.selectedOpacity)}`,
      '&:hover': {
        backgroundColor: `${alpha(Color.common.white, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)}`
      }
    },
    '&:hover': {
      backgroundColor: `${alpha(Color.common.white, theme.palette.action.hoverOpacity)}`
    },
    '&.Mui-focusVisible': {
      backgroundColor: `${alpha(Color.common.white, theme.palette.action.selectedOpacity)} !important`,
      '&:hover': {
        backgroundColor: `${alpha(Color.common.white, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)}`
      }
    }
  }
)

const HIGH_CONTRAST = createTheme({
  palette: {
    primary: Color.primary,
    secondary: Color.secondary,
    warning: Color.warning,
    error: Color.error,
    success: Color.success,
    info: Color.info,
    mode: 'dark',
    grey: grey,
    common: Color.common,
    text: {
      primary: grey[100],
      secondary: grey[200],
      disabled: grey[500],
    },
    action: {
      hover: `${alpha(Color.common.white, .12)}`,
      hoverOpacity: 0.12,
      selected: `${alpha(Color.common.white, .16)}`,
      selectedOpacity: 0.16,
      focus: `${alpha(Color.common.white, .2)}`,
      focusOpacity: 0.2,
    },
    background: {
      default: '#141414',
      paper: '#1E1E1E',
    },
    ...Color
  },
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
              color: `${Color.common.white}`,
            }
          },
          '&.jfs-datepicker__day,.react-datepicker .react-datepicker__day--in-selecting-range': ({
            backgroundColor: grey[800],
            boxShadow: `inset  0 0 0 1px ${Color.secondary.main}`,
            color: Color.common.white,
          }),
          '&.jfs-datepicker__day,.react-datepicker .react-datepicker__day': ({
            color: `${Color.common.white}`,
            '&:hover': {
              backgroundColor: grey[700],
              boxShadow: `inset  0 0 0 1px ${Color.secondary.main}`,
              color: Color.common.white,
            }
          }),
          '&.jfs-datepicker__day .react-datepicker__day--selected,.react-datepicker__day--in-range': ({
            backgroundColor: grey[800],
            boxShadow: `inset  0 0 0 1px ${Color.secondary.main}`,
            color: Color.common.white,
            '&:hover': {
              backgroundColor: grey[900],

            }
          }),
          '&.react-datepicker.jfs-datepicker__popper, .react-datepicker, .react-datepicker__month, .react-datepicker__week': ({
            backgroundColor: `${grey[900]} !important`,
            color: `${Color.common.white} !important`,
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
          '&.MuiTableSortLabel-active, &MuiTableCell-head .MuiTypography-root': {
            color: Color.secondary.main
          },
          '&.MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
            color: Color.secondary.main
          }
        },
        icon: {
          color: Color.secondary.main
        },
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: props => ({
          backgroundColor: grey[900],
          fontSize: HIGH_CONTRAST.typography.body1.fontSize,
          cursor: (props?.variant !== 'head' || props?.disableSort) ? 'default' : 'pointer',
          '&.Mui-active': {
            backgroundColor: grey[800]
          }
        }),
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

export default HIGH_CONTRAST;
