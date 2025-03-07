
function Tabela() {

  fetch("http://localhost:8080/clientes")
    .then(response => response.json())
    .then((data) => console.log("Dados recebidos:", data))
    .catch(error => console.error("Error:", error))

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  )
}

export default Tabela;