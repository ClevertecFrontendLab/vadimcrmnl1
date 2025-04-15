import { IconButton, Image, Menu, MenuButton } from '@chakra-ui/react';

const OpenMenuButton = () => (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={
                <Image
                    w={{ xl: '24px', lg: '24px', md: '14px', sm: '14px' }}
                    h={{ xl: '24px', lg: '24px', md: '14px', sm: '14px' }}
                    src='/src/assets/icons/hamburger_icon.svg'
                    alt='hamburgerIcon'
                />
            }
            variant='outline'
            backgroundColor='primary.white'
            borderColor='gray.border'
            minW='unset'
            h={{ xl: '48px', lg: '48px', md: '32px', sm: '32px' }}
            w={{ xl: '48px', lg: '48px', md: '32px', sm: '32px' }}
            _hover={{
                bg: 'lime.100',
                borderColor: 'lime.100',
                width: '32px',
            }}
            _focus={{
                outline: 'none',
            }}
        />
    </Menu>
);
export default OpenMenuButton;
