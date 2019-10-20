import { mount } from '@vue/test-utils'
import PageNav from '@/components/PageNav.vue'

describe('PageNav', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PageNav)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
