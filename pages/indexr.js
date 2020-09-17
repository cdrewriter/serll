import { initializeGraphQL } from '../lib/graphql-client'
import graphQLRequest from '../lib/graphql-request'
import App from '../components/test/app'
import Header from '../components/test/header'
import PostList, {
  allPostsQuery,
  allPostsQueryOptions,
} from '../components/test/post-list'

export default function Home() {
  return (
  <>
      <Header />
      <PostList />
 </>
  )
}

export async function getStaticProps() {
  const client = initializeGraphQL()

  await graphQLRequest(client, allPostsQuery, allPostsQueryOptions())

  return {
    props: {
      initialGraphQLState: client.cache.getInitialState(),
    },
    revalidate: 1,
  }
}
