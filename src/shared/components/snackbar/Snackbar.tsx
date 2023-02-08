import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import { useRecoilState } from 'recoil';
import snackbarState from './snackbarState';

export default function Snackbar() {
  const [state, setState] = useRecoilState(snackbarState);
  const handleClose = () =>
    setState({
      ...state,
      isOpen: false,
    });

  return (
    <MuiSnackbar
      className="shadow"
      open={state.isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert severity={state.severity}>{state.message}</Alert>
    </MuiSnackbar>
  );
}
