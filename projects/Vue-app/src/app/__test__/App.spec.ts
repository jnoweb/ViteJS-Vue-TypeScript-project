import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from "../App.vue"; 

vi.mock('i18next-vue', () => ({
  useTranslation: () => ({
    i18next: {
      changeLanguage: vi.fn(),
    },
    t: vi.fn(),
  }),
}));

describe('App', () => {
  it('handles locale change correctly', async () => {
    const wrapper = mount(App);
    const select = wrapper.find('select')

    select.element.value = 'fr';
    select.trigger('change');
    
    const { i18next } = wrapper.vm as any;
    expect(i18next.changeLanguage).toHaveBeenCalledWith('fr');
  });
});
