//reducer is simply a function that excepts the state and action,
//and based on action type, the function/reducer return something accordingly

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      //break
      return posts;
  }
};
