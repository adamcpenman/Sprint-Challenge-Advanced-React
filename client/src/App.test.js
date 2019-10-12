import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import RunnerCard from './Components/RunnerCard'


afterEach(rtl.cleanup);

test('Render App', () => {
  const wrapper = rtl.render(<App />)
  wrapper.debug()
})

it("Scoreboard", () => {
  const wrapper = rtl.render(<RunnerCard />);
  const button = wrapper.getByText(/name/i);
  expect(button).toBeVisible();
});