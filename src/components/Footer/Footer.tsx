import { Box, Image, Text } from '@chakra-ui/react';

import mainPageIcon from '~/assets/icons/main_page_icon.png';
import searchIcon from '~/assets/icons/search_icon.png';
import writeIcon from '~/assets/icons/write_icon.png';
import profileIcon from '~/assets/images/avatar.png';

export const Footer = () => (
    <Box
        data-test-id='footer'
        marginTop='16px'
        display='flex'
        justifyContent='space-between'
        w={{ md: '768px', sm: '360px' }}
        h={{ md: '84px', sm: '84px' }}
        bg='lime.50'
    >
        <Box
            w={{ md: '192px', sm: '90px' }}
            gap={{ md: '4px', sm: '4px' }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Image src={mainPageIcon} alt='icon' />
            <Text
                textStyle={{ md: 'likesCountMd', sm: 'likesCountMd' }}
                color={{ md: 'primary.black' }}
            >
                Главная
            </Text>
        </Box>
        <Box
            w={{ md: '192px', sm: '90px' }}
            gap={{ md: '4px', sm: '4px' }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Image src={searchIcon} alt='icon' />
            <Text
                textStyle={{ md: 'likesCountMd', sm: 'likesCountMd' }}
                color={{ md: 'primary.black' }}
            >
                Поиск
            </Text>
        </Box>
        <Box
            w={{ md: '192px', sm: '90px' }}
            gap={{ md: '4px', sm: '4px' }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Image src={writeIcon} alt='icon' />
            <Text
                textStyle={{ md: 'likesCountMd', sm: 'likesCountMd' }}
                color={{ md: 'primary.black' }}
            >
                Записать
            </Text>
        </Box>
        <Box
            w={{ md: '192px', sm: '90px' }}
            gap={{ md: '4px', sm: '4px' }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Image src={profileIcon} alt='icon' />
            <Text
                textStyle={{ md: 'likesCountMd', sm: 'likesCountMd' }}
                color={{ md: 'primary.black' }}
            >
                Мой профиль
            </Text>
        </Box>
    </Box>
);
