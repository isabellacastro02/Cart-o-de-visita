import React from "react";
import './Content.css';

function Content(){
    return(
        <>
        <section>
            <img src="/src/assets/img/soso.png" alt="foto sophia" className="imagem"/>
            <h1>Sophia Florence</h1>
            <p>Influenciadora digital </p>
            <form action="#">
            <button class="inpt" id="bt-telefone">Telefone</button>
            <button class="inpt" id="bt-email">E-mail</button>
            <button class="inpt" id="bt-site">Site</button>
            <button class="inpt" id="bt-localização">Localização</button>
        </form>
        </section>
        </>
    );
};
export default Content;