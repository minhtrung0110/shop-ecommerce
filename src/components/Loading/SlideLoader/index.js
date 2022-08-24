import React from "react"
import ContentLoader from "react-content-loader"

const SlideLoader = (props) => (
    <ContentLoader
        speed={1}
        viewBox="0 0 950 500"
        backgroundColor="#cfcece"
        foregroundColor="#a3a3a3"
        {...props}
    >
        <rect x="23" y="-14" rx="0" ry="0" width="900" height="500" />
    </ContentLoader>
)

export default SlideLoader

