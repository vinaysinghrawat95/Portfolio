let form = document.querySelector("#my-form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

const handleForm = () => {
    function handleSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        (async function () {
            const KEY = 'x9zvWBnuvT7jSuNFYBaMcKKljzQADGjAQ';
            let URL = 'https://intact-roanna-api-v9-6a640f42.koyeb.app/api/public/submit';
            try {
                console.log("Submitting Form")
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': KEY,
                    },
                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        subject: "Portfolio",
                        message: message.value
                    }),
                });
            } catch (error) {
                alert("Server Not Responding");
                console.log(error);
            } finally {
                console.log("Form Submitted");
                form.reset();
            }
        })();
    }

    form.addEventListener("submit", handleSubmit);
}

function validateForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();

    return isNameValid && isEmailValid && isMessageValid;
}

function validateName() {
    if (name.value.trim() === '' || name.value.length < 3) {
        setError(name, "Please enter a valid name");
        return false;
    }

    removeError(name);
    return true;
}

function validateEmail() {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === '' || !regex.test(email.value.trim())) {
        setError(email, "Please enter a valid email");
        return false;
    }

    removeError(email);
    return true;
}

function validateMessage() {
    let messageValue = message.value.trim();
    if (messageValue === '') {
        setError(message, "Please enter a valid message");
        return false;
    } else if (messageValue.length < 15 || messageValue.length > 200) {
        setError(message, "message length must be between 15 and 200 characters.");
        return false;
    }

    removeError(message);
    return true;
}

function setError(input, errorMessage) {
    let error = form.querySelector(`#${input.name}Error`);
    error.innerText = errorMessage;
    input.style.border = "1px solid red";
    error.style.visibility = "visible";
}

function removeError(input) {
    let error = form.querySelector(`#${input.name}Error`);
    error.innerText = '';
    input.style.border = "none";

    error.style.visibility = "hidden";
}

export default handleForm;