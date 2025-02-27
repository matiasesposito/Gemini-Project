function notiflixLoading(enable_disable) {
  if (enable_disable === 'enable') {
    Notiflix.Loading.pulse();
    return;
  } else if (enable_disable === 'disable') {
    Notiflix.Loading.remove();
    return;
  }
}

// Primer parametro: enable_disable = 'enable' o 'disable'
function notiflixBlock(enable_disable, className) {

  if (enable_disable === 'enable') {
    Notiflix.Block.dots(className, {
      backgroundColor: 'rgba(0,0,0,0.5)',
      svgColor: '#fff',
    });
    return;
  } else if (enable_disable === 'disable') {
    Notiflix.Block.remove(className);
    return;
  }

}

function notiflixSuccess(message) {
  Notiflix.Notify.success(message, {
    timeout: 2500,
    width: '90vw',
    position: 'center-bottom',
    fontSize: '16px',
    cssAnimationStyle: 'from-top',
  });
}

function notiflixError(message) {
  Notiflix.Notify.failure(message, {
    timeout: 2500,
    width: '90vw',
    position: 'center-bottom',
    fontSize: '16px',
    cssAnimationStyle: 'from-top',
  });
}

async function notiflixConfirmDuplicado(arrayDuplicados) {

  let string = '';
  arrayDuplicados.forEach(element => {
    string += `<p> <b>ID:</b> ${element.id}, <b>Nombre:</b> ${element.nombre} </p> <br>`;
  });

  let options = {
    titleMaxLength: 100,
    messageMaxLength: 500000,
    plainText : false,
    with: '50vw',
    fontSize: '16px',
    cssAnimationStyle: 'from-top'
  }

  return new Promise((resolve, reject) => {
    Notiflix.Confirm.show(
      'Advertencia de posibles evaluadores duplicados',
      string,
      'Continuar',
      'Cancelar',
      () => {
        resolve(true);
      },
      () => {
        resolve(false);
      },
      options
    );
  });
}

export { notiflixLoading, notiflixBlock, notiflixSuccess, notiflixError, notiflixConfirmDuplicado };