import React from "react";
import TodoContainer from "./components/TodoContainer";
import SampleTodoContext from "../contexts/SampleTodoContext";

const App = () => {
  return (
    <SampleTodoContext.Provider SAMPLE_TODOS={SAMPLE_TODOS}>
      <main className="main-center">
        <TodoContainer />
      </main>
    </SampleTodoContext.Provider>
  );
};

export default App;
