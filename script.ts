interface Vehicle {
    name: string,
    plate: string,
    prohibited: Date
}

(function(){
    const $ = (query: string): HTMLInputElement | null =>
        document.querySelector(query)

        function parking(){
            function read(){

            }

            function add(vehicle:Vehicle){
                const row = document.createElement("tr")

                row.innerHTML = `
                <td>${vehicle.name}</td>
                <td>${vehicle.plate}</td>
                <td>${vehicle.prohibited}</td>
                <td>
                    <button class="delete" data-plate="${vehicle.plate}"> Remover </button>
                </td>
                `
                $("#parking")?.appendChild(row)

            }

            function remove(){

            }

            function save(){

            }

            function render(){

            }

            return { read, add, remove, save, render}
        }   

    $("#register")?.addEventListener("click", () => {
        const name = $("#name")?.value
        const plate = $("#plate")?.value

        if(!name || !plate){
            alert("Os campos nome e placa são obrigatórios")
            return
        }

        parking().add({ name, plate, prohibited: new Date()})
    })
})()