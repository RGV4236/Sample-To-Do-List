document.addEventListener('DOMContentLoaded',function(){

    const list =document.querySelector('#movie-list ul');
    const forms = document.forms;

    //delete movie
    list.addEventListener('click',function(event){
        if(event.target.className == 'delete'){
            const li = event.target.parentElement;
            list.removeChild(li);

        }
    });

    //add movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(event){
    event.preventDefault() ;



    //creating elements

      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const movieName = document.createElement('span');
      const deleteBtn = document.createElement('span');
    //add text content
    movieName.textContent = value;
    deleteBtn.textContent = 'Delete';

    //add classes
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    });
});