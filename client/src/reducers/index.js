import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({
  //to combine all individule reducers
  posts: posts,
});
