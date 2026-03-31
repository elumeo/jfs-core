/* eslint-disable max-lines */
import { alpha, createTheme, Theme, lighten } from '@mui/material/styles';
import * as BaseColor from 'Constant/Color';
import { grey } from '@mui/material/colors';

const Color = {
  ...BaseColor,
  primary: {
    light: lighten(BaseColor.primary.light, .2),
    main: lighten(BaseColor.primary.main, .2),
    dark: lighten(BaseColor.primary.dark, .2),
    contrastText: BaseColor.primary.contrastText,
  },
  secondary: {
    light: lighten(BaseColor.secondary.light, .1),
    main: lighten(BaseColor.secondary.main, .1),
    dark: lighten(BaseColor.secondary.dark, .1),
    contrastText: BaseColor.secondary.contrastText,
  },
  success: {
    light: lighten(BaseColor.success.light, .1),
    main: lighten(BaseColor.success.main, .1),
    dark: lighten(BaseColor.success.dark, .1),
    contrastText: BaseColor.success.contrastText,
  },
  warning: {
    light: lighten(BaseColor.warning.light, .1),
    main: lighten(BaseColor.warning.main, .1),
    dark: lighten(BaseColor.warning.dark, .1),
    contrastText: BaseColor.warning.contrastText,
  },
  error: {
    light: lighten(BaseColor.error.light, .3),
    main: lighten(BaseColor.error.main, .3),
    dark: lighten(BaseColor.error.dark, .3),
    contrastText: BaseColor.error.contrastText,
  },
  info: {
    light: lighten(BaseColor.info.light, .1),
    main: lighten(BaseColor.info.main, .1),
    dark: lighten(BaseColor.info.dark, .1),
    contrastText: BaseColor.info.contrastText,
  },
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
    primary: {
      dark: lighten(Color.primary.dark, .8),
      main: lighten(Color.primary.main, .8),
      light: lighten(Color.primary.light, .8),
    },
    secondary: {
      dark: lighten(Color.secondary.dark, .8),
      main: lighten(Color.secondary.main, .8),
      light: lighten(Color.secondary.light, .8),
    },
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
      default: grey[900] + '21',
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
