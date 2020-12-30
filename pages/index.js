import {useState} from 'react';

function Home() {
    return (
        <div>
            <h1>Sejam Bem Vindos</h1>
            <h1>Site do <span style="color: red;">Jeff</span> e da <span style="color: blue;">Juh</span></h1>
            <h2>Hospedado na vercel - <strong>dica do Filipe Deschamps</strong></h2>
            <Contador />
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