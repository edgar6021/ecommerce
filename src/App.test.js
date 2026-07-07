import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

jest.mock('firebase/auth', () => ({
  GoogleAuthProvider: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  getAuth: jest.fn(() => ({})),
  onAuthStateChanged: jest.fn(() => jest.fn()),
  sendPasswordResetEmail: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signInWithPopup: jest.fn(),
  signOut: jest.fn(() => Promise.resolve()),
}));

test('renders ecommerce storefront', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole('heading', { name: /productos destacados/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /comprar ahora/i })).toBeInTheDocument();
});
