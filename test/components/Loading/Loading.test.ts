import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Loading from '../../../src/components/Loading/Loading.vue'

describe('Forms/Loading.vue', () => {
  it('should have loading visible', async () => {
    const wrapper = mount(Loading, {
      props: {
        isLoading: true,
      },
    })

    expect(wrapper.props('isLoading')).toBe(true)
  })
})
