"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/* eslint-disable max-lines */
var styles_1 = require("@mui/material/styles");
var Color = __importStar(require("../../../../../Constant/Color"));
var colors_1 = require("@mui/material/colors");
var selectedStyles = function (_a) {
    var theme = _a.theme;
    return ({
        '&.Mui-selected': {
            backgroundColor: "".concat((0, styles_1.alpha)(Color.common.black, theme.palette.action.selectedOpacity)),
            '&:hover': {
                backgroundColor: "".concat((0, styles_1.alpha)(Color.common.black, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity))
            }
        },
        '&:hover': {
            backgroundColor: "".concat((0, styles_1.alpha)(Color.common.black, theme.palette.action.hoverOpacity))
        },
        '&.Mui-focusVisible': {
            backgroundColor: "".concat((0, styles_1.alpha)(Color.common.black, theme.palette.action.selectedOpacity), " !important"),
            '&:hover': {
                backgroundColor: "".concat((0, styles_1.alpha)(Color.common.black, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity))
            }
        }
    });
};
var legacyPalette = __assign(__assign({}, Color), { primary: Color.warning, secondary: Color.info, mode: 'light', grey: colors_1.grey, common: Color.common, text: {
        primary: Color.info.main,
        secondary: Color.info.light,
        disabled: Color.info.dark,
    }, action: {
        hover: 'rgba(0, 0, 0, 0.12)',
        hoverOpacity: 0.12,
        selected: 'rgba(0, 0, 0, 0.16)',
        selectedOpacity: 0.16,
        focus: 'rgba(0, 0, 0, 0.2)',
        focusOpacity: 0.2,
    }, background: {
        default: '#e5e2dd',
    } });
var LEGACY = (0, styles_1.createTheme)({
    palette: legacyPalette,
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
    typography: {
        fontSize: 10,
        fontFamily: "'Press Start 2P', sans-serif",
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
                    fontFamily: "'Press Start 2P', sans-serif",
                    '&.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after': {
                        borderBottomColor: "".concat(Color.secondary.main, " !important"),
                    },
                    '&.jfs-datepicker__day,.react-datepicker .react-datepicker__header': {
                        backgroundColor: "".concat(Color.secondary.main),
                        fontFamily: "'Press Start 2P', sans-serif",
                        '&>*,.react-datepicker__day-name': {
                            fontFamily: "'Press Start 2P', sans-serif",
                            color: "".concat(Color.secondary.contrastText),
                        }
                    },
                    '&.jfs-datepicker__day,.react-datepicker .react-datepicker__day': {
                        fontFamily: "'Press Start 2P', sans-serif",
                        '&:hover': {
                            fontFamily: "'Press Start 2P', sans-serif",
                        }
                    },
                    '&.jfs-datepicker__day,.react-datepicker .react-datepicker__day--in-selecting-range': ({
                        backgroundColor: Color.common.white,
                        boxShadow: "inset  0 0 0 1px ".concat(Color.secondary.main),
                        color: Color.secondary.main,
                    }),
                    '&.jfs-datepicker__day .react-datepicker__day--selected,.react-datepicker__day--in-range': ({
                        backgroundColor: "".concat(Color.secondary.light, "cc"),
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
                clickable: { '&:hover': { backgroundColor: colors_1.grey[400] } },
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
                root: function (props) { return ({
                    fontSize: LEGACY.typography.body1.fontSize,
                    cursor: ((props === null || props === void 0 ? void 0 : props.variant) !== 'head' || (props === null || props === void 0 ? void 0 : props.disableSort)) ? 'default' : 'pointer'
                }); },
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
});
exports.default = LEGACY;
