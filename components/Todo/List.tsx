import { VFC } from 'react';
import { TodoItem } from 'components/Todo/Item';
import { Todo } from 'types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: VFC<Props> = ({ todos }) => {
  return (
    <div>
      <ul className='divide-y divide-gray-300'>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
