export default function getFullResponseFromAPI(success) {
  return new Promise((response, no) => {
    if (success) {
      response({
        status: 200,
        body: 'Success',
      });
    } else {
      no(new Error('The fake API is not working currently'));
    }
  });
}
