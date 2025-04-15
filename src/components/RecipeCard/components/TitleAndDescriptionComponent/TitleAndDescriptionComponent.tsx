import { Box, Text } from '@chakra-ui/react';
import React from 'react';

type TitleAndDescriptionComponentProps = {
    title: string;
    description: string;
    noDescription?: boolean;
};

export const TitleAndDescriptionComponent: React.FC<TitleAndDescriptionComponentProps> = ({
    description,
    title,
    noDescription,
}) => (
    <Box
    // marginTop={{xl: '24px', lg: '24px', md: '0', sm: '0'}}
    >
        <Text
            textStyle={{
                xl: 'recipeTitleXl',
                lg: 'recipeTitleXl',
                md: 'recipeTitleMd',
                sm: 'recipeTitleMd',
            }}
            fontSize={{ xl: '20px', lg: '18px', md: '16px' }}
            lineHeight={{ md: '24px' }}
            isTruncated
        >
            {title}
        </Text>

        <Text
            textStyle='recipeDescription'
            noOfLines={3}
            marginTop='8px'
            h='64px'
            display={{
                xl: '-webkit-box',
                lg: '-webkit-box',
                md: noDescription ? 'none' : '-webkit-box',
                sm: noDescription ? 'none' : '-webkit-box',
            }}
        >
            {description}
        </Text>
    </Box>
);
