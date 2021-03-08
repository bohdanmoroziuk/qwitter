import database from 'boot/firebase';

export const add = async (tweet) => {
  const response = await database.collection('qweets').add(tweet);
  return response;
};

export const like = async (id, liked) => {
  const response = await database.collection('qweets').doc(id).update({ liked });
  return response;
};

export const remove = async (id) => {
  const response = await database.collection('qweets').doc(id).delete();
  return response;
};

export const watch = (handler) => {
  database.collection('qweets')
    .orderBy('createdAt')
    .onSnapshot(handler);
};
