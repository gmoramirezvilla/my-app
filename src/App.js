import './App.css';
import Search from './components/Search';
import Wishlist from './components/WishList';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <div class="split left">
          <Search class="split left" /> 
        </div>
        <div class="split right">
          <Wishlist />
        </div>
      </BookContextProvider>
    </div>
  );
}

export default App;
