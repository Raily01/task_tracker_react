import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/index";
import Table from "./pages/table";
import TasksPage from "./pages/tasks";
import apolloclient from "./lib/appoliClient";

const App = () => {
  return (
    <ApolloProvider client={apolloclient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<Table />} />
          <Route path="/tasks/:id" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
