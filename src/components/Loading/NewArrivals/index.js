import React from "react"
import ContentLoader from "react-content-loader"

const NewArrivalsLoader = (props) => (
    <ContentLoader
        speed={1}
        width={1024}
        height={500}
        viewBox="0 0 1024 400"
        backgroundColor="#cfcece"
        foregroundColor="#9c9c9c"
        {...props}
    >
        <rect x="458" y="15" rx="0" ry="0" width="115" height="20" />
        <rect x="372" y="45" rx="0" ry="0" width="64" height="25" />
        <rect x="446" y="45" rx="0" ry="0"  width="64" height="25" />
        <rect x="520" y="45" rx="0" ry="0"  width="64" height="25" />
        <rect x="594" y="45" rx="0" ry="0"  width="64" height="25" />

        <rect x="100" y="120" rx="0" ry="0" width="175" height="162" />
        <rect x="315" y="120" rx="0" ry="0" width="175" height="162" />
        <rect x="530" y="120" rx="0" ry="0" width="175" height="162" />
        <rect x="745" y="120" rx="0" ry="0" width="175" height="162" />

        <rect x="100" y="302" rx="0" ry="0" width="175" height="30" />
        <rect x="315" y="302" rx="0" ry="0" width="175" height="30" />
        <rect x="530" y="302" rx="0" ry="0" width="175" height="30" />
        <rect x="745" y="302" rx="0" ry="0" width="175" height="30" />

    </ContentLoader>
)

export default NewArrivalsLoader

