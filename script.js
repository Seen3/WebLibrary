const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => {
    document.getElementById('enter').hidden = false;
})
const X = document.getElementById('close');
X.addEventListener('click', () => {
    document.getElementById('enter').hidden = true;
})
const formAdd = document.getElementById('insert');
formAdd.addEventListener('click', addBook);
let i=0;
function addBook() {
    //console.log("Test")
    let bk = new Book(document.getElementById('name').value, document.getElementById('author').value, document.getElementById('page').value, document.getElementById('read').checked);
    document.getElementById('name').value="";
    document.getElementById('author').value="";
    document.getElementById('page').value=0;
    document.getElementById('read').checked=false;
    //console.log(bk);
    document.getElementById('enter').hidden = true;
    myLib.push(bk);
    addToList(bk);
}
let myLib = [];
function addToList(elem)
{
    let row=document.createElement('tr');
        let dat=document.createElement('td');
        dat.innerText=elem.name;
        row.appendChild(dat);
        let dat2=document.createElement('td');
        dat2.innerText=elem.author;
        row.appendChild(dat2);
        let dat3=document.createElement('td');
        dat3.innerText=elem.pages;
        row.appendChild(dat3);
        let dat4=document.createElement('td');
        let dat4in=document.createElement('button');
        dat4in.innerText=elem.read;
        if(elem.read)
        {
            dat4in.style.backgroundColor="green";
        }
        else{
            dat4in.style.backgroundColor="red";
        }
        dat4in.addEventListener('click',()=>{
            if (dat4in.innerText=="true")
            {
                myLib
                dat4in.innerText="false";
                dat4in.style.backgroundColor="red";
            }
            else
            {
                dat4in.innerText='true';
                dat4in.style.backgroundColor="green";
            }
        })
        dat4.appendChild(dat4in);

        let rem=document.createElement('td');
        let remin=document.createElement('button');

        remin.innerText="Remove";
        remin.id=`elem${i}`;
        remin.addEventListener('click',()=>{
            row.parentNode.removeChild(row); 
            myLib = myLib.filter(function( obj ) {
                return ((obj.name !== elem.name)&&(obj.author!==elem.author));
            });
        })
        rem.appendChild(remin);
        row.appendChild(dat4);
        row.appendChild(rem);
    document.getElementById('tab').appendChild(row);
}
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
