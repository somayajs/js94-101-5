document.addEventListener("click", (e) => {
  if(e.target) {
    console.log(`This Is ${e.target.tagName}`)
  }
})
