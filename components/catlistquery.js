import { useGraphQL } from 'graphql-react';
import React from 'react';
import { countriesFetchOptionsOverride } from './config';
import CircularIndeterminate from './loading';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useRouter } from 'next/router';

const query = /* GraphQL */ `
  query {
    allItemCategories {
      name
      slug
      id
    }
  }
`;
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ListItemOne({ item }) {
  return (
    <>
      <ListItemLink key={item.id} href={`/catalog/${item.slug}`}>
        <ListItemText primary={item.name} />
      </ListItemLink>
      <Divider />
    </>
  );
}

export const CatList = () => {
  const operation = React.useMemo(() => ({
    query,
  }));

  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: countriesFetchOptionsOverride,
    operation,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  if (data) {
    const { allItemCategories } = data;
    const category = [];
    if (allItemCategories && allItemCategories.length) {
      for (let i = 0; i < allItemCategories.length; ++i) {
        category.push(<ListItemOne key={i} item={allItemCategories[i]} />);
      }
    }
    if (!allItemCategories.length) {
      // When post is not found
      return 'Not fou1nd';
    }

    return (
      <>
        <List component="nav" aria-label="secondary mailbox folders">
          {category}
        </List>
      </>
    );
  }
  return loading && <CircularIndeterminate />;
};
