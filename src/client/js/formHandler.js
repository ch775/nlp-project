import { checkForName } from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    document.getElementById('results').innerHTML = formText;
     
    checkForName(formText);

    console.log(formText);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8082/api',
    {
        method: 'POST',
       
        body: JSON.stringify({formText}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(reply) {
        document.getElementById('results').innerHTML = `Input: ${reply.text} <br> Subjectivity: ${reply.subjectivity} <br> Polarity: ${reply.polarity} <br>`       

    }).catch(err => console.log(err));
}

export { handleSubmit }


