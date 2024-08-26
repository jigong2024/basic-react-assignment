const TodoForm = ({ handleSubmit, newTodo, setNewTodo }) => {
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
