const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
   
  addBtn.addEventListener("click", (e) => {
   	 
    e.preventDefault();
   
    const text = input.value;
          
    if (text !== "")  {
      const li = document.createElement("li");      
      let botonDlt = createDeleteBtn();
      let check = createCheckbox();
      const p = document.createElement("p");
      p.textContent = text;

      li.appendChild(check);
      li.appendChild(p);
      li.appendChild(botonDlt);
      ul.appendChild(li);

      input.value = "";
      empty.style.display = "none";        
    }
  });
      
  function createDeleteBtn() {
  	const deleteBtn = document.createElement("button");
      
    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";
      
    deleteBtn.addEventListener("click", (event) => {
      
      const item = event.target.parentElement;
      ul.removeChild(item);          
      const items = document.querySelectorAll("li");          
          
      if (items.length == 0) {
      	empty.style.display = "block";
      }          
    });

    return deleteBtn;
  }

  function createCheckbox () {
    const checkboxBtn = document.createElement("input");
    
    checkboxBtn.className = "btn-checkbox";
    checkboxBtn.type = "checkbox";
    

    checkboxBtn.addEventListener("click", (event) => {
        
      //cree un avariable y asignar como valor su elemento padre.
        const checkboxfather = event.target.parentElement;
        checkboxfather.classList.add("taskCompleted");
             
    });

    return checkboxBtn;
  }