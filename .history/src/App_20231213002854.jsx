import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

const App = () => {
  return (

    <main>
      <Router> 
        <Routes>
          <Route path='/' element={'Home'} />
          <Route path='/' element={'About'} />
          <Route path='/' element={'Home'} />
          <Route path='/' element={'Home'} />

        </Routes>
      </Router>
      
    </main>

  )


};

export default App;
