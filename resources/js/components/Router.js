import React, { Component } from 'react'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from '../Route/Home/Home';
import Board from '../Route/Board/Board';
import Header from './Header';
import BoardShow from '../Route/Board/BoardShow';
import BoardEdit from '../Route/Board/BoardEdit';
import BoardCreate from '../Route/Board/BoardCreate';
import Post from '../Route/Post';
import Youtube from '../Route/ Youtube';
import YoutubeCreate from '../Route/ Youtube/YoutubeCreate';
import YoutubeShow from '../Route/ Youtube/YoutubeShow';
import Apply from '../Route/Applies';
import Contact from '../Route/Contact/Contact';
import Introduce from '../Route/Introduce';
import Notice from '../Route/Notice/Notice';
import NoticeShow from '../Route/Notice/NoticeShow';
import NoticeEdit from '../Route/Notice/NoticeEdit';
import NoticeCreate from '../Route/Notice/NoticeCreate';
import Academy from '../Route/Introduce/Academy';
import Teacher from '../Route/Introduce/Teacher';
import Lecture from '../Route/Introduce/Lecture';
export default () => (
        <Router>
        <>
        <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/introduces" exact component={Introduce} />
                <Route path="/introduces/academy" exact component={Academy} />
                <Route path="/introduces/teacher" exact component={Teacher} />
                <Route path="/introduces/lecture" exact component={Lecture} />
                <Route path="/notices" exact component={Notice} />
                <Route path="/notices/create" exact component={NoticeCreate} />
                <Route path="/notices/:id" exact component={NoticeShow} />
                <Route path="/notices/:id/edit" exact component={NoticeEdit} />
                <Route path="/boards" exact component={Board} />
                <Route path="/boards/create" exact component={BoardCreate} />
                <Route path="/boards/:id" exact component={BoardShow} />
                <Route path="/boards/:id/edit" exact component={BoardEdit} />
                <Route path="/posts" exact component={Post} />
                <Route path="/youtubes" exact component={Youtube} />
                <Route path="/youtubes/create" exact component={YoutubeCreate}/>
                <Route path="/youtubes/:id" exact component={YoutubeShow}/>
                <Route path="/applies" exact component={Apply} />
                <Route path="/contacts" exact component={Contact} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
        </Router>
)
