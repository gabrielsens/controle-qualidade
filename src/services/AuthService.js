import HttpClient from './utils/HttpClient';

class AuthService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  loginUser(user) {
    return this.httpClient.post('/authenticate', {
      body: user,
    });
  }
}

export default new AuthService();
