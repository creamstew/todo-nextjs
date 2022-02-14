import type { NextPage } from 'next';

import { TodoHeader, TodoInput, TodoList } from 'components/Todo';

const Home: NextPage = () => {
  const todos = [
    { id: 1, title: 'todo1', status: true },
    { id: 2, title: 'todo2', status: false },
  ];

  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
};

export default Home;
