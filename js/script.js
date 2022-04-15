/* picking a team */
var team = ''
var spotId = ''
var counterGamePlayed = 0
var matrixGame = [[0,0,0],[0,0,0],[0,0,0]]
var matrixWin = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
var l0, l1, l2, r0, r1, r2, d0, d1 = [0,0,0]



/* função que organiza matriz de jogadas */
function markingPoints(){
	
	
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

	quemGanhou()

}


/* função que descobre quem ganhou */ 
function quemGanhou(){
	/*pegar linha*/
	l0 = matrixGame[0]
	l1 = matrixGame[1]
	l2 = matrixGame[2]

	/* pegar coluna */
	r0 = matrixGame.map(d => d[0]); 
	r1 = matrixGame.map(d => d[1]); 
	r2 = matrixGame.map(d => d[2]); 
	
	/* diagonal */
	d0 = [l0[0],l1[1],l2[2]]
	d1 = [l0[2],l1[1],l2[0]]

	matrixWin = [l0,l1,l2,r0,r1,r2,d0,d1] /*8x3*/

	/*  */
	console.log(matrixGame)
	console.log(matrixWin)

	
	counterGamePlayed += 1
	if(counterGamePlayed >= 1 && counterGamePlayed <= 9){/* alterar para 5 */ 
		
		matrixWin.forEach(function(item,i){
		/*console.log('foi aqui:'+ matrixWin[i].length)*/
		
		var quantidadeElementosO = matrixWin[i].filter(x => x == 1).length;
		var quantidadeElementosX = matrixWin[i].filter(x => x == 2).length;

		if(quantidadeElementosO == 3 || quantidadeElementosX == 3 ){
			
			if(quantidadeElementosO == 3){

				console.log('quem ganhou foi o O com id: '+i)
				$('.btn-jogada').toggle()


			}else if(quantidadeElementosX ==3){

				console.log('quem ganhou foi o X com id: '+i)
				$('.btn-jogada').toggle()


	 			


			}else{
				consol.log('deu alguma coisa com o ganhador')
			}

		}else{
			console.log('ninguém ganhou ainda nesta matriz')
		}


	})

	}else{
		console.log('não deu duas jogadas')
	}



}


/* btn team blue */
$('[action-click1],[action-click2]').on('click', function(e){
	$('[action-click1],[action-click2').toggle()	
	$('[action-click3').show()
	team = e.target.id
})


/* btn reset */
$('[action-click3]').on('click', function(e){
	/*console.log('reset')*/
	$('[action-click3]').toggle()
	$('[action-click1],[action-click2]').show()
	$('.spot-peca-jogada').children().remove()
	$('.btn-jogada').show()
	matrixGame = [[0,0,0],[0,0,0],[0,0,0]]
	matrixWin = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
	l0, l1, l2, r0, r1, r2, d0, d1 = [0,0,0]
	counterGamePlayed = 0
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


/* função que descobre posição jogada */
function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'')
    return numsStr.split('')
}
/* função que descobre se é X ou O */
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


