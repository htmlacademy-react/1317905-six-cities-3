import MainPage from '../../pages/main/main-page.tsx';

type AppScreenProps = {
  cardsCount: number;
  offersCount: number;
  isSigned: boolean;
}

function App({cardsCount, offersCount, isSigned }: AppScreenProps): JSX.Element {
  return (
    <MainPage
      cardsCount={cardsCount}
      offersCount={offersCount}
      isSigned={isSigned}
    />
  );
}

export default App;
