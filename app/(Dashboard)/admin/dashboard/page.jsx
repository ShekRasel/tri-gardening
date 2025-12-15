import { logout } from "@/global-server-actions/auth.action";

const AdminDashboard = async () => {
  return (
    <div>
      {" "}
      Admin Dashboard
      <p>
        <button onClick={logout}>Logout</button>
      </p>
    </div>
  );
};

export default AdminDashboard;
