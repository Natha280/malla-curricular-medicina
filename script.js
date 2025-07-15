// script.js

const ramos = [ // PRIMER AÑO - I SEMESTRE { id: 'procesos_bioquimicos', nombre: 'Procesos bioquímicos', requisitos: [], dependientes: ['procesos_inmunologicos', 'sistema_digestivo', 'sistema_renal', 'farmacocinetica'] }, { id: 'humanidades_i', nombre: 'Humanidades I', requisitos: [] }, { id: 'ingles_i', nombre: 'Inglés I', requisitos: [], dependientes: ['ingles_ii'] }, { id: 'bases_embriologia', nombre: 'Bases de embriología, histología y patología', requisitos: [], dependientes: ['sistema_digestivo', 'sistema_renal', 'sistema_endocrino', 'sistema_reproductor', 'sistema_linfo'] }, { id: 'musculo_esqueletico', nombre: 'Sistema músculo – esquelético y tegumentario', requisitos: [], dependientes: ['sistema_digestivo', 'sistema_renal', 'sistema_endocrino', 'sistema_reproductor', 'sistema_linfo'] }, { id: 'microbiologia', nombre: 'Microbiología básica', requisitos: [], dependientes: ['sistema_digestivo', 'sistema_renal', 'sistema_endocrino', 'sistema_reproductor', 'sistema_linfo'] }, { id: 'historia_medicina', nombre: 'Historia de la Medicina', requisitos: [], dependientes: ['epidemiologia', 'etica_medica'] }, { id: 'biogenetica', nombre: 'Bases de Biogenética', requisitos: [] }, { id: 'bioestadistica', nombre: 'Herramientas de Bioestadística', requisitos: [], dependientes: ['epidemiologia'] },

// PRIMER AÑO - II SEMESTRE { id: 'salud_familia', nombre: 'Salud individuo y familia', requisitos: [] }, { id: 'ingles_ii', nombre: 'Inglés II', requisitos: ['ingles_i'], dependientes: ['ingles_iii'] }, { id: 'humanidades_ii', nombre: 'Humanidades II', requisitos: [] }, { id: 'procesos_inmunologicos', nombre: 'Procesos inmunológicos', requisitos: ['procesos_bioquimicos'], dependientes: ['sistema_linfo'] }, { id: 'sistema_digestivo', nombre: 'Sistema digestivo', requisitos: ['procesos_bioquimicos', 'bases_embriologia', 'musculo_esqueletico', 'microbiologia'] }, { id: 'sistema_renal', nombre: 'Sistema renal', requisitos: ['procesos_bioquimicos', 'bases_embriologia', 'musculo_esqueletico', 'microbiologia'], dependientes: ['sistema_linfo'] }, { id: 'sistema_endocrino', nombre: 'Sistema endocrino', requisitos: ['bases_embriologia', 'musculo_esqueletico', 'microbiologia'] }, { id: 'sistema_reproductor', nombre: 'Sistema reproductor', requisitos: ['bases_embriologia', 'musculo_esqueletico', 'microbiologia'] },

// SEGUNDO AÑO - III SEMESTRE { id: 'epidemiologia', nombre: 'Epidemiología', requisitos: ['historia_medicina', 'bioestadistica'], dependientes: ['investigacion'] }, { id: 'atencion_integral', nombre: 'Atención integral en salud', requisitos: [], dependientes: ['salud_publica'] }, { id: 'sistema_respiratorio', nombre: 'Sistema respiratorio', requisitos: [], dependientes: ['farmacologia', 'semiologia_sano', 'sistema_nervioso'] }, { id: 'ingles_iii', nombre: 'Inglés III', requisitos: ['ingles_ii'], dependientes: ['ingles_iv'] }, { id: 'humanidades_iii', nombre: 'Humanidades III', requisitos: [] }, { id: 'farmacocinetica', nombre: 'Farmacocinética y farmacodinamia', requisitos: ['procesos_bioquimicos'], dependientes: ['farmacologia'] }, { id: 'lineamientos_salud', nombre: 'Lineamientos de salud pública', requisitos: [], dependientes: ['promocion_prevencion'] }, { id: 'sistema_linfo', nombre: 'Sistema linfo-cardiovascular', requisitos: ['procesos_inmunologicos', 'sistema_renal', 'bases_embriologia', 'musculo_esqueletico', 'microbiologia'], dependientes: ['farmacologia', 'semiologia_sano', 'sistema_nervioso'] },

// SEGUNDO AÑO - IV SEMESTRE { id: 'investigacion', nombre: 'Investigación', requisitos: ['epidemiologia'], dependientes: ['mbe'] }, { id: 'farmacologia', nombre: 'Farmacología médica', requisitos: ['farmacocinetica', 'sistema_respiratorio', 'sistema_linfo'], dependientes: ['semiologia_clinica', 'lab_clinico'] }, { id: 'semiologia_sano', nombre: 'Semiología del paciente sano', requisitos: ['sistema_respiratorio', 'sistema_linfo', 'sistema_nervioso'], dependientes: ['semiologia_clinica', 'lab_clinico'] }, { id: 'sistema_nervioso', nombre: 'Sistema nervioso central y órganos de los sentidos', requisitos: ['sistema_respiratorio', 'sistema_linfo'], dependientes: ['semiologia_clinica', 'lab_clinico'] }, { id: 'promocion_prevencion', nombre: 'Promoción y prevención', requisitos: ['lineamientos_salud'], dependientes: ['salud_publica'] }, { id: 'bioetica', nombre: 'Bioética', requisitos: [], dependientes: ['etica_medica'] },

// TERCER AÑO - V SEMESTRE { id: 'etica_medica', nombre: 'Ética médica', requisitos: ['bioetica', 'historia_medicina'] }, { id: 'mbe', nombre: 'MBE', requisitos: ['investigacion'] }, { id: 'institucional_i', nombre: 'Institucional I', requisitos: [] }, { id: 'semiologia_clinica', nombre: 'Semiología clínica', requisitos: ['semiologia_sano', 'farmacologia'], dependientes: ['rccp', 'clinica_adulto', 'imagenologia', 'salud_ocupacional'] }, { id: 'lab_clinico', nombre: 'Medicina de laboratorio', requisitos: ['semiologia_sano', 'sistema_nervioso', 'farmacologia'], dependientes: ['clinica_adulto', 'imagenologia'] },

// TERCER AÑO - VI SEMESTRE { id: 'rccp', nombre: 'RCCP', requisitos: ['semiologia_clinica'], dependientes: ['clinica_quirurgica', 'anestesia'] }, { id: 'clinica_adulto', nombre: 'Clínica del adulto mayor', requisitos: ['semiologia_clinica', 'lab_clinico'], dependientes: ['clinica_quirurgica', 'anestesia', 'especialidades', 'optativa_i', 'psiquiatria', 'tropical', 'optativa_ii', 'toxicologia'] }, { id: 'imagenologia', nombre: 'Ayudas diagnósticas e imagenológicas', requisitos: ['semiologia_clinica', 'lab_clinico'], dependientes: ['clinica_quirurgica', 'anestesia'] },

// CUARTO AÑO - VII SEMESTRE { id: 'clinica_quirurgica', nombre: 'Clínica quirúrgica', requisitos: ['rccp', 'clinica_adulto', 'imagenologia'], dependientes: ['clinica_mujer', 'especialidades_ii', 'binomio', 'ortopedia'] }, { id: 'institucional_ii', nombre: 'Institucional II', requisitos: [] }, { id: 'salud_publica', nombre: 'Salud pública', requisitos: ['atencion_integral', 'promocion_prevencion'], dependientes: ['salud_ocupacional'] }, { id: 'anestesia', nombre: 'Anestesia', requisitos: ['rccp', 'clinica_adulto', 'imagenologia'], dependientes: ['ortopedia', 'urgencias'] }, { id: 'especialidades', nombre: 'Medicina de las especialidades', requisitos: ['clinica_adulto'] }, { id: 'electiva_i', nombre: 'Electiva I', requisitos: [] },

// CUARTO AÑO - VIII SEMESTRE { id: 'electiva_ii', nombre: 'Electiva II', requisitos: [] }, { id: 'clinica_mujer', nombre: 'Clínica de la mujer', requisitos: ['clinica_quirurgica'], dependientes: ['clinica_nino', 'psiquiatria'] }, { id: 'especialidades_ii', nombre: 'Medicina de las especialidades II', requisitos: ['clinica_quirurgica'] }, { id: 'binomio', nombre: 'Clínica binomio madre-hijo', requisitos: ['clinica_quirurgica'], dependientes: ['clinica_nino'] }, { id: 'institucional_iii', nombre: 'Institucional III', requisitos: [] },

// QUINTO AÑO - IX SEMESTRE { id: 'optativa_i', nombre: 'Optativa I', requisitos: ['clinica_adulto'] }, { id: 'clinica_nino', nombre: 'Clínica del niño-adolescente', requisitos: ['clinica_mujer', 'binomio'], dependientes: ['urgencias'] }, { id: 'administracion_salud', nombre: 'Elementos básicos en administración en salud', requisitos: [] }, { id: 'ortopedia', nombre: 'Ortopedia', requisitos: ['clinica_quirurgica', 'anestesia'], dependientes: ['urgencias', 'legal'] },

// QUINTO AÑO - X SEMESTRE { id: 'psiquiatria', nombre: 'Psiquiatría', requisitos: ['clinica_adulto', 'clinica_mujer'] }, { id: 'urgencias', nombre: 'Medicina de urgencias', requisitos: ['anestesia', 'clinica_nino', 'ortopedia'] }, { id: 'tropical', nombre: 'Medicina tropical', requisitos: ['clinica_adulto'] }, { id: 'legal', nombre: 'Medicina legal y forense', requisitos: ['ortopedia'] }, { id: 'optativa_ii', nombre: 'Optativa II', requisitos: ['clinica_adulto'] }, { id: 'salud_ocupacional', nombre: 'Salud ocupacional', requisitos: ['salud_publica', 'semiologia_clinica'] }, { id: 'electiva_iii', nombre: 'Electiva III', requisitos: [] }, { id: 'toxicologia', nombre: 'Toxicología', requisitos: ['clinica_adulto'] } // Puedes seguir con internados si deseas ];

const mallaDiv = document.getElementById('malla');

function crearRamo(ramo) { const div = document.createElement('div'); div.classList.add('ramo'); div.id = ramo.id; div.innerText = ramo.nombre;

const tieneReq = ramo.requisitos && ramo.requisitos.length > 0; if (tieneReq) { div.classList.add('locked'); }

div.addEventListener('click', () => { if (div.classList.contains('locked')) return; div.classList.toggle('completed');

// Verifica si otros ramos se pueden desbloquear
ramos.forEach(r => {
  if (!r.requisitos) return;
  if (r.requisitos.includes(ramo.id)) {
    const pendiente = r.requisitos.some(reqId => !document.getElementById(reqId).classList.contains('completed'));
    if (!pendiente) document.getElementById(r.id).classList.remove('locked');
  }
});

});

mallaDiv.appendChild(div); }

ramos.forEach(crearRamo);

