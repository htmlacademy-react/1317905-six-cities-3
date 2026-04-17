import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './error-message.css';


type ErrorMessageProps = {
  message?: string | null;
  isGlobal?: boolean;
};

function ErrorMessage({ message, isGlobal = false }: ErrorMessageProps): JSX.Element | null {
  const globalError = useSelector((state: RootState) => state.ui.error);
  const errorText = message ?? globalError;

  if (!errorText) {
    return null;
  }

  return errorText ? <div className={`error-message ${isGlobal ? 'error-message--global' : 'error-message--local'}`}>{errorText}</div> : null;
}

export default ErrorMessage;
