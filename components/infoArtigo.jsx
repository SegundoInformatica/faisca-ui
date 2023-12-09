import "./InfoArtigo.css"
import Image from "next/image"


export default function Titulo({ nome, resumo, artigo, children }) {
    return (
        <div>
            <h1><strong>{nome}</strong></h1>
            
            <div className="imgsGrid">
                <Image className="img1" src="" width={200} height={180} alt="teste" />
                <Image className="img2" src="" width={200} height={400} alt="teste" />
                <Image className="img3" src="" width={200} height={180} alt="teste" />
            </div>
            <h2>Resumo</h2>
            <p id="resumo">{resumo}</p>
            
        </div>
        
    )
}


