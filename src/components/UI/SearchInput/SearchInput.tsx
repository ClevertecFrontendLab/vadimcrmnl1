import { Image, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';

const SearchInput = () => (
    <Stack spacing={4}>
        <InputGroup>
            <Input
                placeholder='Название или ингредиент...'
                borderColor='gray.border'
                _placeholder={{
                    color: 'lime.800',
                    textStyle: 'searchPlaceholder',
                }}
                _hover={{
                    borderColor: 'lime.100',
                }}
                // textStyle='searchPlaceholder'
                w={{ xl: '458px', lg: '458px', md: '404px', sm: '284px' }}
                h={{ xl: '48px', lg: '48px', md: '32px', sm: '32px' }}
            />
            <InputRightElement
                w={{ xl: '48px', lg: '48px', md: '32px', sm: '32px' }}
                h={{ xl: '48px', lg: '48px', md: '32px', sm: '32px' }}
            >
                <Image
                    src='/src/assets/icons/BsSearch.svg'
                    alt='searchIcon'
                    w={{ xl: '18px', lg: '18px', md: '14px', sm: '14px' }}
                    h={{ xl: '18px', lg: '18px', md: '14px', sm: '14px' }}
                />
            </InputRightElement>
        </InputGroup>
    </Stack>
);
export default SearchInput;
