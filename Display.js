class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return 
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
        
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN (valorActual) || isNaN (valorAnterior) ) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }

}