function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    document.getElementById('results').innerHTML = formText;

    console.log(formText);
    console.log(`Your API key is ${process.env.API_KEY}`);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8082/api',
    {
        method: 'POST',
       
        body: JSON.stringify({formText}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(reply) {
        document.getElementById('results').innerHTML = `text meaning: ${reply.subjectivity} <br>`

        

    }).catch(err => console.log(err));
}

export { handleSubmit }


