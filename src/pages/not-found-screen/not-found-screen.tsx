
import Header from '../../components/header/header.tsx';


type NotFoundScreenPageProps = {
  isAuth: boolean;
}

function NotFoundScreenPage({isAuth}: NotFoundScreenPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header isAuth={isAuth}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">404 Not Found</h1>
        <a href="/">Вернуться на главную</a>
      </main>
    </div>
  );
}

export default NotFoundScreenPage;
