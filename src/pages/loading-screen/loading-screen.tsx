function LoadingScreen(): JSX.Element {
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    fontSize: '30px',
    color: '#4481c3',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
