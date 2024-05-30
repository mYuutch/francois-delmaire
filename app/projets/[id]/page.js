'use client';

import { gql, GraphQLClient } from 'graphql-request';
import ProjectDetailsClient from '../../components/ProjectDetailsClient';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Footer from '@/app/components/Footer';

const endpoint = 'https://francoisdelmaire.com/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
  method: 'POST', // Change to POST method
  headers: {
    'Content-Type': 'application/json',
  },
});

const query = gql`
  query ProjectDetails($id: ID!) {
    projet(id: $id, idType: DATABASE_ID) {
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      informations {
        title
        size
        location
        after {
          node {
            mediaItemUrl
          }
        }
        before {
          node {
            mediaItemUrl
          }
        }
        description
      }
    }
  }
`;

export default function ProjectDetailsPage({ initialData }) {
  const [projet, setProjet] = useState([]);

  const { id } = useParams()
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const variables = {
          id: parseInt(id, 10), // Convert the id to an integer
        };

        const data = await graphQLClient.request(query, variables);
        console.log(data);
        setProjet(data.projet);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  

  return (
    <>
    <Head>
    <title>My Awesome Page Title</title>
    <meta name="description" content="" />
    <meta property="og:title" content={projet.title} />
    <meta property="og:description" content="This is a description of my awesome page." />
    <meta property="og:image" content="/path-to-image.jpg" />
  </Head>

  <ProjectDetailsClient initialData={projet}/>
  </>
  );
}