import { Outlet, useNavigation } from 'react-router-dom';

import Loader from './Common/Loader/Loader';
import Header from './Header/Header';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <main className="main p-5">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
