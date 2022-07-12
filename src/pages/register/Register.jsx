import TopBar from '../../components/topbar/TopBar'
import './register.css'

export default function Register() {
  return (
    <>
        <div className='Register'>
            <h1 className="titleRegister"> Ficha de cadastro</h1>
            <form className="RegisterForm">
                
                <label htmlFor="" className="labelRegister"> Login</label>
                <input className="inputRegister" type="text" />

                <label htmlFor="" className="labelRegister"> E-mail</label>
                <input className="inputRegister" type="email" />

                
                <label htmlFor="" className="labelRegister"> Nome</label>
                <input className="inputRegister" type="text" />
                            
                <label htmlFor="" className="labelRegister"> Sobrenome</label>
                <input className="inputRegister" type="text" />

                <label htmlFor="" className="labelRegister"> CPF</label>
                <input className="inputRegister" type="text" />            
                
                <label htmlFor="" className="labelRegister"> Endereço</label>
                <input className="inputRegister" type="text" />

                <label htmlFor="" className="labelRegister"> Senha</label>
                <input className="inputRegister" type="password" />

                <label htmlFor="" className="labelRegister"> Confirme a senha</label>
                <input className="inputRegister" type="password" />
                <div>
                    <button className="btnRegister" type="submit"> Cadastrar </button>
                    <button className="btnReset"  type="reset" >Limpar</button>
                </div>
                
            </form>
            <div className="opLogin">
                <button className='btnlogin'>Fazer Login</button>
            </div>
        </div>
    </>
  )
}
