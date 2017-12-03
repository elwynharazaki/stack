const selectLibrary = (id) => {
   return {
      type: 'SELECT',
      payload: id
   };
};

export { selectLibrary };
