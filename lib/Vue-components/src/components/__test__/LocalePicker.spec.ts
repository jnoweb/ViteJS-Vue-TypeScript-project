import { shallowMount } from '@vue/test-utils';
import LocalePicker from '../LocalePicker.ce.vue';

describe('LocalePicker', () => {
  let wrapper: ReturnType<typeof shallowMount>;
  const localeChange = vi.fn();

  beforeEach(() => {
    wrapper = shallowMount(LocalePicker, {
      listeners: {
        localeChange
      }
    });
  });

  it('should render correctly', () => {
    const options = wrapper.findAll('option');

    expect(options.length).toBe(2);
    expect(options.at(0)?.text()).toBe('English');
    expect(options.at(1)?.text()).toBe('French');
  });

  it('should handle change correctly', () => {
    const select = wrapper.find('select');

    select.element.value = 'fr';
    select.trigger('change');

    expect(wrapper.emitted('localeChange')).toBeTruthy();
    expect( wrapper.emitted('localeChange')?.[0]).toEqual(['fr']);
  });
});
