import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import graphQLClient from '../utils/graphqlClient';

function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState(null);

  

const query = gql`
{
    projet(id: 171, idType: DATABASE_ID) {
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

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await graphQLClient.request(query, { id });
          setProject(data.project);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.informations.title}</h1>
      <p>{project.informations.description}</p>
      <div>
        <img src={project.informations.after.node.mediaItemUrl} alt="After" />
        <img src={project.informations.before.node.mediaItemUrl} alt="Before" />
      </div>
    </div>
  );
}

export default ProjectDetails;