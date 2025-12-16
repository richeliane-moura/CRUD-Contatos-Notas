import { useState } from "react";

export default function Nota({ nota, atualizarNota, deletarNota }) {
  const [editando, setEditando] = useState(false);
  const [titulo, setTitulo] = useState(nota.titulo);
  const [descricao, setDescricao] = useState(nota.descricao);

  const salvarEdicao = () => {
    atualizarNota(nota.id, { titulo, descricao });
    setEditando(false);
  };

  return (
    <div className="nota">
      {editando ? (
        <>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          <button onClick={salvarEdicao}>Salvar</button>
          <button onClick={() => setEditando(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <h3>{nota.titulo}</h3>
          <p>{nota.descricao}</p>
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={() => deletarNota(nota.id)}>Excluir</button>
        </>
      )}
    </div>
  );
}
