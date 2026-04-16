//argumentos da entrada via terminal 
const args = process.argv

//separando em comando e título da tarefa
const comando = args[2].toLowerCase().trim()        
const titulo = args[3]

//lista que armazena as tarefas 
const tarefas = []

//opções para cada comando
switch (comando) {
    case "add":
        tarefas.push(titulo)            //adiciona ao final da lista
        console.log(tarefas)
        break;
    case "list":
        console.log("Listando tarefas")
        break;

    default:
        console.log("Comando inválido")
        break;
}