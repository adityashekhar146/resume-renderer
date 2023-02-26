import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import ErrorPage from "./features/error/error-page";
import { HomePage } from "./features/home";
import { BasicOne } from "./features/basic-resume";
import { ResumeLayout } from "./layouts";

const ARTSyRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        }
      ],
    },
    {
      path: "/cv",
      element: <ResumeLayout />,
      children: [
        { path: "/cv/basic", element: <BasicOne /> }
      ]
    }
  ]);

  return (
     <RouterProvider router={router} />
  )
};

export default ARTSyRouter;