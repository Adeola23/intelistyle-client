import { useState } from "react";
import './App.css';
import SearchBarComponent from "./Components/SearchBar/SearchBar.component";
import HeaderComponent from "./Components/HomeBar/header.component";
import CardList from "./Components/CardList/cardlist.component.js"
import ClipLoader from "react-spinners/ClipLoader";
import Axios from 'axios'


const App = () => {
    const [search, setSearched] = useState('')
    const [garment, setGarment] = useState([])
    const [isLoading, setLoading] = useState(false)


    const handleSearch = (e) =>{
        setSearched(e.target.value)


    }
// proud moment :)
    const handleOnClick = async () =>{
        setLoading(true)
        Axios({
            method: 'GET',
            url: `https://intelistyle-backend.herokuapp.com/find/${search}`,
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response =>{

            setGarment(response.data)
            console.log(response.data)
            setTimeout(()=> {
                setLoading(false)

            }, 1000)



        })
    }

    const handleKeypress = event => {
        //it triggers by pressing the enter key
        if (event.keyCode === 13  || event.which === 13)  {
            handleOnClick();
        }
    };


    // const handleOnClick = async () =>{
    //     useEffect(()=>{
    //         fetch(`http://localhost:8000/find/${search}`)
    //             .then((response) =>response.json())
    //             .then((responseJson)=>{
    //                 setGarment(responseJson.data)
    //             }, [])
    //     })



    // try{
    //     await axios.get(`https://localhost:8000/find/${search}`,{
    //         crossdomain: true
    //     })
    //         .then((res) => {
    //             setGarment(res.data)
    //         })
    // }catch (error) {
    //     console.log(error)
    //
    // }




  return (

    <div className="App">
        <HeaderComponent/>
        <SearchBarComponent
            placeholder="Search..."
            onChange={handleSearch}
            onClick={handleOnClick}
            onKeyPress={handleKeypress}
        />
        {
            isLoading ?
                ( <ClipLoader  isLoading={isLoading} size={150} />) :

                (<CardList
                    garments={garment}
                    isLoading ={isLoading}
                />)
        }



    </div>
  );
}

export default App;
