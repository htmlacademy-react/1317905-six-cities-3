import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundScreenPage({ isAuth }: { isAuth: boolean }): JSX.Element {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Header isAuth={isAuth} />

      <main
        className="page__main page__main--index"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '560px',
            padding: '48px 32px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          }}
        >
          <h1
            style={{
              fontSize: '120px',
              fontWeight: 700,
              margin: '0 0 24px',
              color: '#4481c3',
              lineHeight: 1,
            }}
          >
            404 Not Found
          </h1>

          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              fontSize: '18px',
              fontWeight: 500,
              color: 'white',
              backgroundColor: '#4481c3',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
          >
            Go to main page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreenPage;
