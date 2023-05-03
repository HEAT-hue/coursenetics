// jshint esversion:6
import { AiOutlineClose } from "react-icons/ai"
import paymentFailure from "../../../assets/dashboard/payment_fail_icon.png"
import { useAppDispatch } from "../../../hooks/dashboard";
import { paymentSliceActions } from "../../../features/modalviews";

export function FailedPaymentModalMenu() {

    const dispatch = useAppDispatch();

    function handleCloseCLick() {
        dispatch(paymentSliceActions.togglePaymentModal({ isPaymentModalOpen: false, isPaymentModalSuccess: null }))
    }

    return (
        <>
            <div className="bg-white p-8 mx-3 rounded relative">
                {/* Close Modal */}
                <AiOutlineClose size={20} className="absolute cursor-pointer top-[20px] right-[20px]" onClick={handleCloseCLick} />
                <h3 className="font-bold text-center text-2xl mt-3">Oops!</h3>
                <p className="text-gray-700 mt-3">Your payment could not be completed!</p>
                <img src={paymentFailure} className="w-[100px] h-[100px] mx-auto my-5" alt="payment-success" />
            </div>
        </>
    )
}