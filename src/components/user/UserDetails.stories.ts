import type { Meta, StoryObj } from '@storybook/vue3'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import UserDetails from './UserDetails.vue'

const meta = {
  component: UserDetails,
} satisfies Meta<typeof UserDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { UserDetails },
    setup() {
      return { args }
    },
    template: '<UserDetails v-bind="args" />',
  }),
  args: {
    name: 'Red',
    email: 'red.pace.dev@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/75917402?s=400&u=92b4a15ba49529423c0c1c2d28bb6ddab9a142be&v=4',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // By using getBy* or queryBy* we can infer whether this is ready in SSR
    // findBy* returns a Promise requiring await.
    expect(canvas.getByText(/Red/)).toBeVisible()
    expect(canvas.getByText(/red.pace.dev@gmail.com/)).toBeVisible()
  },
}
