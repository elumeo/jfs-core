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
var BaseColor = __importStar(require("../../../../../Constant/Color"));
var colors_1 = require("@mui/material/colors");
var Color = __assign(__assign({}, BaseColor), { primary: {
        light: '#FF9AD7',
        main: '#FF8FD3',
        dark: '#FF79CA',
        contrastText: BaseColor.common.black,
    }, secondary: {
        light: '#6ED9DE',
        main: '#1DC2C9',
        dark: '#15a6ac',
        contrastText: BaseColor.common.black,
    }, info: {
        light: '#5BD3FF',
        main: '#00BBFF',
        dark: '#008EC1',
        contrastText: BaseColor.common.black,
    }, success: {
        light: '#93E893',
        main: '#56B956',
        dark: '#3A9B3A',
        contrastText: BaseColor.common.black,
    }, warning: {
        light: '#FFDA2E',
        main: '#FFC25B',
        dark: '#FFB333',
        contrastText: BaseColor.common.black,
    }, error: {
        light: '#FF7A7A',
        main: '#FF5A5A',
        dark: '#FF4A4A',
        contrastText: BaseColor.common.black,
    } });
var selectedStyles = function (_a) {
    var theme = _a.theme;
    return ({
        '&.Mui-selected': {
            backgroundColor: "".concat((0, styles_1.alpha)(Color.common.white, theme.palette.action.selectedOpacity)),
            '&:hover': {
                backgroundColor: "".concat((0, styles_1.alpha)(Color.common.white, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity))
            }
        },
        '&:hover': {
            backgroundColor: "".concat((0, styles_1.alpha)(Color.common.white, theme.palette.action.hoverOpacity))
        },
        '&.Mui-focusVisible': {
            backgroundColor: "".concat((0, styles_1.alpha)(Color.common.white, theme.palette.action.selectedOpacity), " !important"),
            '&:hover': {
                backgroundColor: "".concat((0, styles_1.alpha)(Color.common.white, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity))
            }
        }
    });
};
var HIGH_CONTRAST = (0, styles_1.createTheme)({
    palette: __assign({ primary: Color.primary, secondary: Color.secondary, warning: Color.warning, error: Color.error, success: Color.success, info: Color.info, mode: 'dark', grey: colors_1.grey, common: Color.common, text: {
            primary: colors_1.grey[100],
            secondary: colors_1.grey[200],
            disabled: colors_1.grey[500],
        }, action: {
            hover: "".concat((0, styles_1.alpha)(Color.common.white, .12)),
            hoverOpacity: 0.12,
            selected: "".concat((0, styles_1.alpha)(Color.common.white, .16)),
            selectedOpacity: 0.16,
            focus: "".concat((0, styles_1.alpha)(Color.common.white, .2)),
            focusOpacity: 0.2,
        }, background: {
            default: '#141414',
            paper: '#1E1E1E',
        } }, Color),
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
                        borderBottomColor: "".concat(Color.secondary.main, " !important"),
                    },
                    '&.jfs-datepicker__day,.react-datepicker .react-datepicker__header': {
                        backgroundColor: "".concat(Color.secondary.main),
                        '&>*,.react-datepicker__day-name': {
                            color: "".concat(Color.common.white),
                        }
                    },
                    '&.jfs-datepicker__day,.react-datepicker .react-datepicker__day--in-selecting-range': ({
                        backgroundColor: colors_1.grey[800],
                        boxShadow: "inset  0 0 0 1px ".concat(Color.secondary.main),
                        color: Color.common.white,
                    }),
                    '&.jfs-datepicker__day,.react-datepicker .react-datepicker__day': ({
                        color: "".concat(Color.common.white),
                        '&:hover': {
                            backgroundColor: colors_1.grey[700],
                            boxShadow: "inset  0 0 0 1px ".concat(Color.secondary.main),
                            color: Color.common.white,
                        }
                    }),
                    '&.jfs-datepicker__day .react-datepicker__day--selected,.react-datepicker__day--in-range': ({
                        backgroundColor: colors_1.grey[800],
                        boxShadow: "inset  0 0 0 1px ".concat(Color.secondary.main),
                        color: Color.common.white,
                        '&:hover': {
                            backgroundColor: colors_1.grey[900],
                        }
                    }),
                    '&.react-datepicker.jfs-datepicker__popper, .react-datepicker, .react-datepicker__month, .react-datepicker__week': ({
                        backgroundColor: "".concat(colors_1.grey[900], " !important"),
                        color: "".concat(Color.common.white, " !important"),
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
                root: function (props) { return ({
                    backgroundColor: colors_1.grey[900],
                    fontSize: HIGH_CONTRAST.typography.body1.fontSize,
                    cursor: ((props === null || props === void 0 ? void 0 : props.variant) !== 'head' || (props === null || props === void 0 ? void 0 : props.disableSort)) ? 'default' : 'pointer',
                    '&.Mui-active': {
                        backgroundColor: colors_1.grey[800]
                    }
                }); },
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
exports.default = HIGH_CONTRAST;
