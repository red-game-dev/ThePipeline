import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import FieldError from '../../../src/components/Forms/FieldError.vue'

describe('Forms/FieldError.vue', () => {
  it('should renders slot content', () => {
    const wrapper = mount(FieldError, {
      slots: {
        default: 'Email is invalid',
      },
    })
    expect(wrapper.text().includes('Email is invalid'))
  })
})
