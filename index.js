//argumentos da entrada via terminal 
const args = process.argv

//separando em comando e título da tarefa
const comando = args[2].toLowerCase().trim()        
const titulo = args[3]

//opções para cada comando
switch (comando) {
    case "add":
        console.log("Adicionando tarefas")
        break;
    case "list":
        console.log("Listando tarefas")
        break;

    default:
        console.log("Comando inválido")
        break;
}