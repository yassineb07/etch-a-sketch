const container = document.querySelector('.container');
const gridSize = document.querySelector('.grid-size');

function createGrid(size){
  if(container.hasChildNodes()){deleteGrid()}
  for (i=0;i<(size*size);i++){
    const div = document.createElement('div');
    div.classList.add('square');
    /* div.style.cssText = 'border:2px black solid;'; */
    container.style.cssText = `display:grid;grid-template-columns:repeat(${size},1fr);grid-template-rows: repeat(${size},1fr);`
    container.appendChild(div);
  };
};

function deleteGrid(){
  let first = container.firstElementChild;
  while (first) {
    first.remove();
    first = container.firstElementChild;
  };
};

createGrid(16);
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('mouseover',function(){
    square.setAttribute('style','background:blue;');
  })
});

gridSize.addEventListener('click', function(){
  const size = prompt('Enter Grid Size')
  createGrid(size);
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover',function(){
      square.setAttribute('style','background:blue;');
    })
  });
}); 



