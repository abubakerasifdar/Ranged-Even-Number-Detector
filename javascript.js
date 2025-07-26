
         document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
         function myFunction() {
            let input = document.getElementById('input').value;
            let array = input.split("-");
            console.log(array, "Array");
          
           let result = "";
           let even = "";
            for(let i = (array[0]); i<=(array[array.length - 1 ]); i++){
                
                result += `${i}, `;
                if(i%2==0){
                    even+=`${i}, `
                }
                console.log(result);
                
            }
            result = `Your Entered ${result} in which evens are ${even}`
            console.log(array[0], "First Part Of Array");
            console.log(array[array.length - 1 ], 'Last Part of Array');
console.log(result, "Whole Array");
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').style.background = "brown"
            document.getElementById('output').innerHTML = result;
}   