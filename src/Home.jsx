import transfer from "./img/pexels-energepiccom-2988232.jpg"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { useContext, useState } from "react"
import DataContext from "./context/contextProvider"
import Validation from "./Validation"
const Home = () => {

  const { amount, setAmount, category, setCategory, acct, setAcct, date, setDate, clicked, setClicked, name, setName } = useContext(DataContext)
  return (
    <main className="h-full w-[85vw] relative">
      <section className="grid w-[70%] grid-cols-2 mx-auto mt-10 ">
      <span>
        <img src={transfer} alt="transaction ongoing" className="w-full h-full"/>
      </span>
      <form className="relative flex flex-col gap-5 text-center bg-gray-800" onSubmit={(e) => e.preventDefault()}>
        <div className="mt-4">
        <input type="text" id="name" name="name" required placeholder="recipient's name" className="w-1/2 h-8 pl-2 rounded-lg" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
        <input type="text" id="acct-no" name="acct-no" required placeholder="recipient's acc no" className="w-1/2 h-8 pl-2 rounded-lg" value={acct} onChange={(e) => setAcct(e.target.value)}/>
        </div>
        <div>
        <input type="number" id="amount" name="amount" min={10} required placeholder="amount to be transferred in $" className="w-1/2 h-8 pl-2 rounded-lg" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <div>
        <input type="date" id="date" required name="date" className="w-1/2 h-8 pl-2 rounded-lg" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div>
        <select name="transaction-type" required id="transaction-type" className="w-1/2 pl-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>
        </div>
        <button className="absolute bottom-1 right-2" disabled={amount && acct && category && date ? false : true} onClick={() => setClicked(true)}><FaArrowRight className="h-6 text-white w-7"/></button>
      </form>
      </section>
     { clicked && 
      <section className="absolute top-0 w-3/4 mx-auto bg-transparent bg-gray-800 h-3/4 left-[10%]">
        <Validation />
      </section>}
    </main>
  )
}

export default Home