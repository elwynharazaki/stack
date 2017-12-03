const SelectionReducer = (state = null, action) => {
   switch (action.type) {
      case 'SELECT':
         return action.payload;
      default:
         return state;
   }
};

export default SelectionReducer;
