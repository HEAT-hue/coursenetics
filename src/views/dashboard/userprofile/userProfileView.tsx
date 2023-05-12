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

            <div className="my-5 mb-[3rem]">
                <EditForm />
            </div>
        </div>
    );
}

export { UserProfileView }