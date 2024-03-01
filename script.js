const add = document.getElementById('add');
const form = document.getElementById('form');
const space = document.getElementById('space')
var myLibrary = [] 

function Book(title, author, NoOfPage, ReadOrNot) {
    this.title = title;
    this.author = author;
    this.NoOfPage = NoOfPage;
    this.ReadOrNot = ReadOrNot;
}

function addBookToLibrary(title, author, NoOfPage, ReadOrNot) {
    var a = new Book(title, author, NoOfPage, ReadOrNot)
    myLibrary.push(a);
}

add.addEventListener('click', () => {
  form.classList.toggle('toggledForm');
  form.reset();
});

form.addEventListener('submit', function (e) {
    space.innerHTML="";
    e.preventDefault()
    const getTitle = document.getElementById('title').value;
    const getAuther = document.getElementById('author').value;
    const getPages = document.getElementById('pages').value;
    const getRead = document.getElementById('read').value;
    addBookToLibrary(getTitle,getAuther,getPages,getRead);
    // console.log(myLibrary);
    form.classList.toggle('toggledForm');
    form.reset();
    
    for(var i=0; i <= (myLibrary.length)-1; i++){
        // console.log(myLibrary[i].title);
        var newdiv = document.createElement('div');
        newdiv.className = 'box';
        newdiv.innerHTML=`<h2>${myLibrary[i].title}</h2> <br> <h2>${myLibrary[i].author}</h2> <br> <h2>${myLibrary[i].NoOfPage}</h2> <br> <h2>${myLibrary[i].ReadOrNot}</h2>`;
        space.appendChild(newdiv);
    }
});
