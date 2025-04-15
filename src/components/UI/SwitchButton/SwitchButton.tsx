import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import React from 'react';

interface SwitchButtonProps {
    label: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ label }) => (
    <FormControl
        display='flex'
        alignItems='center'
        width='268px'
        height='36px'
        padding='6px 0 6px 8px'
    >
        <FormLabel htmlFor='allegrens' mb='0' textStyle='textStyles.baseText' height='24px'>
            {label}
        </FormLabel>
        <Switch id='allegrens' />
    </FormControl>
);

export default SwitchButton;
