var div=document.getElementById('cont')
var h2=document.querySelector('h2').textContent
var btn=document.querySelector('button')

    function back(){
        location.href='dog.html'
    }
btn.addEventListener('click',back)
var xhr= new XMLHttpRequest()
var url="https://dog.ceo/api/breed/"
if (h2=='Beagle'){
    get_pics('beagle')
    
}
if (h2=='German Shepard'){
    get_pics('germanshepherd')
}
else if (h2=='Golden Retreiver'){
    get_pics('retriever')
}
else if (h2=='Pomeranian'){
    get_pics('pomeranian')  
}
else if (h2=='Poodle'){
    get_pics('poodle')
}
else if (h2=='Dalmatian'){
    get_pics('dalmatian')
}
else if (h2=='Husky'){
    get_pics('husky')
}
else if (h2=='Samoyed'){
    get_pics('samoyed')
}
else if (h2=='Akita'){
    get_pics('akita')
}
else if (h2=='Corgi'){
    get_pics('corgi')
}
else if (h2=='Pug'){
    get_pics('pug')
}
else if (h2=='Pitbull'){
    get_pics('pitbull')
}

function get_pics(pics){
    xhr.open("GET",url+pics+"/images")
    xhr.send()
    xhr.onload=function(){
       // console.log(this.response)
        var pics=JSON.parse(this.response)
        console.log(pics.message)
        display(pics)
    }
}
function display(pics){
    for (var i = 0; i < pics.message.length; i++) {
		var card = document.createElement('div')
		card.setAttribute('class', 'card')
        var image = document.createElement('img')
		image.setAttribute('src',pics.message[i])
		image.setAttribute('class','image')
		card.append(image)
		div.append(card)
	}
}