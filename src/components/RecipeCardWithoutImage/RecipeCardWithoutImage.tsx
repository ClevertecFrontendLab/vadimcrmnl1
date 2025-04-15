import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { RecipeItemType } from '~/pages/data';

import { TagFavLikesBadge } from '../RecipeCard/components/TagFavLikesBadge/TagFavLikesBadge';
import { TitleAndDescriptionComponent } from '../RecipeCard/components/TitleAndDescriptionComponent/TitleAndDescriptionComponent';

export const RecipeCardWithoutImage: React.FC<RecipeItemType> = ({
    description,
    title,
    favourites,
    likes,
    tags,
}) => (
    <Box
        w={{ xl: '322px', lg: '282.67px', md: '232px', sm: '328px' }}
        h={{ xl: '192px', lg: '180px', md: '168px', sm: '168px' }}
        borderRadius='8px'
        border='1px'
        borderColor='gray.borderSelect'
        padding={{
            xl: '24px 24px 20px 24px',
            lg: '0 16px',
            md: '0 12px',
            sm: '0 12px',
        }}
        position='relative'
    >
        <TitleAndDescriptionComponent description={description} title={title} />
        <Flex>
            <TagFavLikesBadge favourites={favourites} likes={likes} marginTop='24px' tags={tags} />
        </Flex>
    </Box>
);
