let pai = document.getElementById('pai');


  pai.removeChild(children);


for (chil of pai.children){
  pai.removeChild(chil);
  console.log(chil)
}