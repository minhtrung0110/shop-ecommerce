import React from "react"
import ContentLoader from "react-content-loader"

const BannerLoader = (props) => (
    <ContentLoader
        speed={1}
        width={1024}
        height={500}
        viewBox="0 0 1024 400"
        backgroundColor="#cfcece"
        foregroundColor="#9c9c9c"
        {...props}
    >


        <rect x="70" y="30" rx="0" ry="0" width="250" height="175" />
        <rect x="386" y="30" rx="0" ry="0" width="250" height="175" />
        <rect x="700" y="30" rx="0" ry="0" width="250" height="175" />


    </ContentLoader>
)

export default BannerLoader

