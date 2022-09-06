import Header from "../blocks/Home/Header";
import Footer from "../blocks/Home/Footer";
import HomeBody from "../blocks/Home/HomeBody";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {setConnected} from "../redux/actions/AuthenticationActions";


const Home =()=>{
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const AuthState = useSelector(state => state.Auth);

    useEffect(()=>{
       const token = JSON.parse(localStorage.getItem('authTokens'));
       const user =JSON.parse(localStorage.getItem('user'))
       if(!token)
       {
           localStorage.removeItem('authTokens');
           navigate('/login');
       }
       else{
          dispatch(setConnected(token,user));
       }
    },[AuthState.isConnected])


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