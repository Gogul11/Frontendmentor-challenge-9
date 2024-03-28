const div = document.getElementById('err-state');
const error = document.createElement('p');
error.setAttribute('id', 'err');
div.style.display = 'none';
function check()
{
    const value = document.getElementById('mail').value;
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(regex.test(value))
    {
        error.innerText = '';
        document.getElementById('mail').style.borderColor = 'hsla(223, 100%, 88%, 0.8)';

    }
    else{
        div.style.display = 'block';
        document.getElementById('mail').style.borderColor = 'red';
        error.innerText = "Please provid valid email address";
        div.appendChild(error);
    }
}
