import { AlertColor } from '@mui/material';
import { Toast } from '../../Types/Toast';
export declare const Severity: {
    readonly success: "success";
    readonly warning: "warning";
    readonly error: "error";
    readonly info: "info";
};
export type Severity = AlertColor;
declare const useSeverity: (toast: Toast) => "success" | "error" | "warning" | "info";
export default useSeverity;
