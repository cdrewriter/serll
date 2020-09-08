import { useGraphQL } from 'graphql-react';

const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? '' : 'http://localhost:3000'}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
        query CarCategoriesList {
          allItemCarCategories {
            name
            slug
            id
            description
          }
        }
      `,
      variables: {
        where: priceQueryObj,
        first: limit,
        skip: (page - 1) * limit,
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  consol