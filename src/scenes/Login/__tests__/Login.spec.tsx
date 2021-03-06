import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { LoginComponent } from '../Login';

const actions: any = {
  user: { login: jest.fn(), me: jest.fn() }
};

test('Login component has a welcome message', () => {
  const { getByText } = render(<LoginComponent actions={actions} />);
  const msg = getByText(/Welcome/i);
  expect(msg).toBeInTheDocument();
});

test('Login component has a register link', () => {
  const { getByText } = render(<LoginComponent actions={actions} />);
  const link = getByText(/Create account/i);
  expect(link).toBeInTheDocument();
});

test('Login button call login action', () => {
  const { container: document, getByLabelText } = render(<LoginComponent actions={actions} />);
  const loginButton = document.querySelector('.button.button-shadow') as Element;
  fireEvent.change(getByLabelText(/USERNAME/i), {
    target: { value: 'username' }
  });
  fireEvent.change(getByLabelText(/PASSWORD/i), {
    target: { value: 'password' }
  });
  fireEvent.click(loginButton);
  expect(actions.user.login).toBeCalled();
});

test('Login button does not call login action if the form is empty', () => {
  const { container: document } = render(<LoginComponent actions={actions} />);
  const loginButton = document.querySelector('.button.button-shadow') as Element;
  fireEvent.click(loginButton);
  expect(actions.user.login).toBeCalled();
});
