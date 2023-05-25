let note = document.getElementById('note');
let btn = document.getElementById('btn1');
show();
btn.addEventListener('click',()=>{
    console.log(note.value);
    let noteEle = localStorage.getItem('notes');
    if(noteEle == null){
        noteobj = []
    }
    else{
        noteobj = JSON.parse(noteEle);
    }
    noteobj.push(note.value);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    note.value = '';
    show();
})
function show(){
    let noteEle = localStorage.getItem('notes');
    if(noteEle == null){
        noteobj = []
    }
    else{
        noteobj = JSON.parse(noteEle);
    }
    let html = '';
    noteobj.forEach(function(element,index){
        html += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note-${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" class="btn btn-primary" onclick = deleteNote(this.id)>Delete Note</button>
        </div>
       </div>`
    });
    let display = document.getElementById('yno');
    if(noteobj.length !=0){
        display.innerHTML = html;
    }
    else{
        display.innerHTML = "No Notes are Saved.First Save a Note!";
    }
}
function deleteNote(index){
    console.log(index);
    let noteEle = localStorage.getItem('notes');
    if(noteEle == null){
        noteobj = []
    }
    else{
        noteobj = JSON.parse(noteEle);
    }
    noteobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    show();
}