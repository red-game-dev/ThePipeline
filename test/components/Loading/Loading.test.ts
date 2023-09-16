import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Loading from '../../../src/components/loading/Loading.vue'

describe('Forms/Loading.vue', () => {
  it('should have loading visible', async () => {
    const wrapper = mount(Loading, {
      props: {
        loading: true,
      },
    })

    expect(wrapper.props('loading')).toBe(true)
  })
})
