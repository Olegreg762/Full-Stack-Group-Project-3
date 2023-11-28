import { NavLink, Outlet } from 'react-router-dom'

function RootLayout () {
    return (
        <div>
            <header>
                <nav>
                    <h1>C.H.L.O.E</h1>
                    <NavLink to="/">Profile</NavLink>
                    <NavLink to="library">library</NavLink>
                </nav>
            </header>
            <main>
               <Outlet /> 
            </main>
        </div>
    )
}

export default RootLayout