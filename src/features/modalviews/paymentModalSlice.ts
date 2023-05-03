// jshint esversion:6
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Create interface for the state
interface PaymentModalType {
    isPaymentModalOpen: boolean
    isPaymentModalSuccess: boolean | null
}

// Create the interface for the action payload
interface ActionPayload {
    isPaymentModalOpen: boolean
    isPaymentModalSuccess: boolean | null
}


// Create the initial state
const initialState: PaymentModalType = {
    isPaymentModalOpen: false,
    isPaymentModalSuccess: null
}

// Create the slice
const paymentModalSlice = createSlice({
    name: "paymentModal",
    initialState,
    reducers: {
        togglePaymentModal: (state, action: PayloadAction<ActionPayload>) => {
            const { payload } = action
            state.isPaymentModalOpen = payload.isPaymentModalOpen;
            state.isPaymentModalSuccess = payload.isPaymentModalSuccess;
        }
    }
})

// Export Slice Actions
export const paymentSliceActions = paymentModalSlice.actions;

// Export the reducer to the store
export const paymentModalReducer = paymentModalSlice.reducer;