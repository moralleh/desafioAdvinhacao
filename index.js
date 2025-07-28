let words = ['lua', 'paz', 'luz', 'mar']

function option() {
    if (document.getElementById('option0').checked) {
        return words[0]
    }
    else if (document.getElementById('option1').checked) {
        return words[1]
    }
    else if (document.getElementById('option2').checked) {
        return words[2]
    }
    else {
        return words[3]
    }
}

function outcome() {
    let letterInput1 = document.getElementById('letter-one').value.toLowerCase()
    let letterInput2 = document.getElementById('letter-two').value.toLowerCase()
    let letterInput3 = document.getElementById('letter-three').value.toLowerCase()

    let word = option().toLowerCase()

    let letter1 = word[0]
    let letter2 = word[1]
    let letter3 = word[2]
   
    

    if (letter1 == letterInput1 && letter2 == letterInput2 && letter3 == letterInput3) {
        document.getElementById('result').innerHTML = 'Parabéns!'
        document.getElementById('help').innerHTML = ''
    } else {
        let helpMessage = ''
        if (letter1 == letterInput1) {
            helpMessage += 'Primeira letra está correta <br>'
        }
        if (letter2 == letterInput2) {
            helpMessage += 'Segunda letra está correta <br>'
        }
        if (letter3 == letterInput3) {
            helpMessage += 'Terceira letra está correta <br>'
        } 
        document.getElementById('help').innerHTML = helpMessage
        document.getElementById('result').innerHTML = 'Tente de novo'
    }
}
