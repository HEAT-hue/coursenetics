// jshint esversion:6
import { SyntheticEvent, useState } from "react";
import masterCard from "../../assets/dashboard/logo_mastercard.png"
import visaCard from "../../assets/dashboard/logo_visa.png";
import { useAppDispatch } from "../../hooks/dashboard";
import { paymentSliceActions } from "../../features/modalviews";
import { extractNumbersFromString } from "../../utils";

interface PaymentViewProps {
    courseName: string
    coursePrice: number
}

interface CardExpiryDateType {
    month: string
    year: string
}

interface ErrorStateType {
    cardNumberError: boolean,
    cvvError: boolean,
    cardExpiryError: boolean
}

// const selectedCard default 
const defaultCardSelection = {
    masterCard: false, visa: false
}

// DEBIT CARD Number length
const cardNumberLength = 16;

// DEBIT CARD CVV Number length
const cvvNumberLength = 3;


function PaymentView({ courseName, coursePrice }: PaymentViewProps) {

    // Get store dispatch
    const dispatch = useAppDispatch()

    // Error state
    const [errors, setErrors] = useState({ cardNumberError: false, cvvError: false, cardExpiryError: false })

    // State to keep track of card type selected
    const [selectedCard, setSelectedCard] = useState({ masterCard: true, visa: false });

    // Card number State
    const [cardNumber, setCardNumber] = useState<string>("");

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
    * @description: To set an error if card number isn't complete
    */
    function handleCardNumberInputBlur() {
        // Set the error if number is incomplete
        const extractedCardNumbers = extractNumbersFromString(cardNumber);

        if (extractedCardNumbers.length != cardNumberLength) {
            setErrors({ ...errors, cardNumberError: true });
        }
    }

    /**
     * @description: To build a card number value that will be displayed to the user
     * @param value: The value gotten from the real invisible input element
     */
    function handleCardNumberInputChange(value: string) {
        // Extract the numbers from dom input values: 
        // dom input value e.g 2928-3111-6178
        let cardNumber = extractNumbersFromString(value);    // returns e.g "292831116178"

        // Max input length reached, return
        if (cardNumber.length > cardNumberLength) return;

        // Output value to display to the user with modifications added
        let outputString = "";

        // Add each input value to the output string
        for (let i = 0, j = 0; i < cardNumber.length; ++i, ++j) {

            // Don't add modification at the start and end of the card number but after each 4th value
            if (j != 0 && i < cardNumberLength - 1 && j % 4 == 0) outputString += " - ";

            outputString += cardNumber.charAt(i);
        }

        // Set the state of the input element  i.e. display the modified output string
        // Output string e.g 4449-4694-3156
        setCardNumber(outputString);

        // Clear any length error if limit reached
        if (extractNumbersFromString(cardNumber).length == cardNumberLength) {
            setErrors({ ...errors, cardNumberError: false });
        }

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
                            <p className={`font-mono text-xs ${errors.cardNumberError ? "text-red-700" : "text-gray-500"}`}>Enter 16 digits number on the card</p>
                        </div>
                        <div className="w-full max-w-[400px]">
                            <input className="w-full max-w-[400px] border-[2px] border-gray-300 focus:border-pry py-[0.7rem] text-center rounded-sm outline-none" placeholder="XXXX - XXXX - XXXX - XXXX" required type="tel" value={cardNumber} onBlur={handleCardNumberInputBlur} onChange={(e) => {
                                handleCardNumberInputChange(e.target.value)
                            }} />
                        </div>
                    </div>

                </div>


                <div className="grid grid-cols-1 gap-y-[1.6rem] gap-x-7 sm:grid-cols-[1fr,_1fr]">
                    {/* CVV NUMBER Input */}
                    <div className="flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-[0.1rem]">
                            <h5 className="font-bold">CVV</h5>
                            <p className={`font-mono text-xs ${errors.cvvError ? "text-red-700" : "text-gray-500"}`}>Enter the 3 digit number at the back of the card</p>
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