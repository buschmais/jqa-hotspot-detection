import Counter from './components/Counter'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export default function Metrics() {
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Metrics</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}