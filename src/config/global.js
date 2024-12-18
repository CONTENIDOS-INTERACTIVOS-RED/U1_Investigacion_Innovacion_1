export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos del diseño de proyectos.',
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
        titulo: 'Definición de proyecto y tipos de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es la gestión de proyectos?',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fases del ciclo de vida del proyecto.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Planeación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ejecución del proyecto',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Seguimiento y control del proyecto y de las tareas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Cierre del proyecto',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Objetivos, indicadores y resultados esperados',
        desarrolloContenidos: true,
      },
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
        'Cerezuela, B. & Ollé, C. (2018). Gestión de proyectos paso a paso: ( ed.). Editorial UOC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/116314?page=6',
    },
    {
      referencia:
        'Córdoba Padilla, M. (2011). Formulación y evaluación de proyectos: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69169',
    },
    {
      referencia:
        'Torres Hernández, Z. (2014). Administración de proyectos: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39414?page=24',
    },
  ],
  glosario: [
    {
      termino: 'PMBOK',
      significado:
        '(Project Management Body of Knowledge) es un conjunto de estándares, mejores prácticas, guías y terminología para la gestión de proyectos, desarrollado por el Project Management Institute (PMI). El PMBOK proporciona un marco general que ayuda a los gestores de proyectos a aplicar procesos y técnicas para planificar, ejecutar, monitorear y completar proyectos de manera eficaz. Está compuesto por cinco grupos de procesos (inicio, planificación, ejecución, monitoreo y control, y cierre) y diez áreas de conocimiento.',
    },
    {
      termino: 'Scrum',
      significado:
        'es una metodología ágil de gestión de proyectos que se utiliza especialmente en el desarrollo de software, aunque también se puede aplicar a otros tipos de proyectos. Scrum se estructura en sprints (períodos cortos de trabajo de una o dos semanas) durante los cuales los equipos multifuncionales trabajan en el desarrollo de productos o funcionalidades. El equipo Scrum se organiza en roles específicos (Product Owner, Scrum Master y equipo de desarrollo) y emplea reuniones periódicas como las "Daily Scrums" para revisar el progreso y ajustar el trabajo.',
    },
    {
      termino: 'Kanban',
      significado:
        'es un sistema de gestión visual utilizado para controlar el flujo de trabajo, comúnmente aplicado en la gestión de proyectos y producción. Se basa en tarjetas o post-its que representan tareas o fases del trabajo y se mueven a través de columnas que representan los diferentes estados del flujo de trabajo (por ejemplo, "Por hacer", "En progreso", "Hecho"). La metodología Kanban busca mejorar la eficiencia, evitar cuellos de botella y asegurar un flujo continuo de tareas.',
    },
    {
      termino: 'Método Delphi',
      significado:
        'es una técnica de previsión y toma de decisiones en la que se busca llegar a un consenso mediante la consulta a un panel de expertos. A través de rondas sucesivas de encuestas o cuestionarios, los expertos proporcionan su opinión de forma anónima. Después de cada ronda, se comparten los resultados con el grupo para que ajusten o refinen sus respuestas en base a las opiniones de los demás, hasta alcanzar un acuerdo o consenso razonable.',
    },
    {
      termino: 'Metodología PRINCE2',
      significado:
        '(Projects IN Controlled Environments) es una metodología estructurada para la gestión de proyectos. Se basa en principios bien definidos y establece un enfoque claro para planificar, gestionar y controlar proyectos de manera eficiente. PRINCE2 divide los proyectos en etapas gestionables y proporciona un marco para asignar roles, tomar decisiones y gestionar riesgos. Es una de las metodologías de gestión de proyectos más utilizadas en el Reino Unido y Europa.',
    },
    {
      termino: 'Metodologías ágiles',
      significado:
        'son un conjunto de enfoques para la gestión de proyectos que priorizan la flexibilidad, la colaboración y la entrega continua de productos o servicios de valor. Estas metodologías se centran en el desarrollo incremental e iterativo, con ciclos de trabajo cortos llamados sprints o iteraciones. Los equipos ágiles trabajan de manera colaborativa, revisan constantemente sus avances y hacen ajustes rápidos según las necesidades o los comentarios de los clientes. Ejemplos de metodologías ágiles son Scrum, Kanban, y Extreme Programming (XP).',
    },
    {
      termino: 'Microsoft Project',
      significado:
        'es una herramienta de software diseñada para la gestión de proyectos. Permite planificar, programar, asignar recursos, realizar un seguimiento del progreso, gestionar presupuestos y analizar la carga de trabajo. Es muy útil para la creación de diagramas de Gantt, calendarios de tareas, y para la gestión de múltiples proyectos en una sola vista. Es ampliamente utilizada por gestores de proyectos en diversos sectores.',
    },
    {
      termino: 'Análisis de impacto cruzado',
      significado:
        'es una técnica que se utiliza para estudiar las interrelaciones entre diversos eventos o factores dentro de un proyecto. Se evalúa cómo un cambio en un factor puede influir en otros, permitiendo identificar dependencias y riesgos asociados a estos impactos. Esta herramienta es común en la planificación de proyectos, análisis de escenarios y toma de decisiones en entornos complejos.',
    },
    {
      termino: 'Brainstorming',
      significado:
        'es una técnica creativa en la que un grupo de personas genera una gran cantidad de ideas o soluciones sobre un tema o problema específico en un corto período de tiempo, sin filtrar o criticar inicialmente las propuestas. El objetivo es fomentar el pensamiento libre y explorar tantas ideas como sea posible, para luego evaluar y seleccionar las más viables.',
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
