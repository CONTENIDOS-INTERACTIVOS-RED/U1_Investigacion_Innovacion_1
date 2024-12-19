export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la investigación científica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición y características de la investigación científica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Propósitos de la investigación científica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El sujeto y el objeto en la investigación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ética en la investigación científica',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Según sus datos: cualitativa, cuantitativa',
            hash: 't_2_1',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema3',
      //   icono: 'far fa-file-alt',
      //   numero: '3',
      //   titulo: 'Objetivos, indicadores y resultados esperados',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arispe Alburqueque, D., Galarza Ramírez, J., Santoveña Casal, S., Solano Altaba, M., & Marín Marín, J. A. (2020). Fundamentos de la investigación científica. Editorial Universidad Nacional Autónoma de México.',
      link: '',
    },
    {
      referencia:
        'Avendaño, W. R. (2020). La investigación científica: Una introducción práctica. Editorial Siglo XXI.',
      link: '',
    },
    {
      referencia:
        'Aznar Díaz, I., Romero-Rodríguez, J. M., & Rodríguez-García, A. M. (2021). La investigación cualitativa en educación a través de la lente de género y diversidad. Revista Española de Pedagogía, 79(278), 7-22.',
      link: '',
    },
    {
      referencia:
        'Galarza Ramírez, J., Gregorio Rojas, A., & Solano Altaba, M. (2024). Fundamentos y Métodos de Investigación Científica. Editorial McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Hervás Gómez, C., & Rodríguez-Gallego, M. R. (2020). Investigación educativa: Procedimientos y técnicas. Editorial Síntesis.',
      link: '',
    },
    {
      referencia:
        'Marín Marín, J. A., & Boffo, S. (2021). Challenges and innovations in educational research. European Educational Research Journal, 20(2), 165-168.',
      link: '',
    },
    {
      referencia:
        'Molero Jurado, M. M., Pérez-Fuentes, M. C., Gázquez Linares, J. J., & Simón Márquez, M. M. (2021). Investigación cuantitativa en ciencias sociales. Editorial Dykinson.',
      link: '',
    },
    {
      referencia:
        'Ronquillo Murrieta, A., Hervás Gómez, C., & Simón Márquez, M. M. (2024). Métodos y Técnicas de Investigación en Ciencias Sociales. Editorial UNAM.',
      link: '',
    },
    {
      referencia:
        'Santoveña Casal, S., Aznar Díaz, I., & Romero-Rodríguez, J. M. (2020). La ética en la investigación social. Revista Española de Pedagogía, 78(275), 233-247.',
      link: '',
    },
    {
      referencia:
        'Simón Márquez, M. M., Molero Jurado, M. M., Pérez-Fuentes, M. C., & Gázquez Linares, J. J. (2022). Metodología de la investigación en ciencias sociales. Editorial Dykinson.',
      link: '',
    },
    {
      referencia:
        'Solano Altaba, M., Marín Marín, J. A., & Arispe Alburqueque, D. (2021). La transferencia del conocimiento en la investigación universitaria. Revista Española de Pedagogía, 79(279), 317-334.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'proceso sistemático para examinar, organizar, transformar y modelar datos, con el objetivo de generar información de valor, conclusiones y apoyar la toma de decisiones.',
    },
    {
      termino: 'Bibliografía',
      significado:
        'lista ordenada de todas las fuentes consultadas y citadas durante el proceso de investigación, siguiendo un formato específico de citación.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto organizado de información científica y académica que permite la búsqueda y recuperación de documentos relevantes para la investigación.',
    },
    {
      termino: 'Ciencia',
      significado:
        'sistema organizado de conocimientos y los procesos mediante los cuales se adquieren, verifican y refinan dichos conocimientos.',
    },
    {
      termino: 'Conocimiento científico',
      significado:
        'conjunto de saberes derivados de la observación y el razonamiento, sistemáticamente estructurados y de los que se deducen principios y leyes generales.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'nivel en que un instrumento produce resultados consistentes y coherentes en diferentes aplicaciones.',
    },
    {
      termino: 'Diseño de investigación',
      significado:
        'plan o estrategia de trabajo para obtener la información que se desea con el fin de responder al planteamiento del problema.',
    },
    {
      termino: 'Enfoque cualitativo',
      significado:
        'aproximación metodológica que realiza la toma de datos sin medición numérica para descubrir o afinar preguntas de investigación.',
    },
    {
      termino: 'Enfoque cuantitativo',
      significado:
        'aproximación metodológica que realiza la toma de datos para probar hipótesis con base en la medición numérica y el análisis estadístico.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'proposición tentativa que propone una explicación de la relación entre dos o más variables y se somete a prueba.',
    },
    {
      termino: 'Investigación científica',
      significado:
        'proceso metódico, organizado y objetivo, cuyo propósito es responder a una pregunta o hipótesis y así aumentar el conocimiento sobre algo desconocido.',
    },
    {
      termino: 'Marco teórico',
      significado:
        'conjunto de conocimientos, definiciones y postulados relacionadas entre sí que presentan un punto de vista sistemático de fenómenos especificando relaciones entre variables.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de operaciones y técnicas que se aplican de forma sistemática en la realización de un estudio.',
    },
    {
      termino: 'Muestra',
      significado:
        'subconjunto representativo de una población sobre el cual se recolectarán datos.',
    },
    {
      termino: 'Objetivos de investigación',
      significado:
        'enunciados que expresan lo que se pretende lograr con la investigación, estableciendo el alcance y la dirección del estudio.',
    },
    {
      termino: 'Problema de investigación',
      significado:
        'situación, fenómeno o hecho que requiere una solución o explicación mediante la investigación científica.',
    },
    {
      termino: 'Rigor científico',
      significado:
        'aplicación disciplinada del método científico, garantizando la calidad y objetividad de la investigación.',
    },
    {
      termino: 'Técnicas de investigación',
      significado:
        'conjunto de rutinas y herramientas que sirven para el ejercicio de la ciencia o la gestión del conocimiento.',
    },
    {
      termino: 'Variables',
      significado:
        'atributos que pueden cambiar en un fenómeno y cuyo cambio es susceptible de medirse u observarse.',
    },
    {
      termino: 'Validez',
      significado:
        'grado en que un instrumento realmente mide la variable que pretende medir en un contexto determinado.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
