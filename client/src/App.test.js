import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import RunnerCard from './Components/RunnerCard'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar';


afterEach(rtl.cleanup);

test('Render App', () => {
  const wrapper = rtl.render(<Router>
    <App />
  </Router>)
  wrapper.debug()
})

test('checking to see if I can get a passed test', async () => {
  const wrapper = rtl.render( <Router>
    <App />
  </Router>);
  expect(await wrapper.queryAllByText(/runner/i));
});



// test('Render count input', async () => {
//   const wrapper =  rtl.render(<Router>
//     <App />
//   </Router>)
//   const element = wrapper.queryAllByText(/searches/i)
//   expect(element).toHaveValue(1)
// })