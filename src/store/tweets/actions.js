/* eslint-disable no-console */

import {
  add,
  like,
  remove,
  watch,
} from 'src/services/tweets';
import { createTweet } from 'src/store/tweets/utils';

export const addTweet = async (_context, content) => {
  try {
    await add(createTweet(content));
  } catch (error) {
    console.error(error);
  }
};

export const likeTweet = async (_context, tweet) => {
  try {
    await like(tweet.id, !tweet.liked);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTweet = async (_context, id) => {
  try {
    await remove(id);
  } catch (error) {
    console.error(error);
  }
};

export const subscribe = (context) => {
  watch((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const { id } = change.doc;
      const data = change.doc.data();

      const tweet = { id, ...data };

      if (change.type === 'added') {
        context.commit('addTweet', tweet);
      }

      if (change.type === 'modified') {
        context.commit('updateTweet', tweet);
      }

      if (change.type === 'removed') {
        context.commit('deleteTweet', id);
      }
    });
  });
};
