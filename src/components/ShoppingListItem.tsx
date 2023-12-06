import { Button } from './Button';

type ShoppingListItemProps = {
  name: string;
  isChecked: boolean;
  onItemClick: () => void;
  onItemRemove: () => void;
};

export const ShoppingListItem = ({
  name,
  isChecked,
  onItemClick,
  onItemRemove,
}: ShoppingListItemProps) => (
  <li
    onClick={onItemClick}
    className='list-none cursor-pointer hover:bg-accent rounded-lg p-4 flex justify-between items-center'
  >
    <span className={`select-none ${isChecked && 'line-through text-grey'}`}>
      {name}
    </span>
    <Button
      onClick={(event) => {
        event.stopPropagation();
        onItemRemove();
      }}
    >
      Remove
    </Button>
  </li>
);
