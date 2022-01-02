import { Routes, Route, Outlet } from "react-router-dom";
import UserIndex from "../pages/users/UserIndex";
import UserProfile from "../pages/users/UserProfile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<UserIndex />} />
        <Route path=":id" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}