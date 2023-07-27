import React, {Component,useState,useEffect} from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from "./ErrorBoundry";
import './App.css';

function App (){
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: robots,
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>
            response.json())
        .then(users=> {
            const robotsUs = [
                {
                    id: 1,
                    name: 'Raul Valadez',
                    username: 'Rawl',
                    email: 'rawl@co'
                },
                {
                    id: 2,
                    name: 'Yuliana Chavez',
                    username: 'Yulz',
                    email: 'yulz@co'
                },
                {
                    id: 3,
                    name: 'Justin Torres',
                    username: 'SilkenChief',
                    email: 'silkenchief@co'
                },
                {
                    id: 4,
                    name: 'Tony Lopez',
                    username: 'Brony',
                    email: 'Tony@co'
                },
            ]
            users = [...robotsUs,...users]
            setRobots( users)});
    }, [])



    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    } )
    if (robots.length===0){
        return <h1>Loading</h1>
    }

    return (
    <div className ="tc">
    <h1> Robo-Friends</h1>
    <SearchBox searchChange={onSearchChange}/>
    {/* <Scroll> */}
    <ErrorBoundry>
        <Cardlist robots={filteredRobots}/>
        </ErrorBoundry>
    {/* </div></Scroll> */}
    </div>
    );
}

export default App;