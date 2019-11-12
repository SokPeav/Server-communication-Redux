import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import AllArticle  from '../CRUD/AllArticle';
import FetchArticle from '../CRUD/FetchArticle';

function AdminPage() {
     
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    return (
        <div>  
            <AllArticle></AllArticle>
                        </div>
    )
}

export default AdminPage
