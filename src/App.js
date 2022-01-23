import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Kg from './Components/Classes/Kg';
import Card from './Components/Classes/Card';
import Class1 from './Components/Classes/Class1';
import Class2 from './Components/Classes/Class2';
import Class3 from './Components/Classes/Class3';
import Class4 from './Components/Classes/Class4';
import Class5 from './Components/Classes/Class5';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="app">
          <Switch>
            <Route path="/kg">
              <div className="kg-container">
                <div className="sense-pic">
                  <Kg id="kg-1" className="kg">
                    <Card id="card-1" className="card" draggable="true">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vuGEzR-YRByDrIJbH3RF3Pw9rnLP4oXFBA&usqp=CAU"
                        alt=""
                        className="kg-img"
                      />
                    </Card>

                    <Card id="card-1" className="card" draggable="true">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                        className="kg-img"
                      />
                    </Card>

                    <Card id="card-1" className="card" draggable="true">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                        className="kg-img"
                      />
                    </Card>

                    <Card id="card-1" className="card" draggable="true">
                      <img
                        src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/teasing-tongue-cartoon-mouth_XJ5Kgz_thumb.jpg"
                        alt=""
                        className="kg-img"
                      />
                    </Card>

                    <Card id="card-1" className="card" draggable="true">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tOw6YjNGaxoIC17VZTMFVeA-GJdd-U4I9w&usqp=CAU"
                        alt=""
                        className="kg-img"
                      />
                    </Card>
                  </Kg>
                </div>

                <div className="sense-name">
                  <Kg>
                    <Card id="card-2" className="card" draggable="true">
                      <h1 className="s-name">Eyes</h1>
                    </Card>

                    <Card id="card-2" className="card" draggable="true">
                      <h1 className="s-name">Nose</h1>
                    </Card>

                    <Card id="card-2" className="card" draggable="true">
                      <h1 className="s-name">Ears</h1>
                    </Card>

                    <Card id="card-2" className="card" draggable="true">
                      <h1 className="s-name">Tongue</h1>
                    </Card>

                    <Card id="card-2" className="card" draggable="true">
                      <h1 className="s-name">Skin</h1>
                    </Card>
                  </Kg>
                </div>
              </div>
            </Route>
            <Route path="/class1">
              <Class1 />
            </Route>
            <Route path="/class2">
              <Class2 />
            </Route>
            <Route path="/class3">
              <Class3 />
            </Route>
            <Route path="/class4">
              <Class4 />
            </Route>
            <Route path="/class5">
              <Class5 />
            </Route>

            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
     
    </>
  );
}

export default App;
