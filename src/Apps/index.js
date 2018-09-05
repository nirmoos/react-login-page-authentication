import React from 'react';

import FeaturedTable from './FeaturedTable';
import LogoutButton from '../Containers/LogoutButton';

const Home = () => (
    <div className='user-home'>
        <FeaturedTable />
        <LogoutButton />
    </div>
);

export default Home;
