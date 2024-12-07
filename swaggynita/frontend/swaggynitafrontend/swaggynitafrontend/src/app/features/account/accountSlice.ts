import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import agent from "../../api/agent";
import { User } from "../../model/user";
import { router } from "../../router/Router";
import axios from "axios";









interface AccountState {
    user: User | null;
    error: string | null;
}

const initialState: AccountState = {
    user: null,
    error: null
}

export const signInUser = createAsyncThunk<User, FieldValues>(
    'auth/login',
    async (data, thunkAPI) => {
        try{
            const user = await agent.Account.login(data);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }
        catch(error: any){
            return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)


export const signupUser = createAsyncThunk(
    'auth/signup',
    async (formData: any, thunkAPI) => {
        try {
            const response = await agent.Account.signup(formData);
            return response.message; // Store the message in Redux state
        } catch (error) {
            // Type assertion for AxiosError
            if (axios.isAxiosError(error) && error.response) {
                return thunkAPI.rejectWithValue(error.response.data.message || "Signup failed.");
            }
            return thunkAPI.rejectWithValue("An unexpected error occurred.");
        }
    }
);



export const fetchCurrentUser = createAsyncThunk<User | null>(
    'auth/fetchCurrentUser',
    async(_, thunkAPI) =>{
        try{
            //Retrieve user data from local storage
            const userString = localStorage.getItem('user');
            if(userString){
                const user = JSON.parse(userString) as User;
                return user;
            }
            return null;
        }
        catch(error){
            console.error("Error Fetching current User:", error);
            return null;
        }
    }
)

export const logoutUser = createAsyncThunk<void>(
    'auth/logout',
    async(_, thunkAPI) =>{
        try{
            //Remove user from local storage
            localStorage.removeItem('user');
        }
        catch(error){
            console.error("Error logging out user");
        }
    }
)

export const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        logOut:(state)=>{
            state.user = null;
            state.error = null;
            localStorage.removeItem('user');
            router.navigate('/');
        }, clearError:(state)=>{
            state.error = null;
        }
    },
    extraReducers:(builder=>{
        builder.addCase(signupUser.fulfilled, (state, action) => {
            toast.success(action.payload); // Show the success message
            state.error = null; // Clear error state
          });
        builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action)=>{
            state.user = action.payload;
            state.error = null;
            toast.success('Sign in successful');
        });
        builder.addMatcher(isAnyOf(signInUser.rejected, fetchCurrentUser.rejected, logoutUser.fulfilled), (state, action)=>{
            const payload = action.payload as string | null;
            state.error = payload;
            toast.success('Sign in failed. Please try again');
        });
    })
})
export const {logOut, clearError} = accountSlice.actions;