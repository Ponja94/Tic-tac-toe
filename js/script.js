/* picking a team */
var team = ''
var spotId = ''
var counterGamePlayed = 0
var matrixGame = [[0,0,0],[0,0,0],[0,0,0]]



/* btn team blue */
$('[action-click1],[action-click2]').on('click', function(e){
	$('[action-click1],[action-click2').toggle()	
	$('[action-click3').show()
	team = e.target.id
	/*console.log(team)*/
	/* chamar função jogar*/
})


/* btn reset */
$('[action-click3]').on('click', function(e){
	/*console.log('reset')*/
	$('[action-click3]').toggle()
	$('[action-click1],[action-click2]').show()
	
	$('.spot-peca-jogada').children().remove()

	matrixGame = [[0,0,0],[0,0,0],[0,0,0]]
	location.reload()
})

/* verifica de onde veio o clique */
$(document).on("click", "[action-chose00], [action-chose01], [action-chose02], [action-chose10], [action-chose11], [action-chose12], [action-chose20], [action-chose21], [action-chose22]", function (e) {
	spotId = this.parentNode.id
	selectXorO()

})


/* função que vê qual time foi escolhido para jogar e marca no spot*/
function selectXorO(){ /* tenho que receber (time,posição)*/
	/*console.log(team)*/
	if (team == 'btn-b') {

		$('#'+spotId).html('<img class="xis" src="img/xis.png">')
		team = 'btn-r'
		markingPoints()

	}else if(team == 'btn-r'){

		$('#'+spotId).html('<img class="bola" src="img/bola.png">')
		team = 'btn-b'
		markingPoints()

	}else{
		alert('Pick a team')
	}
}

/* contando jogadas e aplicando vencedores */
function markingPoints(){
	counterGamePlayed += 1
	
	
	$.each($('.spot-peca-jogada img'), function(i, e) {
	  /*console.log(i + ' : ' + this.className + ' : ' + this.parentNode.id)*/
	  var positionReal = ''
	  var pecaEscolhida = ''
	  var positionClass = this.parentNode.id /* spot-22*/
	  var pecaJogada = this.className /* xis ou bola */


	  positionReal = apenasNumeros(positionClass)
	  pecaEscolhida = selecionandoPeca(pecaJogada)
	  
	  matrixGame[positionReal[0]][positionReal[1]] = pecaEscolhida
 	})


	if(counterGamePlayed >= 1 && counterGamePlayed <= 9){ /* alterar para 5 */


	}else{
		console.log('veio else, erro')
	}

	console.log(matrixGame)

}

function apenasNumeros(string) 
{

    var numsStr = string.replace(/[^0-9]/g,'')
    return numsStr.split('')
}

function selecionandoPeca(string){

	/* O = 1 and X = 2 */
    var pecaEscolhida = ''
    if(string == 'xis'){
    	pecaEscolhida = 2
    }else{
    	pecaEscolhida = 1
    }
    return pecaEscolhida
}