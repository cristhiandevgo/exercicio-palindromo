let palindromo_metodo_1 = (frase) => {
    let frase_split = frase.split("");
    let frase_reversa = frase_split.reverse();
    let frase_final = frase_reversa.join("");
    
    (frase === frase_final) ? console.log(`${frase} é palíndromo!`) : console.log(`${frase} não é palíndromo!`);
}

let palindromo_metodo_2 = (frase) => {
    let frase_final = "";
    for(let i = frase.length - 1; i >= 0; i--){
        frase_final += frase[i];
    }
    
    (frase === frase_final) ? console.log(`${frase} é palíndromo!`) : console.log(`${frase} não é palíndromo!`);;
}

/* Atividade 1 */
console.log("Atividade 1");
console.log("\n// Método 1");
palindromo_metodo_1("ama");
palindromo_metodo_1("raiar");
palindromo_metodo_1("ovo");
palindromo_metodo_1("radar");
palindromo_metodo_1("teste");
palindromo_metodo_1("casa");

console.log("\n// Método 2 (sem funções nativas)");
palindromo_metodo_2("ama");
palindromo_metodo_2("raiar");
palindromo_metodo_2("ovo");
palindromo_metodo_2("radar");
palindromo_metodo_2("teste");
palindromo_metodo_2("casa");

/* Atividade 2 */
console.log("\nAtividade 2");
// Exemplo 1: OK
// Input -> [1, 3, 4, 6, 80, 33, 23, 90]
// Output -> [1, 3, 0, 0, 0, 33, 23, 0]

// Exemplo 2: OK
// Input -> []
// Output -> -1

let troca_elementos = (arr) => {
    
    if(arr.length === 0){
        return -1;
    }
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 && arr[i] !== 0){
            arr[i] = 0;
        }
    }

    return arr;
}

let arr = troca_elementos([1, 3, 4, 6, 80, 33, 23, 90]);
console.log(arr);

let arr_2 = troca_elementos([]);
console.log(arr_2);