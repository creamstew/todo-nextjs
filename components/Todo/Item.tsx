import { VFC } from 'react';
import { Todo } from 'types/Todo';

type Props = {
  todo: Todo;
};

export const TodoItem: VFC<Props> = ({ todo }) => {
  return (
    <li className='flex items-center justify-between p-4'>
      <p className='text-gray-500'>
        {todo.status ? '✓' : '𐄂'} {todo.id}: {todo.title}
      </p>
      <div className='flex space-x-4'>
        <button className='rounded border-2 p-2 text-gray-500'>Done</button>
        <button className='rounded border-2 p-2 text-gray-500'>Remove</button>
      </div>
    </li>
  );
};
