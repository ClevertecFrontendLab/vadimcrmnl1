import { Box, Image } from '@chakra-ui/react';
import React from 'react';

import writeRecipeImg from '~/assets/images/write_recipe.png';
import styles from '~/components/ProfileBar/ProfileBar.module.scss';

const ProfileBar: React.FC = () => (
    <Box display={{ xl: 'block', lg: 'block', md: 'none', sm: 'none' }} className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.countBlock}>
                <div className={styles.item}>
                    <Image src='/src/assets/icons/BsBookmarkHeart.svg' alt='icon' />
                    <span>185</span>
                </div>
                <div className={styles.item}>
                    <Image src='/src/assets/icons/BsEmojiHeartEyes.svg' alt='icon' />
                    <span>589</span>
                </div>
                <div className={styles.item}>
                    <Image src='/src/assets/icons/BsPeopleFill.svg' alt='icon' />
                    <span>587</span>
                </div>
            </div>
            <Box className={styles.buttonBlock}>
                <Image src={writeRecipeImg} alt='button' />
            </Box>
        </div>
    </Box>
);

export default ProfileBar;
