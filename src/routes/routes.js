import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Quiz from "@/pages/Quiz.vue";
import Quora from "@/pages/Quora.vue";
import PageBook from "@/pages/PageBook.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/base",
    name: "BaseDashboard",
    component: DashboardLayout,
    redirect: Dashboard,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "/user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "/quiz",
        name: "Quiz",
        component: Quiz
      },
      {
        path: "/quora",
        name: "Quora",
        component: Quora
      },
      {
        path: "/pageBook",
        name: "PageBook",
        component: PageBook
      }
    ]
  }
];

export default routes;
