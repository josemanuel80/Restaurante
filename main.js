const input = document.querySelector('.input');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');
const input5 = document.querySelector('.input5');
const input6 = document.querySelector('.input6');

const mas = document.querySelector('.mas');
const menos = document.querySelector('.menos');
const mas2 = document.querySelector('.mas2');
const menos2 = document.querySelector('.menos2');
const mas3 = document.querySelector('.mas3');
const menos3 = document.querySelector('.menos3');
const mas4 = document.querySelector('.mas4');
const menos4 = document.querySelector('.menos4');
const mas5 = document.querySelector('.mas5');
const menos5 = document.querySelector('.menos5');
const mas6 = document.querySelector('.mas6');
const menos6 = document.querySelector('.menos6');
const resumen = document.querySelector('.resumen');
const tortilla = document.querySelector('.tortilla');
const pasta = document.querySelector('.pasta');
const entrecot = document.querySelector('.entrecot');
const pescado = document.querySelector('.pescado');
const pollo = document.querySelector('.pollo');
const ensalada = document.querySelector('.ensalada');
const total = document.querySelector('.total');
const usuario = document.querySelector('.usuario');
const nombre = document.querySelector('.nombre');
const login = document.getElementById('login');
const registro = document.getElementById('registro');
const precioTortilla = 3.99;
const precioPasta = 4.99;
const precioEntrecot = 7.49;
const precioPescado = 4.99;
const precioEnsalada = 3.49;
const precioUrta = 6.99;

const user = () => {
  if (!login.isLogged) {
    usuario.innerHTML = 'Bienvenido ' + nombre.value;
    login.style.display = 'none';
    registro.style.display = 'none';
  }
  login.isLogged = true;
};

nombre.addEventListener('change', user);

let precio = 0;
/* tortilla */
const p = document.createElement('div');
resumen.appendChild(p);

const cantidadSuma = () => {
  input.value = parseInt(input.value) + 1;
  p.innerHTML =
    parseInt(input.value) +
    ' X ' +
    tortilla.name +
    ' = ' +
    parseInt(input.value) * precioTortilla;
  total.value = parseFloat(total.value) + precioTortilla;
  total.value = parseFloat(total.value).toFixed(2);
};
const cantidadResta = () => {
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
    p.innerHTML =
      parseInt(input.value) +
      ' X ' +
      tortilla.name +
      ' = ' +
      parseInt(input.value) * precioTortilla;
    if (parseInt(input.value) === 0) {
      p.innerHTML = '';
    }
    total.value = parseFloat(total.value) - precioTortilla;
    total.value = parseFloat(total.value).toFixed(2);
  }
};
menos.addEventListener('click', cantidadResta);
mas.addEventListener('click', cantidadSuma);

/* pasta */

/* const p2 = document.createElement('div');
resumen.appendChild(p2);
const cantidadSuma2 = () => {
  input2.value = parseInt(input2.value) + 1;
  p2.innerHTML =
    parseInt(input2.value) +
    ' X ' +
    pasta.name +
    ' => ' +
    parseInt(input2.value) * precioPasta;
  total.value = parseFloat(total.value) + precioPasta;
  total.value = parseFloat(total.value).toFixed(2);
};
const cantidadResta2 = () => {
  if (parseInt(input2.value) > 0) {
    input2.value = parseInt(input2.value) - 1;
    p2.innerHTML =
      parseInt(input2.value) +
      ' X ' +
      pasta.name +
      ' => ' +
      parseInt(input2.value) * precioPasta;
    if (parseInt(input2.value) === 0) {
      p2.innerHTML = '';
    }
    total.value = parseFloat(total.value) - precioPasta;
    total.value = parseFloat(total.value).toFixed(2);
  }
};

mas2.addEventListener('click', cantidadSuma2);
menos2.addEventListener('click', cantidadResta2); */
/* pasta */

const p2 = document.createElement('div');
resumen.appendChild(p2);
const cantidadSuma2 = () => {
  input2.value = parseInt(input2.value) + 1;
  p2.innerHTML =
    parseInt(input2.value) +
    ' X ' +
    pasta.name +
    ' = ' +
    parseInt(input2.value) * precioPasta;
  total.value = parseFloat(total.value) + precioPasta;
  total.value = parseFloat(total.value).toFixed(2);
};
const cantidadResta2 = () => {
  if (parseInt(input2.value) > 0) {
    input2.value = parseInt(input2.value) - 1;
    p2.innerHTML =
      parseInt(input2.value) +
      ' X ' +
      entrecot.name +
      ' = ' +
      parseInt(input2.value) * precioPasta;
    if (parseInt(input2.value) === 0) {
      p2.innerHTML = '';
    }
    total.value = parseFloat(total.value) - precioPasta;
    total.value = parseFloat(total.value).toFixed(2);
  }
};

mas2.addEventListener('click', cantidadSuma2);
menos2.addEventListener('click', cantidadResta2);

/*entrecot*/
const p3 = document.createElement('div');
resumen.appendChild(p3);
const cantidadSuma3 = () => {
  input3.value = parseInt(input3.value) + 1;
  p3.innerHTML =
    parseInt(input3.value) +
    ' X ' +
    entrecot.name +
    ' = ' +
    parseInt(input3.value) * precioEntrecot;
  total.value = parseFloat(total.value) + precioEntrecot;
  total.value = parseFloat(total.value).toFixed(2);
};
const cantidadResta3 = () => {
  if (parseInt(input3.value) > 0) {
    input3.value = parseInt(input3.value) - 1;
    p3.innerHTML =
      parseInt(input3.value) +
      ' X ' +
      entrecot.name +
      ' = ' +
      parseInt(input3.value) * precioEntrecot;
    if (parseInt(input3.value) === 0) {
      p3.innerHTML = '';
    }
    total.value = parseFloat(total.value) - precioEntrecot;
    total.value = parseFloat(total.value).toFixed(2);
  }
};

mas3.addEventListener('click', cantidadSuma3);
menos3.addEventListener('click', cantidadResta3);

/*pescado frito*/

const p4 = document.createElement('div');
resumen.appendChild(p4);
const cantidadSuma4 = () => {
  input4.value = parseInt(input4.value) + 1;
  p4.innerHTML =
    parseInt(input4.value) +
    ' X ' +
    pescado.name +
    ' = ' +
    parseInt(input4.value) * precioPescado;
  total.value = parseFloat(total.value) + precioPescado;
  total.value = parseFloat(total.value).toFixed(2);
};
const cantidadResta4 = () => {
  if (parseInt(input4.value) > 0) {
    input4.value = parseInt(input4.value) - 1;
    p4.innerHTML =
      parseInt(input4.value) +
      ' X ' +
      pescado.name +
      ' = ' +
      parseInt(input4.value) * precioPescado;
    if (parseInt(input4.value) === 0) {
      p4.innerHTML = '';
    }
    total.value = parseFloat(total.value) - precioPescado;
    total.value = parseFloat(total.value).toFixed(2);
  }
};

mas4.addEventListener('click', cantidadSuma4);
menos4.addEventListener('click', cantidadResta4);

/*pollo especial*/

const p5 = document.createElement('div');
resumen.appendChild(p5);
const cantidadSuma5 = () => {
  input5.value = parseInt(input5.value) + 1;
  p5.innerHTML =
    parseInt(input5.value) +
    ' X ' +
    pollo.name +
    ' = ' +
    parseInt(input5.value) * precioEnsalada;
  total.value = parseFloat(total.value) + precioEnsalada;
  total.value = parseFloat(total.value).toFixed(2);
};
const cantidadResta5 = () => {
  if (parseInt(input5.value) > 0) {
    input5.value = parseInt(input5.value) - 1;
    p5.innerHTML =
      parseInt(input5.value) +
      ' X ' +
      pollo.name +
      ' = ' +
      parseInt(input5.value) * precioEnsalada;
    if (parseInt(input5.value) === 0) {
      p5.innerHTML = '';
    }
    total.value = parseFloat(total.value) - precioEnsalada;
    total.value = parseFloat(total.value).toFixed(2);
  }
};

mas5.addEventListener('click', cantidadSuma5);
menos5.addEventListener('click', cantidadResta5);

/*ensalada*/

const p6 = document.createElement('div');
resumen.appendChild(p6);
const cantidadSuma6 = () => {
  input6.value = parseInt(input6.value) + 1;
  p6.innerHTML =
    parseInt(input6.value) +
    ' X ' +
    pollo.name +
    ' = ' +
    parseInt(input6.value) * precioUrta;
  total.value = parseFloat(total.value) + precioUrta;
  total.value = parseFloat(total.value).toFixed(2);
};
const cantidadResta6 = () => {
  if (parseInt(input6.value) > 0) {
    input6.value = parseInt(input6.value) - 1;
    p6.innerHTML =
      parseInt(input6.value) +
      ' X ' +
      pollo.name +
      ' = ' +
      parseInt(input6.value) * precioUrta;
    if (parseInt(input6.value) === 0) {
      p6.innerHTML = '';
    }
    total.value = parseFloat(total.value) - precioUrta;
    total.value = parseFloat(total.value).toFixed(2);
  }
};

mas6.addEventListener('click', cantidadSuma6);
menos6.addEventListener('click', cantidadResta6);
