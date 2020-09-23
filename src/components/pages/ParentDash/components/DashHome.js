import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { LinkButton, ChildCard } from './index';
import { PlusCircleOutlined } from '@ant-design/icons';

// Home screen for parent dash
const DashHome = ({ userInfo }) => {
  const { Header, Content } = Layout;
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const Home = userInfo => {
    console.log('user', userInfo);
    if (userInfo) {
      return (
        <>
          {userInfo.map(child => (
            <ChildCard child={child} key={child.id} />
          ))}
          <LinkButton className="Card" to="/login/add">
            <PlusCircleOutlined className="icon" />
            Add a Child
          </LinkButton>
        </>
      );
    } else {
      return <h2 style={{ color: 'black' }}>Loading...</h2>;
    }
  };

  return (
    <>
      <Layout>
        <Header
          className="parent-header"
          style={{ background: '#fafafa', width: '100%' }}
        >
          <h1>Story Squad</h1>
        </Header>
        <Content className="Content">{Home(userInfo)}</Content>
      </Layout>
    </>
  );
};

export default DashHome;
