import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import Results from '@/views/Results.vue'

describe('views/Results.vue', () => {
  it('renders props.search when passed', () => {
    const search = 'text'
    const wrapper = shallow(Results, {
      propsData: { search }
    })
    expect(wrapper.props().search).to.equal(search)
  })

  it('renders route path', () => {
    const $route = {
      path: '/results/text'
    }
    const wrapper = shallow(Results, {
      mocks: {
        $route
      }
    })
    expect(wrapper.vm.$route.path).to.equal($route.path)
  })
})
