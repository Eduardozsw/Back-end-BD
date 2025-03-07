
async function Tabela() {

  const data = await fetch('http://localhost:8080/clientes')
  const nomes = await data.json()

  return (
    <table border={1}>
      <thead>
        <tr className="flex gap-x-5">
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {nomes.map((post) => (
          <tr key={post.id} className="flex gap-x-5 items-center justify-start">
            <td>
              {post.id}
            </td>
            <td>
              {post.nome}
            </td>
            <td>
              {post.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tabela;