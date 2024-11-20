function verifierFormulaire() {
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let email = document.getElementById("email");
    let motDePasse = document.getElementById("motdepasse");
    let message = document.getElementById("message");
    let cases = document.getElementById("case");
    let errorText = document.querySelector(".form-group small.text-danger");
    let casetext = document.querySelector("label");

    // Validation de chaque champ
    let valid = true;

    // mot de passe
    if (motDePasse.value.length < 8) {
        motDePasse.classList.add('isinvalid');
        motDePasse.classList.remove('isvalid');
        errorText.classList.remove("invisible");
        valid = false;
    } else {
        motDePasse.classList.remove('isinvalid');
        motDePasse.classList.add('isvalid');
        errorText.classList.add("invisible");
    }

    // email
    if (!email.value.includes('@')) {
        email.classList.add('isinvalid');
        email.classList.remove('isvalid');
        valid = false;
    } else {
        email.classList.add('isvalid');
        email.classList.remove('isinvalid');
    }

    // prénom
    if (prenom.value.length < 3) {
        prenom.classList.add('isinvalid');
        prenom.classList.remove('isvalid');
        valid = false;
    } else {
        prenom.classList.remove('isinvalid');
        prenom.classList.add('isvalid');
    }

    // nom
    if (nom.value.length < 3) {
        nom.classList.add('isinvalid');
        nom.classList.remove('isvalid');
        valid = false;
    } else {
        nom.classList.remove('isinvalid');
        nom.classList.add('isvalid');
    }

    // message
    if (message.value.length < 3) {
        message.classList.add('isinvalid');
        message.classList.remove('isvalid');
        valid = false;
    } else {
        message.classList.remove('isinvalid');
        message.classList.add('isvalid');
    }

    // case
    if (cases.checked) {
        casetext.classList.add("isvalids");
        casetext.classList.remove("isinvalids");
    } else {
        casetext.classList.remove('isvalids');
        casetext.classList.add('isinvalids');
        valid = false;
    }

    // Si toutes les validations sont réussies
    if (valid) {
        console.log("FORMULAIRE TEST");
    }
}
