// jshint esversion:6
import { Header } from "../../../components/dashboard";
import { EditForm } from "../../../components/auth";
/**
 * 
 * @route: "/dashboard/user" 
 */


function UserProfileView() {
    return (
        <div className="w-full h-full pb-10 overflow-y-auto">
            <div>
                <Header />
            </div>

            <div className="">
                <EditForm />
            </div>
        </div>
    );
}

export { UserProfileView }