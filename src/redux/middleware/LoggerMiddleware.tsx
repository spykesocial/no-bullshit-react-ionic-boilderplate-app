//simple redux middlware to console log the entire store every time an action is dispatched. We can even see the payload within the action
import { MiddlewareAPI, Dispatch, AnyAction } from "redux";

const loggerMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    //remember to comment out console log when not in development mode
    console.log("spyke redux store logger", store.getState());
    next(action);
  };

export default loggerMiddleware;
