window.onload = function () {

        const name = this.document.getElementById('name')
        const phone = this.document.getElementById('phone')
        const address = this.document.getElementById('address') 
        const savebutton = this.document.getElementById('savebutton') 
        const imginput = this.document.getElementById('imginput')
        

        
        function details (url,name,phone,address) {
        let divdisplay = document.createElement("div")
        document.body.appendChild(divdisplay)
        divdisplay.className = "showcontact"

        var dispimage = new Image(100, 100);
        dispimage.src = url
        divdisplay.appendChild(dispimage)
        dispimage.className = "imgoutput"


        let dispname = document.createElement("p")
        let dispphone = document.createElement("p")
        let dispaddress = document.createElement("p")
        let deletebutton = document.createElement("button")
        deletebutton.innerHTML = "Delete"
        let editbutton = document.createElement("button")
        editbutton.innerHTML = "Edit"

        
        divdisplay.appendChild(dispname)
        divdisplay.appendChild(dispphone)
        divdisplay.appendChild(dispaddress)            
        divdisplay.appendChild(deletebutton)          
        divdisplay.appendChild(editbutton)
            
        dispname.innerHTML= "Name: " + name
        dispphone.innerHTML= "Phone: " + phone
        dispaddress.innerHTML= "Address: " + address

        deletebutton.addEventListener('click', function () {
             divdisplay.remove()
            })

        editbutton.addEventListener('click', function () {
            // name.innerHTML = name
            // phone.innerHTML = phone
            // address.innerHTML = address
            // imginput.innerHTML = url
        })
        }

        savebutton.addEventListener('click', function () {
            if(name.value.length==0){
                window.alert("Error! Enter Name")
            }
            else {
            details(imginput.value,name.value,phone.value,address.value)
            name.value=""
            phone.value=""
            address.value=""
            imginput.value=""
            }

        })

        



    }







