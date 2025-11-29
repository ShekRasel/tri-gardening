import AdminNavbar from "@/components/admin/admin.navbar";
import AdminSidebar from "@/components/admin/admin.sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar - hidden on mobile, visible on tablet+ */}
      <aside className="w-full md:w-64 lg:w-72 border-r bg-white md:block">
        <AdminSidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0">
        {/* Sticky Header */}
        <header className="sticky top-0 z-40 bg-white shadow-sm">
          <AdminNavbar />
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
