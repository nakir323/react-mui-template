import { useSetRecoilState } from 'recoil';
import confirmDialogState, { defaultState } from './confirmDialogState';

export default function useConfirmDialog() {
  const setState = useSetRecoilState(confirmDialogState);
  const open = (
    message: string,
    onOk: () => void,
    options?: {
      okButtonLabel?: string;
      dialogTitle?: string;
      isDangerousOperation?: boolean;
    }
  ) => {
    setState({
      isOpen: true,
      message,
      dialogTitle: options?.dialogTitle ?? defaultState.dialogTitle,
      okButtonLabel: options?.okButtonLabel ?? defaultState.okButtonLabel,
      isDangerousOperation:
        options?.isDangerousOperation ?? defaultState.isDangerousOperation,
      onOk,
    });
  };
  const close = () => {
    setState((current) => ({ ...current, isOpen: false }));
  };

  return {
    open,
    close,
  };
}
