import  {configureStore} from "@reduxjs/toolkit"
import AddtocartReducer from  "../slice/Addtocart"
import  favoritesSliceReducer  from "../slice/favoritesSlice";
import counterReducer from'../slice/counterSlice'

const store=configureStore({
  reducer:{
    cart2:AddtocartReducer,
    favorites:favoritesSliceReducer,
    counter: counterReducer,
  }
})

export default store;