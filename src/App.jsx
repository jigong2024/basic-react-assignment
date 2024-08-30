import TodoContainer from "./components/TodoContainer";
import "./App.css";
import Layout from "./components/Layout";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <Layout>
        <TodoContainer />
      </Layout>
    </TodoProvider>
  );
};

export default App;
