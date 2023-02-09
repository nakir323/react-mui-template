import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import confirmDialogState from './confirmDialogState';
import useConfirmDialog from './useConfirmDialog';

export default function ConfirmDialog() {
  const state = useRecoilValue(confirmDialogState);
  const { close } = useConfirmDialog();
  const executeOnOk = () => {
    state.onOk();
    close();
  };

  return (
    <Dialog open={state.isOpen}>
      <DialogTitle>{state.dialogTitle}</DialogTitle>
      <DialogContent>
        <Box>{state.message}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="inherit">
          キャンセル
        </Button>
        <Button
          color={state.isDangerousOperation ? 'error' : 'primary'}
          onClick={executeOnOk}
        >
          {state.okButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
