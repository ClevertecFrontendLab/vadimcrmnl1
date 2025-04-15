import { Box, Button, SimpleGrid } from '@chakra-ui/react';

import { FooterPageComponent } from '~/components/FooterPageComponent/FooterPageComponent';
import { HeaderComponent } from '~/components/HeaderComponent/HeaderComponent';
import { RecipeCard } from '~/components/RecipeCard/RecipeCard';
import styles from '~/pages/HomePage/HomePage.module.scss';

import { juiciestPageRecipesData, newRecipesData, veganRecipesLinkData } from '../data';

export const JuiciestPage = () => {
    const newRecipes = newRecipesData
        .filter((item) => item.title.includes('К'))
        .sort((a, b) => b.title.localeCompare(a.title, 'ru'));
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <HeaderComponent title='Самое сочное' />
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacingX='24px'
                    spacingY='16px'
                    marginTop='34px'
                >
                    {juiciestPageRecipesData.map((item, index) => (
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
                    title='Веганская кухня'
                    description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                    recipes={newRecipes}
                    recipesWithButton={veganRecipesLinkData}
                />
            </div>
        </div>
    );
};
