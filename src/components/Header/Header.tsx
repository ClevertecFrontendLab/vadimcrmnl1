import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import * as React from 'react';

import avatarImg from '~/assets/images/avatar.png';
import logoImg from '~/assets/images/logo_yee_daa.png';
import logoSplitImg from '~/assets/images/logo_yee_daa_split.png';
import BreadCrumbs from '~/components/Header/components/BreadCrumbs/BreadCrumbs';
import styles from '~/components/Header/Header.module.scss';

const Header: React.FC = () => (
    <Box
        w={{ xl: '1920px', lg: '1440px', md: '768px', sm: '360px' }}
        h={{ xl: '80px', lg: '80px', md: '64px', sm: '64px' }}
        bg='lime.50'
        data-test-id='header'
    >
        <div className={styles.container}>
            <div className={styles.logoBreadCrumbBlock}>
                <Flex
                    w={{ xl: '256px', lg: '256px', md: '256px', sm: '32px' }}
                    className={styles.logoBlock}
                >
                    <Image
                        src={logoImg}
                        alt='logo'
                        display={{ xl: 'block', lg: 'block', md: 'block', sm: 'none' }}
                    />
                    <Image
                        src={logoSplitImg}
                        alt='logo'
                        w='32px'
                        h='32px'
                        display={{ xl: 'none', lg: 'none', md: 'none', sm: 'flex' }}
                    />
                </Flex>
                <Box marginLeft='24px' display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}>
                    <BreadCrumbs />
                </Box>
            </div>

            <Box
                className={styles.userBlock}
                display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}
            >
                <div className={styles.avatar}>
                    <img src={avatarImg} alt='avatar' />
                </div>
                <div className={styles.userName}>
                    <p>Екатерина Константинопольская</p>
                    <span>@bake_and_pie</span>
                </div>
            </Box>

            <Box display={{ xl: 'none', lg: 'none', md: 'flex', sm: 'flex' }} padding='0 16px'>
                <Flex padding='0 8px' gap='6px' alignItems='center'>
                    <Image w='12px' src='/src/assets/icons/BsBookmarkHeart.svg' alt='icon' />
                    <Text textStyle='likesCount' color='lime.600'>
                        185
                    </Text>
                </Flex>
                <Flex padding='0 8px' gap='6px' alignItems='center'>
                    <Image w='12px' src='/src/assets/icons/BsEmojiHeartEyes.svg' alt='icon' />
                    <Text textStyle='likesCount' color='lime.600'>
                        589
                    </Text>
                </Flex>
                <Flex padding='0 8px' gap='6px' alignItems='center'>
                    <Image w='12px' src='/src/assets/icons/BsPeopleFill.svg' alt='icon' />
                    <Text textStyle='likesCount' color='lime.600'>
                        587
                    </Text>
                </Flex>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        border='none'
                    />
                    <MenuList>
                        {/*<Sidebar/>*/}
                        {/*<MenuItem icon={<AddIcon/>} command='⌘T'>*/}
                        {/*    New Tab*/}
                        {/*</MenuItem>*/}
                    </MenuList>
                </Menu>
            </Box>
        </div>
    </Box>
);

export default Header;
