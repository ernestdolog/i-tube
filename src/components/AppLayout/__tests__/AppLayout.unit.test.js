import React from 'react';
import { shallow } from 'enzyme';
import { AppLayout } from '../AppLayout';

describe('AppLayout', () => {
  test('renders without props', () => {
    const wrapper = shallow(<AppLayout/>);
    expect(wrapper).toMatchSnapshot();
  });
});

test('renders <AppLayout/> with one child', () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Child 1</div>
      </AppLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });
  
  test('renders <AppLayout/> with two children', () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Child 1</div>
        <div>
          <span>Child 2</span>
          <p>Child 2</p>
        </div>
      </AppLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });