import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone:'',
    address:'',
    avatar:'',
    city:'',
    access_token: '',
    id:'',
    isAdmin: false,
    
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const {_id='', name='', email='',phone='', address='',avatar='', city='',access_token='',isAdmin} = action.payload;
            console.log('action', action);
            // // Update the state with the action payload if needed
            state.name = name ;
             state.email = email;
             state.phone=phone;
             state.address=address;
             state.avatar=avatar;
             state.city=city;
             state.id= _id;
             state.access_token = access_token;
             state.isAdmin= isAdmin;
        },
            resetUser: (state,action) => {
            
            state.name = '';
             state.email = '';
             state.phone='';
             state.address='';
             state.avatar='';
             state.city='';
             state.id='';
             state.access_token ='';
             state.access_token =false;
        }
    },
});

export const { updateUser  , resetUser} = userSlice.actions;

export default userSlice.reducer;