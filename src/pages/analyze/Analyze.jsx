import TopBar from "../../components/topbar/TopBar"
import "./analyze.css"

export default function Analyze() {
  return (
    <>
        <TopBar/>
        <div className="analyze">

            <div className="analyzeGrid1">
                <h1>Calculadora de IMC</h1>
                <form action="" className="analyzeForm">
                    <input className="analyzeInput" type="text" placeholder="Insira o sua Idade" />
                    <input className="analyzeInput" type="text" placeholder="Insira o seu Peso" />
                    <input className="analyzeInput" type="text" placeholder="Insira o sua Altura" />
                    <button type="submit">Analizar</button>
                </form>
            </div>
            <div className="analyzeGrid2">
                <h1>Dados o Aluno</h1>
                <div className="analyzeResult">
                    <label className="analyzeLabel1">Peso:</label>
                    <label className="analyzeLabel2">90 Kg</label>
                    <label className="analyzeLabel1">Altura:</label>
                    <label className="analyzeLabel2">191 cm</label>
                    <label className="analyzeLabel1">Indice de Massa Corporal:</label>
                    <label className="analyzeLabel2">32,1</label>
                    <label className="analyzeLabel1">Peso Ideal:</label>
                    <label className="analyzeLabel2">95 kg</label>
                    <label className="analyzeLabel1">Data da ultima analize:</label>
                    <label className="analyzeLabel2">01/01/2022</label>
                    <label className="analyzeLabel1">Meta meta a ser atingida:</label>
                    <label className="analyzeLabel2">Ganhar mais 5 Kg</label>

                </div>
            </div>
        </div>

    </>
  )
}
