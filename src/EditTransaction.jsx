import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import DataContext from "./context/contextProvider"

const EditTransaction = () => {
    const { id } = useParams()
    const { transactions, handleDelete, editAmount, setEditAmount, editAcct, setEditAcct, handleEdit, popUp, setPopUp } = useContext(DataContext)
    const transaction = transactions.filter((transaction) => (transaction.id).toString() === id)

  return (
    <main>
      { transaction?.length ? 
        ( transaction.map((transaction) => 
      <ul key={transaction.id} className="relative">
        <li>
          <div className="rounded-3xl mx-3 my-2 h-[400px] flex flex-col overflow-hidden">
            <p className="flex justify-end p-2 pr-6 bg-gray-700">{transaction.date}</p>
            <div className='flex-grow gap-3 pt-5 overflow-y-auto bg-blue-600 flex-cols-2 rounded-b-3xl'>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">RECIPIENT'S NAME:</p><p className="flex p-2 place-items-start">{transaction.name}</p></div>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">RECIPIENT'S ACCT:</p><p className="flex p-2 place-items-start">{transaction.acct}</p></div>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">AMOUNT:</p><p className="flex p-2 place-items-start">${transaction.amount}</p></div>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">TRANSACTION CATEGORY:</p><p className="flex p-2 place-items-start">{transaction.category}</p></div>
             <div className="flex justify-between w-full p-2 px-24 pt-10 "><p className="">MESSAGE:</p><p className="flex p-2 text-red-300 place-items-start">{transaction.message.toUpperCase()}</p></div>
            </div>
            <div className="grid grid-cols-2 gap-20 mt-1 ml-10">
              {/* This will allow edit */}
            <b className="p-4 bg-blue-500 w-fit rounded-xl hover:cursor-pointer" onClick={() => setPopUp((popUp) => !popUp)}>EDIT</b>
              {/* this once clicked will delete the transaction from the transaction history */}
              <b className="p-4 bg-red-500 w-fit rounded-xl hover:cursor-pointer" onClick={() => handleDelete(transaction.id)}>DELETE</b>
            </div>
          </div>
        </li>
        { popUp &&
          <section className="absolute h-[40%] bg-red-500 top-20 w-[70%] left-28 border-4">
          <form className="grid pt-5 place-content-center" onSubmit={(e) => e.preventDefault()}>
            <article>
              <label htmlFor="editamount" className="block">Edit Amount:</label>
              <input type="number" id="editamount" required autoFocus className="pl-2 text-black" value={editAmount} onChange={(e) => setEditAmount(e.target.value)}/>
            </article>
            <article>
              <label htmlFor="editacct" className="block">Edit Acct:</label>
              <input type="number" name="editacct" id="editacct"  className="pl-2 text-black" value={editAcct} onChange={(e) => setEditAcct(e.target.value)} required/>
            </article>
            { editAcct && editAmount &&
                <button type="submit" onClick={() => handleEdit(transaction.id, transaction.name)} className="pt-2">submit</button>
            }
          </form>
        </section>
        }
     </ul> )) : (<div>no posts </div>)
      }
    </main>
  )
}

export default EditTransaction
