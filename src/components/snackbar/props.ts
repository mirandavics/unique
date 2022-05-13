export interface SnackbarProps {
  open: boolean;
  type: 'success' | 'error';
  onClose: () => void;
  message: string;
}
