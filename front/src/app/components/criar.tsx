
function Criar() {
  return (
    <div className="flex flex-col pl-10 gap-y-5">
      <div>
        <input type="text" className="border h-8 w-64 rounded-md border-black placeholder:text-gray-300" placeholder="Nome" />
      </div>
      <div>
        <input type="text" className="border h-8 w-64 rounded-md border-black placeholder:text-gray-300" placeholder="você@email.com" />
      </div>
      <div>
        <input type="text" className="border h-8 w-64 rounded-md border-black placeholder:text-gray-300" placeholder="Telefone" />
      </div>
    </div>
  )
}

export default Criar