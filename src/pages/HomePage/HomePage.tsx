import { Box, Flex, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';

import { FooterPageComponent } from '~/components/FooterPageComponent/FooterPageComponent';
import { HeaderComponent } from '~/components/HeaderComponent/HeaderComponent';
import { RecipeCard } from '~/components/RecipeCard/RecipeCard';
import { NavLinkWithArrow } from '~/components/UI/NavLinkWithArrow/NavLinkWithArrow';
import { RecipeSlider } from '~/pages/HomePage/components/RecipeSlider/RecipeSlider';
import { RecipeSliderCard } from '~/pages/HomePage/components/RecipeSliderCard/RecipeSliderCard';
import styles from '~/pages/HomePage/HomePage.module.scss';
import { Routes } from '~/routes/Routes';

import { foodBlogsData, juiciestRecipesData, newRecipesData, veganRecipesLinkData } from '../data';
import { BlogCard } from './components/BlogCard/BlogCard';

export const HomePage = () => {
    const breakpoints = useBreakpointValue({
        base: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
    });
    const newRecipes = newRecipesData
        .filter((item) => item.title.includes('К'))
        .sort((a, b) => b.title.localeCompare(a.title, 'ru'));
    return (
        <Box className={styles.wrapper} margin={{ xl: '0 72px 0 24px', md: '0', sm: '0' }}>
            <div className={styles.container}>
                <HeaderComponent title='Приятного аппетита!' />
                <Box className={styles.sliderContainer}>
                    <Text
                        textStyle={{
                            xl: 'containerTitleXl',
                            lg: 'containerTitleLg',
                            md: 'containerTitleMd',
                            sm: 'containerTitleMd',
                        }}
                    >
                        Новые рецепты
                    </Text>
                    <RecipeSlider itemsToShow={breakpoints}>
                        {newRecipesData.map((item, index) => (
                            <RecipeSliderCard key={index} {...item} />
                        ))}
                    </RecipeSlider>
                </Box>
                <Box
                    className={styles.juiciesContainer}
                    w={{ xl: '1360px', lg: '880px', md: '100%', sm: '100%' }}
                >
                    <Flex justifyContent='space-between'>
                        <Text
                            textStyle={{
                                xl: 'containerTitleXl',
                                lg: 'containerTitleLg',
                                md: 'containerTitleMd',
                                sm: 'containerTitleMd',
                            }}
                        >
                            Самое сочное
                        </Text>
                        <Box
                            data-test-id='juiciest-link'
                            display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}
                        >
                            <NavLinkWithArrow path={Routes.JUICIEST} title='Вся подборка' />
                        </Box>
                    </Flex>
                    <SimpleGrid
                        columns={{ xl: 2, lg: 1, md: 2, sm: 1 }}
                        spacing={{ xl: '24px', lg: '16px', md: '16px', sm: '12px' }}
                        marginTop='24px'
                    >
                        {juiciestRecipesData.map((item, index) => (
                            <RecipeCard key={index} {...item} />
                        ))}
                    </SimpleGrid>
                    <Box
                        data-test-id='juiciest-link-mobile'
                        justifyContent='center'
                        marginTop='12px'
                        display={{ xl: 'none', lg: 'none', md: 'flex', sm: 'flex' }}
                        h='40px'
                    >
                        <NavLinkWithArrow path={Routes.JUICIEST} title='Вся подборка' />
                    </Box>
                </Box>
                <Box
                    display='flex'
                    flexDirection='column'
                    bg='lime.300'
                    w={{ xl: '1360px', lg: '880px', md: '728px', sm: '328px' }}
                    marginTop={{ xl: '40px', lg: '40px', md: '32px', sm: '32px' }}
                    borderRadius='16px'
                    padding={{ xl: '24px', lg: '24px', md: '12px', sm: '12px' }}
                    gap={{ xl: '24px', lg: '16px', md: '12px', sm: '12px' }}
                >
                    <Flex w='full' justifyContent='space-between'>
                        <Text
                            textStyle={{
                                xl: 'highTextXl',
                                lg: 'highTextLg',
                                md: 'containerTitleMd',
                                sm: 'containerTitleMd',
                            }}
                        >
                            Кулинарные блоги
                        </Text>
                        <Box display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}>
                            <NavLinkWithArrow
                                path={Routes.AUTHORS}
                                title='Все авторы'
                                withoutBg={true}
                            />
                        </Box>
                    </Flex>
                    <Flex
                        direction={{ xl: 'row', lg: 'row', md: 'row', sm: 'column' }}
                        gap={{ xl: '16px', lg: '16px', md: '12px', sm: '12px' }}
                    >
                        {foodBlogsData.map((item, index) => (
                            <BlogCard key={index} {...item} />
                        ))}
                    </Flex>
                    <Box
                        display={{ xl: 'none', lg: 'none', md: 'flex', sm: 'flex' }}
                        justifyContent='center'
                        h='40px'
                    >
                        <NavLinkWithArrow
                            path={Routes.AUTHORS}
                            title='Все авторы'
                            withoutBg={true}
                        />
                    </Box>
                </Box>

                <FooterPageComponent
                    title='Веганская кухня'
                    description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                    recipes={newRecipes}
                    recipesWithButton={veganRecipesLinkData}
                />
            </div>
        </Box>
    );
};
