// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../../components/layout/dashboard";
import { HomePage, CertificatePage, CourseListPage, UserProfilePage } from "./subroutes";

function DashboardIndexPage() {
    return (
        <Routes>
            <Route element={<DashboardLayout />} >
                <Route index element={<HomePage />} />
                <Route path="cert" element={<CertificatePage />} />
                <Route path="courses" element={<CourseListPage />} />
                <Route path="user" element={<UserProfilePage />} />
            </Route>
        </Routes>

    )
}

export { DashboardIndexPage }