import { useDispatch, useSelector } from '../../services/store';

import styles from './constructor-page.module.css';

import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC, useEffect } from 'react';
import { selectIngredientsLoading } from '../../services/slices/ingredients/ingredients-slice';
import { getIngredientsThunck } from '../../services/slices/ingredients/actions';

export const ConstructorPage: FC = () => {
  /** взять переменную из стора */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsThunck());
  }, [dispatch]);

  const isIngredientsLoading = useSelector(selectIngredientsLoading);

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
