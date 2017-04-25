import React,{Component} from 'react';

// Components
import Picture from './components/Picture'
import Video from './components/Video'
import {  BrowserRouter as Router,   Route,  Link} from 'react-router-dom'

// Styles

class  App extends Component {  



    render(){
        return (
            
            <div>
                <ul>
                    <li><Link to="/picture">Picture</Link></li>
                    <li><Link to="/video">Video</Link></li>
                </ul>
                 <h1>Hello from react</h1>

                <Route path="/picture" component={Picture}/>
                <Route path="/video" component={Video}/>
            </div>
        );
    }
  
}

export default App;  