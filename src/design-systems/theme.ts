import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        body: `'Inter', sans-serif`,
        heading: `'Inter', sans-serif`,
    },
    breakpoints: {
        base: '0em',
        sm: '22.5em',
        md: '48em',
        lg: '90em',
        xl: '120em',
    },
    textStyles: {
        baseText: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
        },
        pageTitleXl: {
            fontFamily: 'body',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '48px',
        },
        pageTitleMd: {
            fontFamily: 'body',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '32px',
        },
        searchPlaceholder: {
            fontFamily: 'body',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '100%',
        },
        selectPlaceholder: {
            fontFamily: 'body',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
        },
        selectPlaceholderXl: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
        },
        selectPlaceholderMd: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
        },
        containerTitleXl: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: '48px',
        },
        containerTitleLg: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '40px',
        },
        containerTitleMd: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '32px',
        },
        recipeTitleXl: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '28px',
        },
        recipeTitleMd: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
        },
        recipeDescription: {
            fontFamily: 'body',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
        },
        likesCount: {
            fontFamily: 'body',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
        },
        likesCountMd: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
        },
        likesCountXl: {
            fontFamily: 'body',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
        },
        buttonText: {
            fontFamily: 'body',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '28px',
        },
        highTextXl: {
            fontFamily: 'body',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '40px',
        },
        highTextLg: {
            fontFamily: 'body',
            fontWeight: 500,
            fontSize: '30px',
            lineHeight: '36px',
        },
    },
    colors: {
        primary: {
            black: '#000000',
            white: '#FFFFFF',
            blackButton: '#000000eb',
            lightBlack: '#000000cc',
        },
        gray: {
            border: '#0000007a',
            borderSelect: '#00000014',
            track: '#00000029',
            text: '#2d3748',
            instagram: '#000000a3',
        },
        lime: {
            50: '#FFFFD3',
            100: '#EAFFC7',
            150: '#D7FF94',
            300: '#C4FF61',
            400: '#B1FF2E',
            600: '#2DB100',
            800: '#134B00',
        },
    },
    styles: {
        global: {
            body: {
                bg: 'primary.white',
                color: 'primary.black',
            },
        },
    },
    components: {
        Switch: {
            baseStyle: {
                track: {
                    bg: 'gray.track',
                    _checked: {
                        bg: 'lime.300',
                    },
                },
            },
        },
    },
});
