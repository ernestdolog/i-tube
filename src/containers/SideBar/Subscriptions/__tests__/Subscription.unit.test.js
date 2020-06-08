import React from 'react';
import {shallow} from 'enzyme';
import Subscription from '../Subscription';

test('renders Subscription', () => {
  const wrapper = shallow(
    <Subscription />
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders Subscription with broadcasting', () => {
    const wrapper = shallow(
        <Subscription label='MusicChannel' broadcasting/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Subscription with amountNewVideos', () => {
    const wrapper = shallow(
        <Subscription label='Coursea' amountNewVideos={10}/>
    );
    expect(wrapper).toMatchSnapshot();
  });