import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

const App = () => {
  return (

    <main>
      <Router> 
        <Routes>
          <Route path='/' element={'Home'} />
          <Route path='/about' element={'About'} />
          <Route path='/about' element={'Projects'} />
          <Route path='/' element={'Contact'} />

        </Routes>
      </Router>
      
    </main>

  )


};

export default App;
