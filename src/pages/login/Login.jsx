import "./login.css"

export default function Login() {
  return (
    <div className="login">
    
        <div className="titleLogin"> Login</div>
        <form className="loginForm">
            <label htmlFor="" className="labelLogin"> Login</label>
            <input className="inputLogin" type="text" />

            <label htmlFor="" className="labelLogin"> Senha</label>
            <input className="inputLogin" type="password" />

            <button className="btnLogin" type="submit"> Entrar</button>
        </form>
        <div className="opLogin">
            <p>Esqueci minha senha</p> 
            <p>Cadastre-se</p>
        </div>

    </div>
  )
}
