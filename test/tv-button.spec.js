import { mount } from '@vue/test-utils'
import TvButton from '@/tv-button'

describe('tv-button', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(TvButton)
        expect(wrapper.vm).toBeTruthy()
    })
})
