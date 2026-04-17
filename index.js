//argumentos da entrada via terminal 
const args = process.argv

//leitura do arquvio 
const fs = require("fs")
const dados = fs.readFileSync('tarefas.json')       //lendo arquivo com as tarefas

//converter para array
const tarefas = JSON.parse(dados)

//separando em comando e título da tarefa
//formato: comando tarefa id status
//JSON
const comando = args[2].toLocaleLowerCase().trim()
const tarefa = {
    id: tarefas.length+1, 
    titulo: args[3], 
    status: args[4]
}

//opções para cada comando
switch(comando){
    case "add":
        tarefas.push(tarefa)
        const jsonString = JSON.stringify(tarefas, null, 2)   
        fs.writeFileSync('tarefas.json', jsonString)            //salva tudo de volta no arquivo
        console.log("Tarefa adicionada!")
        break;
    case "list":
        break;
    case "remove":
        console.log("Removendo tarefas")
        break;
    default:
        console.log("Comando inválido")
        break;
}