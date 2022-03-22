import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { Container } from "react-bootstrap";
import Input from '../components/Input';
import { storeFactory } from '../tests/testUtils';

export default { 
    title : 'Input',
    component: Input,
    parameters: {
        actions: {
          handles: ['click .btn'],
        },
      },
} as ComponentMeta<typeof Input>;

const setup = () => {
    const store = storeFactory();
    return <Container><Provider store={store}><Input /></Provider></Container>;
}

const Template: ComponentStory<typeof Input> = () => setup();

export const DefaultInput = Template.bind({});
DefaultInput.storyName = 'Try a guess'
