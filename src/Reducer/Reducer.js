const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { data: [...action.payload] };
        case "SINGLE_ITEM":
            return { ...state, item: action.payload };
        case "ADD_ITEM":
            let add = true;
            state.cart && state.cart.forEach((item) => {
                if (item.id === action.payload.id) add = false;
            });
            if (add) return state.cart ? { ...state, cart: [...state.cart, action.payload] } : { ...state, cart: [action.payload] };
            return { ...state };
        default:
            return state;
    }
}

export default reducer;
