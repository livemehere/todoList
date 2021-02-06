const addBtn = document.querySelector('.addBtn');
const todoList = document.querySelector('.todoList');
const todoInput = document.querySelector('#todoInput');
var mql = window.matchMedia("screen and (max-width: 768px)");

출처: https://offbyone.tistory.com/122 [쉬고 싶은 개발자]
// 클릭시 추가
addBtn.addEventListener('click',()=>{
    makeFianltodoList();
});
// 키입력을 계속 받고, enter 이 아니면 동작 x
todoInput.addEventListener('keypress',(e)=>{
    console.log(e)
    if(e.keyCode == 13){
        makeFianltodoList();
    }
});

// 함수모음------------------------------------------------------------------------
// 추가+버튼삭제기능 function
function makeFianltodoList(){
    
    if(todoInput.value != ''){
        makelist(todoInput.value);
        todoInput.value='';
    }
    // 추가하고 나서 자동으로 focus 되게 하기
    // matches를 이용하여 반응형이 아닐경우 자동 focus 동작 x
    if(!mql.matches){
        todoInput.select();
    }
    
}

// <li> 만들고 추가하는 function
function makelist(todoText){
    const text = document.createElement('li');
    // text.innerHTML=`${todoText}<span class='deleteBtn'>❌</span>`;
    const textinput = document.createTextNode(todoText);
    text.appendChild(textinput);

    const btn = document.createElement('span');
    const btnText = document.createTextNode('❌');

    btn.classList.add('deleteBtn');
    btn.appendChild(btnText);
    text.appendChild(btn);
    addDeleteFn(btn);
    todoList.appendChild(text);
}

// btn 삭제기능 추가 function
function addDeleteFn(btn){
    btn.addEventListener('click',()=>{
        btn.parentElement.remove();
    })
}
