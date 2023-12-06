import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { add, remove, toggle } from '../redux/shoppingList';
import { ShoppingList } from '../components/ShoppingList';
import { AddShoppingListItem } from '../components/AddShoppingListItem';

export const ShoppingPage = () => {
  const { items } = useSelector((state: RootState) => state.shoppingList);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Shopping list</div>
      <div className='max-w-lg mx-auto flex flex-col gap-y-3 p-2'>
        <AddShoppingListItem addItem={(name: string) => dispatch(add(name))} />
        <ShoppingList
          items={items}
          toggleItem={(id: string) => dispatch(toggle(id))}
          removeItem={(id: string) => dispatch(remove(id))}
        />
      </div>
    </div>
  );
};
