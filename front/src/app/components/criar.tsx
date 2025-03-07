
function Criar() {

  return (
    <div className="flex flex-col pl-10 gap-y-5 text-black">
      <div>
        <p>Nome</p>
        <input type="text" className="border h-8 w-64 rounded-md border-black placeholder:text-gray-400 text-center" placeholder="João Paulo" />
      </div>
      <div>
      <p>Email</p>
        <input type="text" className="border h-8 w-64 rounded-md border-black placeholder:text-gray-400 text-center" placeholder="você@email.com" />
      </div>
      <div>
        <p>Telefone</p>
        <input type="text" className="border h-8 w-64 rounded-md border-black placeholder:text-gray-400 text-center invalid:border-red-900" placeholder="(xx) x xxxx-xxxx" />
      </div>
      <input type="submit" className="text-black cursor-pointer" />
    </div>
  )
}

export default Criar