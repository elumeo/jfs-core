import { AlertColor } from '@mui/material';
import { Toast } from 'Types/Toast';
export declare const Severity: {
    readonly success: "success";
    readonly error: "error";
    readonly info: "info";
};
export declare type Severity = AlertColor;
declare const useSeverity: (toast: Toast) => "success" | "error" | "info";
export default useSeverity;
