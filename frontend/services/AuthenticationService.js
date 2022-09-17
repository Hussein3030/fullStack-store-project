// that is the right import
import api from './api';

export default {
  register(credentials) {
    return api().post('register', credentials);
  },
  login(credentials) {
    return api().post('login', credentials);
  },
  addProduct(credentials) {
    return api().post('Upload1', credentials);// Upload1 for testing
  },
};

/*
authenticationService.register({
  email: 'test@example.com',
  password: '12345',
});
 */