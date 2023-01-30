let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById("main-title").textContent="Dom Here welcome to my web page";
  // Part 2
  document.querySelector('body').style.backgroundColor='blue';
  // Part 3
  const remove = document.querySelector("li:last-child")
  remove.parentElement.removeChild(remove)
  // Part 5
 const titles = document.querySelectorAll('.special-title')
 titles.forEach((title)=>{
 title.style.fontSize = "2rem"
 })
  // Part 6
   function NewYork() {
    var x = document.createElement("li");
    var t = document.createTextNode("NewYork");
    x.appendChild(t);
    document.getElementById("past-races").appendChild(x);
   }
    NewYork()
    // Part 7
   function blogPost(){
    const  blog = document.querySelector(".main")
    const div = document.createElement("div"); 
    blog.appendChild(div);
    div.classList.add("blog-post") 
    const h1 = document.createElement('h1') 
    h1.innerHTML= "New York" ;
    const p = document.createElement('p');
    p.innerHTML= "THE BIG RAT FREEWAY GRANDPRIX"
    div.appendChild(h1);
    div.appendChild(p);
    div.style.backgroundColor= 'rebeccapurple'
  //  console.dir(div)
 }
 blogPost()
  // Part 8
 function click(){
 const button=document.querySelector("#quote-title")
 button.addEventListener("click",randomQuote);
 }
 click()
  // Part 9
     const  list=document.getElementsByClassName("blog-post purple")
      document.getElementsByClassName(list).addEventListener('mouseOut',MouseEvent);
      document.querySelectorAll(list).addEventListener('mouseEnter',MouseEvent); 
 function MouseEvent(){
 
}
 MouseEvent()
list.forEach((lists)=>{
          list.classList.toggle('.red')
          list.classList.toggle('.purple')
 })

}

);
