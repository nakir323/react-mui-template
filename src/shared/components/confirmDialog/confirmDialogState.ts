import { atom } from 'recoil';

type ConfirmDialogState = {
  isOpen: boolean;
  message: string;
  dialogTitle: string;
  okButtonLabel: string;
  isDangerousOperation: boolean;
  onOk: () => void;
};

export const defaultState: ConfirmDialogState = {
  isOpen: false,
  message: '',
  dialogTitle: '確認',
  okButtonLabel: 'OK',
  isDangerousOperation: false,
  onOk: () => {},
};

const confirmDialogState = atom<ConfirmDialogState>({
  key: 'confirmDialogState',
  default: defaultState,
});

export default confirmDialogState;
