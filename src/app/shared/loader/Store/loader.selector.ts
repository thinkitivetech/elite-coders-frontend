import { createFeatureSelector, createSelector } from "@ngrx/store";

const counterState = createFeatureSelector('loader')

export const isLoading = createSelector(counterState,(state:any)=>{
    return state && state['showLoader']
})