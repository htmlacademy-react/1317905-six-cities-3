
import {Link} from 'react-router-dom';


function NotFoundScreenPage(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">404 Not Found</h1>
      <Link to="/">Go to main page</Link>
    </main>
  );
}

export default NotFoundScreenPage;
