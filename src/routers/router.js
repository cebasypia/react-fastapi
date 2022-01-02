import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Auth from "../pages/auth";
import Users from "../pages/users";
import UserStatus from "../components/UserStatus";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserStatus />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="users" element={<Users />}>
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route path="new" element={<NewTeamForm />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}
