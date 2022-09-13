import React from 'react';
import Header from '@components/Header.jsx';
import ProductList from '@containers/ProductList.jsx';


const Home = () => {
  return (
    <section>
    <Header />
    <div>
      <ProductList />
    </div>

    </section>
  );
}

export default Home;