import { AlertColor } from '@mui/material';
import { atom } from 'recoil';

type SnackbarState = {
  isOpen: boolean;
  message: string;
  severity: AlertColor;
};

const snackbarState = atom<SnackbarState>({
  key: 'snackbarState',
  default: {
    isOpen: false,
    message: '',
    severity: 'info',
  },
});

export default snackbarState;
