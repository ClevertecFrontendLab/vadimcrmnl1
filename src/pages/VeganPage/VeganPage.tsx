import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { FooterPageComponent } from '~/components/FooterPageComponent/FooterPageComponent';
import { HeaderComponent } from '~/components/HeaderComponent/HeaderComponent';
import { RecipeCard } from '~/components/RecipeCard/RecipeCard';
import styles from '~/pages/VeganPage/VeganPage.module.scss';
import { Routes } from '~/routes/Routes';

import { veganDessertsRecipesData, veganMainCoursesData } from '../data';

const navLinkData = [
    {
        title: 'Закуски',
        path: `/vegan${Routes.SNACKS}`,
    },
    {
        title: 'Первые блюда',
        path: `/vegan${Routes.FIRST_COURSES}`,
    },
    {
        title: 'Вторые блюда',
        path: `/vegan${Routes.MAIN_COURSES}`,
    },
    {
        title: 'Гарниры',
        path: `/vegan${Routes.SIDE_DISHES}`,
    },
    {
        title: 'Десерты',
        path: `/vegan${Routes.DESSERTS}`,
    },
    {
        title: 'Выпечка',
        path: `/vegan${Routes.PASTRIES}`,
    },
    {
        title: 'Сыроедческие блюда',
        path: `/vegan${Routes.RAW_FOOD}`,
    },
    {
        title: 'Напитки',
        path: `/vegan${Routes.DRINKS}`,
    },
];

export const VeganPage = () => (
    <Box className={styles.wrapper} margin={{ xl: '0 72px 0 24px', md: '0', sm: '0' }}>
        <div className={styles.container}>
            <HeaderComponent
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
            <Flex
                h={{ xl: '42px', lg: '42px', md: '28px', sm: '28px' }}
                w={{ xl: '100%', lg: '100%', md: '768px', sm: '352px' }}
                overflowX='hidden'
                marginTop={{}}
                justifyContent='center'
                display={{ xl: 'flex', lg: 'flex', md: 'flex', sm: 'none' }}
            >
                {navLinkData.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? styles.pendingLink
                                : isActive
                                  ? styles.activeLink
                                  : styles.pendingLink
                        }
                    >
                        {item.title}
                    </NavLink>
                ))}
            </Flex>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacingX='24px'
                spacingY='12px'
                marginTop='24px'
            >
                {veganMainCoursesData.map((item, index) => (
                    <RecipeCard key={index} {...item} />
                ))}
            </SimpleGrid>
            <Box marginTop='16px'>
                <Button
                    h='40px'
                    borderRadius='6px'
                    padding='0 16px'
                    gap='8px'
                    bg='lime.400'
                    color='primary.black'
                    textStyle='baseText'
                    fontWeight={600}
                >
                    Загрузить еще
                </Button>
            </Box>
            <FooterPageComponent
                title='Десерты, выпечка'
                description='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
                recipes={veganDessertsRecipesData.slice(0, 2)}
                recipesWithButton={veganDessertsRecipesData.slice(2)}
            />
        </div>
    </Box>
);
