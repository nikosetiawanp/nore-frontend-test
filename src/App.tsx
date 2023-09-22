import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
