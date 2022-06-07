const value = document.querySelector<Element>("#value");
const increase = document.querySelector<Element>(".increase")
const increaseTen = document.querySelector<Element>(".increase-ten")
const increaseTwenty = document.querySelector<Element>(".increase-twenty")
const increaseThirty = document.querySelector<Element>(".increase-thirty")
const reset = document.querySelector<Element>(".reset")
const decrease = document.querySelector<Element>(".decrease")
const decreaseTen = document.querySelector<Element>(".decrease-ten")
const decreaseTwenty = document.querySelector<Element>(".decrease-twenty");
let count = 0

increase?.addEventListener("click", (e)=> {
  count++
  if (value != undefined){
    value.textContent = String(count)
  }
})

decrease?.addEventListener("click", ()=> {
  count--
  if (value != undefined){
    value.textContent = String(count)
  }
})

reset?.addEventListener("click", () => {
  count= 0
  if (value != undefined){
    value.textContent = String(count)
  }
})

increaseTen?.addEventListener("click", () => {
  count += 10
  if (value !=undefined){
    value.textContent = String(count)
  }
})

decreaseTen?.addEventListener("click", () => {
  count -=10
  if(value != undefined){
    value.textContent = String(count)
  }
})

increaseTwenty?.addEventListener("click", () => {
  count += 20
  if (value != undefined){
    value.textContent = String(count)
  }
})

decreaseTwenty?.addEventListener("click", () => {
  count -=20
  if(value != undefined){
    value.textContent = String(count)
  }
})

increaseThirty?.addEventListener("click", () => {
  count += 30
  if (value != undefined){
    value.textContent = String(count)
  }
})
export {}