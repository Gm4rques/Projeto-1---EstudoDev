let permissao //comum , gerente, diretor
 permissao = 'gerente'
switch (permissao) {
    case 'comum':
        console.log('usuario comum')        
        break 

        case 'gerente' :
        console.log('usuario gerente')
        break

        case 'diretor' :
            console.log('usuario gerente')
            break

            default:
                console.log('usuario nao reconhecido')
}