const cartActions = {
  Add: (cart, product) => {
    return {
      type: 'ADD_TO_CART',
      cart,
      product,
    };
  },
  AddItem: (cart, product) => {
    return {
      type: 'ADD_ITEM',
      cart,
      product,
    };
  },
  RemoveItem: (cart, product) => {
    return {
      type: 'REMOVE_ITEM',
      cart,
      product,
    };
  },
  DeleteItem: (cart, product) => {
    return {
      type: 'DELETE_ITEM',
      cart,
      product,
    };
  },
  ChangeCart: (localCart) => {
    return {
      type: 'CHANGE_CART',
      localCart,
    };
  },
};

export default cartActions;
