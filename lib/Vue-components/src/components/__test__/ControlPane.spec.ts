import { shallowMount } from '@vue/test-utils';
import ControlPane from '../ControlPane.ce.vue';

const propsData = {
  label: 'Reset',
};

describe('ControlPane', () => {
  let wrapper: ReturnType<typeof shallowMount>;
  const reset = vi.fn();

  beforeEach(() => {
    wrapper = shallowMount(ControlPane, {
      props: propsData,
      global: {
        provide: {
          countState: {
            reset
          },
        },
      },
    });
  });

  it('should render correctly', () => {
    const appCounterButtons = wrapper.findAll('button');

    expect(appCounterButtons.length).toBe(1);
    expect(wrapper.text()).toBe(propsData.label);
  });

  it('should call the increment function', () => {
    const appCounterButton = wrapper.find('button');

    appCounterButton.trigger('click');

    expect(reset).toHaveBeenCalled();
  });
});
