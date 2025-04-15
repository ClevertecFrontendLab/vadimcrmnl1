import { Image, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router';

import styles from '~/components/UI/NavLinkWithArrow/NavLinkWithArrow.module.scss';

type NavLinkWithArrowProps = {
    path: string;
    title: string;
    withoutBg?: boolean;
};
export const NavLinkWithArrow: React.FC<NavLinkWithArrowProps> = ({ path, title, withoutBg }) => (
    <NavLink to={path} className={withoutBg ? styles.linkButtonWithoutBg : styles.linkButton}>
        <Text textStyle='buttonText' color='primary.black'>
            {title}
        </Text>
        <Image src='/src/assets/icons/arrow_right_black.svg' alt='icon' />
    </NavLink>
);
