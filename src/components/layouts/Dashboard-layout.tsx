import { Outlet } from "react-router-dom";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";

export default function DashboardLayoud() {
    return (
        <div className="h-screen overflow-hidden flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
