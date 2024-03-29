import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";


const DataContext = createContext({})

export const ContextProvider = ({ children }) => {
    // using useState instead of useReducer to manage state
    // using the valid before the state variable for validation of state management

    const [transactions, setTransactions] = useState([])
    const [name, setName] = useState("");
    const [amount, setAmount] = useState();
    const [validAmount, setValidAmount] = useState();
    const [acct, setAcct] = useState()
    const [validAcct, setValidAcct] = useState()
    const [category, setCategory] = useState("Income")
    const [date, setDate] = useState("");
    const [clicked, setClicked] = useState(false)
    const [validDate, setValidDate] = useState("");
    const [editAmount, setEditAmount] = useState();
    const [editAcct, setEditAcct] = useState();
    const [popUp, setPopUp] = useState(false)
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    // add more transaction to the transaction in the array
    const addedTransaction = async() => {
        const id = transactions.length ? transactions[transactions.length - 1].id + 1 : 1 
        const message = `you have sent $${validAmount} to  ${name}(${validAcct})`
        const addedtransaction = {id, validDate, name, acct, amount, category, message}
        try {
          const response = await axios.post("/transactions", addedtransaction)
          const result = [...transactions, response.data]
          setTransactions(result) 
        } 
          catch(err) {
            if (err.response) {
                console.log(err.response)
                alert("Check your network\n POST ERROR!!!")}
          }
        }

        // getting all the transactions
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("/transactions")
            setTransactions(response.data)
            console.log(response.data)
          } catch(err) {
            // log error to the console
            console.log(err.status)
          }
        }
        fetchData()
      }, [])

      // filtering the transaction based on search input: name or id
      useEffect(() => {
        const filteredResult = transactions.filter((transaction) => (transaction.name).toLowerCase().includes(search.toLowerCase()) || 
          ((transaction.id).toString() === search))
        setSearchResult(filteredResult.reverse())
      }, [transactions, search])

      // handleDelete handles the deletion of transaction
      const handleDelete = async(id) => {
        const deleteTransaction = transactions.filter((transaction) => transaction.id !== id)
        setTransactions(deleteTransaction)
        await axios.delete(`/transactions/${id}`)
        
      }
      // edit function, to edit only amount and account number
      const handleEdit = async(id, name) => {
        const message = `you have sent $${editAmount} to ${name} (${editAcct})`
        const edit = {id, validDate: validDate, name, acct: editAcct, amount: editAmount, category: category, message}
        try {
          const response = await axios.put(`/transactions/${id}`, edit)
          setTransactions(transactions.map((transaction) => transaction.id === id ? {...response.data} : transaction))
          setEditAcct("")
          setEditAmount("")
        } catch(err) {
          console.log(err.response)
        } finally {
          setPopUp(false)
        }

      }

    
    const returnedValue = {amount, setAmount, acct, setAcct, category, setCategory, date, setDate, clicked, setClicked, validAmount, setValidAmount, validAcct, setValidAcct, transactions, name, setName, addedTransaction, handleDelete, validDate, setValidDate, editAmount, setEditAmount, editAcct, setEditAcct, handleEdit, popUp, setPopUp, search, setSearch, searchResult }
    return (
        <DataContext.Provider value={returnedValue}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext