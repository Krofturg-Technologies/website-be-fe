import { client } from "@/services/client";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		[client.reducerPath]: client.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(client.middleware),
	devTools: false,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
