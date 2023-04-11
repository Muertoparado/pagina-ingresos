import content from './js/content.js';
import operaciones from './js/operaciones.js';

operaciones.render_local_cards(operaciones.data.entradas, 'cards_plus')
operaciones.render_local_cards(operaciones.data.salidas, 'cards_less')
operaciones.operacion();