import { ShoppingListItem as ShoppingListItemType } from '../redux/shoppingList';
import { Divider } from './Divider';
import { ShoppingListItem } from './ShoppingListItem';

type ShoppingListProps = {
  items: ShoppingListItemType[];
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
};

export const ShoppingList = ({
  items,
  toggleItem,
  removeItem,
}: ShoppingListProps) => (
  <ul className='m-0 p-0 flex flex-col gap-y-1.5'>
    {items.map((item, index) => (
      <>
        {index !== 0 && <Divider />}
        <ShoppingListItem
          key={item.id}
          name={item.name}
          isChecked={item.isChecked}
          onItemClick={() => toggleItem(item.id)}
          onItemRemove={() => removeItem(item.id)}
        />
      </>
    ))}
  </ul>
);
