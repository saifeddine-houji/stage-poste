import Header from "../blocks/Home/Header";
import Footer from "../blocks/Home/Footer";
import HomeBody from "../blocks/Home/HomeBody";


const Home =()=>{
    return(
        <div>
            <Header/>
            <div className="homepage-titles">
                <h1>Welcome to the remote operations service !</h1>
                <h2>Choose your operation</h2>
            </div>

            <HomeBody/>
            <Footer/>
        </div>
    )
}

export default Home;