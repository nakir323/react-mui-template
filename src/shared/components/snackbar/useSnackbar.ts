import { AlertColor } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import snackbarState from './snackbarState';

export default function useSnackbar() {
  const setState = useSetRecoilState(snackbarState);

  const open = (message: string, severity: AlertColor = 'info') => {
    setState({
      isOpen: true,
      message,
      severity,
    });
  };

  return {
    open,
  };
}

// 次は@packageのeslint plugin入れるところからかな？
