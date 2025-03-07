import Criar from "./components/criar"
import Tabela from "./components/table"

export default async function page() {

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-10 flex justify-start">
        <Tabela />
        <Criar />
      </div>
    </main>
  )
}