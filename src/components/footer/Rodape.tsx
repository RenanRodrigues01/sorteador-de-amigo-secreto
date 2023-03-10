import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import { useSorteador } from "../../state/hooks/useSorteador";

import './Rodape.css'

const Rodape = () => {
    const participantes = useListaDeParticipantes();
    const navigate = useNavigate()
    const sorteio = useSorteador()

    const iniciar = () => {
        navigate('/sorteio');
        sorteio();
    }
    return (
        <footer className="rodape-configuracoes">
            <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>
                Iniciar a Brincadeira
            </button>
            <img src="/img/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
    }

export default Rodape
