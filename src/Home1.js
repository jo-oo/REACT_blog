const Home1 = () => {

    const handleClick = (e) => {
        console.log("Hello World", e);
        //e = kommer visa eventet i consollen med all info om det, typ vilken tangent du kliakcade med etc
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);//kommer visa bara info om target vid eventet
    }

    return (  
        <div className="home1">
            <h2>Home1</h2>
            <button onClick={handleClick}>Click me and now some functions should run that I just created inside thos Home function</button>
            <button onClick={(e) => {
                 //console.log("Hello");
                handleClickAgain('mario', e)
            }}>Click me again</button>
        </div>//om man lägger in namnet mario direkt in i handleclick på rad 14, så funkar det ej pga att det kommer INVOKE funktionen
        //den funktionen vi nu gjoprt kommer KÖRA när nån klickar på knappen.
        //inuti denna funktionen kan vi INVOKE den andra clickEventAgain funktionen. då den är wrappad i en anonym funktion så INVOKES den inte direkt utan den kommer köra funktionen onclick och sen INVOKE den andra
    );
} 
 
export default Home1;