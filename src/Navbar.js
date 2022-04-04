//skapa en "stateless functional component = sfc tab"
//= skapa en TEMPLATE
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a> 
            </div>
        </nav>//  "/"= sökvägen localhost:3000
            //  "/create"= sökvägen localhost:3000/create
     );
}

//importera den in i din App-komonnent (App.js)
export default Navbar;