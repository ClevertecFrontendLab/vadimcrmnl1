import { Select } from '@chakra-ui/react';
import React from 'react';

interface MultiSelectProps {
    placeholder: string;
}
const MultiSelect: React.FC<MultiSelectProps> = ({ placeholder }) => (
    <Select
        placeholder={placeholder}
        width='234px'
        borderColor='gray.borderSelect'
        color='gray.text'
        _hover={{
            borderColor: 'lime.300',
        }}
        _focus={{
            outline: 'none',
        }}
        textStyle='selectPlaceholder'
    >
        {/* <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option> */}
    </Select>
);

export default MultiSelect;
