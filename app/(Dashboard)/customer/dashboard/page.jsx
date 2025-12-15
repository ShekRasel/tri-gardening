import { logout } from "@/global-server-actions/auth.action";

const CustomerDashboard = async () => {
  return (
    <div>
      CustomerDashboard
      <p>
        <button className="" onClick={logout}>
          Logout
        </button>
      </p>
    </div>
  );
};

export default CustomerDashboard;
