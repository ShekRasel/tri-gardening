import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/admin/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard/orders"}>Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
