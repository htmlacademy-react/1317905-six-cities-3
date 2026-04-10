import { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSorting } from '../../store/action';
import { SORT_TYPES } from '../../const';

function SortList(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const currentSort = useSelector((state: RootState) => state.sorting);
  const dispatch = useDispatch();

  const handleSortClick = (sortValue: string) => {
    dispatch(setSorting(sortValue));
    setIsOpen(false);
  };

  const currentLabel =
    SORT_TYPES.find((type) => type.value === currentSort)?.label || 'Popular';
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by{' '}</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLabel}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {SORT_TYPES.map((type) => (
            <li
              key={type.value}
              className={`places__option ${type.value === currentSort ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleSortClick(type.value)}
            >
              {type.label}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default memo(SortList);
