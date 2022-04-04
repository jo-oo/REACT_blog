//skapa en "stateless functional component = sfc tab"
//= skapa en TEMPLATE
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={ {
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a> 
            </div>
        </nav>//  {} betyder att vi sätter in ett dynamiskt värde
            //  {{}} betyder att vib sätter in ett objekt inuti det dynamiska värdet.
            //här i lägger vi in key-value-pairs
     );
}

//importera den in i din App-komonnent (App.js)
export default Navbar;