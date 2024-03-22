'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { gql, GraphQLClient } from "graphql-request"
const endpoint = 'https://francoisdelmaire.com/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
 method: 'GET', // Since GET method is used by default, you can omit this part if you want
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});

const query = gql`
  {
    projets {
      edges {
        node {
          informations {
            description
            location
            size
            title
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
          }
        }
      }
    }
  }
`;
/*
const data = await graphQLClient.request(query);
console.log(data);
*/

export default function AllProjects() {
    
    const [projets, setProjets] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await graphQLClient.request(query);
          setProjets(data.projets.edges);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
        <ul>
          {projets.map(projet => (
            <li key={projet.node.informations.title}>
              <h2>{projet.node.informations.title}</h2>
              <p>{projet.node.informations.description}</p>
              <div>
                <img src={projet.node.informations.after.node.mediaItemUrl} alt="après"></img>
                <img src={projet.node.informations.before.node.mediaItemUrl} alt="" />
              </div>
            </li>
          ))}
        </ul>

    );
    }