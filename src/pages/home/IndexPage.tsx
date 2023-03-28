// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./subroutes";

function HomeIndexPage() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export { HomeIndexPage }