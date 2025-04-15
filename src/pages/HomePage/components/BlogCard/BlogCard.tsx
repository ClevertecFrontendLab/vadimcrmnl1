import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { FoodBlogItemType } from '~/pages/data';

export const BlogCard: React.FC<FoodBlogItemType> = ({
    description,
    fullName,
    image,
    instagram,
}) => (
    <Box
        h={{ xl: '184px', lg: '160px', ms: '152px', sm: '152px' }}
        bg='primary.white'
        borderRadius='8px'
        borderColor='gray.borderSelect'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
    >
        <Flex
            padding={{
                xl: '24px 24px 16px 24px',
                lg: '16px 16px 8px 16px',
                md: '16px 16px 8px 16px',
                sm: '16px 16px 8px 16px',
            }}
            gap={{ xl: '12px', lg: '12px', md: '8px', sm: '8px' }}
        >
            <Image
                src={image}
                w={{ xl: '48px', lg: '48px', md: '32px', sm: '32px' }}
                h={{ xl: '48px', lg: '48px', md: '32px', sm: '32px' }}
                borderRadius='50%'
            />
            <Box>
                <Text noOfLines={1} textStyle='buttonText' fontWeight={500}>
                    {fullName}
                </Text>
                <Text textStyle='recipeDescription' color='gray.instagram'>
                    {instagram}
                </Text>
            </Box>
        </Flex>
        <Box
            padding={{
                xl: '12px 24px 20px 24px',
                lg: '8px 16px 16px 16px',
                md: '8px 16px 16px 16px',
                sm: '8px 16px 16px 16px',
            }}
        >
            <Text noOfLines={3} textStyle='recipeDescription'>
                {description}
            </Text>
        </Box>
    </Box>
);
