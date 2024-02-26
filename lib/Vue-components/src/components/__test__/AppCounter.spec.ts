import { shallowMount } from '@vue/test-utils';
import AppCounter from '../AppCounter.ce.vue';

const propsData = {
  pluslabel: 'Plus',
  minuslabel: 'Minus',
};

describe('AppCounter', () => {
  let wrapper: ReturnType<typeof shallowMount>;
  const increment = vi.fn();
  const decrement = vi.fn();

  beforeEach(() => {
    wrapper = shallowMount(AppCounter, {
      props: propsData,
      global: {
        provide: {
          countState: {
            increment,
            decrement,
          },
        },
      },
    });
  });

  it('should render correctly', () => {
    const appCounterButtons = wrapper.findAll('button');

    expect(appCounterButtons.length).toBe(2);
  });

  it('should call the increment function', () => {
    const appCounterButtons = wrapper.findAll('button');

    appCounterButtons.at(0)?.trigger('click');

    expect(increment).toHaveBeenCalled();
  });

  it('should call the decrement function', () => {
    const appCounterButtons = wrapper.findAll('button');

    appCounterButtons.at(1)?.trigger('click');

    expect(decrement).toHaveBeenCalled();
  });
});
