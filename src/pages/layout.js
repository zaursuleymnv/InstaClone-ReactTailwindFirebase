import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <>
          <Header />
          <div className="container mx-auto pt-4">
            <Outlet/>
          </div>
        </>
    )
}