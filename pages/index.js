import {useState} from 'react';

function Home() {
    return (
        <div>
            
            <h1>Sejam Bem Vindos</h1>
            <h1>Site do Jeff e da Juh</h1>

            <a href="/ranking">ir para o ranking</a>
            
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
            <button onClick={adicionarContador}>mais 1</button>
        </div>
    )
}

export default Home;