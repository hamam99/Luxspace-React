import React, { Fragment } from 'react'
import Clients from '../parts/Clients'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import JustArrived from '../parts/HomePage/JustArrived'
import Sitemap from '../parts/Sitemap'

export default function HomePage(props) {
    return (
        <Fragment>
            <Header/>
            <Hero/>
            <BrowseRoom/>
            <JustArrived/>
            <Clients/>
            <Sitemap/>  
        </Fragment>
    )
}
