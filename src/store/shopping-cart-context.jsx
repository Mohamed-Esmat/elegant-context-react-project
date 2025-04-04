import { createContext, useReducer, useState } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

//The value the createContext function parduces is an object with a Provider component and a Consumer component
//The Provider component is used to wrap the components that need access to the context
//The Consumer component is used to access the context in the components that are wrapped by the Provider component
export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeItem: (id) => {},
  updateItemQuantity: (id, amount) => {},
});

function shoppingCartReducer(state, action) {
  //This state is the guaranteed latest state of the shopping cart
  //This action is the action that is dispatched to the reducer function
  //This reducer function is used to update the state of the shopping cart
  //The reducer function is used to handle the actions that are dispatched to it
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload.id
      );
      updatedItems.push({
        id: action.payload.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, //not needed here because we only have one state property
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.productId
    );
    const updatedItem = { ...updatedItems[updatedItemIndex] };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    }
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  // const [shoppingCart, setShoppingCart] = useState({
  //   items: [],
  // });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: {
        id: id,
      },
    });

    // setShoppingCart((prevShoppingCart) => {

    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId: productId,
        amount: amount,
      },
    });
    // setShoppingCart((prevShoppingCart) => {

    // });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    // items: shoppingCart.items,
    // totalAmount: shoppingCart.totalAmount,
    // addItem: handleAddItemToCart,
    // removeItem: handleUpdateCartItemQuantity,
    // updateQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
