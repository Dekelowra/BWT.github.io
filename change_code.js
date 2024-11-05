function find_edit(){
    const first_name  = document.getElementById('first_name')
    const last_name = document.getElementById('last_name')
    const year = document.getElementById('year')
    first_name.innerText = 'Andrey'
    last_name.innerText = 'Lushnikov'
    year.innerText = 'MMV'
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)