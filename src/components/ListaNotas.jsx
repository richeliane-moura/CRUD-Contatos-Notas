import Nota from "./Nota";

export default function ListaNotas({ notas, atualizarNota, deletarNota }) {
  return (
    <div className="lista-notas">
      {notas.length === 0 ? (
        <p>Nenhuma nota cadastrada.</p>
      ) : (
        notas.map((nota) => (
          <Nota
            key={nota.id}
            nota={nota}
            atualizarNota={atualizarNota}
            deletarNota={deletarNota}
          />
        ))
      )}
    </div>
  );
}
