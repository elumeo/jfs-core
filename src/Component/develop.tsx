import React from 'react';
import DevelopInputs from 'Component/DevelopInputs';
import DevelopNotifications from './DevelopNotifications';
import DevelopTables from 'Component/DevelopTables';
import DevelopCurrency from './DevelopCurrency';
import DevelopColors from 'Component/DevelopColors';
import DevelopLists from 'Component/DevelopLists';
import Layout from './App/Layout';

const sx = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  height: 'fit-content',
}

const Develop: React.FC = () => {
  return <Layout contentProps={{ sx }}>
    <DevelopInputs />
    <DevelopColors />
    <DevelopNotifications />
    <DevelopCurrency />
    <DevelopLists />
    <DevelopTables />
  </Layout>
}
export default Develop
