import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; // a middleware that will warn us if whe accidentally mutate any redux state

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //this line will add support to the redux devtools. The "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" is a unique global variable that says if the dev tools are avaiable at all

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())) // Now we are gonna be able to interact with our redux store using the redux devtools in the browser
  );
}
