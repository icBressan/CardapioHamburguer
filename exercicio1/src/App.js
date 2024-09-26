import './App.css';
import { useState } from "react";

function App() {
  // Declaração de objetos
  const hamb1 = { nome: "Cheeseburguer", preco: 25.0 };
  const hamb2 = { nome: "Bacon Burguer", preco: 30.0 };
  const hamb3 = { nome: "Veggie Burguer", preco: 28.0 };

  // Declaração de array (vetor)
  const cardapio = [hamb1, hamb2, hamb3];

  const entrega = { snome: "Entrega", pServico: 10.0 };
  const retirada = { snome: "Retirada", pServico: 0 };
  const servico = [retirada, entrega];

  // Declaração das variáveis dos estados
  const [hambSelecionado, setHambSelecionado] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(0);

  function Calcular() {
    const indice = hambSelecionado;

    if ((Number(indice) <= 0) || (quantidade <= 0)) {
      setResultado(
        <div className='resultado'>
          Selecione um hamburguer para continuar!
        </div>
      );
    } else {
      const hamb = cardapio[indice];
      const totalHamb = hamb.preco * quantidade;
      const serv = servico[servicoSelecionado];
      const totalFinal = totalHamb + serv.pServico;

      setResultado(
        <div className='resultado'>
          Nome: {hamb.nome} <br />
          Quantidade: {quantidade} <br />
          Preço: R${hamb.preco.toFixed(2)} <br />
          Tipo de Serviço: {serv.snome} <br />
          Custo do Serviço: R${serv.pServico.toFixed(2)} <br />
          Total: R${totalFinal.toFixed(2)}
        </div>
      );
    }
  }

  return (
    <div>
      <h1> Hamburgueria </h1>
      <h3> Cardápio - Hambúrgueres </h3>
      <table>
        <thead>
          <tr>
            <th>Nome do Hamburguer</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {cardapio.map((hamb, indice) => (
            <tr key={indice}>
              <td>{hamb.nome}</td>
              <td>R${hamb.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3> Opções de Serviço </h3>
      <table>
        <thead>
          <tr>
            <th>Tipo de Serviço</th>
            <th>Taxa</th>
          </tr>
        </thead>
        <tbody>
          {servico.map((serv, indice) => (
            <tr key={indice}>
              <td>
                <input
                  type="radio"
                  name="servico"
                  value={indice}
                  onChange={(e) => setServicoSelecionado(e.target.value)}
                />
                {serv.snome}
              </td>
              <td>R${serv.pServico.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3> Formulário de Pedido </h3>
      <form>
        <p>
          Escolha o hamburguer <br />
          <select onChange={(e) => setHambSelecionado(e.target.value)}>
            <option value="-1">Selecione um Hamburguer</option>
            {cardapio.map((hamb, indice) => (
              <option key={indice} value={indice}>
                {hamb.nome} - R${hamb.preco.toFixed(2)}
              </option>
            ))}
          </select>
        </p>
        <p>
          Digite a quantidade: <br />
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </p>
        <p>
          <input
            type="button"
            value="Processar Pedido"
            onClick={Calcular}
          />
        </p>
      </form>

      {resultado}
    </div>
  );
}

export default App;
