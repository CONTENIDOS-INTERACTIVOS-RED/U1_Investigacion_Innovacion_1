<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tipos de investigación'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Tras revisar los conceptos fundamentales de la investigación científica, es crucial explorar los diferentes tipos de investigación. Dado el amplio campo del conocimiento, existen múltiples enfoques para llevar a cabo investigaciones, cada uno adaptado a las necesidades específicas del tema de estudio.
        .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #ecd4fe " )
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La investigación puede adoptar diversas formas, con características y objetivos particulares. Como investigador, es su responsabilidad seleccionar el enfoque más adecuado para su estudio, lo que contribuirá a obtener resultados sólidos y significativos.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/33.png', alt='')
    p.mb-4 Al elegir el tipo de investigación, es importante considerar factores como la profundidad del análisis, el alcance del estudio y las herramientas y métodos que se utilizarán. Cada enfoque presenta ventajas y desafíos únicos, por lo que una evaluación cuidadosa permitirá determinar cuál es el más adecuado para alcanzar los objetivos planteados.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2. 
      span Tipos de investigación científica.
    img.mb-4(src='@/assets/curso/temas/34.svg', alt='')
    p.mb-4 A continuación, se amplía la información relacionada con los criterios más usados para clasificar los tipos de la investigación científica:
    #t_2_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.1] Según sus datos: cualitativa, cuantitativa
    p.mb-4 La investigación puede clasificarse según su propósito y profundidad. Estas clasificaciones permiten abordar el fenómeno de estudio de manera estructurada, enfocándose en objetivos específicos y adoptando las metodologías adecuadas. A continuación, se describen las principales clasificaciones y sus características.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Investigación básica")
            p.mb-4 Busca ampliar el conocimiento teórico sin aplicaciones inmediatas. Se enfoca en generar fundamentos para avances científicos futuros. 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0  Características: Generación de teorías, descubrimiento de leyes científicas, desarrollo de conceptos y uso de metodologías rigurosas. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Ejemplo: Estudio sobre las propiedades físicas de un nuevo material sin fines comerciales.
          div(numero="2" titulo="Investigación aplicada")
            p.mb-4 Usa el conocimiento teórico para resolver problemas prácticos. Se orienta a obtener resultados tangibles y útiles. 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Características: Resolución de problemas concretos, innovación tecnológica, flexibilidad metodológica y proyectos a corto o mediano plazo. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Ejemplo: Desarrollo de un fármaco para tratar una enfermedad.
          div(numero="3" titulo="Investigación acción")
            p.mb-4 Enfoque participativo que involucra a los sujetos de estudio para identificar y resolver problemas colaborativamente. 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Características: Integración de investigación con práctica, generación de conocimiento transformador y promoción del cambio social. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Ejemplo: Proyecto escolar para mejorar el rendimiento académico mediante la colaboración entre maestros y estudiantes.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/35.png', alt='')
    p.mb-4 La clasificación de la investigación según su profundidad es fundamental para definir el alcance y el propósito del estudio. Dependiendo de los objetivos y del nivel de detalle deseado, la investigación puede ser exploratoria, descriptiva o explicativa. Cada tipo tiene características específicas que determinan su enfoque metodológico y sus aplicaciones prácticas.
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/36.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-white.p-3(x="9%" y="56%" numero="+")
        .h5.mb-2 Investigación exploratoria
        p Aborda áreas poco estudiadas para generar hipótesis preliminares. Es un primer acercamiento sistemático a fenómenos nuevos. 
          br
          |Características: Metodología flexible, identificación de variables, generación de preguntas y base para estudios posteriores. 
          br
          |Ejemplo: Estudio sobre hábitos de consumo de un nuevo producto.
      .tarjeta.bg-white.p-3(x="80.9%" y="28.3%" numero="+")
        .h5.mb-2 Investigación descriptiva
        p Se centra en describir características específicas de fenómenos o poblaciones. Ofrece una imagen precisa y sistemática del objeto de estudio. 
          br
          |Características: Diagnóstico detallado, metodología estructurada y uso de instrumentos validados. 
          br
          |Ejemplo: Un censo que detalla la población de una región.
      .tarjeta.bg-white.p-3(x="91%" y="54.5%" numero="+")
        .h5.mb-2 Investigación explicativa 
        p Busca establecer relaciones de causa y efecto entre variables. Profundiza en los mecanismos que generan los fenómenos estudiados. 
          br
          |Características: Diseños experimentales, control de variables, análisis multivariado y validación de modelos teóricos. 
          br
          |Ejemplo: Estudio sobre cómo la educación afecta el ingreso económico.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #d6f5fa ")
          p.mb-4 Estas clasificaciones permiten elegir el enfoque adecuado para abordar diferentes preguntas y objetivos de investigación, adaptándose a las necesidades del estudio y al contexto del fenómeno investigado.
          .d-flex.justify-content-end
            img(src='@/assets/curso/temas/37.svg', alt='' style='width: 90px')
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.png', alt='')
      .col-lg-4
        .tarjeta.p-4(style="background-color: #ecd4fe ")
          p.mb-0 La investigación puede clasificarse según su enfoque en tres tipos principales: cualitativa, cuantitativa y mixta. Cada tipo tiene características, objetivos y metodologías específicas que se ajustan a las necesidades del fenómeno estudiado y a las preguntas de investigación planteadas. A continuación, se describen estas clasificaciones:
    .bg-full-width.bg-slyder.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Investigación cualitativa
            p.mb-0 Este enfoque se centra en comprender fenómenos sociales y humanos mediante datos no numéricos. Permite explorar significados, experiencias y perspectivas en su contexto natural. 
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Características: Analiza datos no numéricos, estudia contextos naturales, genera teorías inductivas y utiliza metodologías flexibles como entrevistas, observación participante y análisis documental. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 Ejemplo: Entrevistas o grupos focales para explorar actitudes hacia un tema social.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/39.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Investigación cuantitativa
            p.mb-0 Basada en datos numéricos, utiliza análisis estadísticos para medir variables y probar hipótesis. Su objetivo principal es generalizar resultados y obtener conclusiones precisas. 
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Características:] Trabaja con datos numéricos, aplica análisis estadísticos, prueba hipótesis y busca generalizar resultados. Utiliza diseños metodológicos estructurados, escalas de medición y herramientas como encuestas y pruebas estadísticas. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Ejemplo:] Encuestas cerradas para medir niveles de satisfacción.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/40.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Investigación mixta
            p.mb-0 Combina enfoques cualitativos y cuantitativos para lograr una visión más completa del fenómeno estudiado. Integra métodos, triangula datos y valida resultados para obtener una comprensión más rica y profunda. 
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Características:] Integra metodologías, combina datos diversos, permite múltiples perspectivas de análisis y ofrece una comprensión holística del fenómeno. 
              li.d-flex
                i.fas.fa-angle-left
                p.mb-0 #[b Ejemplo:] Investigación que analiza datos estadísticos y realiza entrevistas para explorar un fenómeno social desde diferentes perspectivas.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/41.png', alt='')
    p.mb-4 Esta clasificación permite seleccionar el enfoque más adecuado para las necesidades del estudio, combinando técnicas y métodos cuando sea necesario para lograr una comprensión más integral del fenómeno investigado.
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Paradigmas y tipos de investigación.
                  p Para ampliar sus conocimientos sobre los aspectos de investigación que ha estudiado, se le sugiere explorar el siguiente vídeo:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right
    p.mb-4 Los métodos de investigación son técnicas y procedimientos sistemáticos para recopilar, analizar e interpretar datos. Pueden ser cualitativos, cuantitativos o mixtos, dependiendo del objetivo del estudio y del enfoque necesario para comprender o resolver el problema planteado.
    .bg-full-width.bg-color-2(style="background-color: #e7eff8")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Métodos de investigación
            p.mb-4(data-aos="fade-right") En el documento Métodos de Investigación , se exploran los enfoques cuantitativos, cualitativos y mixtos, destacando cómo cada uno permite abordar problemas científicos desde perspectivas diversas. Se invita a revisar el contenido para profundizar en las características, aplicaciones y herramientas que estos métodos ofrecen en el análisis y resolución de fenómenos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexos_Métodos_de_investigación.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Métodos de investigación.
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/42.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/174693?page=1" target="_blank" rel="noopener noreferrer") Arispe Alburqueque, D., Galarza Ramírez, J., Santoveña Casal, S., Solano Altaba, M., & Marín Marín, J. A. (2020). Fundamentos de la investigación científica. Editorial Universidad Nacional Autónoma de México.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/253751?page=1" target="_blank" rel="noopener noreferrer") Ronquillo Murrieta, A., Hervás Gómez, C., & Simón Márquez, M. M. (2024). Métodos y Técnicas de Investigación en Ciencias Sociales. Editorial UNAM.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/227822?page=1" target="_blank" rel="noopener noreferrer") Simón Márquez, M. M., Molero Jurado, M. M., Pérez-Fuentes, M. C., & Gázquez Linares, J. J. (2022). Metodología de la investigación en ciencias sociales. Editorial Dykinson.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249554?page=1" target="_blank" rel="noopener noreferrer") Galarza Ramírez, J., Gregorio Rojas, A., & Solano Altaba, M. (2024). Fundamentos y Métodos de Investigación Científica. Editorial McGraw-Hill.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/163526" target="_blank" rel="noopener noreferrer") Hervás Gómez, C., & Rodríguez-Gallego, M. R. (2020). Investigación educativa: Procedimientos y técnicas. Editorial Síntesis.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/173777?page=1" target="_blank" rel="noopener noreferrer") Santoveña Casal, S., Aznar Díaz, I., & Romero-Rodríguez, J. M. (2020). La ética en la investigación social. Revista Española de Pedagogía, 78(275), 231-247.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/253751?page=1" target="_blank" rel="noopener noreferrer") Ronquillo Murrieta, A., Hervás Gómez, C., & Simón Márquez, M. M. (2024). Métodos y Técnicas de Investigación en Ciencias Sociales. Editorial UNAM.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/173777?page=1" target="_blank" rel="noopener noreferrer") Santoveña Casal, S., Aznar Díaz, I., & Romero-Rodríguez, J. M. (2020). La ética en la investigación social. Revista Española de Pedagogía, 78(275), 231-247.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/227822?page=1" target="_blank" rel="noopener noreferrer") Simón Márquez, M. M., Molero Jurado, M. M., Pérez-Fuentes, M. C., & Gázquez Linares, J. J. (2022). Metodología de la investigación en ciencias sociales. Editorial Dykinson.
            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://youtu.be/HQNq_TV2uhI?si=LqNsFqWHQnOX1Fw3" target="_blank" rel="noopener noreferrer") Vivas Málaga, P. [Crehana]. (2021, 15 de junio). La investigación científica tipos y metodologías

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
