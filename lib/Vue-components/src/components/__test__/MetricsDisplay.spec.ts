import { shallowMount } from '@vue/test-utils';
import MetricsDisplay from '../MetricsDisplay.ce.vue';

const propsData = {
  label: 'Counter',
};

describe('MetricsDisplay', () => {
  let wrapper: ReturnType<typeof shallowMount>;

  beforeEach(() => {
    wrapper = shallowMount(MetricsDisplay, {
      props: propsData,
      global: {
        provide: {
          countState: {
            count: 4
          },
        },
      },
    });
  });

  it('should render correctly', () => {
    expect(wrapper.text()).toBe(`${propsData.label}: 4`);
  });
});
