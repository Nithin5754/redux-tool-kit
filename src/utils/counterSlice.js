
import { createSlice } from "@reduxjs/toolkit";



const counterSlice=createSlice({
  name:'counter',
  initialState:{
    value:0
  },
  reducers:{
    addCounter:(state)=>{
      
        state.value+=1


    },

    removeCounter:(state)=>{
      if(state.value>0){
        state.value-=1

      }else{
        state.value=0
      }
    },
    resetCounter:()=>{
      return {value:''}
    }
  }
})



export const {addCounter,removeCounter,resetCounter}=counterSlice.actions

export default counterSlice.reducer