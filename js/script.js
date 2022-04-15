/* escolhendo um time */

$('[acao-click1]').on('click', function(e){
	console.log('time azul')	
	$('[acao-click1').toggle()	
	$('[acao-click2').toggle()
	$('[acao-click3').show()
	var team = e.target.id
	console.log(team)
})

$('[acao-click2]').on('click', function(e){
	console.log('time vermelho')	
	$('[acao-click1').toggle()	
	$('[acao-click2').toggle()
	$('[acao-click3').show()
	var team = e.target.id
	console.log(team)
})

$('[acao-click3]').on('click', function(e){
	console.log('reset')
	$('[acao-click3]').toggle()
	$('[acao-click1]').show()
	$('[acao-click2]').show()
})