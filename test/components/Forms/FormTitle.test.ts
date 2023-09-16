import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import FormTitle from '../../../src/components/Forms/FormTitle.vue'

describe('Forms/FormTitle.vue', () => {
  it('should renders slot content', async () => {
    const wrapper = mount(FormTitle, {
      slots: {
        default: 'SignIn',
      },
    })
    expect(wrapper.text().includes('SignIn'))
  })
})
