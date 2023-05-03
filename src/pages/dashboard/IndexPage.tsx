// jshint esversion:6
import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../../layout/dashboard";
import { HomePage, CertificatePage, CourseListPage, UserProfilePage, CoursePage, PaymentPage } from "./subroutes";

function DashboardIndexPage() {
    return (
        <Routes>
            <Route element={<DashboardLayout />} >
                <Route index element={<HomePage />} />
                <Route path="cert" element={<CertificatePage />} />
                <Route path="courses" element={<CourseListPage />} />
                <Route path="course/:courseId" element={<CoursePage />} />
                <Route path="user" element={<UserProfilePage />} />
                <Route path="payment/:courseId" element={<PaymentPage />} />
            </Route>
        </Routes>


    )
}

export { DashboardIndexPage }