// jshint esversion:6
import { useParams, useNavigate } from "react-router-dom";
import { PaymentView } from "../../../views/payment";
import { getCourseData } from "../../../utils";
import { SuccessPaymentModalMenu, FailedPaymentModalMenu } from "../../../components/dashboard";
import { useAppDispatch, useAppSelector } from "../../../hooks/dashboard";
import { paymentSliceActions } from "../../../features/modalviews";

function PaymentPage() {
    // Get route navigator 
    const navigate = useNavigate();

    // Get the userId param from the URL.
    let { courseId } = useParams();

    // GET course details from API
    const courseData = getCourseData(courseId!);

    // Get state of payment modal
    const { isPaymentModalOpen, isPaymentModalSuccess } = useAppSelector((state) => state.paymentModal)

    // Get a store disatch
    const dispatch = useAppDispatch();

    // Close payment status modal
    function handleCloseModal() {
        dispatch(paymentSliceActions.togglePaymentModal({ isPaymentModalOpen: false, isPaymentModalSuccess: null }))
    }

    // NOT FOUND, redirect to home page
    if (!courseData) {
        navigate("/dashboard");
        return null;
    }

    else {
        return (
            <div>
                <PaymentView courseName={courseData.title} coursePrice={courseData.price} />
                {
                    isPaymentModalOpen && (
                        <div className="fixed inset-0 bg-[#00000073] flex justify-center items-center md:left-[200px] z-50" onClick={handleCloseModal}>
                            <div onClick={(e) => e.stopPropagation()}>
                                {isPaymentModalSuccess ? (
                                    <SuccessPaymentModalMenu />
                                ) : (
                                    <FailedPaymentModalMenu />
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export { PaymentPage };