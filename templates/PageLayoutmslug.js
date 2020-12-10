import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { Toolbar, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import theme from './theme';
import HeaderEx from '../components/HeaderEx';
import NavFooterEx from '../components/FooterEx';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  head: {
    background: '#f5f5f5',
  }
}));

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
  builder.create('header').registerConfig('xs', {
    position: 'sticky',
    initialHeight: 72,
  })
  .registerConfig('xs', {
      position: 'relative', // won't stick to top when scroll down
      clipped: true,
      initialHeight: 72,
    });
});

const Layout = ({ children, activeKey, categ }) => {
  const router = useRouter();
  muiTreasuryScheme.configureInsetSidebar((builder) => {
    builder.create('insetSidebar', { anchor: 'left' }).registerStickyConfig('xs', {
      width: 320, // recommended width
      headerMagnetEnabled: true,
    });
    
    
  });
  muiTreasuryScheme.configureEdgeSidebar((builder) => {
    builder.create('primarySidebar', { anchor: 'left' }).registerPersistentConfig('xl', {
      width: '20%', // recommended width
      collapsible: true,
      collapsedWidth: 72,
      headerMagnetEnabled: true,
      autoExpanded: true,     
      persistentBehavior: {
        header: 'fit',
        content: 'fit',
        footer: 'fit'
      },
    });
    builder.create('primarySidebar', { anchor: 'left' }).registerPersistentConfig('lg', {
      width: '22.5%', // recommended width
      collapsible: true,
      collapsedWidth: 72,
      headerMagnetEnabled: true,
      autoExpanded: true,
      persistentBehavior: {
        header: 'fit',
        content: 'fit',
        footer: 'fit'
      },
    });
    builder.create('primarySidebar', { anchor: 'left' }).registerPersistentConfig('md', {
      width: '22.5%', // recommended width
      collapsible: true,
      collapsedWidth: 72,
      headerMagnetEnabled: true,
      autoExpanded: true,
      persistentBehavior: {
        header: 'fit',
        content: 'fit',
        footer: 'fit'
      },
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
  muiTreasuryScheme.enableAutoCollapse('primarySidebar', 'lg')

  const classes = useStyles();
  //console.log(categ)
  return (
    <StylesProvider injectFirst>
     
      <Root theme={theme} scheme={muiTreasuryScheme}  initialState={{ sidebar: { primarySidebar: { open: true, collapsed: true } } }}>
        {({ state: { sidebar } }) => (
          <>
            <Header className={classes.head}>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                <HeaderEx />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent className="sidebar_cont">
                <NestedMenu activeKey={activeKey} />
                
              </SidebarContent>
              <CollapseBtn />
        </DrawerSidebar>
            <Content>
              {/*<InsetContainer
                className={'content__block'} 
                maxWidth={'xl'}
                leftSidebar=
                  {(router.pathname !== "/catalog") && (
                    
                    <InsetSidebar  sidebarId={'insetSidebar'}>
                    <Box className="heading" pt={20}>
                      <h3 className="sidebar_title">Каталог</h3>
                    </Box>
                    {categorycatalog}
                    <CatList active={activeKey} pt={10}/>
                    <Box pb={20}></Box>
                  </InsetSidebar>
       
                  )}
                
              >
                <Box className="content__inset" width={4/4} p={4}>{children}</Box>
              </InsetContainer>*/}
               <Box className="content__inset" width={4/4} p={4}>{children}</Box>
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
export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
