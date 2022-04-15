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
	console.log(team)
	/* chamar função jogar*/
})


/* btn reset */
$('[action-click3]').on('click', function(e){
	console.log('reset')
	$('[action-click3]').toggle()
	$('[action-click1],[action-click2]').show()
	
	$('.spot-peca-jogada').children().remove()

	matrixGame = [[0,0,0],[0,0,0],[0,0,0]]
	location.reload()
})

/* verifica de onde veio o clique */
$(document).on("click", "[action-chose11], [action-chose12], [action-chose13], [action-chose21], [action-chose22], [action-chose23], [action-chose31], [action-chose32], [action-chose33]", function (e) {
	spotId = this.parentNode.id
	selectXorO()

})


/* função que vê qual time foi escolhido para jogar e marca no spot*/
function selectXorO(){ /* tenho que receber (time,posição)*/
	console.log(team)
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
	
	if(counterGamePlayed >= 1){ /* alterar para 5 */
		console.log('veio')
		
		$.each($('.spot-peca-jogada img'), function(i, e) {
		  /*console.log(i + ' : ' + this.className + ' : ' + this.parentNode.id)*/
		  
		  var positionClass = this.parentNode.id
		  var pecaJogada = this.className

		  console.log(positionClass + pecaJogada)

		})


	}else{

	}


}