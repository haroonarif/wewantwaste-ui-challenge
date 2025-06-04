import { RouterProvider } from "react-router-dom";
import type { JSX } from "react";
import { router } from "./routes/routes";

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;