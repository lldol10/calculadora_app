function calcular(tipo, valor){
    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar o visor de resultado
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ){
            document.getElementById('resultado').value += valor 
        }

        if(valor === '='){
            var campo_valor = eval(document.getElementById('resultado').value) 
            document.getElementById('resultado').value = campo_valor
        }

    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}