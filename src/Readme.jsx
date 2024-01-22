const Currency = () => {
    
  return (
    <main className="h-full text-blue-400 w-[85vw] bg-violet-100">
        <article className="flex flex-col gap-4 pl-5 text-center">
          <h2 className="text-lg font-extrabold text-black">Encode</h2>
          <p>This is a pure frontend development that helps users to make transactions, check their transactions, edit and if desired, delete the transaction they have made. They will also be able to check out news about currencies. </p>
          <p>For the frontend to speak with the backend to share data is impossible using only react, so a local json server is created to serve as a server to make sharing of data possible, but the problem this approach is facing is that to see this(sharing of data in action) is to pull this from the public github repository to your code edictor and then run the code locally for this to work.</p>
          <p>It will work well on bigger screen, it will look somehow on mobile because there is no enough time to design all the responsiveness.</p>
          <h3>HOW IT WORKS</h3>
          <ol className="pt-2 text-black pl-72 text-start">
            <li>pull the repository from github to your code editor</li>
            <li>cd into the encode repository: cd encode</li>
            <li>write this in the terminal: (npx json-server -p 3000 -w src/db.json) to start watching for the server</li>
            <li>then inpute this in terminal: npm run dev, to start the project</li>
            <li>then ctr left click on the port</li>
            <li>then send and receive your data</li>
          </ol>
        </article>
    </main>
  )
}

export default Currency