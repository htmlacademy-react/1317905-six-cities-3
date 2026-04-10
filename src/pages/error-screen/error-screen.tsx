import { useAppDispatch} from '../../store/hooks';
import {fetchOffersAction} from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    fontSize: '30px',
    color: '#961a16',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <p>
        Error! Failed to load offers. Please try again
      </p>
      <button
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorScreen;
