import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaNotas from "./components/ListaNotas";
import "./App.css";

function App() {
  const [notas, setNotas] = useState(() => {
    const dados = JSON.parse(localStorage.getItem("notas")) || [];
    return dados;
  });

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  const adicionarNota = (nota) => {
    setNotas([...notas, { id: Date.now(), ...nota }]);
  };

  const atualizarNota = (id, notaAtualizada) => {
    setNotas(notas.map((nota) => (nota.id === id ? { ...nota, ...notaAtualizada } : nota)));
  };

  const deletarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  return (
    <div className="App">
      <h1>CRUD Contatos/Notas</h1>
      <Formulario adicionarNota={adicionarNota} />
      <ListaNotas
        notas={notas}
        atualizarNota={atualizarNota}
        deletarNota={deletarNota}
      />
    </div>
  );
}

export default App;
