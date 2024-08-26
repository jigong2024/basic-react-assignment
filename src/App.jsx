import TodoContainer from "./components/TodoContainer";
import "./App.css";
import SampleTodoContext from "./contexts/SampleTodoContext";
import SAMPLE_TODOS from "./contexts/SampleTodo";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <SampleTodoContext.Provider value={SAMPLE_TODOS}>
        <main className="main-container">
          <TodoContainer />
        </main>
      </SampleTodoContext.Provider>
    </Layout>
  );
};

export default App;
