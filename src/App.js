import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {publicRoutes} from '~/routes' 
import { DefaultLayout,HomeLayout } from '~/layouts';
import { Fragment } from 'react';


function App() {
    
    return (
       <Router>
            <div className="App">
             <Routes>
            {
                
                  publicRoutes.map((item,index) => {

                    let Layout =DefaultLayout
                  if(item.layout===null) Layout = Fragment
                  else 
                   if(item.layout) Layout = item.layout
                 
                       return <Route key={index} path={item.path} 
                       element={
                        <Layout>{item.component}</Layout>
                       }
                       ></Route>
                  })
                    }
               
             </Routes>
            </div>
       </Router>
    );
}

export default App;
