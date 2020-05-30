var btn=document.getElementById("button")     
    var divhead = document.getElementById("box11")
    var divEx = document.getElementById("box22")
    var total_inc = 0
    var total_exp = 0
       function add(){
            var description=document.getElementById('description').value
            var val = document.getElementById("value").value
            var select = document.getElementById("inc").value

            if(select == "income"){
                var div1 = document.createElement("div")
                div1 = description + " - " + Number(val)        
                total_inc += Number(val)
                var dat = document.createElement("p")
                dat.innerHTML = "Total-Income : "+total_inc
                divhead.append(div1,dat)   
            }
            else{
                var div2 = document.createElement("div")
                div2 = description + " - " + val
                total_exp += Number(val)
                console.log(total_exp)
                var dat1 = document.createElement("p")
                dat1.innerHTML = "Total-Expenses : "+total_exp
                divEx.append(div2,dat1)
            }
            if(total_inc<total_exp){
                 var blink = document.getElementById('blink');
                    setInterval(function() {
                        blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
                    }, 500); 
             }
            blink.textContent='****Alert:Your Expenses are High'
            document.getElementById('description').textContent=""
            document.getElementById("value").textContent=""
       }  
       btn.addEventListener('click',add) 