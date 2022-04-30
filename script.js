"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function parking() {
        function read() {
        }
        function add(vehicle) {
            var _a;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${vehicle.name}</td>
                <td>${vehicle.plate}</td>
                <td>${vehicle.prohibited}</td>
                <td>
                    <button class="delete" data-plate="${vehicle.plate}"> Remover </button>
                </td>
                `;
            (_a = $("#parking")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remove() {
        }
        function save() {
        }
        function render() {
        }
        return { read, add, remove, save, render };
    }
    (_a = $("#register")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const name = (_a = $("#name")) === null || _a === void 0 ? void 0 : _a.value;
        const plate = (_b = $("#plate")) === null || _b === void 0 ? void 0 : _b.value;
        if (!name || !plate) {
            alert("Os campos name e plate são obrigatórios");
            return;
        }
        parking().add({ name, plate, prohibited: new Date() });
    });
})();
