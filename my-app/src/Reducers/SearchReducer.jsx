export const SearchReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      const newData = [...state.data, ...action.payload.data];
      return {
        data: newData,
        totalData: action.payload.totalData,
        pages: action.payload.pages
      };
    default:
      throw new Error();
  }
};
