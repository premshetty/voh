import React from 'react'
import ArticleAndBlogs from '../../components/editorials/ArticleAndBlogs'
import BrandinFocus from '../../components/editorials/BrandinFocus'
import Editorials from '../../components/editorials/Editorials'
import NewsandPr from '../../components/editorials/NewsandPr'

const index = () => {
    return (
        <div><Editorials /><BrandinFocus name='Brand In Focus' padding='px-3 md:px-10' /><ArticleAndBlogs /><NewsandPr /></div>
    )
}

export default index