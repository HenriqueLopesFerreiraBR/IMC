import "./data.css"
import TopBar from "../../components/topbar/TopBar";

export default function data() {
  return (
    <>
        <TopBar/>
        <div className="data">
        <div className="dataInformation">
            <ul>
                <li className="information">Nome:</li>
                <li className="informationdata">batista</li>

                <li className="information">Sobrenome:</li>
                <li className="informationdata">buena pinta</li>
                
                <li className="information">idade:</li>
                <li className="informationdata">25</li>
                
                <li className="information">sexo:</li>
                <li className="informationdata">Masculino</li>
                
                <li className="information">Peso:</li>
                <li className="informationdata">80Kg </li>
                
                <li className="information">Altura:</li>
                <li className="informationdata">1,85 cm </li>
                
                <li className="information"> Seu IMC:</li>
                <li className="informationdata">23.4 kg/m2</li>
            </ul>
        </div>
        <div className="datatable">
            <table>
                <tr>
                    <th>Estado</th>
                    <th>IMC</th>
                    <th>PESO</th>
                </tr>
                <tr>
                    <td>Magreza</td>
                    <td> &lt; 18,5 Kg</td>
                    <td> &lt; 63.3Kg </td>
                </tr>
                <tr>
                    <td>Normal</td>
                    <td>18.5 a 24.9 Kg</td>
                    <td>63,3 a 85,2 Kg</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>24.9 a 30 Kg</td>
                    <td>85,3 a 102,2 Kg</td>
                </tr>
                <tr>
                    <td>Obesidade</td>
                    <td>30</td>
                    <td>102.7</td>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
        </div>
    </>
  )
}
