import data from "./data";

const OFFSET = 4;
const arr = data.carCopy.sort((a, b) => a.price - b.price);
const initialState = {
  ...data,
  n: OFFSET,
  cars: data.carCopy.slice(0, OFFSET),
  minVal: arr[0].price,
  maxValu: arr[arr.length - 1].price,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CARS":
      const { category, priceRange, vehicleCondition, make, search } = state;
      let filteredCars = state.carCopy
        .filter((car) => {
          return (
            (!category || car.category === category) &&
            (!priceRange || car.price <= priceRange) &&
            (!vehicleCondition || car.vehicleCondition === vehicleCondition) &&
            (!make || car.make === make) &&
            (!search || car.title.toLowerCase().includes(search.toLowerCase()))
          );
        })
        .slice(0, state.n + OFFSET);

      if (state.sort) {
        filteredCars = filteredCars.sort((a, b) =>
          state.sort === "ASC"
            ? parseFloat(a.price) - parseFloat(b.price)
            : parseFloat(b.price) - parseFloat(a.price)
        );
      }

      return {
        ...state,
        n: state.n + OFFSET,
        cars: filteredCars,
      };

    case "GET_CATEGORIES":
      return {
        ...state,
        categories: [...state.categories],
      };
    case "GET_CONDITION":
      return {
        ...state,
        condition: [...state.condition],
      };
    case "SEARCH_CAR":
      return {
        ...state,
        search: action.payload,
        cars: state.cars.filter((car) =>
          car.title?.toLowerCase().includes(action.payload?.toLowerCase())
        ),
      };
    case "SORT_CAR_ASC":
      return {
        ...state,
        sort: "ASC",
        cars: state.cars.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        ),
      };
    case "SORT_CAR_DESC":
      return {
        ...state,
        sort: "DESC",
        cars: state.cars.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        ),
      };
    case "APPLY_FILTER":
      return {
        ...state,
        n: OFFSET,
        ...action.payload,
        cars: [],
      };
    case "BOOK_NOW":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export { reducer, initialState };
