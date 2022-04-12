import React, {Suspense} from 'react';
import {request, gql} from 'graphql-request';
import {CacheMinutes, log, useQuery} from '@shopify/hydrogen';
import HeroCarousel from './HeroCarousel.client';
import LoadingFallback from '../../LoadingFallback';

export default function Hero() {
  const {data} = useQuery(
    'seo components',
    async () => {
      return await request({
        url: `https://api-sa-east-1.graphcms.com/v2/cl1utsbcyc5mf01xk019rfpx0/master`,
        document: GetHeroComponentInfo,
        requestHeaders: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDk2OTY3NDAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsMXV0c2JjeWM1bWYwMXhrMDE5cmZweDAvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjVmMGZmOTEtYTVmMC00NTgzLWI5Y2UtMGQ5NDliMDZjZDlkIiwianRpIjoiY2wxdXl1ZnFuY2ZlNTAxeGsyMzJpMDllcSJ9.QAeaqsVTk9Ll60h7I4y-ZoGDU4XhVa0r0eKT8p1PPg4tMejqjyHZc5m4MHbEO3l2h1SDU41RJbLixejgtCGtkXNw3oR8XnYk85JLJHpM2uVliH4gJ09bu2E9Elr6QeUS-US5LsAPD4Ps2jxa-5ZGAOLliPosbVoRXde4Is6LVz3f4P6V5E7FeaCJz6O0nJA9q1g3kWv2sOXXP2UGj2ESS7wKby5lSIJNqgw0PlUBNXIXbNgN-8S_bcHJNBz-DRNP5icQfR1BJEuHFi9RPM-MO1lnnm-t_t-9NwTMVVY4VcdhZFaFjuY54AUSztbZqRVnZAEuMocE9YnMGBKLJXvr4zqHJIACSUJASYpozMVYSNIx5E0j9MZU1ZlbbOWXyBm3ZLK_MIGiDlgpIeV-wr-W2thbg18C3cpi1kf9d6hnyXDuFAnZP_66BSHuha3lNpO_J2tBFGfHL4nIw1U0BpILLXVe1b6XRKY_wUpl-Z27YUWWhW4P5F4tjB-YSCXk0weXe_au7W7MbqQd9KRBUPfHfVQmBiXs40oHd9I-0W3Ytv9KNQjLf1RJ5vNGvhRmNVT_f0IDoFaLZuk6iCnBwdNTiigkyv001rSEr7Og5sAhqNpMr9g7LgbK9Scf8RpULzwFyG9HalsyHTdwIxPFTATHkJXebs_bNpkK_MZnHn4FscM`,
        },
      }).catch((error) => log.debug(error));
    },
    {preload: true, cache: CacheMinutes()},
  );

  const {seoHeroComponents} = data.seoHeroSliders[0];

  return (
    <Suspense fallback={<LoadingFallback />}>
      <HeroCarousel seoHeroComponents={seoHeroComponents} />
    </Suspense>
  );
}

const GetHeroComponentInfo = gql`
  {
    seoHeroSliders {
      id
      seoHeroComponents {
        collectionHeroName
        heroHeadingName
        heroSEOText
        textLink
        heroImages {
          id
          size
          url
        }
      }
    }
  }
`;