import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Chat from "./Components/Chat";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useContext, useEffect } from "react";
import { MainContext } from "./Context/Main";
import Group from "./Components/Group";
import Removed from "./Pages/Removed";
import NotFound from "./Components/NotFound";

function App() {
  const { localToState } = useContext(MainContext);
  useEffect(() => {
    localToState();
  }, []);
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Chat />,
        },

        {
          path: "/group/:groupId",
          element: <Group />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/removed-from-group",
      element: <Removed />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
