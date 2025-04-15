import React from 'react';

import styles from '~/components/UI/ButtonWithIcon/ButtonWithIcon.module.scss';

interface ButtonWithIconProps {
    title: string;
    icon: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, title }) => (
    <div className={styles.wrapper}>
        <img src={icon} alt='icon' />
        <span>{title}</span>
    </div>
);

export default ButtonWithIcon;
