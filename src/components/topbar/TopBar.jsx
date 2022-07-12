import "./topbar.css"

export default function TopBar() {
  return (
    <div className="topbar">
        <div className="topbarCenter">
        <ul className="topList">
            <li className="topListItem " > Perfil</li>
            <li className="topListItem" > Dados</li>
            <li className="topListItem" > Analisar</li>
            <li className="topListItem" > Configurações</li>
        </ul>
        </div>
        <div className="topbarRight">
            <ul className="topList">
                <li className="topListItem" > Logout</li>
            </ul>
            <img className="topImage" src="http://3.bp.blogspot.com/_Q8B72nbTfOo/TTEDrw5QpMI/AAAAAAAACDo/vyl0Fa6aLs0/s320/batman-for-facebook.jpg" alt="" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>

    </div>
  )
}
