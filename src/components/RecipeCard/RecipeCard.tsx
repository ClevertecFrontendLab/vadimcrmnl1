import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { RecipeItemType } from '~/pages/data';

import { TagFavLikesBadge } from './components/TagFavLikesBadge/TagFavLikesBadge';
import { TitleAndDescriptionComponent } from './components/TitleAndDescriptionComponent/TitleAndDescriptionComponent';

export const RecipeCard: React.FC<RecipeItemType> = ({
    image,
    tags,
    title,
    description,
    likes,
    isRecommended,
    recommendedBy,
    favourites,
}) => (
    <Box
        borderWidth='1px'
        borderRadius='8px'
        overflow='hidden'
        bg='primary.white'
        h={{ xl: '244px', lg: '244px', md: '128px', sm: '128px' }}
        w={{ xl: '668px', lg: '880px', md: '356px', sm: '328px' }}
    >
        <Flex position='relative'>
            <Box>
                <Image
                    w={{ xl: '346px', lg: '346px', md: '158px', sm: '158px' }}
                    h={{ xl: '244px', lg: '244px', md: '128px', sm: '128px' }}
                    src={image}
                    alt={title}
                />
            </Box>
            <Box
                padding={{
                    xl: '20px 24px',
                    lg: '20px 24px',
                    md: '8px 8px 4px 8px',
                    sm: '8px 8px 4px 8px',
                }}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                w={{ xl: '322px', lg: '534px', md: '198px', sm: '170px' }}
            >
                <Flex
                    top={{ md: '8px', sm: '8px' }}
                    left={{ md: '8px', sm: '8px' }}
                    position={{ md: 'absolute', sm: 'absolute' }}
                >
                    <TagFavLikesBadge
                        favourites={favourites}
                        likes={likes}
                        tags={tags}
                        marginTop='0'
                    />
                </Flex>
                <Flex marginTop={{ md: '32px', sm: '32px' }}>
                    <TitleAndDescriptionComponent
                        noDescription={true}
                        description={description}
                        title={title}
                    />
                </Flex>
                <Flex marginTop='24px' justifyContent='end' alignItems='end' gap='8px'>
                    <Button
                        h={{ xl: '32px', lg: '32px', md: '24px', sm: '24px' }}
                        w={{ xl: '122px', lg: '122px', md: '24px', sm: '24px' }}
                        minW='unset'
                        borderRadius='6px'
                        borderColor='gray.border'
                        padding={{ xl: '0 12px', lg: '0 12px', md: '0 6px', sm: '0 6px' }}
                        gap='8px'
                        bg='primary.white'
                        _hover={{
                            bg: 'black.200',
                        }}
                        _active={{
                            outline: 'none',
                        }}
                        _after={{
                            outline: 'none',
                        }}
                    >
                        <Image
                            src='/src/assets/icons/BsBookmarkHeart.svg'
                            w='14px'
                            h='14px'
                            alt='icon'
                        />
                        <Text
                            textStyle='recipeDescription'
                            color='primary.lightBlack'
                            display={{
                                xl: '-webkit-flex',
                                lg: '-webkit-flex',
                                md: 'none',
                                sm: 'none',
                            }}
                            fontWeight={600}
                        >
                            Сохранить
                        </Text>
                    </Button>
                    <Button
                        h={{ xl: '32px', lg: '32px', md: '24px', sm: '24px' }}
                        borderRadius='6px'
                        padding='0 12px'
                        bg='primary.blackButton'
                        textStyle={{
                            xl: 'likesCountXl',
                            lg: 'likesCountXl',
                            md: 'likesCount',
                            sm: 'likesCount',
                        }}
                        color='primary.white'
                    >
                        Готовить
                    </Button>
                </Flex>
            </Box>
            {isRecommended && recommendedBy && (
                <Flex
                    display={{ md: 'none', sm: 'none' }}
                    left='24px'
                    bottom='20px'
                    alignItems='center'
                    position='absolute'
                    h='28px'
                    padding='4px 8px'
                    gap='8px'
                    borderRadius='4px'
                    bg='lime.150'
                >
                    <Image
                        w='16px'
                        h='16px'
                        borderRadius='50%'
                        src={recommendedBy?.icon}
                        alt='photo'
                    />
                    <Text textStyle='recipeDescription'>{recommendedBy?.name} рекомендует</Text>
                </Flex>
            )}
        </Flex>
    </Box>
);
