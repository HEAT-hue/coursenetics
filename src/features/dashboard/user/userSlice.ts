// jshint esversion:6
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// define the type for the initial state
type userType = {
    firstName: string,
    lastName: string,
    userName?: string,
    email: string,
    phoneNumber: string,
    gender: string,
    educationLevel: string,
    dayOfBirth: string,
    monthOfBirth: string,
    yearOfBirth: string
}

// create the state
const initialState: userType = {
    firstName: "Fortune",
    lastName: "Victor",
    userName: "funky",
    email: "fortunevictor@gmail.com",
    phoneNumber: "08164649834",
    gender: "female",
    educationLevel: "College",
    dayOfBirth: "11",
    monthOfBirth: "02",
    yearOfBirth: "2001"
}

// create the slice
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<userType>) => {
            const { payload } = action;
            // return an entirely new state
            return payload;
        }
    }
})

// Export Actions
export const userActions = userSlice.actions

// Export Reducer
export const userReducer = userSlice.reducer;