
async function Tabela() {

  const data = await fetch('http://localhost:8080/clientes')
  const nomes = await data.json()

  return (
    <table className="w-1/3 border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
      <caption className="caption-top text-black">
        Tabela de Clientes
      </caption>
      <thead>
        <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2 border-l border-gray-300">Nome</th>
          <th className="px-4 py-2 border-l border-r border-gray-300">Email</th>
        </tr>
      </thead>
      <tbody>
        {nomes.map((post) => (
          <tr key={post.id} className="hover:bg-gray-50 transition-colors bg-white text-black">
            <td className="px-4 py-2 border-t border-gray-300">{post.id}</td>
            <td className="px-4 py-2 border-t border-l border-gray-300">{post.nome}</td>
            <td className="px-4 py-2 border-t border-l border-gray-300">{post.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tabela;