<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1.Definición y características de la investigación científica'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #cff7e4")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Cuando realizas una investigación científica, estás emprendiendo un proceso metódico destinado a resolver preguntas o problemas de manera estructurada y crítica. No se trata solo de recopilar información, sino de descubrir aspectos novedosos, confirmar teorías o desarrollar conocimientos existentes. Este tipo de investigación se caracteriza por su rigor metodológico y su búsqueda de objetividad. A continuación, se exponen los enfoques de distintos autores sobre este tema.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/4.png', alt='')
    h3 Definición de investigación científica
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.png', alt='')
      .col-lg-8
        p.mb-4 La investigación científica es un proceso esencial para el avance del conocimiento. Implica una indagación sistemática y organizada orientada al descubrimiento, interpretación o revisión de hechos, cuyos resultados se alcanzan mediante la aplicación del método científico. Según Avendaño (2020, p. 4), es "un proceso sistemático que permite abordar la realidad de manera rigurosa y metódica, con el propósito de construir nuevo conocimiento y transformar la comprensión del mundo". Por su parte, Arispe Alburqueque et al. (2020) describen la investigación científica como "un proceso sistemático, crítico y empírico que se aplica para estudiar un fenómeno o resolver un problema, con el objetivo de generar conocimiento mediante el método científico" (p. 17).
        .bloque-texto-c.p-4(style.d-flex="background-color: #f5e9fe")
          i.fas.fa-quote-left.mb-4(style='color: #A530FE')
          h3.mb-2 Resaltan p.mb-0u enfoque transformador, señalando que "la investigación científica es un proceso riguroso y sistemático para la búsqueda y creación de nuevos conocimientos, utilizando métodos específicos que permiten abordar la realidad desde una perspectiva científica" (p. 28).
          span (Galarza Ramírez et al. (2024)
    p.mb-4 Gregorio Rojas (2023) añade un matiz innovador, afirmando que "la investigación científica desarrolla un proceso sistemático de indagación, recolección, organización, análisis e interpretación de información sobre un tema, con el objetivo de generar nuevos conocimientos o validar los existentes" (p. 34). De igual forma, Aznar Díaz et al. (2021) subrayan que los desafíos actuales de la investigación exigen considerar la diversidad y la inclusión como elementos esenciales.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color:#e7eff8 ")
          p.mb-0 En cuanto a su impacto en la sociedad del conocimiento, Marín Marín y Boffo (2021) sostienen que la investigación trasciende el ámbito académico para convertirse en un motor de innovación y cambio social. Solano Altaba et al. (2021) enfatizan que la investigación no solo genera conocimiento, sino que también promueve su transferencia y aplicación práctica en beneficio de la sociedad.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.png', alt='')
      .col-lg-4
        .tarjeta.p-4.h-100(style="background-color:#c2f1f8")
          p.mb-0 La investigación científica es un proceso ordenado y riguroso que busca generar nuevos saberes mediante técnicas como la observación, la experimentación y el análisis. Este proceso se guía por principios fundamentales que aseguran la validez y confiabilidad de los resultados obtenidos.
    p.mb-4 Aunque sigue una estructura general, la investigación científica es flexible y dinámica, lo que implica revisiones y adaptaciones según las necesidades del proyecto. Cada etapa debe realizarse con rigor metodológico para garantizar la calidad de los resultados, considerando posibles ajustes durante el desarrollo del estudio, dependiendo de los requerimientos específicos de la investigación.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Etapas generales del proceso de investigación científica.
    img.mb-5(src='@/assets/curso/temas/7.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Formulación de la pregunta / problema") Es el punto de partida donde se define la pregunta o problema a investigar. Funciona como una brújula que orienta todo el proceso.
          p.text-small(numero="2" titulo="Planteamiento de hipótesis") Se propone una hipótesis como respuesta tentativa al problema, basada en conocimientos previos y razonamiento lógico.
          p.text-small(numero="3" titulo="Revisión de literatura") Implica explorar y analizar el conocimiento existente sobre el tema, sintetizando información relevante para contextualizar la investigación.
          p.text-small(numero="4" titulo="Diseño metodológico") Consiste en desarrollar un plan detallado que guiará el proceso de recolección y análisis de datos. Es el mapa de ruta de la investigación.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/8.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/9.png', alt='')
      .col-lg-8
        LineaTiempoD.color-secundario
          p.text-small(numero="5" titulo="Recolección de los datos") En esta etapa se obtienen los datos necesarios mediante la aplicación de instrumentos y técnicas previamente definidos.
          p.text-small(numero="6" titulo="Análisis e interpretación de resultados") Se procesan los datos recolectados para transformarlos en conocimiento significativo, armando un "rompecabezas" con la información obtenida.
          p.text-small(numero="7" titulo="Conclusiones y divulgación de resultados") Es la fase final, donde se sintetizan los hallazgos y se comparten con la comunidad científica o el entorno de aplicación para contribuir al conocimiento global.
    p.mb-4 A partir de las definiciones mencionadas anteriormente y con el propósito de facilitar la comprensión de este concepto, se puede considerar la investigación científica como una actividad que permite:
    .bg-full-width.p-5.mb-5(style="background-color: #e7eff8 ")
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta(style="background-color: #b76fee")
                span 1
              | Descubrir nuevos hechos o relaciones.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #b76fee")
                span 2
              | Resolver problemas específicos.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #b76fee")
                span 3
              | Desarrollar teorías explicativas.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #b76fee")
                span 4
              | Ampliar el conocimiento existente.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #b76fee")
                span 5
              | Verificar y comprobar hipótesis.
        .col-lg-5.col-7: img(src='@/assets/curso/temas/10.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 La investigación científica tipos y metodologías
                  p Para ampliar sus conocimientos en los aspectos de investigación que ha estudiado, se le sugiere explorar el siguiente vídeo.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right
    p.mb-4 La investigación científica se caracteriza por su rigurosidad metodológica y su enfoque en la imparcialidad. No es una actividad casual ni espontánea, sino que demanda una planificación cuidadosa y una ejecución sistemática.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3 .d-flex
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #c2f1f8 " )
            .row.align-items-center.mb-0r
              .col-lg-auto
                img(src="@/assets/curso/temas/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Es un proceso ordenado y metódico orientado a obtener nuevos conocimientos o resolver problemas mediante la recopilación, el análisis y la interpretación de datos. Este proceso puede desarrollarse en diversas disciplinas, como las ciencias exactas, sociales y humanas. Por ello, la investigación se considera esencial para el progreso del conocimiento humano y la resolución de los problemas que enfrenta la sociedad.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.png', alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Propósitos de la investigación científica

    p.mb-4 La investigación científica, como se mencionó previamente, es una disciplina esencial en un mundo que constantemente presenta nuevos desafíos. Su impacto se refleja en fines superiores que tienen alta relevancia para la sociedad. Estos impactos incluyen la generación de conocimiento, la resolución de problemas y la innovación y el desarrollo, aspectos que transforman y benefician a la humanidad.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/13.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center Generación de conocimiento
                p.mb-0.text-center Realiza una contribución destacable al permitirnos entender fenómenos fuera de nuestro alcance previamente, ampliando nuestro conocimiento sobre el mundo que nos rodea. Incluye: desarrollo de nuevas teorías, validación de hipótesis, descubrimiento de relaciones causales y establecimiento de leyes científicas.
      .col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/14.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center Resolución de problemas
                p.mb-0.text-center Permite dar respuesta a nuevos retos como enfermedades o necesidades globales, actuando como una herramienta para superarlos o mejorarlos. Ejemplos: identificación de necesidades, desarrollo de soluciones, evaluación de intervenciones y optimización de procesos.
      .col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/15.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center Innovación y desarrollo
                p.mb-0.text-center Facilita la creación y desarrollo de nuevas tecnologías, herramientas o soluciones que optimizan las actividades sociales o empresariales. Incluye: creación de nuevas tecnologías, mejora de procesos existentes, desarrollo de productos y optimización de servicios.
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #e7eff8")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Características de la investigación
            p.mb-4(data-aos="fade-right") En el documento Características de la Investigación, se destaca que esta es sistemática, objetiva, verificable, empírica y racional. Estas cualidades aseguran su rigor y validez en la generación de conocimiento. Se invita a revisar el documento para conocer cómo estas características estructuran el proceso investigativo, desde la formulación del problema hasta la validación de los hallazgos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexos_Características_de_la_investigación.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Características de la investigación.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/16.png', alt='')
    
    
    #t_1_2.titulo-segundo(data-aos='fade-right')
      h2 #[span 1.2] El sujeto y el objeto en la investigación
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/17.png', alt='')
      .col-lg-8 
        p.mb-4 Ahora que se han comprendido los conceptos clave, es momento de profundizar en los dos actores fundamentales de toda investigación: el sujeto y el objeto. El sujeto es el investigador, quien lleva a cabo la indagación con una perspectiva clara y metodológica. Es esencial mantener una postura imparcial, evitando cualquier sesgo que pueda influir en los resultados del estudio. Por otro lado, el objeto de investigación se refiere a aque.d-flexllo que se está estudiando, como un fenómeno, una población, un problema o un conjunto de datos.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #cff7e4 " )
            .row.align-items-center.mb-0r
              .col-lg-auto
                img(src="@/assets/curso/temas/18.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Para el investigador, resulta fundamental entender la importancia del objeto de investigación. Según Arispe Alburqueque et al. (2020), "el objeto de investigación representa el fenómeno o problema específico que deseas estudiar, siendo este el eje central que guiará todo tu proceso investigativo" (p. 45). Asimismo, Hervás Gómez y Rodríguez-Gallego (2020) afirman que "esta comprensión resulta esencial para establecer metodologías apropiadas y generar conocimiento significativo" (p. 78).
    p.mb-4 La relación entre el sujeto y el objeto es crucial, ya que exige observar y analizar el objeto de estudio de manera objetiva y sistemática. Al reconocer el papel que desempeña el sujeto y comprender la naturaleza del objeto de investigación, es posible desarrollar un proyecto investigativo más sólido y confiable.
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Sujeto y objeto de estudio
                  p Para ampliar conocimientos sobre los aspectos de investigación estudiados, se sugiere explorar el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right
    h2 El sujeto de investigación (Investigador)
    p.mb-4 La investigación científica exige que el sujeto asuma diversas responsabilidades a lo largo de todas las etapas del proyecto. Estas incluyen planificar y diseñar el estudio, seleccionar y aplicar métodos adecuados, recolectar y analizar datos, interpretar los resultados obtenidos y, finalmente, generar conclusiones que contribuyan al conocimiento existente. Estas responsabilidades se agrupan en tres etapas principales: planificación, ejecución y análisis de resultados.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Planificación" :icono="require('@/assets/curso/temas/icono.svg')" style="background-color: #f3f3f3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.png', alt='')
          .col-lg-7
            h4 Planificación
            p.mb-0 Consiste en el diseño de la investigación, el establecimiento de objetivos, la selección de metodologías y la gestión de recursos. Estas acciones permiten sentar las bases para el desarrollo del proyecto.
      .py-4.py-md-5(titulo="Ejecución" :icono="require('@/assets/curso/temas/icono.svg')" style="background-color: #f3f3f3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.png', alt='')
          .col-lg-7
            h4 Ejecución
            p.mb-0 Incluye la recolección de datos, la aplicación de métodos seleccionados, el control de los procesos y la documentación de cada paso. Esta etapa asegura que la información obtenida sea válida y confiable.
      .py-4.py-md-5(titulo="Análisis de resultados" :icono="require('@/assets/curso/temas/icono.svg')" style="background-color: #f3f3f3 ")
        .row.justify-content-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/21.png', alt='')
          .col-lg-7
            h4 Análisis de resultados
            p.mb-0 Implica el procesamiento de los datos, la interpretación de resultados, la elaboración de conclusiones y la generación de teorías. Este análisis convierte los datos recolectados en conocimiento significativo.
    p.mb-4 Es importante señalar que el sujeto de investigación debe contar con competencias específicas que le permitan cumplir con estas responsabilidades. Estas competencias pueden clasificarse en técnicas, intelectuales y éticas.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        div.bg-color-white.box-shadow.px-4.py-5.h-100.hover
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/22.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Técnicas
          p.mb-0.text-center Incluyen el dominio metodológico, habilidades analíticas, manejo de instrumentos y procesamiento de datos. Estas habilidades aseguran la correcta ejecución de las tareas técnicas.
      .col-lg-4.mb-lg-0.mb-3
        div.bg-color-white.box-shadow.px-4.py-5.h-100.hover
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/23.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Intelectuales
          p.mb-0.text-center Comprenden el pensamiento crítico, la capacidad de síntesis, el razonamiento lógico y la creatividad, permitiendo abordar problemas de manera innovadora y estructurada.
      .col-lg-4.mb-lg-0.mb-3
        div.bg-color-white.box-shadow.px-4.py-5.h-100.hover
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/24.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Éticas
          p.mb-0.text-center Involucran la honestidad intelectual, la responsabilidad, la objetividad y la integridad, fundamentales para garantizar la credibilidad y la validez de la investigación.
    h2 El objeto de investigación (fenómeno a estudiar)
    p.mb-4 El objeto de investigación se define como el fenómeno o problema que el investigador estudia, y debe ser observable y medible, además de estar delimitado en tiempo y espacio. Este objeto puede clasificarse como material, inmaterial, social, virtual o mixto, según sus características y naturaleza. A continuación, se presentan sus descripciones:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Material (tangibles)")
            p.mb-4 Son aquellos con existencia física, perceptibles por los sentidos y definidos por propiedades físicas específicas. 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Características:] Pueden ser medidos, cuantificados, y observados directamente; ocupan un espacio definido. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Ejemplos:] Elementos naturales: minerales, plantas, organismos vivos, estructuras geológicas. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Objetos fabricados:] dispositivos tecnológicos, construcciones, herramientas, productos manufacturados.
          div(numero="2" titulo="Inmaterial (abstractos)")
            p.mb-4 Carecen de existencia física, pero son reales y estudiados mediante métodos específicos. 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Características:] Construcciones mentales o teóricas, comprendidas por el intelecto y representadas mediante símbolos o modelos. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Ejemplos:] Conceptos teóricos: teorías científicas, modelos matemáticos, principios filosóficos, sistemas de pensamiento. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Fenómenos abstractos: ideas, valores, creencias, conceptos.
          div(numero="3" titulo="Social")
            p.mb-4 Fenómenos surgidos de la interacción humana y las dinámicas sociales. 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Características:] Contextualizados cultural e históricamente, dinámicos y cambiantes, requieren enfoques multidisciplinarios. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Ejemplos:] Fenómenos culturales: tradiciones, rituales, prácticas culturales, manifestaciones artísticas. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Comportamientos colectivos:] movimientos sociales, tendencias, patrones de conducta, interacciones grupales.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/25.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/26.png', alt='')
      .col-lg-8
        LineaTiempoD.color-secundario
          div(numero="4" titulo="Virtuales o digitales")
            p.mb-4 Existen en entornos digitales, combinando elementos materiales e inmateriales. 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Características:] Son dinámicos, interactivos, accesibles mediante tecnología, y requieren metodologías innovadoras. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Ejemplos:] Contenidos digitales: redes sociales, sitios web, bases de datos, aplicaciones. 

              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Interacciones virtuales:] comunidades en línea, realidad virtual, cibercultura, comportamiento digital.
          div(numero="5" titulo="Mixtos o híbridos")
            p.mb-4  Combinan características de varias categorías, abordando fenómenos complejos con enfoques integrales
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Características:] Integran múltiples dimensiones, presentan complejidad metodológica y necesitan abordajes interdisciplinarios. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Ejemplos:] Sistemas sociotécnicos: ciudades inteligentes, redes de comunicación, sistemas educativos, organizaciones modernas. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Fenómenos contemporáneos:] educación virtual, trabajo remoto, comercio electrónico, innovación social.
    #t_1_3.titulo-segundo(data-aos='fade-right')
      h2 #[span 1.3] Ética en la investigación científica
    p.mb-4 La ética es un pilar fundamental en la investigación científica, asegurando que se respeten los derechos de los participantes, se mantenga la integridad en los procesos y se promueva la transparencia al compartir los resultados. Como investigador, tiene la responsabilidad de utilizar el conocimiento que genera de manera responsable, sostenible y honesta, evitando causar daños y maximizando los beneficios para la sociedad.
    .bg-full-width.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Consentimiento informado
            p.mb-0 Antes de involucrar a los participantes, debe informar claramente sobre la naturaleza del estudio y obtener su consentimiento explícito. Esto garantiza que participen de manera voluntaria y con pleno conocimiento de los propósitos y procedimientos de la investigación.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/27.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Confidencialidad
            p.mb-0 Es su responsabilidad proteger la privacidad de los participantes y garantizar que sus datos personales sean manejados con la máxima confidencialidad, evitando cualquier uso indebido.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/28.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Integridad
            p.mb-0 Debe demostrar honestidad y rigor en todos los aspectos de su investigación, desde la recolección de datos hasta la presentación de los resultados, evitando cualquier tipo de manipulación o falsificación.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/29.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Responsabilidad social
            p.mb-0 Su investigación debe enfocarse en aportar beneficios tangibles a la sociedad, promoviendo un impacto positivo y evitando cualquier acción que pueda resultar en perjuicio o daño social, cultural o ambiental.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/30.png', alt='')
    .bg-color-1.p-4.mb-5(data-aos="fade-left" style="background-color: #d6f5fa " )
      .row.align-items-center.mb-0
        .col-lg-auto
          img(src="@/assets/curso/temas/31.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Estos principios son esenciales para garantizar que la práctica investigativa sea íntegra, respetuosa y beneficie a todos los involucrados, asegurando el cumplimiento de los valores éticos fundamentales.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/174693?page=1" target="_blank" rel="noopener noreferrer") Arispe Alburqueque, D., Galarza Ramírez, J., Santoveña Casal, S., Solano Altaba, M., & Marín Marín, J. A. (2020). Fundamentos de la investigación científica. Universidad Nacional Autónoma de México.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/177033?page=4" target="_blank" rel="noopener noreferrer") Avendaño, W. R. (2020). La investigación científica: Una introducción práctica. Editorial Siglo XXI.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/218471?page=3" target="_blank" rel="noopener noreferrer") Aznar Díaz, I., Romero-Rodríguez, J. M., & Rodríguez-García, A. M. (2021). La investigación cualitativa en educación a través de la lente de género y diversidad. Revista Española de Pedagogía, 79(279), 7-22.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249554?page=1" target="_blank" rel="noopener noreferrer") Galarza Ramírez, J., Gregorio Rojas, A., & Solano Altaba, M. (2024). Fundamentos y Métodos de Investigación Científica. Editorial UNAM.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/218623?page=3" target="_blank" rel="noopener noreferrer") Hervás Gómez, C., & Rodríguez-Gallego, M. R. (2020). Investigación educativa: Procedimientos y técnicas. Editorial Síntesis.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/217471?page=4" target="_blank" rel="noopener noreferrer") Marín Marín, J. A., & Boffo, S. (2021). Challenges and innovations in educational research. European Educational Research Journal.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/219323?page=1" target="_blank" rel="noopener noreferrer") Molero Jurado, M. M., Pérez-Fuentes, M. C., Gázquez Linares, J. J., & Simón Márquez, M. M. (2021). Investigación cuantitativa en ciencias sociales. Editorial Dykinson.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/253751?page=1" target="_blank" rel="noopener noreferrer") Ronquillo Murrieta, A., Hervás Gómez, C., & Simón Márquez, M. M. (2024). Métodos y Técnicas de Investigación en Ciencias Sociales. Editorial UNAM.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/173777?page=1" target="_blank" rel="noopener noreferrer") Santoveña Casal, S., Aznar Díaz, I., & Romero-Rodríguez, J. M. (2020). La ética en la investigación social. Revista Española de Pedagogía, 78(275), 231-247.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/217471?page=4" target="_blank" rel="noopener noreferrer") Solano Altaba, M., Marín Marín, J. A., & Arispe Alburqueque, D. (2021). La transferencia del conocimiento en la investigación universitaria. Revista Española de Pedagogía, 79(279), 317-334.
            
            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=Vt1owKXWg2E&t=443s" target="_blank" rel="noopener noreferrer") Universidad Continental. [Universidad Continental]. (2021). Paradigmas y tipos de investigación.

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=Vt1owKXWg2E&t=443s" target="_blank" rel="noopener noreferrer") Videos YouTube Informador. [Videos YouTube Informador]. (2018). Sujeto y Objeto de Estudio.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
