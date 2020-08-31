import { mount } from '@vue/test-utils'
import PushButton from '@/PushButton'

describe('tv-button', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(PushButton)
        expect(wrapper.vm).toBeTruthy()
    })
})
