'use client'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const endpoint = 'https://francoisdelmaire.com/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
  method: 'GET',
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
        databaseId
        informations {
          description
          location
          size
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        title
      }
    }
  }
}
`;

export default function Projets() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await graphQLClient.request(query);
        console.log(data);
        setProjets(data.projets.edges);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    let ctx = gsap.context(() => {
      let pinProjectsSection = gsap.to('.projects-container', { ease: 'none', duration: 0.25 });
    
      let horizontalScroll = gsap.to('.projects', {
        x: () => -(document.querySelector('.projects').offsetWidth - window.innerWidth),
        ease: 'none',
      });
    
      ScrollTrigger.create({
        trigger: ".projects-section",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        markers: false,
        animation: pinProjectsSection,
        toggleActions: 'play reverse play reverse',
      });

      ScrollTrigger.create({
        trigger: ".projects-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        animation: horizontalScroll,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[350vh] overflow-hidden relative">
      <section className="projects-section w-screen h-[350vh] flex overflow-hidden absolute top-0">
        <div className="projects-container h-[100vh] pt-20 top-0 left-0 flex">
          <div className="projects w-[400vh] h-3/4 flex my-auto">
            <div className="flex flex-col mx-48">
              <p className="opacity-70">Envie de découvrir mes</p>
              <h1 className="p-0 mx-0 bold uppercase text-primary mb-10 text-4xl md:text-5xl lg:text-6xl xl:text-8xl">Projets ?</h1>
              <p className="w-[500px] mr-[100px] opacity-70">Découvrez à travers cette collection de projets toute la quintessence de mes compétences. Ces projets ont été réalisés avec passion et entrain, afin de transformer la vie de mes clients.</p>
            </div>
            {projets.slice(0, 4).map((projet, index) => (
              <Link href={`/projets/${projet.node.databaseId}`} key={projet.node.databaseId}>
                <div
                  className="overflow-hidden h-[400px] w-[300px] absolute mx-10"
                  style={{
                    left: `${20 + index * 12}%`,
                    top: `${20 + (index % 2 === 0 ? 25 : -15)}%`,
                  }}
                >
                  {projet.node.featuredImage ? (
                    <img className="w-full h-full object-cover" src={projet.node.featuredImage.node.mediaItemUrl} alt={projet.node.title} />
                  ) : (
                    <img className="w-full h-full object-cover" src="/default_thumb.png" alt="default thumbnail" />
                  )}
                </div>
              </Link>
            ))}
            <Link href={'/projets'} className="absolute left-[75%] top-1/3 bg-primary text-white px-10 py-5 rounded">
              Voir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
