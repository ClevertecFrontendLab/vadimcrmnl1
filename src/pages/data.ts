import alexCook from '~/assets/images/alexCook.png';
import ekaterinaKonstantinopolskaya from '~/assets/images/ekaterina_konst.png';
import elenaVysotskaya from '~/assets/images/elena_vysotskaya.png';
import pic1 from '~/assets/images/pic1.png';
import pic2 from '~/assets/images/pic2.png';
import pic3 from '~/assets/images/pic3.png';
import pic4 from '~/assets/images/pic4.png';
import pic5 from '~/assets/images/pic5.png';
import pic6 from '~/assets/images/pic6.png';
import pic7 from '~/assets/images/pic7.png';
import pic8 from '~/assets/images/pic8.png';
import pic9 from '~/assets/images/pic9.png';
import pic10 from '~/assets/images/pic10.png';
import pic11 from '~/assets/images/pic11.png';
import pic12 from '~/assets/images/pic12.png';
import pic13 from '~/assets/images/pic13.png';
import pic14 from '~/assets/images/pic14.png';

export const newRecipesData: RecipeItemType[] = [
    {
        id: 1,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic1,
        tags: [
            {
                icon: '/src/assets/icons/pervye_bluda.svg',
                title: 'Первые блюда',
            },
        ],
        favourites: 1,
        likes: 0,
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        image: pic2,
        tags: [
            {
                icon: '/src/assets/icons/vegan.svg',
                title: 'Веганская кухня',
            },
        ],
        favourites: 2,
        likes: 1,
    },
    {
        id: 3,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        image: pic3,
        tags: [
            {
                icon: '/src/assets/icons/deserty.svg',
                title: 'Десерты, выпечка',
            },
        ],
        favourites: 0,
        likes: 1,
    },
    {
        id: 4,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        image: pic4,
        tags: [
            {
                icon: '/src/assets/icons/salaty.svg',
                title: 'Салаты',
            },
        ],
        favourites: 0,
        likes: 0,
    },
    {
        id: 5,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        image: pic4,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 1,
        likes: 1,
    },
];

export const juiciestRecipesData: RecipeItemType[] = [
    {
        id: 1,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic5,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 85,
        likes: 112,
    },
    {
        id: 2,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic6,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 159,
        likes: 257,
        recommendedBy: {
            icon: elenaVysotskaya,
            name: 'Елена Высоцкая',
        },
        isRecommended: true,
    },
    {
        id: 3,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic7,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 258,
        likes: 342,
        recommendedBy: {
            icon: alexCook,
            name: 'Alex Cook',
        },
        isRecommended: true,
    },
    {
        id: 4,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic8,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 124,
        likes: 324,
    },
];

export const veganRecipesLinkData: RecipeItemType[] = [
    {
        id: 1,
        title: 'Стейк для вегетарианцев',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic5,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 85,
        likes: 112,
    },
    {
        id: 2,
        title: 'Котлеты из гречки и фасоли',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic6,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 159,
        likes: 257,
        recommendedBy: {
            icon: elenaVysotskaya,
            name: 'Елена Высоцкая',
        },
        isRecommended: true,
    },
    {
        id: 3,
        title: 'Сырный суп с лапшой и брокколи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic7,
        tags: [
            {
                icon: '/src/assets/icons/pervye_bluda.svg',
                title: 'Первые блюда',
            },
        ],
        favourites: 258,
        likes: 342,
        recommendedBy: {
            icon: alexCook,
            name: 'Alex Cook',
        },
        isRecommended: true,
    },
];

export const foodBlogsData: FoodBlogItemType[] = [
    {
        id: 1,
        image: elenaVysotskaya,
        fullName: 'Елена Высоцкая',
        instagram: '@elenapovar',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        image: alexCook,
        fullName: 'Alex Cook',
        instagram: '@funtasticooking',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        image: ekaterinaKonstantinopolskaya,
        fullName: 'Екатерина Константинопольская',
        instagram: '@bake_and_pie',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
export const veganMainCoursesData: RecipeItemType[] = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        image: pic9,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 85,
        likes: 152,
    },
    {
        id: 2,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        image: pic10,
        tags: [
            {
                icon: '/src/assets/icons/detskie_bluda.svg',
                title: 'Детские блюда',
            },
        ],
        favourites: 85,
        likes: 152,
    },
    {
        id: 3,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic8,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 124,
        likes: 324,
    },
    {
        id: 4,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        image: pic11,
        tags: [
            {
                icon: '/src/assets/icons/bluda_na_grile.svg',
                title: 'Блюда на гриле',
            },
        ],
        favourites: 85,
        likes: 152,
    },
    {
        id: 5,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        image: pic12,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 85,
        likes: 152,
    },
    {
        id: 6,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        image: pic12,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 85,
        likes: 152,
    },
    {
        id: 7,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        image: pic13,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 124,
        likes: 324,
    },
    {
        id: 8,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        image: pic14,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 124,
        likes: 324,
    },
];
export const veganDessertsRecipesData: RecipeItemType[] = [
    {
        id: 1,
        title: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        image: pic14,
        tags: [
            {
                icon: '/src/assets/icons/detskie_bluda.svg',
                title: 'Детские блюда',
            },
        ],
        favourites: 1,
        likes: 1,
    },
    {
        id: 2,
        title: 'Нежный сливочно-сырный крем для кексов',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        image: pic14,
        tags: [
            {
                icon: '/src/assets/icons/detskie_bluda.svg',
                title: 'Детские блюда',
            },
        ],
        favourites: 2,
        likes: 1,
    },
    {
        id: 3,
        title: 'Домашние сырные палочки',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        image: pic14,
        tags: [
            {
                icon: '/src/assets/icons/detskie_bluda.svg',
                title: 'Детские блюда',
            },
        ],
        favourites: 124,
        likes: 324,
    },
    {
        id: 4,
        title: 'Панкейки',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        image: pic14,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 124,
        likes: 324,
    },
    {
        id: 5,
        title: 'Воздушное банановое печенье на сковороде',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        image: pic14,
        tags: [
            {
                icon: '/src/assets/icons/vegan.svg',
                title: 'Веганская кухня',
            },
        ],
        favourites: 124,
        likes: 324,
    },
];

export const juiciestPageRecipesData: RecipeItemType[] = [
    {
        id: 1,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic7,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 258,
        likes: 342,
        recommendedBy: {
            icon: alexCook,
            name: 'Alex Cook',
        },
        isRecommended: true,
    },
    {
        id: 2,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic8,
        tags: [
            {
                icon: '/src/assets/icons/national.svg',
                title: 'Национальные',
            },
        ],
        favourites: 124,
        likes: 324,
    },
    {
        id: 3,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic6,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 159,
        likes: 257,
        recommendedBy: {
            icon: elenaVysotskaya,
            name: 'Елена Высоцкая',
        },
        isRecommended: true,
    },
    {
        id: 4,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: pic5,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 124,
        likes: 231,
    },
    {
        id: 5,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        image: pic4,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 120,
        likes: 180,
    },
    {
        id: 6,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        image: pic10,
        tags: [
            {
                icon: '/src/assets/icons/detskie_bluda.svg',
                title: 'Детские блюда',
            },
        ],
        favourites: 85,
        likes: 180,
    },
    {
        id: 7,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        image: pic11,
        tags: [
            {
                icon: '/src/assets/icons/bluda_na_grile.svg',
                title: 'Блюда на гриле',
            },
        ],
        favourites: 85,
        likes: 152,
    },
    {
        id: 8,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        image: pic12,
        tags: [
            {
                icon: '/src/assets/icons/vtorye_bluda.svg',
                title: 'Вторые блюда',
            },
        ],
        favourites: 85,
        likes: 150,
    },
];

export type RecipeItemType = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: {
        icon: string;
        title: string;
    }[];
    favourites: number;
    likes: number;
    isRecommended?: boolean;
    recommendedBy?: {
        icon: string;
        name: string;
    };
};

export type FoodBlogItemType = {
    id: number;
    image: string;
    fullName: string;
    instagram: string;
    description: string;
};
