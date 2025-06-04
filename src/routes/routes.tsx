import { createBrowserRouter } from "react-router-dom";
import { SplitStepper } from "../shared/components/stepper";

export const router = createBrowserRouter([

    {
      index:true,
      path: "/",
      element: <SplitStepper />,
    },
  ]);