
import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';


type NotFoundScreenPageProps = {
  isAuth: boolean;
}

function NotFoundScreenPage({isAuth}: NotFoundScreenPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header isAuth={isAuth}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">404 Not Found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default NotFoundScreenPage;
