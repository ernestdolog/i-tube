import React from 'react';
import {shallow} from 'enzyme';
import SideBarItem from '../SideBarItem';

test('renders SideBarItem', () => {
  const wrapper = shallow(
    <SideBarItem />
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders SideBarItem with highlight', () => {
    const wrapper = shallow(
      <SideBarItem highlight={true}/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders SideBarItem with icon', () => {
    const wrapper = shallow(
        <SideBarItem licon='fire'/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders SideBarItem with label', () => {
    const wrapper = shallow(
        <SideBarItem label='Trending'/>
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders SideBarItem with highlight icon label', () => {
    const wrapper = shallow(
        <SideBarItem highlight={true} licon='fire' label='Trending'/>
    );
    expect(wrapper).toMatchSnapshot();
});