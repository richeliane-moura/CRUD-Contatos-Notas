import { useState } from "react";

export default function Formulario({ adicionarNota }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && descricao) {
      adicionarNota({ titulo, descricao });
      setTitulo("");
      setDescricao("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
