import { Button, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { RecipeItemType } from '~/pages/data';

export const RecipeLinkCard: React.FC<RecipeItemType> = ({ title, tags }) => {
    const tagIcon = tags.map((item) => item.icon);
    const isTruncated = useBreakpointValue({
        xl: false,
        lg: true,
        ml: true,
        sm: true,
    });
    return (
        <Flex
            h={{ xl: '56px', lg: '52px', md: '52px', sm: '52px' }}
            border='1px'
            borderColor='gray.borderSelect'
            borderRadius='8px'
            padding={{ xl: '0 24px', lg: '0 12px', md: '0 12px', sm: '0 12px' }}
            gap={{ xl: '12px', lg: '8px', md: '8px', sm: '8px' }}
            alignItems='center'
        >
            <Image w='24px' src={tagIcon[0]} alt='icon' />
            <Text
                isTruncated={isTruncated}
                w={{ xl: '485px', lg: '148.67px', md: '106px', sm: '194px' }}
                textStyle='recipeTitle'
            >
                {title}
            </Text>
            <Button
                h='32px'
                bg='none'
                border='1px'
                borderColor='lime.600'
                textStyle={{
                    xl: 'likesCountXl',
                    lg: 'likesCount',
                    md: 'likesCount',
                    sm: 'likesCount',
                }}
                color='lime.600'
            >
                Готовить
            </Button>
        </Flex>
    );
};
