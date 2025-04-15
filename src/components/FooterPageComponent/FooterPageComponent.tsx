import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { RecipeItemType } from '~/pages/data';

import { RecipeCardWithoutImage } from '../RecipeCardWithoutImage/RecipeCardWithoutImage';
import { RecipeLinkCard } from '../RecipeLinkCard/RecipeLinkCard';

type FooterPageComponentProps = {
    title: string;
    description: string;
    recipes: RecipeItemType[];
    recipesWithButton: RecipeItemType[];
};
export const FooterPageComponent: React.FC<FooterPageComponentProps> = ({
    title,
    description,
    recipes,
    recipesWithButton,
}) => (
    <Box
        w={{ xl: '1360px', lg: '880px', md: '728px', sm: '328px' }}
        marginTop={{ xl: '40px', lg: '40px', md: '32px', sm: '32px' }}
        paddingTop={{ xl: '24px', lg: '24px', md: '8px', sm: '8px' }}
        borderTop='1px'
        borderTopColor='gray.borderSelect'
    >
        <Flex
            display={{ xl: 'flex', lg: 'flex', md: 'column', sm: 'column' }}
            gap={{ lg: '18px' }}
            justifyContent='space-between'
        >
            <Text
                textStyle={{
                    xl: 'containerTitleXl',
                    lg: 'containerTitleLg',
                    md: 'containerTitleMd',
                    sm: 'containerTitleMd',
                }}
                flexWrap={{ xl: 'nowrap', lg: 'wrap', md: 'nowrap', sm: 'nowrap' }}
            >
                {title}
            </Text>
            <Text
                textStyle={{
                    xl: 'recipeTitleMd',
                    lg: 'recipeTitleMd',
                    md: 'selectPlaceholderMd',
                    sm: 'selectPlaceholderMd',
                }}
                color='gray.instagram'
                w={{
                    xl: '668px',
                    lg: '578px',
                    md: '728px',
                    sm: '328px',
                }}
            >
                {description}
            </Text>
        </Flex>
        <Flex
            marginTop={{ xl: '24px', lg: '24px', md: '16px', sm: '16px' }}
            direction={{ xl: 'row', lg: 'row', md: 'row', sm: 'column' }}
            gap={{ xl: '24px', lg: '16px', md: '12px', sm: '12px' }}
        >
            <Flex
                gap={{ xl: '24px', lg: '16px', md: '12px', sm: '12px' }}
                direction={{ xl: 'row', lg: 'row', md: 'row', sm: 'column' }}
            >
                {recipes &&
                    recipes.map((item, index) => <RecipeCardWithoutImage key={index} {...item} />)}
            </Flex>
            <Box
                gap={{ xl: '12px', lg: '12px', md: '6px', sm: '12px' }}
                display='flex'
                flexDirection='column'
            >
                {recipesWithButton &&
                    recipesWithButton.map((item, index) => (
                        <RecipeLinkCard key={index} {...item} />
                    ))}
            </Box>
        </Flex>
    </Box>
);
