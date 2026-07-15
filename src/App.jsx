import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Route"; // আপনার রাউট ফাইল

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;