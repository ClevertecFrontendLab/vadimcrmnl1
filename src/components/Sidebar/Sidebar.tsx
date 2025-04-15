import { Accordion, Box } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router';

import SidebarItem from '~/components/Sidebar/components/SidebarItem/SidebarItem';
import styles from '~/components/Sidebar/Sidebar.module.scss';
import ButtonWithIcon from '~/components/UI/ButtonWithIcon/ButtonWithIcon';
import { Routes } from '~/routes/Routes';

const Sidebar: React.FC = () => (
    <Box
        display={{ xl: 'block', lg: 'block', md: 'none', sm: 'none' }}
        h={{ xl: '1040px', lg: '1040px' }}
        className={styles.wrapper}
    >
        <div className={styles.container}>
            <div className={styles.navBlock}>
                <Accordion allowToggle>
                    <SidebarItem icon='/src/assets/icons/salaty.svg' title='Салаты' />
                    <SidebarItem icon='/src/assets/icons/zakuski.svg' title='Закуски' />
                    <SidebarItem icon='/src/assets/icons/pervye_bluda.svg' title='Первые блюда' />
                    <SidebarItem icon='/src/assets/icons/vtorye_bluda.svg' title='Вторые блюда' />
                    <SidebarItem icon='/src/assets/icons/deserty.svg' title='Десерты, выпечка' />
                    <SidebarItem
                        icon='/src/assets/icons/bluda_na_grile.svg'
                        title='Блюда на гриле'
                    />
                    <NavLink to={`/vegan${Routes.SNACKS}`} data-test-id='vegan-cuisine'>
                        <SidebarItem
                            icon='/src/assets/icons/vegan.svg'
                            title='Веганская кухня'
                            path='/vegan'
                        >
                            <div className={styles.accordionPanel}>
                                <NavLink
                                    to={`/vegan${Routes.SNACKS}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Закуски
                                </NavLink>
                                <NavLink
                                    to={`/vegan${Routes.FIRST_COURSES}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Первые блюда
                                </NavLink>
                                <NavLink
                                    to={`/vegan${Routes.MAIN_COURSES}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Вторые блюда
                                </NavLink>
                                <NavLink
                                    to={`/vegan${Routes.SIDE_DISHES}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Гарниры
                                </NavLink>
                                <NavLink
                                    to={`/vegan${Routes.DESSERTS}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Десерты
                                </NavLink>
                                <NavLink
                                    to={`/vegan${Routes.PASTRIES}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Выпечка
                                </NavLink>
                                <NavLink
                                    to={`/vegan${Routes.RAW_FOOD}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Сыроедческие блюда
                                </NavLink>
                                <NavLink
                                    to={`/vegan${Routes.DRINKS}`}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.accordionPendingLink
                                            : isActive
                                              ? styles.accordionActiveLink
                                              : styles.accordionPendingLink
                                    }
                                >
                                    <span />
                                    Напитки
                                </NavLink>
                            </div>
                        </SidebarItem>
                    </NavLink>

                    <SidebarItem icon='/src/assets/icons/detskie_bluda.svg' title='Детские блюда' />
                    <SidebarItem
                        icon='/src/assets/icons/lechebnoe_pitanie.svg'
                        title='Лечебное питание'
                    />
                    <SidebarItem icon='/src/assets/icons/national.svg' title='Национальные' />
                    <SidebarItem icon='/src/assets/icons/sousy.svg' title='Соусы' />
                    <SidebarItem icon='/src/assets/icons/napitki.svg' title='Напитки' />
                    <SidebarItem icon='/src/assets/icons/zagotovki.svg' title='Заготовки' />
                </Accordion>
            </div>

            <div className={styles.footerBlock}>
                <span className={styles.version}>Версия программы 03.25</span>
                <span className={styles.allRights}>
                    Все права защищены, ученический файл, <br />
                    ©Клевер Технолоджи, 2025
                </span>
                <ButtonWithIcon icon='/src/assets/icons/logout_btn.svg' title='Выйти' />
            </div>
        </div>
    </Box>
);

export default Sidebar;
