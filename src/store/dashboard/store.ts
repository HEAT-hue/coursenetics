// jshint esversion:6
import { configureStore } from "@reduxjs/toolkit";
import { paymentModalReducer } from "../../features/modalviews";

export const store = configureStore({
    reducer: {
        paymentModal: paymentModalReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch