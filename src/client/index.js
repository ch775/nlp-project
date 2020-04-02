import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/footer.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
export {
    checkForName,
    handleSubmit
}

console.log(checkForName);

//alert("I EXIST")
//console.log("CHANGE!!");

console.log(`Your API key is ${process.env.API_KEY}`);
