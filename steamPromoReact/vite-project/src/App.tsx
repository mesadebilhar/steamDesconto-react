import { useEffect, useState } from 'react'
import './App.css'

type Promo = {
  id: number,
  nome: string,
  desconto: string,
  preco_original: number,
  preco_final: number,
  imagem: string
}

//Aqui é onde será feita a requisição do endpoint lá do express
function App() {
  const [data, setData] = useState<Promo[] | null>(null)
  useEffect(() => {
    async function loadData() {
      const data = await fetch('http://localhost:3000/promos').then(res => res.json())
      setData(data.promocoesEspeciais)
    }
    loadData()
  }, [])

  return (
    <>
    <div className="secao">
      <h1>Jogos em promoção</h1>
      <div className="linha">
      {data?.map(promo => (
          <div className="promoEspecial" key={promo.id}>
          <h2>{promo.nome}</h2>
          <img src={promo.imagem} alt={promo.nome} width={200} />
          <p id='precoOriginal'>Preço: {promo.preco_original}</p>
          <p>Preço com desconto: {promo.preco_final}</p>
          <p>Desconto: {promo.desconto}</p>
        </div>
      ))}
      </div>
      </div>
    </>
  )
}


export default App;