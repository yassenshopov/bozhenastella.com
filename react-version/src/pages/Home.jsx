import React from 'react';
import { Helmet } from "react-helmet";

function Home() {
    let title = "Bozhena Varbanova - Composer, Linguist, Writer"
    let description = ""
    let image = ""
    
    return (
        <main>
            <Helmet>
                <meta name="author" content="Bozhena Varbanova" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
            </Helmet>
            
            <video autoPlay muted loop id="video">
                <source src="/images/video.mp4" type="video/mp4" />
            </video>
            <h1>Bozhena Varbanova</h1>
            <h2>Composer - Linguist - Writer</h2>

        </main>
    );
}

export default Home;