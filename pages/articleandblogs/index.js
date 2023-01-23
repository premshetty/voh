import React from 'react'
import ArticlleandBlogs from '../../components/articleandblogs/ArticlleandBlogs'

const index = () => {
    return <ArticlleandBlogs />
}

export default index
export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}