import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Documentation from "./Components/Documentation/Documentation";
import Contact from "./Components/Contacts/Contact";
import DashboardMain from "./Components/DashBoard/DashboardMain";
import Dashboard from "./Components/DashBoard/Component/Dashboard/Dashboard";
import AccountApi from "./Components/DashBoard/Component/AccountApi/Account&Api";
import DashContact from "./Components/DashBoard/Component/DashContact/DashContact";
import DashDocumentation from "./Components/DashBoard/Component/DashDocumentation/DashDocumentation";
import AuthRedirect from "./AuthRedirect";
import ProtectedRoute from "./ProtectedRoute";
import WelcomeMail from "./Components/DashBoard/Component/WelcomeMail/WelcomeMail";
import ProductMail from "./Components/DashBoard/Component/ProductMail/ProductMail";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/docs",
    element: <Documentation />,
  },
  { path: "/contact", element: <Contact /> },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <DashboardMain />,
        children: [
          { path: "", element: <Dashboard /> },
          { path: "welcome-mail", element: <WelcomeMail /> },
          { path: "product-mail", element: <ProductMail /> },
          { path: "docs", element: <DashDocumentation /> },
          { path: "contact", element: <DashContact /> },
          { path: "account", element: <AccountApi /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AuthRedirect />,
  },
]);
function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
