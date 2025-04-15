import { AccordionPanel } from '@chakra-ui/icons';
import { AccordionButton, AccordionIcon, AccordionItem, Box, Image } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { useLocation } from 'react-router';

import styles from '~/components/Sidebar/components/SidebarItem/SidebarItem.module.scss';

type SidebarItemProps = {
    icon: string;
    title: string;
    children?: ReactElement;
    path?: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon, children, path }) => {
    const location = useLocation().pathname.startsWith(path);
    return (
        <AccordionItem className={styles.item} border='none'>
            <AccordionButton
                className={styles.itemButton}
                style={{ backgroundColor: location && '#EAFFC7' }}
            >
                <Image src={icon} alt='icon' />
                <Box as='span' flex='1' textAlign='left' className={styles.itemBox}>
                    {title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel padding={0}>{children}</AccordionPanel>
        </AccordionItem>
    );
};

export default SidebarItem;
