import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar/Sidebar';
import MenuBar from '../Menubar/Menubar';

import * as S from './styled';
import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
