const emailInput = document.getElementById("emailInput");
const joinWaitlistBtn = document.getElementsByClassName("joinBtn")
const succesMsgEl = document.getElementById("successEl")


const errTimeOut = ()=>{
    succesMsgEl.innerText = ""
}
// const valueFromInput = emailInput.value

joinWaitlistBtn[0].addEventListener("click",()=>{
    const valueFromInput = emailInput.value
    if (valueFromInput === '') {
        console.log("input is empty");
    }else{
        const users = {
            Email: valueFromInput
          };
       
          fetch('https://649ac56abf7c145d023971ee.mockapi.io/api/V1/Users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(users)
          }).then(res => {
            if (res.ok) {
              return res.json();
            
            }
            throw new Error('Error: ' + res.status);
          }).then(task => {
            console.log(task);
            const successMsg = "Thanks For joining our waitlist"
            
            succesMsgEl.innerText = successMsg; 
            setTimeout(() => {
                errTimeOut();
            }, 3000);
            // do something with the new task
          }).catch(error => {
            console.error(error);
          });
    }
    // console.log("hello");
 
    // console.log(valueFromInput);
    const newTask = {
        content: 'Check out mockapi.io',
        completed: false,
      };
      
      
     
})