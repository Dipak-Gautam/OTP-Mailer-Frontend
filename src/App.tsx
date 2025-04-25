import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Documentation from "./Components/Documentation/Documentation";
import Contact from "./Components/Contacts/Contact";
import DashboardMain from "./Components/DashBoard/DashboardMain";
import Dashboard from "./Components/DashBoard/Component/Dashboard/Dashboard";
import AccountApi from "./Components/DashBoard/Component/AccountApi/Account&Api";
import DashContact from "./Components/DashBoard/Component/DashContact/DashContact";
import DashDocumentation from "./Components/DashBoard/Component/DashDocumentation/DashDocumentation";

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
        path: "",
        element: <Dashboard />,
      },

      { path: "docs", element: <DashDocumentation /> },
      { path: "contact", element: <DashContact /> },
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
