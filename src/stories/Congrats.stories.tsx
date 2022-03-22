import { ComponentMeta, ComponentStory } from '@storybook/react';
import Congrats from '../components/Congrats';
import 'bootstrap/dist/css/bootstrap.css';

export default { 
    title : 'Congrats',
    component: Congrats
} as ComponentMeta<typeof Congrats>;

const Template: ComponentStory<typeof Congrats> = (args) => <Congrats {...args} />;

export const CustomMessage = Template.bind({});
CustomMessage.args = {
    success: true,
    successMessage: 'Congratulations! You won by guessing the secret word 👍'
}
