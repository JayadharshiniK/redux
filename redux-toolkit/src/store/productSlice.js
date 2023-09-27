import React from 'react'
import {createSlice} from '@reduxjs/toolkit'


const initialState={
    data:[],
};
const cartSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {
        fetchProducts(state, action){
            state.data = action.payload
        }
    }
});

export const {fetchProducts} = productSlice.actions;

export const {} = productSlice.actions;


export default cartSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch, getState){
        const data = await fetch('https://fakestoreapi.com/products')
        const result = data.json();
        dispatch(fetchProducts(result));

    }
}