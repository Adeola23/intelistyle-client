import { useCallback, useEffect, useState } from "react";
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/HomeBar/Header";
import useSearched from "./hooks/useSearched"
import CardList from "./Components/CardList/cardlist.component.js"
import Axios from 'axios'


const App = () => {
    const [search, setSearched] = useState('')
    const [garment, setGarment] = useState([])

    const handleSearch = (e) =>{
        setSearched(e.target.value)
        console.log(search)

    }
// proud moment :)
    const handleOnClick = async () =>{

        Axios({
            method: 'GET',
            url: `https://intelistyle-backend.herokuapp.com/find/${search}`,
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response =>{

            setGarment(response.data)
            console.log(garment)

        })
    }

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
        <Header/>
        <SearchBar
            placeholder="Search..."
            onChange={handleSearch}
            onClick={handleOnClick}
        />
        <CardList garments={garment}/>

    </div>
  );
}

export default App;
