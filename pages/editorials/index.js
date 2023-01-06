import React from 'react'
import ArticleAndBlogs from '../../components/editorials/ArticleAndBlogs'
import BrandinFocus from '../../components/editorials/BrandinFocus'
import Editorials from '../../components/editorials/Editorials'
import NewsandPr from '../../components/editorials/NewsandPr'

const index = () => {
    return (
        <div><Editorials /><BrandinFocus /><ArticleAndBlogs /><NewsandPr /></div>
    )
}

export default index