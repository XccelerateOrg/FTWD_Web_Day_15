/**********************************************
 * Add an event listener to input
 * ==================================
 ***********************************************/

/**********************************************
 * Keyboard Events
 * ==================================
 * Keydown -> includes control, shift and option (alt)
 * Keypress -> just the letters
 ***********************************************/
//console.log(document.getElementById('submitButton'))

$('#submitButton').click(function () {
	$(this)[0].style = 'background-color: blue; '
})

$('.hoverOrange').hover(function () {
	$(this)[0].style = 'color: orange'
})

document.querySelector('.form-control').addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		let li = document.createElement('li')
		let p = document.createElement('p')
		let icon = document.createElement('i')

		icon.setAttribute('class', 'fa-solid fa-x')
		icon.setAttribute('id', 'icon')

		//icon.style = 'justify-self:end'
		p.innerHTML = e.target.value
		p.style = 'margin-left: 20px; font-weight:bold'
		icon.style = 'margin-right: 20px;'
		li.style = '  display:flex; justify-content:space-between;    margin-top:15px; margin-bottom:15px;'

		document.querySelector('.main').append(li)
		li.append(p)
		li.append(icon)
		document.querySelectorAll('#icon').forEach((n) =>
			n.addEventListener('click', (e) => {
				e.target.parentElement.remove()
			})
		)
		e.target.value = ''
	}
})

//console.log(document.querySelector('.form-control').value)

/**********************************************
 * To do list
 * ==================================
 ***********************************************/
/**********************************************
 * Mouse Events
 * ==================================
 ***********************************************/
/**********************************************
 * Input Events
 * ==================================
 ***********************************************/
/**********************************************
 * List
 * ==================================
 ***********************************************/
