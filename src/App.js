import logo from "./logo.svg";

import '../src/categories.styles.scss';

import "./App.css";

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      image: '',
    },
    {
      id: 2,
      title: 'Jackets',
      image: '',
    },
    {
      id: 3,
      title: 'Sneakers',
      image: '',
    },
    {
      id: 4,
      title: 'Womens',
      image: '',
    },{
      id: 5,
      title: 'Mens',
      image: '',
    },
  ]

  return (
    <div className="categories__container">
      {categories.map((category) => 
        <div className="category__container">
        <div className='category__backgroundImage'/>
        <span className="category__body--container">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </span>
      </div>
      )}
      
    </div>
  );
};

export default App;
