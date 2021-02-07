import { useState } from 'react';
import Link from 'next/link';

function Jokenpo() {

    const [maquina, setMaquina] = useState('Vamos jogar?');

    function vezMaquina() {

        const result = Math.floor(Math.random() * 10);

        console.log(result)

        if (result >= 1 && result <= 3) {
            setMaquina('pedra');

        } else if (result >= 4 && result <= 6) {
            setMaquina('papel')

        } else {
            setMaquina('tesoura');
        }

    }

    return (
        <div>
            <h1>Hello World Jokenpô!</h1>

            <Link href="/">
                <a>Voltar para a home</a>
            </Link>

            <br/><br/>

            <div className="jokenpo">
                
                <h3>Digite abaixo sua Jogada,</h3> 
                <h3>depois clique no botão *jogar*</h3> 
                <h3>e vai aparecer o que a máquina escolheu</h3>

                <input type="text" name="vezUsuario" id="vezUsuario" placeholder="Pedra, Papel ou Tesoura" />
                
                <br/><br/>
                
                <div>{maquina}</div>

                <br/><br/>

                <button onClick={vezMaquina}>Jogar</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/jokenpo">Jogar Novamente</a>

            </div>
        </div>
    )
}

export default Jokenpo;