import { FaArrowLeft } from "react-icons/fa"
import { useContext, useState } from "react"
import DataContext from "./context/contextProvider"

const Validation = () => {

    const { setClicked, validAmount, setValidAmount, validAcct, setValidAcct, validDate, setValidDate, amount, acct, date, setAmount, setAcct, setName, setCategory, setDate, addedTransaction } = useContext(DataContext)
    const [passcode, setPasscode] = useState("");
    
    const onSubmission = async(e) => {
        e.preventDefault()
        addedTransaction()
        setClicked(false)
        setValidAmount("")
        setValidAcct("")
        setValidDate("")
        setAmount("")
        setAcct("")
        setName("")
        setCategory("")
        setDate("")
    }

  return (
    // checking if the form is validated to send the data to the backend or if it is not validated
    <>
        <p  className="pt-4 text-center bg-gray-200">TRANSACTION VALIDATION</p>
        <form className="relative flex flex-col h-full gap-5 pt-5 text-center bg-gray-200" onSubmit={onSubmission}>
        <div>
            <input type="text" id="acct" name="acct" required placeholder="recipient's acc no" className="w-1/2 h-8 pl-2 rounded-lg" value={validAcct} onChange={(e) => setValidAcct(e.target.value)}/>   
            {validAcct && validAcct !== acct && <p className="text-red-500">Make sure it is the same account number to be verified</p>}
        </div>
        <div>
        <input type="number" id="amount" name="amount" min={10}  required placeholder="amount to be transferred" className="w-1/2 h-8 pl-2 rounded-lg" value={validAmount} onChange={(e) => setValidAmount(e.target.value)}/>
        {validAmount && validAmount !== amount && <p className="text-red-500">Make sure it is the same amount to be verified</p>}
        </div>
        <div>
        <input type="date" id="date" required name="date" className="w-1/2 h-8 pl-2 rounded-lg" value={validDate} onChange={(e) => setValidDate(e.target.value)}/>
        {validDate && validDate !== date && <p className="text-red-500">Make sure it is the same date to be verified</p>}
        </div>
        <div>
        {/* <select name="transaction-type" required id="transaction-type" className="w-1/2 pl-2" value={validCategory} onChange={(e) => setValidCategory(e.target.value)}>
        {validCategory !== category && <p className="text-red-500">Make sure it is the same category of transaction to be verified</p>}
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select> */}
        </div>
        <div>
            <input type="password" className="w-1/2 h-8 pl-2" placeholder="password" required value={passcode} onChange={(e) => setPasscode(e.target.value)}/>
        </div>
        {
            amount !== validAmount || acct !== validAcct || date !== validDate || !passcode ? "" : 
            <button className="absolute px-4 py-1 bg-blue-600 rounded-md bottom-1 right-2 hover:bg-red-500" type="submit">SEND</button> 
        }
        <button className="absolute bottom-1 left-2" onClick={() => setClicked(false)}><FaArrowLeft className="h-6 text-gray-600 w-7"/></button>
      </form>
    </>
  )
}

export default Validation