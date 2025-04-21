import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Documentation from "./Components/Documentation/Documentation";
import Contact from "./Components/Contacts/Contact";
import DashboardMain from "./Components/DashBoard/DashboardMain";
import Dashboard from "./Components/DashBoard/Component/Dashboard/Dashboard";
import Configuration from "./Components/DashBoard/Component/Configuration/Configuration";
import AccountApi from "./Components/DashBoard/Component/AccountApi/Account&Api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/docs",
    element: <Documentation />,
  },
  { path: "/contact", element: <Contact /> },
  {
    path: "/dashboard",
    element: <DashboardMain />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      { path: "configuration", element: <Configuration /> },
      { path: "docs", element: <Documentation /> },
      { path: "contact", element: <Contact /> },
      { path: "account", element: <AccountApi /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
