const b=Array.from(document.getElementsByClassName('box'));
const o = "O", x = "X";
const boxes = [];
const start = document.getElementById('start');
const restart = document.getElementById('restart');
let p;

console.log(b);
const lines=() => {
    b.forEach((box, index) => {
        let l='';
        if(index<3)
            l += 'border-bottom: 3px solid black;';
        if(index%3 == 0)
            l += 'border-right: 3px solid black;';
        if(index%3 == 2)
            l += 'border-left: 3px solid black;';
        if(index>5)
            l += 'border-top: 3px solid black;';
        box.style = l;
        if (won()!=true) {
            box.addEventListener('click', clickbox);
        }
    });
};
const clickbox=(e) => {
    const id = e.target.id;
    if(!boxes[id]){
        boxes[id] = p;
        e.target.innerText = p;
        if(won()){
            start.innerText =`${p} won!`;
            return;
        }
        p = p==x ? o : x;
    }
};
const won = () => {
    if(boxes[0] == p){
        if(boxes[1] == p && boxes[2] == p){
            console.log(`${p} wins the top`);
            return true;
        }
        if(boxes[3] == p && boxes[6] == p){
            console.log(`${p} wins the left`);
            return true;
        }
        if(boxes[4] == p && boxes[8] == p){
            console.log(`${p} wins the diagonal1`);
            return true;
        }
    } 
    if(boxes[8] == p) {
        if(boxes[2] == p && boxes[5] == p){
            console.log(`${p} wins the right`);
            return true;
        }
        if(boxes[6] == p && boxes[7] == p){
            console.log(`${p} wins the bottom`);
            return true;
        }
    }
    if(boxes[4] == p) {
        if(boxes[1] == p && boxes[7] == p){
            console.log(`${p} wins the vertical middle`);
            return true;
        }
        if(boxes[3] == p && boxes[5] == p){
            console.log(`${p} wins the horizontal middle`);
            return true;
        }
        if(boxes[2] == p && boxes[6] == p){
            console.log(`${p} wins the diagonal2`);
            return true;
        }
    }
};
    
const rematch = () => {
    boxes.forEach((space, index)=>{
        boxes[index] = null;
    });
    b.forEach((b) => {
        b.innerText = '';
    });
    start.innerText = 'Start playing';
    p = x;
};
restart.addEventListener('click', rematch); 
rematch();
lines();