import React from 'react'
import SearchInput from './SearchInput'
import FoundMovies from './FoundMovies'
import SiteTitle from './SiteTitle'

function Navbar({children}) {
    return (
        <nav className="nav-bar">
            {children}
        </nav>
    )
}

export default Navbar