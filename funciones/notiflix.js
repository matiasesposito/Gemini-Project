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
    width: '50vw',
    position: 'left-bottom',
    fontSize: '16px',
    cssAnimationStyle: 'from-left',
    });
}

function notiflixError(message) {
  Notiflix.Notify.failure(message, {
    timeout: 2200,
    width: '50vw',
    position: 'left-bottom',
    fontSize: '16px',
    cssAnimationStyle: 'from-left',
  });
}

function nitiflixConfirmDuplicado() {
  Notiflix.Confirm.show('Advertencia',
                        'Ya existe un evaluador con el mismo nombre',
                        'Continuar',
                        'Cancelar',
                        ()=>{
                          return true;
                        },
                       ()=>{
                         return false; 
                        }
                      );
}

export { notiflixLoading, notiflixBlock, notiflixSuccess, notiflixError };