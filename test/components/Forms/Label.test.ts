import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Label from '../../../src/components/Forms/Label.vue'

describe('Forms/Label.vue', () => {
  it('should renders slot content', () => {
    const wrapper = mount(Label, {
      slots: {
        default: 'Email',
      },
    })
    expect(wrapper.text().includes('Email'))
  })

  it('should binds attributes correctly', () => {
    const wrapper = mount(Label, {
      attrs: {
        for: 'email',
      },
    })
    expect(wrapper.attributes('for') === 'email')
  })
})
