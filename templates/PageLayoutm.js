import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { Toolbar, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import theme from './theme';
import HeaderEx from '../components/HeaderEx';
import NavFooterEx from '../components/FooterEx';
import '../pages/styles.scss';
import { useRouter } from 'next/router';



import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getInsetContainer,
  getInsetSidebar,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getMuiTreasuryScheme,
} from '@mui-treasury/layout';
import {  NavContentMockUp } from '@mui-treasury/mockup/layout';
import NestedMenu from '../components/NestedMenu';
const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const InsetContainer = getInsetContainer(styled);
const InsetSidebar = getInsetSidebar(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const muiTreasuryScheme = getMuiTreasuryScheme(styled);

muiTreasuryScheme.enableAutoCollapse('primarySidebar', 'md');

muiTreasuryScheme.configureHeader((builder) => {
  builder
    .create('header')
    .registerConfig('xs', {
      position: 'sticky',
      initialHeight: 64,
    })
    .registerConfig('md', {
      position: 'relative', // won't stick to top when scroll down
      clipped: true,
      initialHeight: 64,
    });
});
muiTreasuryScheme.configureInsetSidebar((builder) => { 
   
  builder.create('insetSidebar', { anchor: 'left' }).registerFixedConfig('sm', {
    width: '20rem', // recommended width
    headerMagnetEnabled: true,     
  });

});
const Layoutnx = ({ children }) => {

  const router = useRouter();

  muiTreasuryScheme.configureEdgeSidebar((builder) => {
    builder.create('primarySidebar', { anchor: 'left' }).registerPersistentConfig('xl', {
      width: '20%', // recommended width
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
      autoExpanded: true,
      persistentBehavior: 'fit',
    });
    builder.create('primarySidebar', { anchor: 'left' }).registerPersistentConfig('lg', {
      width: '22.5%', // recommended width
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
      autoExpanded: true,
      persistentBehavior: 'fit',
    });
    builder.create('primarySidebar', { anchor: 'left' }).registerPersistentConfig('md', {
      width: '22.5%', // recommended width
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
      autoExpanded: true,
      persistentBehavior: 'fit',
    });
    if (router.pathname === '/') {
      builder.hide('primarySidebar', false);
    
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
      <CssBaseline />
      <Root theme={theme} scheme={muiTreasuryScheme}>
        {({ state: { sidebar } }) => (
          <>
            <Header>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                <HeaderEx />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent className="sidebar_cont">
                <NestedMenu />
              </SidebarContent>
              <CollapseBtn />
            </DrawerSidebar>
            <Content>
              <InsetContainer 
                maxWidth={'xl'}
                leftSidebar={
                  <InsetSidebar sidebarId={'insetSidebar'}>
                    <Box mt={2} />
                    <NavContentMockUp />
                  </InsetSidebar>
                }
              >
                <Box>{children}</Box>
               
              </InsetContainer>
            </Content>
            <Footer>
              <NavFooterEx />
            </Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
};
export default Layoutnx;

Layoutnx.propTypes = {
  children: PropTypes.any,
};
