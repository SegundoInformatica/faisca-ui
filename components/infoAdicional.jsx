import "./infoAdicional.css"

export default function infoAdicional({autor, descricao, orientador, coordenador, data}){
    return(
        <div>
           <br /><p><strong>Autor: </strong>{autor}</p>
            <p id="descricao">{descricao}</p><br />
            <p><strong>Orientador:</strong> {orientador}</p><br />
            <p><strong>Coordenador(a): </strong>{coordenador}</p><br />
            <p><strong>Data de publicação:</strong> {data}</p>
            <div id="botaopdf">
                <p><strong>PDF</strong></p>
            </div>
        </div>
    )
}


