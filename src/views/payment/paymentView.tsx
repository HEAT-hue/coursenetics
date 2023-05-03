// jshint esversion:6
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { SyntheticEvent, useRef, useState } from "react";
import masterCard from "../../assets/dashboard/logo_mastercard.png"
import visaCard from "../../assets/dashboard/logo_visa.png";
import { useAppDispatch } from "../../hooks/dashboard";
import { paymentSliceActions } from "../../features/modalviews";

interface PaymentViewProps {
    courseName: string
    coursePrice: number
}

// const selectedCard default 
const defaultCardSelection = {
    masterCard: false, visa: false
}

// DEBIT CARD Number length
const cardNumberLength = 16;

// DEBIT CARD CVV Number length
const cvvNumberLength = 3;

interface CardExpiryDateType {
    month: string
    year: string
}

interface ErrorStateType {
    cardNumberError: boolean,
    cvvError: boolean,
    cardExpiryError: boolean
}

function PaymentView({ courseName, coursePrice }: PaymentViewProps) {

    // Get store dispatch
    const dispatch = useAppDispatch()

    // Current error state
    const [errors, setErrors] = useState({ cardNumberError: false, cvvError: false, cardExpiryError: false })

    // State to keep track of card type selected
    const [selectedCard, setSelectedCard] = useState({ masterCard: true, visa: false });

    // State of the card number
    const [cardNumber, setCardNumber] = useState<string>("");

    // State of fake card input element for viewing purposes which contains the card number with some modifications
    const [cardViewNumber, setCardViewNumber] = useState<string>("")

    // State to keep track of card number input focus state
    const [cardViewNumberEdit, setCardViewNumberEdit] = useState<boolean>(false);

    // CVV number state
    const [cvvNumber, setCvvNumber] = useState<string>("");

    // Card password state
    const [cardPassword, setCardPassword] = useState<string>("");

    // Card Expiry state
    const [cardExpiryDate, setCardExpiryDate] = useState({ month: "", year: "" } as CardExpiryDateType)

    function invalidateDetails() {
        return (
            (!errors.cardNumberError && !errors.cvvError && !errors.cardExpiryError)
        )
    }

    // Update state: Card Password
    function handleCardPasswordInputChange(value: string) {
        setCardPassword(value);
    }

    // Handle change to set state
    function handleCvvNumberInputChange(value: string) {
        if (value.length <= cvvNumberLength) {
            setCvvNumber(value);

            // Limit reached, clear any cvv length error present
            if (value.length == cvvNumberLength) {
                setErrors({ ...errors, cvvError: false });
            }
        }
    }

    /**
    * @description: Create an error if the CVV number is not complete immediately it loses focus
    */
    function handleCvvNumberInputBlur() {
        if (cvvNumber.length != cvvNumberLength) {
            setErrors({ ...errors, cvvError: true });
        }
    }

    /**
    * @description: Onchange to update state: cardNumber
    */
    function handleSetCardNumber(value: string) {
        // Prevent more entries if limit reached
        if (value.length <= cardNumberLength) {
            setCardNumber(value);

            // Limit reached, clear any cvv length error present
            if (value.length == cardNumberLength) {
                setErrors({ ...errors, cardNumberError: false });
            }
        }
    }

    /**
    * @description: To set an error if card number isn't complete
    */
    function handleCardNumberInputBlur() {
        // Remove focus
        setCardViewNumberEdit(false);

        // Set the error if number is incomplete
        if (cardNumber.length != cardNumberLength) {
            setErrors({ ...errors, cardNumberError: true });
        }
    }

    /**
     * @description: To build a card number value that will be displayed to the user
     * @param value: The value gotten from the real invisible input element
     */
    function handleCardNumberInputChange(value: string) {

        // Set the focus status of fake input element
        setCardViewNumberEdit(true);

        // Max input length reached, return
        if (value.length >= cardNumberLength + 1) return;

        // Build display value with whatever string you get from real invisible input element

        // Output value
        let outputString = "";

        // Concatenate each values with the output value
        for (let i = 0, j = 1; i < value.length; ++i, ++j) {
            outputString += value.charAt(i);

            // After each 4th value add the space
            if (j % 4 == 0 && i < cardNumberLength - 1) outputString += " - ";
        }

        // Set the state of the fake input element
        setCardViewNumber(outputString);

    }

    /**
     * @description: Submit form upon click
     * @param e: To prevent page refresh upon submitting
     */
    function handleSubmit(e: SyntheticEvent) {
        // Prevent page refresh on default
        e.preventDefault();

        // Check for errors on the page
        if (invalidateDetails()) {
            // If none, proceed to payment
            console.log("Payment successful")
            // Display success modal
            dispatch(paymentSliceActions.togglePaymentModal({ isPaymentModalOpen: true, isPaymentModalSuccess: true }));
        }
        else {
            // Display error modal
            dispatch(paymentSliceActions.togglePaymentModal({ isPaymentModalOpen: true, isPaymentModalSuccess: false }));
        }
    }

    return (
        <div className="px-5">
            <div className="text-xl font-bold text-pry text-center my-3">Pay for your course</div>
            <div className="text-center my-3 text-pry">{courseName}</div>

            {/* Form */}
            <form onSubmit={(e) => handleSubmit(e)} className="py-2 flex flex-col gap-y-[1.6rem]">


                {/* Card Number Group */}
                <div className="grid grid-cols-1 gap-y-[1.6rem] gap-x-7 md:grid-cols-[3fr,_2fr]">
                    {/* Card Type Selection */}
                    <div className="md:order-1 flex flex-col gap-y-2">
                        <h5 className="font-bold">Card Type</h5>
                        <div className="flex gap-x-5 items-center">
                            <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => {
                                setSelectedCard({ ...selectedCard, ...defaultCardSelection, masterCard: true });
                            }}>
                                <img src={masterCard} alt="master_card-img" className="w-[40px] h-[35px]" />
                                <div className="w-[20px] h-[20px] p-[0.3rem] rounded-full bg-gray-300">
                                    <div className={`w-full h-full ${selectedCard.masterCard && "bg-pry"} rounded-full`}></div>
                                </div>

                            </div>
                            <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => {
                                setSelectedCard({ ...selectedCard, ...defaultCardSelection, visa: true });
                            }} >
                                <img src={visaCard} alt="master_card-img" className="w-[50px] h-[30px]" />
                                <div className="w-[20px] h-[20px] p-[0.3rem] rounded-full bg-gray-300">
                                    <div className={`w-full h-full ${selectedCard.visa && "bg-pry"} rounded-full`}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Number Input */}
                    <div className="flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-[0.1rem]">
                            <h5 className="font-bold">Card Number</h5>
                            <p className={`font-mono text-xs ${errors.cardNumberError ? "text-red-500" : "text-gray-500"}`}>Enter 16 digits number on the card</p>
                        </div>
                        <div className="relative w-full max-w-[400px] h-[48px]">
                            <div className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center  border-[2px] ${cardViewNumberEdit ? "border-pry" : "border-gray-300"}`} > {cardViewNumber.length == 0 ? <span className="text-gray-600">XXXX - XXXX - XXXX - XXXX</span> : cardViewNumber}</div>
                            <input className="absolute inset-0 opacity-0 w-full max-w-[400px] border-[1px] border-pry py-[0.7rem] text-center rounded-sm outline-none" required type="tel" value={cardNumber} onFocus={() => setCardViewNumberEdit(true)} onBlur={handleCardNumberInputBlur} onChange={(e) => {
                                handleCardNumberInputChange(e.target.value)
                                handleSetCardNumber(e.target.value)
                            }} />
                        </div>
                    </div>

                </div>


                <div className="grid grid-cols-1 gap-y-[1.6rem] gap-x-7 sm:grid-cols-[1fr,_1fr]">
                    {/* CVV NUMBER Input */}
                    <div className="flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-[0.1rem]">
                            <h5 className="font-bold">CVV</h5>
                            <p className={`font-mono text-xs ${errors.cvvError ? "text-red-500" : "text-gray-500"}`}>Enter the 3 digit number at the back of the card</p>
                        </div>
                        <input className="w-full max-w-[200px] border-[2px] border-gray-300 focus:border-pry py-[0.7rem] text-center rounded-sm outline-none" type="password" placeholder="***" onBlur={handleCvvNumberInputBlur} value={cvvNumber} onChange={(e) => handleCvvNumberInputChange(e.target.value)} required />
                    </div>

                    {/* Card Expiry Input */}
                    <div className="flex flex-col justify-between gap-y-2">
                        <div className="flex flex-col gap-y-[0.1rem]">
                            <h5 className="font-bold">Expiry Date</h5>
                            <p className="text-gray-500 font-mono text-xs">Enter the expiry date of your card</p>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input className="w-[50px] border-[2px] border-gray-300 focus:border-pry py-[0.7rem] text-center rounded-sm outline-none" required type="text" placeholder="XX" value={cardExpiryDate.month} onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 2) setCardExpiryDate({ ...cardExpiryDate, month: value });
                            }} />
                            <div className="text-2xl">/</div>
                            <input className="w-[50px] border-[2px] border-gray-300 focus:border-pry py-[0.7rem] text-center rounded-sm outline-none" required type="text" placeholder="XX" value={cardExpiryDate.year} onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 2) setCardExpiryDate({ ...cardExpiryDate, year: value });
                            }} />
                        </div>
                    </div>
                </div>


                {/* Card Password Input */}
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-[0.1rem]">
                        <h5 className="font-bold">Password</h5>
                        <p className="text-gray-500 font-mono text-xs">Enter the card PIN</p>
                    </div>
                    <input className="w-full max-w-[200px] border-[2px] border-gray-300 focus:border-pry py-[0.7rem] text-center rounded-sm outline-none" required type="password" placeholder="****" value={cardPassword} onChange={(e) => handleCardPasswordInputChange(e.target.value)} />
                </div>

                {/* Form Submit Button */}
                <div className="my-6 text-center">
                    <button className="w-full max-w-[400px] p-2 py-[1rem] font-bold text-white bg-pry rounded">Pay <span>${coursePrice}</span></button>
                </div>
            </form>
        </div>
    )
}

export { PaymentView };