var input=document.getElementById('inp')
    var myForm=document.getElementById('myform')
    myForm.addEventListener('submit',myFunction);
function myFunction(e) {
    e.preventDefault();
    var url = 'https://www.omdbapi.com/?s='+input.value+'&apikey=a4a5e1';
    fetch(url).then(res=>{return res.json()}).then((data)=>{
    document.getElementById('list').innerHTML="";
    for(let i=0;i<data.Search.length;i++)
    {
        var cont=document.getElementById('list')
        var di=document.createElement('div')
        var vcard=document.createElement('div')
        var im=document.createElement('img')
        var hfive=document.createElement('h5')
        var para=document.createElement('p')
        di.setAttribute('class','card')
        di.setAttribute('style','width: 18rem;')
        im.setAttribute('src',data.Search[i].Poster)
        im.setAttribute('class','poster')
        hfive.appendChild(document.createTextNode(data.Search[i].Title))
        para.appendChild(document.createTextNode('Year:'+data.Search[i].Year+' | IMDB id:'+data.Search[i].imdbID))
        di.appendChild(im)
        di.appendChild(vcard)
        di.appendChild(hfive)
        di.appendChild(para)
        cont.appendChild(di);
        }
    })
}