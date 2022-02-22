export function square(num) {
	return num * num;
};
 export  function cube(num) {
	return num * num * num;
}
export function toggle(){
  let viewtext = document.querySelectorAll(".viewtext p");
  for (let elem of viewtext) {
    elem.addEventListener("click", function () {
        (elem.parentElement).parentElement.classList.toggle('opened');
       
  });
  }
};
