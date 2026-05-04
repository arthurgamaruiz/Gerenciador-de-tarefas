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
const comando = args[2].toLowerCase().trim()        //tratamento do comando 
const tarefa = {
    id: tarefas.length+1, 
    titulo: args[3], 
    status: args[4]
}

//opções para cada comando
switch(comando){
    case "add":
        tarefas.push(tarefa)                                  //adiciona o objeto tarefa à lista tarefas
        const jsonString = JSON.stringify(tarefas, null, 2)   //converte valores e objetos js em uma string JSON   
        fs.writeFileSync('tarefas.json', jsonString)          //salva tudo de volta no arquivo
        console.log("Tarefa adicionada!")
        break;
    case "list":
        //leitura do arquivo
        fs.readFile('tarefas.json', (err, data) => {
            if(err) throw err
            console.log(data.toString())                      //exibe o conteúdo do arquivo
        })
        break;
    case "remove":
        console.log("Tarefa removida com sucesso!")
        break;
    default:
        console.log("Comando inválido")
        break;
}