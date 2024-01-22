import { useParams } from "react-router-dom"
import { useContext } from "react"
import DataContext from "./context/contextProvider"

const EditTransaction = () => {
    const { id } = useParams()
    const { transactions, handleDelete } = useContext(DataContext)
    const transaction = transactions.filter((transaction) => (transaction.id).toString() === id)
  return (
    <main>
      { transaction?.length ? 
        ( transaction.map((transaction) => 
      <ul key={transaction.id} className="relative">
        <li>
          <div className="rounded-3xl mx-3 my-2 h-[500px] flex flex-col overflow-hidden">
            <p className="flex justify-end p-2 pr-6 bg-gray-700">{transaction.date}</p>
            <div className='flex-grow gap-3 pt-10 overflow-y-auto bg-blue-600 flex-cols-2 rounded-b-3xl'>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">RECIPIENT'S NAME:</p><p className="flex p-2 place-items-start">{transaction.name}</p></div>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">RECIPIENT'S ACCT:</p><p className="flex p-2 place-items-start">{transaction.acct}</p></div>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">AMOUNT:</p><p className="flex p-2 place-items-start">{transaction.amount}</p></div>
             <div className="flex justify-between w-full p-2 px-24 "><p className="">TRANSACTION CATEGORY:</p><p className="flex p-2 place-items-start">{transaction.category}</p></div>
             <div className="flex justify-between w-full p-2 px-24 pt-10 "><p className="">MESSAGE:</p><p className="flex p-2 place-items-start">{transaction.message.toUpperCase()}</p></div>
            </div>
            <div className="grid grid-cols-2 gap-20 mt-1 ml-10">
              {/* this once clicked will delete the transaction from the transaction history */}
              <b className="p-4 bg-red-500 w-fit rounded-xl hover:cursor-pointer" onClick={() => handleDelete(transaction.id)}>DELETE</b>
            </div>
          </div>
        </li>
     </ul> )) : (<div>no posts </div>)
      }
    </main>
  )
}

export default EditTransaction
