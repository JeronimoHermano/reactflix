import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault'
import Carousel from '../../components/Carousel'
import BannerMain from '../../components/BannerMain'

import dadosIniciais from '../../data/dados_iniciais.json'
import Category from '../../data/DadosIniciais'

function Home() {

  const [initialData, setInitialData] = useState<Category[]>(dadosIniciais.categorias)

  return (
    <PageDefault >
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
    </PageDefault>
  );
}

export default Home;
