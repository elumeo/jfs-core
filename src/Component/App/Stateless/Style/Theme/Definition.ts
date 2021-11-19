import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import * as Color from 'Constant/Color';
import { grey } from '@material-ui/core/colors';

const definition = responsiveFontSizes(
  createTheme({
    props: {
      MuiCircularProgress: {
        color: 'secondary',
      },
      MuiLinearProgress: {
        color: 'secondary',
      }
    },
    palette: {
      type: 'light',
      primary: Color.primary,
      secondary: Color.apatith,
      text: {
        primary: grey[900],
        secondary: grey[700],
        disabled: grey[500],
        hint: grey[300],
      },
      action: {
        hover: 'rgba(0, 0, 0, 0.12)',
        hoverOpacity: 0.12,
        selected: 'rgba(0, 0, 0, 0.16)',
        selectedOpacity: 0.16,
        focus: 'rgba(0, 0, 0, 0.2)',
        focusOpacity: 0.2,
      },
      info: Color.info,
      success: Color.success,
      warning: Color.warning,
      error: Color.error,
      rubin: Color.rubin,
      rodolith: Color.rodolith,
      topas: Color.topas,
      apatith: Color.apatith,
      peridot: Color.peridot,
      citrin: Color.citrin,
      quarz: Color.quarz,
      background: {
        default: '#e5e2dd',
      },
    },
  })
);

definition.overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        fontSize: 14,
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto',
      },
    },
  },
  MuiChip: {
    clickable: { '&:hover': { backgroundColor: definition.palette.grey[400] } },
    clickableColorPrimary: { '&:hover': { backgroundColor: definition.palette.primary.dark } },
    clickableColorSecondary: { '&:hover': { backgroundColor: definition.palette.secondary.dark } },

    label: {
      fontSize: '0.925rem',
    }
  },
  MuiListItem: {
    root: {
      paddingTop: definition.spacing(0.5),
      paddingBottom: definition.spacing(0.5)
    }
  },
  MuiMenuItem: {
    root: {
      paddingTop: definition.spacing(0.5),
      paddingBottom: definition.spacing(0.5)
    }
  },
  MuiListItemIcon: {
    root: {
      minWidth: 32,
    },
  },
  MuiTooltip: {
    tooltip: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
  },
  MuiTableCell: {
    root: {
      fontSize: definition.typography.body1.fontSize
    },
    stickyHeader: {
      backgroundColor: definition.palette.background.paper
    }
  },
  MuiTableSortLabel: {
    root: {
      color: definition.palette.secondary.main,
      '&.MuiTableSortLabel-active': {
        color: definition.palette.secondary.main
      },
      '&.MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
        color: definition.palette.secondary.main
      }
    },
    icon: {
      alignSelf: 'end'
    }
  }
};

export default definition;
