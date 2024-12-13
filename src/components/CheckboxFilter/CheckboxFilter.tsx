import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleAll, toggleFilter, setOnlyFilter } from "../../store/slices/ticketsSlice";
import { GetTransferDeclination } from "../../helpers/transferDeclination";
import cls from "./CheckboxFilter.module.scss";

export function CheckboxFilter() {
  const {filters, showAll} = useAppSelector((state) => state.tickets);
  const dispatch = useAppDispatch();
  const options = [0, 1, 2, 3];

  const handleAllChange = () => {
    dispatch(toggleAll());
  };

  const handleOptionChange = (option: number) => {
    dispatch(toggleFilter(option));
  };

  const handleOnlyOptionChange = (e : any) => (option: number) => {
    e.stopPropagation();
    dispatch(setOnlyFilter(option));
  };

  return (
    <div className={cls.filterContainer}>
      <div className={cls.header}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <label className={cls.label}>
        <input
          className={cls.input}
          type="checkbox"
          checked={showAll}
          onChange={handleAllChange}
        />
        <span className={cls.span}></span>
        Все
      </label>
      {options.map((option) => (
        <label 
          className={cls.label}
          key={option}
        >
          <input
            className={cls.input}
            type="checkbox"
            checked={filters.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          <span className={cls.span}></span>
          {GetTransferDeclination(option)}

          <button
            className={cls.onlyButton}
            onClick={(e) => handleOnlyOptionChange(e)(option)}
          >
            ТОЛЬКО
          </button>
        </label>
      ))}
    </div>
  );
}
