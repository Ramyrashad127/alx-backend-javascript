import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((ans) => {
      console.log(`${ans[0].body} ${ans[1].firstName} ${ans[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
