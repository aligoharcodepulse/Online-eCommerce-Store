import { createAsyncThunk, createSlice ,createAction } from "@reduxjs/toolkit";



const URL ="https://fakestoreapi.com/products"
export const userData = createAsyncThunk("user",async()=>{
    const response = await fetch(URL)
    const data = await response.json()
    try {
        return data;
    } catch (error) {
       console.log(error); 
    }
})

const pending = createAction(userData.pending)
const fulfilled = createAction(userData.fulfilled)
const rejected = createAction(userData.rejected)

const userSlice = createSlice({
    name :"userSlice",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    extraReducers : (builder)=>{
    builder
        .addCase(pending,(state)=>{
            state.loading = true;
        })
        .addCase(fulfilled,(state, action)=>{
            state.loading = false;
            state.data = action.payload
        })
        .addCase(rejected,(state , action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})
export default userSlice.reducer;