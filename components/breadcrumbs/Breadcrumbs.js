import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbJsonLd } from 'next-seo';
import Config from '../../configs';
import { Breadcrumbs, Typography } from '@material-ui/core';
import Link from 'next/link';
//import { Breadcrumb } from 'react-bootstrap';

//import './Breadcrumbs.scss';

const baseUrl = Config.BASE_URL.replace(/\/$/, '');

const Breadcrumb = ({ pageTitle, pagePath, parts }) => {
  const breadcrumbItems = [],
    itemListElements = [];

  for (let i = 0; i < parts.length; ++i) {
    breadcrumbItems.push(
      <Link key={i} href={parts[i].href} passHref>
      {parts[i].title}
      </Link>
    );
    itemListElements.push({
      position: i + 1,
      name: parts[i].title,
      item: baseUrl + parts[i].href,
    });
  }

  itemListElements.push({
    position: parts.length,
    name: pageTitle,
    item: baseUrl + pagePath,
  });

  return (
    <React.Fragment>
      <BreadcrumbJsonLd itemListElements={itemListElements} />
      <Breadcrumbs className="breadcrumbs">
        {breadcrumbItems}
        {!!pageTitle && <Typography component="a" className=
        "active">{pageTitle}</Typography>}
      </Breadcrumbs>
    </React.Fragment>
  );
};

Breadcrumb.propTypes = {
  pageTitle: PropTypes.string,
  pagePath: PropTypes.string,
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

export default Breadcrumb;
