# CRUD Contatos/Notas

Aplicação **CRUD (Criar, Ler, Atualizar e Deletar)** desenvolvida em **React** utilizando **Vite**, com armazenamento local via **localStorage**. Permite gerenciar contatos ou notas de forma simples e intuitiva.

---
---## 🌐 Acesse online -> https://richeliane-moura.github.io/CRUD-Contatos-Notas/

## 💻 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vite.dev/)
- CSS puro
- localStorage para persistência dos dados

---

## 🚀 Funcionalidades

- **Adicionar** notas ou contatos com título e descrição  
- **Listar** todas as notas cadastradas  
- **Editar** notas existentes  
- **Excluir** notas individuais  
- **Persistência local** usando `localStorage`, mantendo os dados mesmo após fechar o navegador

---

## 🗂 Estrutura do projeto

src/
├─ components/
│ ├─ Formulario.jsx # Componente para criar novas notas
│ ├─ ListaNotas.jsx # Componente que lista todas as notas
│ └─ Nota.jsx # Componente individual de cada nota (editar/excluir)
├─ App.jsx # Componente principal com estado e funções CRUD
├─ main.jsx # Entrada do React
└─ App.css # Estilos da aplicação
