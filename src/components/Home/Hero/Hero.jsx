import React from "react";
// import {request, gql} from 'graphql-request';
import { CacheMinutes, log, useQuery } from "@shopify/hydrogen";
import HeroCarousel from "./HeroCarousel.client";

export default function Hero() {
  // const {data} = useQuery(
  //   'seo components',
  //   async () => {
  //     return await request({
  //       url: `${process.env.GRAPH_CMS_ENDPOINT}`,
  //       document: GetHeroComponentInfo,
  //       requestHeaders: {
  //         Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
  //       },
  //     }).catch((error) => log.debug(error));
  //   },
  //   {cache: CacheMinutes()},
  // );
  const { seoHeroComponents } = data.seoHeroSliders[0];

  return <HeroCarousel seoHeroComponents={seoHeroComponents} />;
}

// const GetHeroComponentInfo = gql`
//   {
//     seoHeroSliders {
//       id
//       seoHeroComponents {
//         collectionHeroName
//         heroHeadingName
//         heroSEOText
//         textLink
//         heroImages {
//           id
//           size
//           url
//         }
//       }
//     }
//   }
// `;
