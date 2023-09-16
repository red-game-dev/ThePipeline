import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TextField from '../../../../src/components/Forms/fields/TextInput.vue'

describe('Forms/TextField.vue', () => {
  it('should updates model value', async () => {
    const wrapper = mount(TextField, {
      props: {
        'modelValue': 'Test',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    })

    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
  })

  it('should binds attributes correctly', () => {
    const wrapper = mount(TextField, {
      attrs: {
        automcomplete: 'current-password',
      },
    })
    expect(wrapper.attributes('automcomplete') === 'current-password')
  })
})
