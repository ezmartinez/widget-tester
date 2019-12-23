const React = require('react');
const { shallow } = require('enzyme');
const DemoComponent = require('../../app/components/DemoComponent');

test('DemoComponent should render correctly', () => {
  const wrapper = shallow(<DemoComponent />);
  expect(wrapper).toMatchSnapshot();
});
