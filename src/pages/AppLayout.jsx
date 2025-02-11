import { Outlet } from "react-router-dom";
import { Header } from "../components/UI/Header";
import { Footer } from "../components/UI/Footer";

export function AppLayout() {
    return (
        <section className="bg-neutral-900 text-white min-h-lvh flex flex-col justify-between">
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
};