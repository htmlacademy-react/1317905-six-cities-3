import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useSelector((state: RootState) => state.error);

  return error ? <div className="error-message">{error}</div> : null;
}

export default ErrorMessage;
