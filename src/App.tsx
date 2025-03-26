import TaskPage from "./pages/TaskPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
