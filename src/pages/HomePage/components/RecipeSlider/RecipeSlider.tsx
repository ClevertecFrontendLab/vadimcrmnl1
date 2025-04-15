import { Box, Flex, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

interface RecipeSliderProps {
    children: ReactNode[];
    itemsToShow?: number;
}

export const RecipeSlider = ({ children, itemsToShow = 3 }: RecipeSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = children.length;

    const visibleCount = useBreakpointValue({ base: 1, sm: 2, md: itemsToShow }) || itemsToShow;
    const maxIndex = Math.max(0, totalItems - visibleCount);

    const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
    const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

    return (
        <Box position='relative' overflow='hidden' w='full'>
            <Flex
                transition='0.4s ease'
                transform={`translateX(-${(100 / visibleCount) * currentIndex}%)`}
                w={`${(100 / visibleCount) * totalItems}%`}
                maxW={{ xl: '1360px', lg: '880px', md: '728px', sm: '328px' }}
            >
                {children.map((child, index) => (
                    <Box key={index} flex={`0 0 ${100 / totalItems}%`} px={2}>
                        {child}
                    </Box>
                ))}
            </Flex>

            <IconButton
                icon={<Image src='/src/assets/icons/BsArrowLeft.svg' alt='arrow' />}
                aria-label='Previous'
                position='absolute'
                left='0'
                top='40%'
                transform='translateY(-50%)'
                zIndex={1}
                onClick={prev}
                bg='primary.black'
                _hover={{ bg: 'blackAlpha.800', border: 'none' }}
                _focus={{
                    outline: 'none',
                }}
                _after={{
                    border: 'none',
                }}
                // isDisabled={currentIndex === 0}
                w={{ xl: '48px', lg: '40px' }}
                h={{ xl: '48px', lg: '40px' }}
                display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}
            />

            <IconButton
                icon={<Image src='/src/assets/icons/BsArrowRight.svg' alt='arrow' />}
                aria-label='Next'
                position='absolute'
                right='0'
                top='40%'
                transform='translateY(-50%)'
                zIndex={1}
                onClick={next}
                bg='primary.black'
                _hover={{ bg: 'blackAlpha.800', border: 'none' }}
                _focus={{
                    outline: 'none',
                }}
                _after={{
                    border: 'none',
                }}
                // isDisabled={currentIndex >= maxIndex}
                w={{ xl: '48px', lg: '40px' }}
                h={{ xl: '48px', lg: '40px' }}
                display={{ xl: 'flex', lg: 'flex', md: 'none', sm: 'none' }}
            />
        </Box>
    );
};
