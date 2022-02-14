import { VFC } from 'react';

export const TodoHeader: VFC = () => {
  return (
    <div className='flex h-14 w-full items-center bg-gray-400 py-4 px-2 md:px-10'>
      <h1 className='text-2xl font-bold text-white'>Todo App With Tailwind</h1>
    </div>
  );
};
