import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavoriteAction } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute } from '../../const';

type FavoriteButtonProps = {
  offerId: string;
  isFavorite: boolean;
  className: string;
  iconSize?: { width: number; height: number };
};

function FavoriteButton({ offerId, isFavorite, className, iconSize = { width: 18, height: 19 } }: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector((state) => state.user.authorizationStatus);

  const handleClick = useCallback(() => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(toggleFavoriteAction({ offerId, status: !isFavorite }));
  }, [authStatus, dispatch, isFavorite, navigate, offerId]);

  return (
    <button
      className={`${className}-button ${isFavorite ? `${className}--active` : ''} button`}
      type="button"
      onClick={handleClick}
    >
      <svg className={`${className}-icon`} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
