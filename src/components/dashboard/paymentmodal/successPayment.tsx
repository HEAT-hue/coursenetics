// jshint esversion:6
import { AiOutlineClose } from "react-icons/ai"
import paymentSuccess from "../../../assets/dashboard/payment_check_mark.png";
import { useAppDispatch } from "../../../hooks/dashboard";
import { paymentSliceActions } from "../../../features/modalviews";

export function SuccessPaymentModalMenu() {

    const dispatch = useAppDispatch();

    function handleCloseCLick() {
        dispatch(paymentSliceActions.togglePaymentModal({ isPaymentModalOpen: false, isPaymentModalSuccess: null }))
    }

    return (
        <>
            <div className="bg-white p-8 mx-3 rounded relative">
                {/* Close Modal */}
                <AiOutlineClose size={20} className="absolute cursor-pointer top-[20px] right-[20px]" onClick={handleCloseCLick} />
                <h3 className="font-bold text-center text-2xl mt-3">Thank you</h3>
                <p className="text-gray-700">Your payment is successful</p>
                <img src={paymentSuccess} className="w-[200px] h-[200px]" alt="payment-success" />
            </div>
        </>
    )
}