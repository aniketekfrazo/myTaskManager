import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/ErrorComponent";
import TaskPage from "../pages/TaskPage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <Error />,
  }, 
  {
    path: "/signup",
    element: <RegisterPage />,
    errorElement: <Error />,
  },
  {
    path: "/task",
    element: (
      <MainLayout>
        <TaskPage />
      </MainLayout>
    ),
    errorElement: <Error />,
  },
]);

export default router;
