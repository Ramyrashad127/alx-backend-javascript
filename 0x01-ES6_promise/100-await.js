import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let ret = {};

  try {
    const pic = await uploadPhoto();
    const usr = await createUser();
    ret = { pic, usr };
  } catch (err) {
    ret = { photo: null, user: null };
  }
  return ret;
}
