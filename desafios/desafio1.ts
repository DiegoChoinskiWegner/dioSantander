// Como podemos rodar isso em um arquivo .ts sem causar erros? 
//resolução por meio de interfaces
interface Employee {
    name: string,
    code: number,
}

const john: Employee = {
    name: 'john',
    code: 10
} 

const diego: Employee = {
    name: 'Diego',
    code: 28
}

//resolucao por deffinição de tipo na constante

const john2: {name: string, code: number} = {
    name: 'john',
    code: 10
}
