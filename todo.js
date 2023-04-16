function addlist(){
    var userenter = document.getElementById('io').value
    var L1 = document.createElement('li')
    var B = document.createElement('button')
    L1.innerHTML = userenter
    B.innerText = "Delete"

    B.addEventListener("click", function () {
        L1.remove();
      });

    document.getElementById('List').append(L1)
    L1.append(B)

    document.getElementById('io').value = ''
}
btnadd.addEventListener("click",addlist)


// var L = document.getElementById('List')
// var Litem = L.querySelectorAll('li')
// var dele = querySelector('button') 

// function X(){
//     dele.remove()
// }
// dele.addEventListener("click",X)