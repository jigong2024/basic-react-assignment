import TodoContainer from "./components/TodoContainer";
import "./App.css";
import Layout from "./components/Layout";
import TodoProvider from "./context/TodoProvider";
import SAMPLE_TODOS from "./context/SampleTodo";
import SampleTodoContext from "./context/SampleTodoContext";

const App = () => {
  return (
    <Layout>
      <SampleTodoContext.Provider value={SAMPLE_TODOS}>
        <TodoProvider>
          <main className="main-container">
            <TodoContainer />
          </main>
        </TodoProvider>
      </SampleTodoContext.Provider>
    </Layout>
  );
};

export default App;
