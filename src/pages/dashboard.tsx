import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/authcontext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Your session has expired — please log in again.");
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully.");
    navigate("/");
  };

  // Temporary dummy ticket stats
  const stats = [
    { label: "Total Tickets", value: 24, color: "bg-blue-600" },
    { label: "Open Tickets", value: 10, color: "bg-green-600" },
    { label: "Resolved Tickets", value: 14, color: "bg-gray-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-1440 mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-blue-600">TicketMaster</h1>
          <div className="space-x-4">
            <Link
              to="/tickets"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Manage Tickets
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="max-w-1440 mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h2>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${stat.color} text-white text-xl font-bold mb-3`}
              >
                {stat.value}
              </div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Manage Your Tickets Efficiently
          </h3>
          <p className="text-gray-600 mb-6">
            Create, view, and resolve tickets effortlessly with real-time updates.
          </p>
          <Link
            to="/tickets"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Go to Ticket Management
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
