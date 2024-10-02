import './App.css'; 
import { useState } from "react";

function App() {
  // Objetos dos hamburgueres disponíveis
  const hamb1 = { nome: "Cheeseburguer", preco: 25.0 };
  const hamb2 = { nome: "Bacon Burguer", preco: 30.0 };
  const hamb3 = { nome: "Veggie Burguer", preco: 28.0 };

  // Cardápio de hamburgueres
  const cardapio = [hamb1, hamb2, hamb3];

  // Opções de serviço (retirada ou entrega)
  const entrega = { snome: "Entrega", pServico: 10.0 };
  const retirada = { snome: "Retirada", pServico: 0 };
  const servico = [retirada, entrega];

  // Declaração dos estados para armazenar valores selecionados
  const [hambSelecionado, setHambSelecionado] = useState(0);  // Hambúrguer selecionado
  const [quantidade, setQuantidade] = useState(0);  // Quantidade selecionada
  const [resultado, setResultado] = useState(null);  // Resultado do cálculo final
  const [servicoSelecionado, setServicoSelecionado] = useState(0);  // Serviço selecionado (entrega ou retirada)

  // Função para calcular o valor total do pedido
  function Calcular() {
    const indice = hambSelecionado;

    // Validação: verificar se um hambúrguer e uma quantidade foram selecionados
    if ((Number(indice) <= 0) || (quantidade <= 0)) {
      setResultado(
        <div className='resultado'>
          Selecione um hambúrguer e quantidade para continuar!
        </div>
      );
    } else {
      // Recuperar hambúrguer e serviço selecionado
      const hamb = cardapio[indice];
      const totalHamb = Number(hamb.preco * quantidade);
      const serv = servico[servicoSelecionado];
      const totalFinal = Number(totalHamb + serv.pServico);

      // Exibir o resultado do pedido
      setResultado(
        <div className='resultado'>
          Nome: {hamb.nome} <br />
          Quantidade: {quantidade} <br />
          Preço: R${totalHamb.toFixed(2)} <br />
          Tipo de Serviço: {serv.snome} <br />
          Custo do Serviço: R${serv.pServico.toFixed(2)} <br />
          Total: R${totalFinal.toFixed(2)}
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Hamburgueria</h1>

      <h3>Cardápio - Hambúrgueres</h3>
      {/* Tabela de hambúrgueres disponíveis */}
      <table>
        <thead>
          <tr>
            <th>Nome do Hambúrguer</th>
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

      <h3>Opções de Serviço</h3>
      {/* Tabela das opções de serviço sem botões de seleção */}
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
              <td>{serv.snome}</td>
              <td>R${serv.pServico.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Formulário de Pedido</h3>
      {/* Formulário para selecionar o hambúrguer, quantidade e serviço */}
      <form>
        <p>
          Escolha o hambúrguer: <br />
          <select onChange={(e) => setHambSelecionado(e.target.value)}>
            <option value="-1">Selecione um Hambúrguer</option>
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
          Escolha o tipo de serviço: <br />
          <select onChange={(e) => setServicoSelecionado(e.target.value)}>
            <option value="-1">Selecione um serviço</option>
            {servico.map((serv, indice) => (
              <option key={indice} value={indice}>
                {serv.snome} - Taxa: R${serv.pServico.toFixed(2)}
              </option>
            ))}
          </select>
        </p>

        <p>
          <input
            type="button"
            value="Processar Pedido"
            onClick={Calcular}
          />
        </p>
      </form>

      {/* Exibir o resultado do cálculo */}
      {resultado}
    </div>
  );
}

export default App;
