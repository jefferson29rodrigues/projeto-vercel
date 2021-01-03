import { useState } from 'react';
import Link from 'next/link';

function Jokenpo() {

    const [maquina, setMaquina] = useState('');

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
                <input type="text" name="vezUsuario" id="vezUsuario"/>
                
                <br/><br/>
                
                <div>{maquina}</div>

                <br/><br/>

                <button onClick={vezMaquina}>Jogar</button>

                <Link href="/jokenpo">
                    <a>Jogar Novamente</a>
                </Link>
            </div>
        </div>
    )
}

export default Jokenpo;