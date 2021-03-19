import { useState } from 'react';
import Link from 'next/link';

function Home() {
    
    return (
        <div>
            
            <h1>Sejam Bem Vindos</h1>
            <h1>Site do Jeff e da Juh</h1>

            <h1>Seu Interesse é Imóveis</h1>
            <h2>Conheça Everton Vasconcelos Corretor de Imóveis!</h2>

            <Link href="/evertonvasconcelos">
                <a>ir para Everton Vasconcelos Corretor de Imóveis</a>
            </Link>

            <br/><br/>

            <Link href="/ranking">
                <a>ir para o ranking</a>
            </Link>

            <br/><br/>

            <Link href="/jokenpo">
                <a>Jogar Jokenpô</a>
            </Link>

            <br/><br/>
            
            <Contador />

            <h2>Hospedado na vercel - <strong>dica do Filipe Deschamps</strong></h2>
            
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>

            <br/><br/>

            <button onClick={adicionarContador}>mais 1</button>
        </div>
    )
}

export default Home;