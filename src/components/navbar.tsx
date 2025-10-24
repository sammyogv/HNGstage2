
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-400 shadow-md py-4">
      <div className="max-w-1440 mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-primary">TicketMaster</h1>
        <div className="space-x-4">
          <Link to="/auth/login" className="text-gray-700 hover:text-primary">
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
