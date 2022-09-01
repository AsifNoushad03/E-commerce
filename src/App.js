import React, { useEffect, useContext } from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { Authcontext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';


function App() {
    const { SetUser } = useContext(Authcontext)
    const { firebase } = useContext(FirebaseContext)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            SetUser(user)
        })
    })
    return (
        <div className="App">
            <Post>
                <Router>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/signup'>
                        <Signup />
                    </Route>

                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/create'>
                        <CreatePage />
                    </Route>

                    <Route path='/view'>
                        <ViewPost />
                    </Route>
                </Router>
            </Post>
        </div>
    );
}

export default App;
