var images=["Images/beagle.jpg","Images/german.jpg","Images/golden.jpg","Images/pom.jpg","Images/poodle.jpg","Images/dolmat.jpg","Images/husky.jpg","Images/samo.jpg","Images/akita.jpg","Images/corgi.jpg","Images/pug.jpg","Images/pitbul.jpg"]
var breed=['Beagle','German Shepard','Golden Retreiver','Pomeranian','Poodle','Dalmatian','Husky','Samoyed','Akita','Corgi','Pug','Pitbull']
var cont=document.getElementById('cont')
    for(var i=0;i<breed.length;i++){
        var card=document.createElement('div')
        card.setAttribute('class','float')
        var image=document.createElement('img')
        image.setAttribute('src',images[i])
        image.setAttribute('class', 'image')
        var btn=document.createElement('button')
        btn.textContent=breed[i] 
        card.append(image,btn)
        cont.append(card)
    }
    function call(){
   console.log(event.target.textContent)
        if (event.target.textContent=='Beagle'){
            location.href='beagle.html'
        }
        else if (event.target.textContent=='German Shepard'){
            location.href='german.html'
        }
        else if (event.target.textContent=='Golden Retreiver'){
            location.href='golden.html'
        }
        else if (event.target.textContent=='Pomeranian'){
            location.href='pom.html'
        }
        else if (event.target.textContent=='Poodle'){
            location.href='poodle.html'
        }
        else if (event.target.textContent=='Dalmatian'){
            location.href='dolmat.html'
        }
        else if (event.target.textContent=='Husky'){
            location.href='husky.html'
        }
        else if (event.target.textContent=='Samoyed'){
            location.href='sam.html'
        }
        else if (event.target.textContent=='Akita'){
            location.href='akita.html'
        }
        else if (event.target.textContent=='Corgi'){
            location.href='corgi.html'
        }
        else if (event.target.textContent=='Pug'){
            location.href='pug.html'
        }
        else if (event.target.textContent=='Pitbull'){
            location.href='pit.html'
        }
    
        
    }
    
    cont.addEventListener('click',call)