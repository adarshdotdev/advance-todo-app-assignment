import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { login, logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenicated
  );

  return (
    <nav className="flex justify-between items-center p-5 md:px-16 lg:px-40 shadow-md">
      <Link to="/" className="text-xl font-bold">
        Tasks
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-lg">
          Tasks
        </Link>
        {isAuthenticated ? (
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        ) : (
          <Button onClick={() => dispatch(login())}>Login</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
