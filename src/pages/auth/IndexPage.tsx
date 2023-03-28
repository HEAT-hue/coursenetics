// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "./subroutes";

function AuthIndexPage() {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
        </Routes>
    );
}

export { AuthIndexPage }