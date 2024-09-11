import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import TodoRoutes from "./router/TodoRoutes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoRoutes />
    </QueryClientProvider>
  );
};

export default App;
