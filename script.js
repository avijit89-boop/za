const but = document.getElementById('btn'); // No need for '#'
but.onclick = () => {
    const nme = document.getElementById('nme').value.trim(); // Moved inside the function
    const email = document.getElementById('email').value.trim(); // Moved inside the function
    const message = document.getElementById('msg').value.trim(); // Moved inside the function

    if (nme !== "" && email !== "" && message !== "") {
        alert('Your data has been submitted successfully!');
    } else {
        alert('Please fill in all fields before submitting.');
    }
};