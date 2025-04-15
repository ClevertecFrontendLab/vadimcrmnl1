import { Badge, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

type TagFavLikesBadgeProps = {
    favourites: number;
    likes: number;
    isSlider?: boolean;
    tags: {
        icon: string;
        title: string;
    }[];
    marginTop: string;
};

export const TagFavLikesBadge: React.FC<TagFavLikesBadgeProps> = ({
    favourites,
    likes,
    tags,
    isSlider,
    marginTop,
}) => (
    <Flex
        gap={2}
        w='100%'
        wrap='nowrap'
        marginTop={marginTop}
        justifyContent='space-between'
        height='24px'
        alignItems='center'
    >
        {tags.map((tag, index) => (
            <Badge
                key={index}
                bg={isSlider ? 'lime.150' : 'lime.50'}
                padding={{ xl: '2px 8px', lg: '2px 8px', md: '2px 4px', sm: '2px 4px' }}
                gap={{ xl: '8px', lg: '8px', md: '2px', sm: '2px' }}
                display='flex'
                alignItems='center'
                borderRadius='4px'
                h='24px'
                // position={{md: 'absolute', sm: 'absolute'}}
                // top={{md: '8px', sm: '8px'}}
                // left={{md: '8px', sm: '8px'}}
            >
                <Image src={tag.icon} w='16px' h='auto' alt='icon' />
                <Text textTransform='none' textStyle='recipeDescription'>
                    {tag.title}
                </Text>
            </Badge>
        ))}
        <Flex>
            {favourites !== 0 && (
                <Flex padding='0 4px' gap='6px' alignItems='center'>
                    <Image src='/src/assets/icons/BsBookmarkHeart.svg' width='auto' height='12px' />
                    <Text textStyle='likesCount' color='lime.600'>
                        {favourites}
                    </Text>
                </Flex>
            )}
            {likes !== 0 && (
                <Flex padding='0 4px' gap='6px' alignItems='center'>
                    <Image
                        src='/src/assets/icons/BsEmojiHeartEyes.svg'
                        width='auto'
                        height='12px'
                    />
                    <Text textStyle='likesCount' color='lime.600'>
                        {likes}
                    </Text>
                </Flex>
            )}
        </Flex>
    </Flex>
);
