/* eslint-disable arrow-body-style */

export const addTweet = (state, tweet) => {
  state.tweets = [tweet, ...state.tweets];
};

export const updateTweet = (state, data) => {
  state.tweets = state.tweets.map((tweet) => {
    return tweet.id === data.id
      ? { ...tweet, ...data }
      : tweet;
  });
};

export const deleteTweet = (state, id) => {
  state.tweets = state.tweets.filter((tweet) => {
    return tweet.id !== id;
  });
};
