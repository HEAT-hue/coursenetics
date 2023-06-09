// jshint esversion:6
import { configureStore } from "@reduxjs/toolkit";
import { paymentModalReducer } from "../../features/modalviews";
import { userReducer } from "../../features/dashboard";

export const store = configureStore({
    reducer: {
        user: userReducer,
        paymentModal: paymentModalReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch