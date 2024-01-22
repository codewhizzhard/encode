import { useContext, useEffect, useState } from "react"
import DataContext from "./context/contextProvider"
import axios from "./api/axios"
import { Link } from "react-router-dom"

const Dashboard = () => {

    const { searchResult, search, setSearch } = useContext(DataContext)
    //const [currency, setCurrency] = useState([]);

    // not in use for now, because of time.
   /*  useEffect(() => {
        /// getting different currencies from an api
        const fetchData = async() => {
            try {
                const sendRequest = await axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hsJK9iys74ErU2Zn8ADjpq1oUCHqw0W1MacRi8X3")
                setCurrency([ ...sendRequest])
            } catch (err) {
                // logs the error to the console
                console.log(err.response)
            }
        }
        fetchData()
    }, []) */
    
  return (
    /* using searchResult instead of transactions, this helps with search or filtering of transaction(s) */
    <main className="flex flex-col h-full gap-1">
        <input type="text" autoFocus value={search} onChange={(e) => setSearch(e.target.value)} className="text-center border-2" placeholder="search base on recipient's name or id"/>
        <section className="h-[70vh] overflow-y-scroll bg-gray-300">
            {/* if there is transaction loads out the total transaction in digit */}
            { searchResult?.length ? <p className="p-2">Total transactions: {searchResult.length}</p> : <p>No transaction</p> }
            <ul className="flex flex-row justify-between">
                <li className="pl-2">ID</li>
                <li>RECIPIENT'S NAME</li>
                <li>RECIPIENT'S ACCT</li>
                <li className="pr-2">AMOUNT</li>
            </ul>
            {searchResult?.length ? searchResult.map((transaction) => (
            <>
            {/* getting each transaction */}
            <Link to={`/dashboard/${transaction.id}`}>
            <ol key={transaction.id} className="flex flex-row justify-between m-2 border border-red-400 hover:bg-red-300 hover:cursor-pointer">
                <li>{transaction.id}</li>
                <li>{transaction.name}</li>
                <li>{transaction.acct}</li>
                <li>${transaction.amount}</li>
            </ol>   
            </Link>
                
            </>
            )) : (
                <>
                    <p>No transactions to display</p>
                </>
            )}
        </section>
    </main> 
  )
}

export default Dashboard