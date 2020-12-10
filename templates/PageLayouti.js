import React from 'react';
import styled from 'styled-components';
import  Toolbar  from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import theme from './theme';
import HeaderEx from '../components/HeaderEx';
import NavFooterEx from '../components/FooterEx';
import { useRouter } from 'next/router';
import { StylesProvider } from '@material-ui/core/styles';


import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getMuiTreasuryScheme,
} from '@mui-treasury/layout';

import NestedMenu from '../components/NestedMenu';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const muiTreasuryScheme = getMuiTreasuryScheme(styled);




const Layouti = ({ children }) => {

  const router = useRouter();
  muiTreasuryScheme.configureHeader((builder) => {
    builder
      .create('header')
      .registerConfig('xs', {
        position: 'sticky',
        initialHeight: 64,
      })
      /*.registerConfig('md', {
        position: 'relative', // won't stick to top when scroll down
        clipped: true,
        initialHeight: 64,
      });*/
  });
  muiTreasuryScheme.enableAutoCollapse('primarySidebar', 'md');
  muiTreasuryScheme.configureEdgeSidebar((builder) => {
    builder.create('primarySidebar', { anchor: 'left' }).registerPersistentConfig('xl', {
      width: '20%', // recommended width
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
      autoExpanded: true,
      persistentBehavior: 'fit',
    });

    if (router.pathname === '/') {
      builder.hide('primarySidebar', true);    
    }
    if (router.pathname === '/cars') {
      builder.hide('primarySidebar', false);
    }
    if (router.pathname === '/catalog') {
      builder.hide('primarySidebar', false);
    }
  });
  return (
    <StylesProvider injectFirst>
    
    <Root theme={theme} scheme={muiTreasuryScheme}>  
  
            <Header>
              <Toolbar>
                <SidebarTrigger sidebarId={'primarySidebar'} />
                <HeaderEx />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId={'primarySidebar'} className={'sidebar_drawer'}>
              <SidebarContent  sidebarId={'primarySidebar'} className="sidebar_cont">
                <NestedMenu />
              </SidebarContent>
              <CollapseBtn />
            </DrawerSidebar>
            <Content className="main">             
                {children}
                </Content>
            <Footer>
              <NavFooterEx />
            </Footer>
 
      </Root>
      </StylesProvider>

  );
};
export default Layouti;

Layouti.propTypes = {
  children: PropTypes.any,
};
