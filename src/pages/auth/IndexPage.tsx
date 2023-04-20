// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage, UserRegistrationPage } from "./subroutes";

function AuthIndexPage() {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="usereg" element={<UserRegistrationPage />} />
        </Routes>
    );
}

export { AuthIndexPage }