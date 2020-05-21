const marvel ={
    render:() => {
        const urlAPI ='';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
    
    fetch(urlAPI)
    .then(res => res.json())
    .then((json) =>{
        console.log(json,'RES.JSON')
    })
  }
}