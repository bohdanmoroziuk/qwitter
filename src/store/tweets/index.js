import state from 'src/store/tweets/state';
import * as getters from 'src/store/tweets/getters';
import * as mutations from 'src/store/tweets/mutations';
import * as actions from 'src/store/tweets/actions';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
