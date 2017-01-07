# dubai-hackathon
prototype for a distributed asset ledger and issuance system.

Hackathon links

http://www.hackathon.io/blockchain-virtual-govhack/projects

Prototype overview:

The system works like this.

I'll create a simple landing page that asks the user to generate a p2p ID: This will be an input box for a name, email, and password (optional a profile pic), a message about remembering this password blah blah, and a submit button. 

Upon submitting a request will be made to a local running ethereum client to generate a new wallet.  Shortly after the application will send a transaction to a smart contract to create a new registry for that ID.  This entry will be a mapping of ID to IPFS hash, so when querying a user by ID you get back a hash that you can use to consult ipfs for the actual meta data of a user (what I presume everyone is doing when they are using ipfs here).  This will get printed to the landing page as your ID. There will be a sign in field as well on this page with fields for ID and password that will link to the application.

The application will look sort of like a file system where you can upload and track the assets you have uploaded. You can assign IDs to uploaded pictures of an asset. So essentially you will see a folder listing asset - ipfs hash - ID

Each time you upload an asset it will change the user object for that ID that is hashed and mapped to in the registry contract. So a user object might look like:

```
{
  ID: '1eTH...',
  Name: 'Voxelot'
  Email: 'ginneversource@gmail.com'
  Assets:
    {
      Car: 'Qm... (hash of image of car)',
      House: 'Qm... (hash of house image and so on)'
    },
  Willed_Assets:
    {
      Qm... (car hash): '1eTH2...',
      Qm... (house hash): '1eTH3...'
    }
}
```

Now when a lawyer (or authorized ID by the contract) wants to certify that ID 1eTH has died and the assets need to be transferred, he will issue a command to the smart contract like contract.issueDeath('1eTH', {to: contractAddy, gas: 2000})

This command will simply move the deceased ID to a list that gives permission to the clients to move the Willed_Assets to their respective ID. The client can have a claim assets button on the app that will generate a new user object with what the blockchain says is valid.

Problems with this.

There is a possible attack vector here in a fully p2p system whereby you can't verify that the application client isn't uploading bogus data to the blockchain. How do you know that the user didn't just take a picture of someone else's house and claim it as their own? It opens up a whole can of worms and the web of trust model where you could have lawyers signing hashes of images they agree the client owns. 
