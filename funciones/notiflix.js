function notiflixLoading(enable_disable) {
  if (enable_disable === 'enable') {
    Notiflix.Loading.pulse();
    return;
  }else if (enable_disable === 'disable') {
    Notiflix.Loading.remove();
    return;
  }
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

function notiflixSuccess(message) {
  Notiflix.Notify.success(message, {
    timeout: 2200,
    position: 'center-bottom',
    fontSize: '16px',
    });
}

export { notiflixLoading, notiflixBlock, notiflixSuccess };