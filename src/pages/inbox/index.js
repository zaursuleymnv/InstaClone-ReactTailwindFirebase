import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

export default function InboxLayout() {
    return (
        <div className='flex border border-gray-300 bg-white h-[calc(100vh-97px)] rounded'>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}