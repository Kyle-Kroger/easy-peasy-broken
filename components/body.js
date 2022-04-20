import { useStoreState } from "easy-peasy";

const Body = () => {
  const todos = useStoreState((state) => state.todos);
  return (
    <>
      <p onClick={() => console.log(todos)}>Some text to click</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.text}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Body;
