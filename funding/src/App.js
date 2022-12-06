import './App.css';
import {useEffect,useState} from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import  {loadContract}  from './utils/load-contract';
function App() {
    const [web3Api, setweb3Api] = useState({
        provider:null,
        web3:null,
        contract:null
    });

    const [account,setAccount]=useState(null);
    const [balance,setBalance]=useState(null);
     const [reload,shouldReload]=useState(null);
      const reloadEffect=()=> shouldReload(!reload);

      

  useEffect(() => {
        const loadprovider=async()=>{
          const provider=await detectEthereumProvider();
          const contract=await loadContract("Funder",provider);
          if(provider){
            provider.request({method:"eth_requestAccounts"});
            setweb3Api({
              web3:new Web3(provider),
              provider,
              contract,
           });
          } 
          else{
            console.error('please install meta mask');
          }
            // console.log( window.web3);
            // console.log( window.ethereum);
            // let provider=null;
            // if(window.ethereum){
            //   provider=window.ethereum;
            //   try{
            //         await provider.enable();
            //   }
            //   catch{
            //     console.error("User is not allowed");
            //   }
            // } else if(window.web3){
            //    provider=window.web3.currentProvider;
            // } else if (!process.env.production){
            //    provider=new Web3.provider.HttpProvider("http://127.0.0.1:7545");
            // }

            // setweb3Api({
            //    web3:new Web3(provider),
            //    provider
            // });
        }
           loadprovider();
         },[]);

         console.log(web3Api.web3);

         useEffect(()=>{
               const loadBalance=async()=>{
                 const {contract,web3}=web3Api;
                 const balance =await web3.eth.getBalance(contract.address);
                  setBalance(web3.utils.fromWei(balance,"ether"));
               }
                   web3Api.contract && loadBalance();
         },[web3Api,reload])
         
         useEffect(()=>{
               const getAccount= async()=>{
                  const accounts=await web3Api.web3.eth.getAccounts()
                  setAccount(accounts[0]);
               }
               web3Api.web3 && getAccount()
         },[web3Api.web3]);

         const transferFund=async()=>{
              const {contract,web3}=web3Api;
               await contract.transfer({
                 from:account,
                 value:web3.utils.toWei("0.000000000000000001","ether")
               });

               reloadEffect();
         } 
         
         const withdrawFund=async()=>{
          const {contract,web3}=web3Api;
            const withdrawAmmount=web3.utils.toWei("0.000000000000000001","ether");
             await contract.withdraw(withdrawAmmount,{
              from:account
             })
             reloadEffect();
         }
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Funding</div>
        <div className="card-body">
          <h5 className="card-title">Balance: {balance} ETH </h5>
          <p className="card-text">Account:{account?account:"not connected"}</p>
           {/* <button
            type="button" className="btn btn-success"
             onClick={ async()=>{ 
                 const accounts = await window.ethereum.request({
                  method:"eth_requestAccounts",
             })
                console.log(accounts);
             }}
            >
            Connect to metamask
          </button> */}
          &nbsp;
          <button type="button" className="btn btn-success " onClick={transferFund}>
            Transfer
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary " onClick={withdrawFund} >
            Withdraw
          </button>
        </div>
        <div className="card-footer text-muted">Sarvagya Chaudhary</div>
      </div>
    </> 
  );
}

export default App;
