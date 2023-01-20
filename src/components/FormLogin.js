import { useState } from "react"

function FormLogin(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error,setError] = useState('');



    function handleSubmit(e){
        e.preventDefault();
        


        if (email ==="" || senha ===""){
            setError('Todos os campos precisam ser preenchidos');
        } else {
            const conta=senha.length;
            console.log(conta);
            if (conta > 5){
                setError('Login efetuado com sucesso');
            } else{
                setError('A senha precisa pelo menos 6 digitos');
            }
        }

    }

   
    

    return (
        
        <div className="login">
        <form onSubmit={handleSubmit} className="formbox">
            <h2>Formulário de login BallinHoop</h2>
            <div className="forminside">
            <label>Email: </label>
            <input type={"text"} className="campos" placeholder="Digite o seu email" name="email"
            onChange={(event) => setEmail(event.target.value)}></input><br/>
            <label>Senha: </label>
            <input type={"password"} className="campos" placeholder="Digite a sua senha" name="senha"
            onChange={(event) => setSenha(event.target.value)}></input><br/>
            <button type="submit" className="botao">Enviar</button>
            { error !== "" && (
            <div className="">{error}</div>
            )}
            </div>
        </form>
        </div>


    )


}
export default FormLogin