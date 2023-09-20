import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
