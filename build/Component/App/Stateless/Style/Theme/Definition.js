"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var Color = __importStar(require("../../../../../Constant/Color"));
var colors_1 = require("@material-ui/core/colors");
var definition = (0, styles_1.responsiveFontSizes)((0, styles_1.createTheme)({
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
            primary: colors_1.grey[900],
            secondary: colors_1.grey[700],
            disabled: colors_1.grey[500],
            hint: colors_1.grey[300],
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
}));
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
exports.default = definition;
