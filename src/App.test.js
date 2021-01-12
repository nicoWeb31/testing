import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hi there/i);
  expect(linkElement).toBeInTheDocument();

  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain('hi there');

  // ReactDOM.unmountComponentAtNode(div);
});
