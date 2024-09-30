const rucInput = document.getElementById('ruc-input');
const rucButton = document.getElementById('ruc-button');
const rucResult = document.getElementById('ruc-result');
const url = 'https://codepen.io/JuanCabello163/pen/vYoEpEq';
const id = '00e5589d-0363-4369-92a2-fadf6b882b0d';
const clave = '622cauHsmeoIS0hGJVMk7g==';

rucButton.addEventListener('click', () => {
    const ruc = rucInput.value.trim();
    if (ruc !== '') {
        axios.post(`${url}`, {
            'ruc': ruc,
            'api_key': id,
            'api_secret': clave
        })
        .then(response => {
            // This will never be reached since the API request is invalid
            console.log(response);
        })
        .catch(error => {
            console.error(error);
            rucResult.innerHTML = 'Error al buscar el RUC. Por favor, verifique la URL de la API y los credenciales.';
        });
    } else {
        rucResult.innerHTML = 'Por favor, ingrese un número de RUC válido';
    }
});