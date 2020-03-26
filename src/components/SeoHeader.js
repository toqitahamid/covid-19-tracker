import {Helmet} from "react-helmet";
import React from "react";


function SeoHeader() {

    const seo = {
        title: "Coronavirus (COVID-19) Live Tracker Bangladesh",
        description:
            "Tracking the spread of coronavirus (COVID-19) in the Bangladesh with data from Johns Hopkins University and WHO",
        url: "https://coronabd.org/",
        // image: "https://getd.io/image.png"
    };



    return(

        <Helmet
            title={seo.title}
            meta={[
                {
                    name: "description",
                    property: "og:description",
                    content: seo.description
                },
                { property: "og:title", content: seo.title },
                { property: "og:url", content: seo.url },
                // { property: "og:image", content: seo.image },
                // { property: "og:image:type", content: "image/png" },
                // { property: "twitter:image:src", content: seo.image },
                { property: "twitter:title", content: seo.title },
                { property: "twitter:description", content: seo.description }
            ]}
        />

    );
}


export default SeoHeader;