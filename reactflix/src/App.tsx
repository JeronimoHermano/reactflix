import React, { useState } from 'react';

import Menu from './components/Menu'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import BannerMain from './components/BannerMain'

import dadosIniciais from './data/dados_iniciais.json'
import Category from './data/DadosIniciais'

function App() {

  const [initialData, setInitialData] = useState<Category[]>(dadosIniciais.categorias)

  return (
    <div style={{backgroundColor:"#141414"}}>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={"dadosIniciais.categorias[0].videos[0].videoDescription"}
        url={dadosIniciais.categorias[0].videos[0].url}
      />

      {
        initialData.map( data => (
          <Carousel
            ignoreFirstVideo
            category={data}
          />
        ))
      }

      <Footer />
    </div>
  );
}

export default App;
