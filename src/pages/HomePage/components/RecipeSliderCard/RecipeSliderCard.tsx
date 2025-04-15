import { Box, Image } from '@chakra-ui/react';

import { TagFavLikesBadge } from '~/components/RecipeCard/components/TagFavLikesBadge/TagFavLikesBadge';
import { TitleAndDescriptionComponent } from '~/components/RecipeCard/components/TitleAndDescriptionComponent/TitleAndDescriptionComponent';
import { RecipeItemType } from '~/pages/data';

export const RecipeSliderCard = ({
    title,
    description,
    image,
    tags,
    favourites,
    likes,
}: RecipeItemType) => (
    <Box
        borderRadius='8px'
        position={{ md: 'relative', sm: 'relative' }}
        overflow='hidden'
        bg='primary.white'
        w={{ xl: '322px', lg: '277px', md: '158px', sm: '158px' }}
        h={{ xl: '414px', lg: '402px', md: '220px', sm: '220px' }}
        borderWidth='1px'
        borderColor='gray.borderSelect'
    >
        <Image
            src={image}
            objectFit='cover'
            w='full'
            h={{ xl: '230px', lg: '230px', md: '128px', sm: '128px' }}
        />

        <Box
            // padding="16px 24px 20px 24px"
            padding={{
                xl: '16px 24px 20px 24px',
                lg: '12px',
                md: '8px 8px 4px 8px',
                sm: '8px 8px 4px 8px',
            }}
            gap={{ xl: '24px', lg: '24px', md: '8px', sm: '8px' }}
            display='block'
        >
            <TitleAndDescriptionComponent description={description} title={title} />
            <TagFavLikesBadge
                favourites={favourites}
                likes={likes}
                tags={tags}
                isSlider={true}
                marginTop='24px'
            />
        </Box>
    </Box>
);
