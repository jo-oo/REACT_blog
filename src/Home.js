import { useState } from 'react'; //importerar från react-biblioteket  så vi kan använda Hooks 

const Home = () => {
                        // let name = 'mario';
                        const [name, setName] = useState('mario'); //vi lägger in de två värden som Hook-metoden useState returnerar till oss och lägger det i en array
                        //det 1a värdet vi lägger in är name, och det andra är en funktion som heter set. Du skriver set+det du kalalsde det första värdet
                        
                        const [age, setAge] = useState(23);
    
    //OUTPUT LISTS OF DATA
        //initiala värdet är en array av bloggar med tre objekt
    const [blogs, setBlogs] = useState([
        { title: "My new webiste", body: 'lorem ipsum..', author: 'mario', id: 1 },
        { title: "Welcome party", body: 'lorem ipsum..', author: 'yoshi', id: 2 },
        { title: "Web dev top tips", body: 'lorem ipsum..', author: 'mario', id: 3 }
    ]);


                        //I klick-funktionen vill vi att värdena ska kunna ändras till nya. så ålder och namn uppdtaeras tll det vi sötter det till här inne
                        const handleClick = () => {
                            setName('luigi') //lägg in det nya värdet. Det är reaktivit. det kommer ändras I Templaten o skrivas ut
                            setAge('30') //kommer uppdatera åldern till 30 när du klickar på knappen
                         }

    return (  //vi ska nu cycle through arrayen med objekt för att printa ut dom oavsett om det tillkommit fler eller info ändrats i blooggposterna
        <div className="home">
            {blogs.map((blog) => (//callbackfunction. vid varje iteration/loopning får vi tillgång till the item we cuurently is looping over
                                    //för varje loop vill vi skapa en div med en preview av bloggen
                                    //each root-element i templaten som vi returnerar must have a KEY-property. Den använder React för att hålla koll på varje element i DOM när de skrivs ut. så React kan hålla koll på desa/tracka desssa
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}

                        <p>{ name } is { age } years old. </p>
                        <button onClick={handleClick}>Click here</button>
        </div> 
    );
} 
 
export default Home;