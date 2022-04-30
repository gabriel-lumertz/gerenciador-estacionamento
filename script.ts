interface Vehicle {
    name: string,
    plate: string,
    prohibited: Date
}

(function(){
    const $ = (query: string): HTMLInputElement | null =>
        document.querySelector(query)

        function parking(){
            function read(): Vehicle[]{
                return localStorage.parking ? JSON.parse(localStorage.parking) : []
            }

            function toSave(vehicle: Vehicle[]){
                localStorage.setItem("parking", JSON.stringify(vehicle))
            }

            function add(vehicle:Vehicle, save?: boolean){
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

                if(save) toSave([...read(), vehicle])
            }

            function remove(){

            }            

            function render(){
                $("#parking")!.innerHTML = ""
                const parking = read()

                if(parking.length){
                    parking.forEach(vehicle => add(vehicle))
                }
            }

            return { read, add, remove, toSave, render}
        }

        parking().render()

    $("#register")?.addEventListener("click", () => {
        const name = $("#name")?.value
        const plate = $("#plate")?.value

        if(!name || !plate){
            alert("Os campos nome e placa são obrigatórios")
            return
        }

        parking().add({ name, plate, prohibited: new Date()}, true)
    })
})()