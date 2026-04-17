import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSorting } from '../../store/slices/ui-slice';
import { SORT_ARROW_SIZE, SORT_TYPES } from '../../const';

function SortList(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const currentSort = useSelector((state: RootState) => state.ui.sorting);
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
        <svg className="places__sorting-arrow" width={SORT_ARROW_SIZE.WIDTH} height={SORT_ARROW_SIZE.HEIGHT}>
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

export default SortList;
