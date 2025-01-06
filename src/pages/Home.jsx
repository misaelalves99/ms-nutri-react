import Hero from "../components/Hero";
import Vitaminas from "../components/Vitaminas";
import SaisMinerais from "../components/SaisMinerais";
import Aminoacidos from "../components/Aminoacidos";

function Home() {
    return (  
        <section>
            <Hero/>
            <Vitaminas/>
            <SaisMinerais/>
            <Aminoacidos/>
        </section>
    );
}

export default Home;
