import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";

import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-ca-central-1.graphcms.com/v2/cl3t2ypmfbcnp01xk8s5nezw1/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datPublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
        
      }
    }
  }
`;

const QUERY2 = gql`
  {
    posts {
      id,
      title,
      datPublished,
      slug
      coverPhoto {
        url
      }
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY2);

  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Bloggy</title>
        <meta
          name="description"
          content="Blog website created in Nextjs with Typescript and GraphQL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          {posts.map((post: any) => (
            <BlogCard
              title={post.title}
              datePublished={post.datPublished}
              author={post.author}
              coverPhoto={post.coverPhoto}
              slug={post.slug}
              key={post.id}
            />
          ))}
      </main>
    </div>
  );
};

export default Home;

// Create something rough that:
// - fetches data
// - uses the Image
// - Has a form
// - has routing
// - has dynamic routing
// - uses server side props
// - uses static props
