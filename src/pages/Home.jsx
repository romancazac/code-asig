import React, { useContext } from 'react'
import { MainSection } from '../components/MainSection'
import { SectionConsultation } from '../components/SectionConsultation'
import { SectionOferts } from '../components/SectionOferts'
import { SectionReviews } from '../components/SectionReviews'
import { Helmet } from 'react-helmet'
import { DataContext } from '../contexts/DataContext'

export const Home = () => {
  const { data } = useContext(DataContext);
  const { meta } = data;
  return (
    <>
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.descr} />
        <meta name="keywords" content={meta?.keyWords} />
        <meta name="author" content={meta?.author} />

      </Helmet>
      <MainSection />
      <SectionConsultation />
      <SectionOferts />
      <SectionReviews />
    </>
  )
}
