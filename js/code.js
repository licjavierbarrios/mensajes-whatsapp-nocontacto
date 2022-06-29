const area = document.getElementById('area');
const celular = document.getElementById('celular');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', (e) => {
	e.preventDefault();

	if (
		area.value.length === 0 ||
		celular.value.length === 0 ||
		mensaje.value.length === 0
	) {
		alert('Ingrese un numero de celular y un mensaje');
	} else {
		window.open(
			'https://api.whatsapp.com/send?phone=54' +
				area.value +
				celular.value +
				'&text=' +
				mensaje.value,
			'_blank'
		);
		area.value = '';
		mensaje.value = '';
		celular.value = '';
	}
});
