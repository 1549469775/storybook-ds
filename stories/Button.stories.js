import React from 'react';
import Button from '..src/Button';
import { action } from '@storybook/addon-actions';

export default {
    component: Button,
    title: 'Button'
}

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
