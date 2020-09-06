// Function called while clicking add button 
function add_item() { 

    // Getting box and ul by selecting id; 
    let item = document.getElementById("box"); 
    let list_item = document.getElementById("list_item"); 
    if(item.value != ""){ 
    
        // Creating element and adding value to it 
        let make_li = document.createElement("LI"); 
        make_li.appendChild(document.createTextNode(item.value)); 
        // START ADD DELETE BUTTON
            var dBtn = document.createElement("button");
            dBtn.appendChild(document.createTextNode("X"));
            make_li.appendChild(dBtn);
            dBtn.addEventListener("click", deleteListItem);
        //make_li.appendChild(button);

        // Adding li to ul 
        list_item.appendChild(make_li); 
    
        // Reset the value of box 
        item.value=""
            
        
        // Delete a li item on click 
      //ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		make_li.classList.add("delete")
	}
    
    } 
    else{ 
    
        // Alert msg when value of box is "" empty. 
        alert("plz add a value to item"); 
    } 
    
    } 
    