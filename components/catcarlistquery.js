import { useGraphQL } from 'graphql-react';
import React from 'react';
import { countriesFetchOptionsOverride } from './config';
import CircularIndeterminate from './loading';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({ 
  submenu: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyItems: 'normal',
    marginLeft: '48px',
    width: '100%',
  }
}));

const query = /* GraphQL */ `
  query {
    allItemCarCategories {
      name
      slug
      id
    }
  }
`;
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ListItemOne({ item, activelink }) {

  const linka = activelink == item.slug;
  //console.log(linka)
  return (
    <>
      <ListItemLink key={item.id}  href={`/cars/${item.slug}`}>
        <ListItemText className={linka ? 'active' : null} primary={item.name} />
      </ListItemLink>
     
    </>
  );
}

export const CatCarList = ({active}) => {
  const classes = useStyles();
  const operation = React.useMemo(() => ({
    query,
  }));

  //console.log(active);
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: countriesFetchOptionsOverride,
    operation,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  if (data) {
    const { allItemCarCategories } = data;

    const category = [];
    if (allItemCarCategories && allItemCarCategories.length) {
      for (let i = 0; i < allItemCarCategories.length; ++i) {
        category.push(<ListItemOne key={i} activelink={active} item={allItemCarCategories[i]} />);
      }
    }   

    return (
     
        <List component="nav" className={classes.submenu} aria-label="secondary mailbox folders">
          {category}
        </List>
    
    );
  }
  return loading && <CircularIndeterminate />;
};
