import './App.css';
import {useState} from "react";


function App() {

  //declaracao de objetos
  let hamb1 = {nome: "Cheeseburguer", preco: 25.0 };
  let hamb2 = {nome: "Bacon Burguer", preco: 30.0 };
  let hamb3 = {nome: "Veggie Burguer", preco: 28.0 };
//declaracao de array (vetor)
  let cardapio = [hamb1, hamb2, hamb3];

  let entrega = {snome: "entrega", pServico : 10.0};
  let retirada = {snome:"retirada" ,pServico : 0}
  let servico = [retirada, entrega];


  //declaracao das variaveis dos estados
  const [hambSelecionado, setHambSelecionado] = useState (0);
  const [quantidade, setQuantidade] = useState (0);
  const [total, setTotal] = useState(0);
  const [resultado, setResultado] = useState(null);
  
  const [servicoSelecionado, setServico] = useState(0);

  function Calcular()
  {
    const indice = hambSelecionado;

    if (Number(indice) < 0 ) {
      setResultado(
        <div className='resultado'>
          Selecione um hamburguer para continuar!
        </div>
      );
    }
    else{
      const hamb = cardapio[indice];
      const total2 = hamb.preco *quantidade;

      setResultado(
        <div className='resultado'>
          Nome: {hamb.nome} <br />
          Quantidade: {quantidade} <br />
          Preço: {hamb.preco.toFixed(2)} <br />
          Total: {total2.toFixed(2)}
        </div>
      );
    }
  }

  function Servico()
  {
    const indice = servicoSelecionado;
    const serv = servico[indice];
    

  }

  return (
    <div>
      <h1> Hamburgueria </h1>
      <h3> Cardápio - Hambúrgueres </h3>
      <table>
        <tr>
          <th>Nome do Hamburguer</th>
          <th>Valor</th>
        </tr>

        {cardapio.map((hamb) => 
        ( <tr>
            <td>{hamb.nome}</td>
            <td>{hamb.preco.toFixed(2)}</td>
          </tr> ))}
      </table>

      <h3> Opções de Serviço </h3>
      <table>
        <tr>
          <th>Retirada</th>
          <th>Entrega</th>
        </tr>
        </table>

        <h3> Formulário de Pedido </h3>
      <form>
        <p> Escolha o hamburguer <br />
        <select onChange= {(e) => setHambSelecionado(e.target.value)}>
          <option value="-1">Selecione um Hamburguer</option>

          {cardapio.map((hamb,indice) => (
            <option value={indice}>
              {hamb.nome} - R${hamb.preco.toFixed(2)}</option>
          ))}
        </select>
        </p>
        <p>
          Digite a quantidade: <br />
          <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        </p>
        <p>
          Selecione o tipo de serviço:
        </p>
        <p>
          <input type="button" value="Processar Pedido" onClick={Calcular} />
        </p>
      </form>

      {resultado}

    </div>
  );
}

export default App;
