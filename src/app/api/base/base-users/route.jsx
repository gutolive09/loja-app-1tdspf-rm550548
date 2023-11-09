import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    //Criando uma chamada para acessar o arquivo JSON que foi criado!!!
    const file =  await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf8");

    //Recuperando a lista de usuários do arquivo JSON, realizando um
    //parse de arquivo para JSON.
    const lista = await JSON.parse(file);
    
    //Retornando a lista de usuários para quem chamou o end-point.
    return NextResponse.json(lista);

}

const handleLogin = async (email, senha)=> {
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", "utf8")

    const dados = await JSON.parse(file)

    try {
        // for (let x =0; x< dados.usuarios.length; x++){
        //     const userLista = lista.usuarios[x]
        //     if(userLista.email == email && userLista.senha == senha){
        //         return true
        //     }
        // }
        const user = dados.usuarios.find((user)=> user.email == email && user.senha == senha);
        return user

    }catch(error){
        console.log(error)
    }

}

const handleCadastro = async (nome, email, senha)=> {
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", "utf8")
    const lista = await JSON.parse(file)
    const novoId = lista.usuarios[lista.usuarios.lenght-1].id + 1;
    const novoUsuario = {novoId,nome,email,senha}
    lista.usuarios.push(novoUsuario);

    await fs.writeFile(process.cwd() + "/src/app/api/base/db.json", JSON.stringify(lista))
    return novoUsuario

}

export async function POST(request, response){
        
    const {info,id,nome,email,senha} = await request.json()

        //Recuperando a lista de usuários do arquivo JSON, realizando um
        //parse de arquivo para JSON.
    
        switch (info){
            case "login":
                const user = await handleLogin(email, senha);
                if(user){
                    return NextResponse.json({status:true, "user": user})
                }
                break
            case "cadastro":
                const novoUsuario = await handleCadastro(nome,email,senha)
                return NextResponse.json({status:true, "user":novoUsuario})
            default:
                return NextResponse.json({status:false})
        }
    
}