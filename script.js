// script.js

const ramos = [ { id: 'procesos_bioquimicos', nombre: 'Procesos bioquímicos', requisitos: [], dependientes: ['procesos_inmunologicos', 'sistema_digestivo', 'sistema_renal', 'farmacocinetica'] }, { id: 'procesos_inmunologicos', nombre: 'Procesos inmunológicos', requisitos: ['procesos_bioquimicos'] }, { id: 'sistema_digestivo', nombre: 'Sistema digestivo', requisitos: ['procesos_bioquimicos', 'bases_embriologia', 'musculo_esqueletico', 'microbiologia'] }, { id: 'sistema_renal', nombre: 'Sistema renal', requisitos: ['procesos_bioquimicos', 'bases_embriologia', 'musculo_esqueletico', 'microbiologia'] }, { id: 'farmacocinetica', nombre: 'Farmacocinética y farmacodinamia', requisitos: ['procesos_bioquimicos'] }, { id: 'bases_embriologia', nombre: 'Bases de embriología, histología y patología', requisitos: [] }, { id: 'musculo_esqueletico', nombre: 'Sistema músculo-esquelético y tegumentario', requisitos: [] }, { id: 'microbiologia', nombre: 'Microbiología básica', requisitos: [] } // Puedes seguir agregando más ramos aquí ];

const mallaDiv = document.getElementById('malla');

function crearRamo(ramo) { const div = document.createElement('div'); div.classList.add('ramo'); div.id = ramo.id; div.innerText = ramo.nombre;

if (ramo.requisitos && ramo.requisitos.length > 0) { div.classList.add('locked'); }

div.addEventListener('click', () => { if (div.classList.contains('locked')) return; div.classList.toggle('completed');

// Desbloquea los que dependen de este ramo
ramos.forEach(r => {
  if (r.requisitos && r.requisitos.includes(ramo.id)) {
    const pendiente = r.requisitos.some(reqId => {
      const reqElem = document.getElementById(reqId);
      return !reqElem.classList.contains('completed');
    });

    if (!pendiente) {
      const target = document.getElementById(r.id);
      if (target) target.classList.remove('locked');
    }
  }
});

});

mallaDiv.appendChild(div); }

ramos.forEach(crearRamo);


