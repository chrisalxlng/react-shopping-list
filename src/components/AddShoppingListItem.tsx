import { useState } from 'react';
import { Button } from './Button';
import { TextInput } from './TextInput';

type AddShoppingListItemProps = {
  addItem: (name: string) => void;
};

export const AddShoppingListItem = ({ addItem }: AddShoppingListItemProps) => {
  const [name, setName] = useState('');

  const isNameEmpty = name === '';

  const reset = () => setName('');

  return (
    <div className='flex gap-x-1.5'>
      <TextInput
        value={name}
        onChange={(event) => setName(event.target.value)}
        className='grow'
      />
      <Button
        onClick={() => {
          if (isNameEmpty) return;
          addItem(name);
          reset();
        }}
      >
        Add
      </Button>
    </div>
  );
};
