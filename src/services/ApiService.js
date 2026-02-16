export default class ApiService {
  static login(username, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === 'admin' && password === 'admin');
      }, 1000);
    });
  }
}