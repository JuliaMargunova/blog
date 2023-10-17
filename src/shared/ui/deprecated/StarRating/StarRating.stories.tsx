import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from 'src/shared/ui/deprecated/StarRating/StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
