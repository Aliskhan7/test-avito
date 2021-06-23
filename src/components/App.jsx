import Header from './Header'
import Photos from './Photos'
import Footer from './Footer'
import Modal from './Modal'
import {Route} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadPhotos } from '../redux/actions'
import './main.css'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadPhotos())
    }, [dispatch])

  return (
    <div className='container'>
      <Header/>
      <Photos/>
      <Footer/>
      <Route exact path='/modal/:id?'>
        <Modal/>
      </Route>
    </div>
  );
}

export default App;
