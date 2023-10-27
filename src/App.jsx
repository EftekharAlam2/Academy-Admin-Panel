import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function App() {
  const logout = async () => {
    const response = await axios.delete(
      "https://dev-api.academypro.live/admin-auth/logout"
    );
    if (response.status === 204) {
      console.log("Logout successful");
    } else {
      console.error("Logout failed. Status:", response.status);
    }
  };

  return (
    <>
      <div className="w-full text-center">
        <Link to="/login">
          <button className="w-20 bg-blue-500 my-10 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Login
          </button>
        </Link>
        <Link to="/logout">
          <button
            className="w-20 ms-5 bg-red-500 my-10 text-white p-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            onClick={logout}
          >
            Logout
          </button>
        </Link>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
