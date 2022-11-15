import {Link} from 'react-router-dom'

function Navbar(){

    return (
        <nav class="navbar navbar-dark bg-primary">
            
            <div class="container-fluid">
                <Link to="/"><span class="navbar-brand mb-1 h1">Home</span></Link>
            </div>
        </nav>
    )
}

export default Navbar 