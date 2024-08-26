import TodoContainer from "./components/TodoContainer";
import "./App.css";
import SampleTodoContext from "./contexts/SampleTodoContext";
import SAMPLE_TODOS from "./contexts/SampleTodo";

const App = () => {
  return (
    <SampleTodoContext.Provider value={SAMPLE_TODOS}>
      <main className="main-container">
        <TodoContainer />
      </main>
    </SampleTodoContext.Provider>
  );
};

export default App;
