const value = document.querySelector("#value");
const increase = document.querySelector(".increase")
const reset = document.querySelector(".reset")
const decrease = document.querySelector(".decrease")
let count=0

console.log(value)
increase?.addEventListener("click", (e)=> {
  console.log(e.currentTarget)
  count++
  console.log(count)
})

decrease?.addEventListener("click", ()=> {
  count--
})

reset?.addEventListener("click", () => {
  count === 0
})

if (value != undefined){
  value.textContent = count.toString()  
}

export {}