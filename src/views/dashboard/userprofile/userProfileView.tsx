// jshint esversion:6
import { Header } from "../../../components/dashboard";
import { EditForm } from "../../../components/auth";
/**
 * 
 * @route: "/dashboard/user" 
 */


function UserProfileView() {
    return (
        <div className="w-full h-full pt-1 pb-5">
            <Header />

            <div className="mt-5">
                <EditForm />
            </div>
        </div>
    );
}

export { UserProfileView }