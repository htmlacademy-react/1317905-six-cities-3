import MainPage from '../../pages/main/main-page.tsx';

type AppScreenProps = {
  cardsCount: number;
  offersCount: number;
  isAuth: boolean;
}

function App({cardsCount, offersCount, isAuth }: AppScreenProps): JSX.Element {
  return (
    <MainPage
      cardsCount={cardsCount}
      offersCount={offersCount}
      isAuth={isAuth}
    />
  );
}

export default App;
