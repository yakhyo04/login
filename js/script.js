const logOutBtn = document.querySelector('#logout');

const token = JSON.parse(window.localStorage.getItem('__auth_token__'))

if(!token?.token){
    window.location.replace('login.html')
}

logOutBtn.addEventListener('click', () =>{
    window.localStorage.removeItem('__auth_token__');
    location.reload();
})
const elTemplate = document.querySelector('#template').content;
const elList = document.querySelector('.main__list');

async function renderUsers(){
    const respons = await fetch('https://reqres.in/api/users?page=2')
    const data = await respons.json()
    let resultData = data.data

    resultData.forEach(obj =>{
        let cloneTemplate = elTemplate.cloneNode(true)

        cloneTemplate.querySelector('.main__img').src = obj.avatar;
        cloneTemplate.querySelector('#main__name').textContent = obj.first_name;
        cloneTemplate.querySelector('#main__surmane').textContent = obj.last_name;
        let userEmail = cloneTemplate.querySelector('.main__email')
        userEmail.textContent = obj.email
        console.log(userEmail.setAttribute('href', `mailto: ${obj.email}`))

        elList.appendChild(cloneTemplate)
        // console.log(obj)
    })

}
renderUsers()