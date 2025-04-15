import { Box, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import styles from '~/app/App.module.scss';
import { Footer } from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import ProfileBar from '~/components/ProfileBar/ProfileBar';
import Sidebar from '~/components/Sidebar/Sidebar';
import { HomePage } from '~/pages/HomePage/HomePage';
import { JuiciestPage } from '~/pages/JuiciestPage/JuiciestPage';
import { VeganPage } from '~/pages/VeganPage/VeganPage';

function App() {
    return (
        <>
            <div className={styles.wrapper}>
                <Flex
                    zIndex={10}
                    bg='lime.50'
                    top={0}
                    position={{ xl: 'inherit', lg: 'inherit', md: 'fixed', sm: 'fixed' }}
                >
                    <Header />
                </Flex>
                <div className={styles.container}>
                    <Sidebar />
                    <Box
                        w={{ xl: '1360px', lg: '880px', md: '100%', sm: '100%' }}
                        marginBottom={{ xl: '0', lg: '0', md: '150px', sm: '150px' }}
                    >
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route path='/vegan/*' element={<VeganPage />} />
                            <Route path='/juiciest' element={<JuiciestPage />} />
                        </Routes>
                    </Box>
                    <ProfileBar />
                </div>
                <Flex
                    display={{ xl: 'none', lg: 'none', md: 'flex', sm: 'flex' }}
                    position={{ xl: 'inherit', lg: 'inherit', md: 'fixed', sm: 'fixed' }}
                    bottom='0'
                >
                    <Footer />
                </Flex>
            </div>
        </>
    );
}

export default App;
