function notiflixLoading() {
  Notiflix.Loading.standard('Cargando...');
}

// Primer parametro: enable_disable = 'enable' o 'disable'
function notiflixBlock(enable_disable, className){

  if (enable_disable === 'enable') {
    Notiflix.Block.dots( className, {
      backgroundColor: 'rgba(0,0,0,0.5)',
      svgColor: '#fff',
    });
    return;
  }else if (enable_disable === 'disable') {
    Notiflix.Block.remove( className );
    return;
  }

}

export { notiflixLoading, notiflixBlock };