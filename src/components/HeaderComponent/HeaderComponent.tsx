import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import styles from '~/components/HeaderComponent/HeaderComponent.module.scss';

import MultiSelect from '../UI/MultiSelect/MultiSelect';
import OpenMenuButton from '../UI/OpenMenuButton/OpenMenuButton';
import SearchInput from '../UI/SearchInput/SearchInput';
import SwitchButton from '../UI/SwitchButton/SwitchButton';

type HeaderComponentProps = {
    title: string;
    description?: string;
};

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ title, description }) => (
    <Box
        className={styles.headerContainer}
        paddingBottom={{ md: '0' }}
        marginTop={{ xl: '16px', lg: '16px', md: '76px', sm: '76px' }}
    >
        <Text
            textStyle={{
                xl: 'pageTitleXl',
                lg: 'pageTitleXl',
                md: 'pageTitleMd',
                sm: 'pageTitleMd',
            }}
        >
            {title}
        </Text>
        {description && (
            <Text
                textAlign='center'
                maxW={{ xl: '696px', lg: '696px', md: '727px', sm: '328px' }}
                marginTop={{ xl: '12px', lg: '12px', md: '16px', sm: '16px' }}
                textStyle={{
                    xl: 'selectPlaceholderXl',
                    lg: 'selectPlaceholderXl',
                    md: 'selectPlaceholderMd',
                    sm: 'selectPlaceholderMd',
                }}
                color='gray.border'
            >
                {description}
            </Text>
        )}
        <Box className={styles.searchContainer} marginTop={{ xl: '32px', lg: '32px', md: '16px' }}>
            <Flex gap='12px'>
                <OpenMenuButton />
                <SearchInput />
            </Flex>
            <Flex
                display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}
                gap='16px'
                marginTop='18px'
            >
                <SwitchButton label='Исключить мои аллергены' />
                <MultiSelect placeholder='Выберите из списка...' />
            </Flex>
        </Box>
    </Box>
);
