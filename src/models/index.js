import { CurrentUser } from './CurrentUser';

const currentUser = CurrentUser.create();

export const store = {
  currentUser,
};

// TODO: Remove this, test only
window.MobxStore = store;