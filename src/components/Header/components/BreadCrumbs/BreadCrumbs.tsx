import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router';

import styles from '~/components/Header/components/BreadCrumbs/BreadCrumbs.module.scss';

const breadcrumbNameMap = {
    '/': 'Главная',
    '/vegan': 'Веганская кухня',
    '/vegan/snacks': 'Закуски',
    '/vegan/first-courses': 'Первые блюда',
    '/vegan/main-courses': 'Вторые блюда',
    '/vegan/side-dishes': 'Гарниры',
    '/vegan/desserts': 'Десерты',
    '/vegan/pastries': 'Выпечка',
    '/vegan/raw-food': 'Сыроедческие блюда',
    '/vegan/drinks': 'Напитки',
    '/juiciest': 'Самое сочное',
};

const BreadCrumbs = () => {
    const location = useLocation();

    const pathnames = location.pathname.split('/').filter((item) => item);

    const breadcrumbItems = pathnames.map((value, index) => {
        const to = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        const name = breadcrumbNameMap[to] || value;

        return (
            <BreadcrumbItem
                key={to}
                isCurrentPage={isLast}
                display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}
            >
                {isLast ? (
                    <BreadcrumbLink as='span' className={`${styles.text} ${styles.blackColor}`}>
                        {name}
                    </BreadcrumbLink>
                ) : (
                    <BreadcrumbLink
                        as={RouterLink}
                        to={to}
                        className={`${styles.text} ${styles.opacityBlackColor}`}
                    >
                        {name}
                    </BreadcrumbLink>
                )}
            </BreadcrumbItem>
        );
    });
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='#000000' />}>
            <BreadcrumbItem key='/'>
                <BreadcrumbLink
                    as={RouterLink}
                    to='/'
                    className={
                        location.pathname === '/'
                            ? `${styles.text} ${styles.blackColor}`
                            : `${styles.text} ${styles.opacityBlackColor}`
                    }
                >
                    {breadcrumbNameMap['/']}
                </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbItems}
        </Breadcrumb>
    );
};

export default BreadCrumbs;
