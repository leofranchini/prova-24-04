fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});

async function getEstados(estados) {

    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios/${estados}`)
  
      const jsonData = await data.json()
  
      generateInfoSection(jsonData.sprites.front_default, estados)
    } catch (error) {
      console.error(error)
    }
  }
  function changePageTitle(title) {
    document.title = `Municípios de ${estados}`
  }



  