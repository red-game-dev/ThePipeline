import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../../../src/components/Forms/Button.vue'

describe('Forms/Button.vue', () => {
  it('should renders slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Sign Up',
      },
    })
    expect(wrapper.text().includes('Sign Up'))
  })

  it('should binds attributes correctly', () => {
    const wrapper = mount(Button, {
      attrs: {
        disabled: 'true',
      },
    })
    expect(wrapper.attributes('disabled') === 'true')
  })
})
