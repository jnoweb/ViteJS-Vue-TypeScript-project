import { mount } from '@vue/test-utils';
import AppFunctionality from '../AppFunctionality.ce.vue';

import AppCounter from '../AppCounter.ce.vue';
import ControlPane from '../ControlPane.ce.vue';
import MetricsDisplay from '../MetricsDisplay.ce.vue';

const propsData = {
  label: 'Counter',
};

describe('AppFunctionality', () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(AppFunctionality, {
      props: propsData,
      slots: {
        'app-counter': AppCounter,
        'control-pane': ControlPane,
        'metrics-display': MetricsDisplay,
      },
    });
  });

  it('should render correctly', () => {
    const buttons = wrapper.findAll('button');

    expect(buttons.length).toBe(3);
    expect(wrapper.text()).toBe(': 0');
  });

  it('should increment count by 1', () => {
    const buttons = wrapper.findAll('button');

    buttons.at(0)?.trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).toBe(': 1');
    });
  });

  it('should decrement count by 1', () => {
    const buttons = wrapper.findAll('button');

    buttons.at(0)?.trigger('click');
    buttons.at(0)?.trigger('click');

    buttons.at(1)?.trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).toBe(': 1');
    });
  });

  it('should rest count to 0', () => {
    const buttons = wrapper.findAll('button');

    buttons.at(0)?.trigger('click');
    buttons.at(2)?.trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).toBe(': 0');
    });
  });
});
