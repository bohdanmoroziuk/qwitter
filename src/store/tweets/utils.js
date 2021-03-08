export const createTweet = (content) => ({
  content,
  liked: false,
  createdAt: Date.now(),
  fullname: 'Jordan Wild',
  nickname: '@jordan_wild',
});
