//Vue app

const { createApp } = Vue

createApp({
    data() {
        return {
            // TUTTE LE VARIABILI

            coseDaFare: [
                { cosa: 'tagliare i capelli', stato: true },
                { cosa: 'fare la spesa', stato: false },
                { cosa: 'vedere il tramonto', stato: true },
                { cosa: 'raggiungere immortal', stato: false },
                { cosa: 'lavare i piatti', stato: false },
            ],
            nuovaCosa: '',
        }
    },
    methods: {
        // TUTTE LE FUNZIONI
        // FUNZIONE PER CAMBIARE STATO
        cambioStato(elemento, stato) {
            if (elemento.stato == true) {
                return elemento.stato = false
            } else elemento.stato = true
        },
        // FUNZIONE PER AGGIUNGERE COSE DA FARE
        aggiungoElemento() {
            if (this.nuovaCosa == '') {
                alert('aggiungi qualcosa!')
            } else this.coseDaFare.push({ cosa: this.nuovaCosa, stato: false });
            this.nuovaCosa = '';
        }
    },
    mounted() {
        console.log('app vue montanta correttamente')
    }
},

).mount('#app')