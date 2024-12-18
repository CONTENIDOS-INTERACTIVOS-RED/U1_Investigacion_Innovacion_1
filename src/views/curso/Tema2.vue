<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Fases del ciclo de vida del proyecto.'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cuando hablamos del ciclo de vida nos referimos a aquellas fases en las cuales estructuramos todo aquello que necesitamos hacer a lo largo del proyecto, pasando de la identiﬁcación, al diseño o planiﬁcación, posteriormente a su implementación y ﬁnalizando en la evaluación y difusión de los resultados. (Cerezuela y Ollé, 2018). 

        p(data-aos="fade-left") El ciclo de vida de un proyecto es un marco que describe las etapas que atraviesa un proyecto desde su inicio hasta su cierre. Este ciclo ayuda a los gerentes de proyectos a planificar, ejecutar y evaluar proyectos de manera más efectiva.

        p(data-aos="fade-left") #[strong En términos generales las etapas del ciclo de vida de un proyecto comprenden:]

    p(data-aos="fade-left") #[strong Figura 2.] Ciclo de vida de un proyecto 

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/tema2/figura2.png", alt="")

    p(data-aos="fade-left") La gestión de proyectos comienza al transformar ideas en iniciativas concretas, evaluando su viabilidad y alineación con los objetivos organizacionales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Diagnóstico y conceptualización
              p La idea del proyecto puede surgir de diversas maneras, ya sea como reacción a cambios en políticas o directrices, o de forma interna dentro de la organización. En esta etapa, se identifica y registra el problema o la oportunidad que podría originar el proyecto. Se recomienda el uso de técnicas como diagramas de causa-efecto, encuestas de calidad y técnicas creativas para la generación de ideas.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/slider-1.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Análisis de viabilidad
              p Una vez detectadas las oportunidades, se evalúa su viabilidad técnica y económica para facilitar la toma de decisiones. Este análisis permite identificar limitaciones, descubrir oportunidades, definir requisitos, evaluar opciones y alcanzar un consenso sobre el rumbo del proyecto, utilizando metodologías cuantitativas y cualitativas.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/slider-2.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Selección del proyecto
              p Una vez detectadas las oportunidades, se evalúa su viabilidad técnica y económica para facilitar la toma de decisiones. Este análisis permite identificar limitaciones, descubrir oportunidades, definir requisitos, evaluar opciones y alcanzar un consenso sobre el rumbo del proyecto, utilizando metodologías cuantitativas y cualitativas.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/slider-3.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Definición formal y aprobación
              p Tras seleccionar el proyecto, se realiza una definición inicial a alto nivel. Esto incluye establecer la visión, objetivos alineados con la estrategia organizacional y objetivos SMART. También se define el alcance, los entregables, plazos y recursos necesarios, además de identificar a los interesados, sus expectativas e influencia en el proyecto.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema2/slider-4.png")

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Planeación  

    p(data-aos="fade-left") La planificación de un proyecto implica concretar los objetivos a alcanzar y detallar las actividades necesarias para lograrlos. Esto incluye desglosar el trabajo en paquetes y asignarles los recursos adecuados, estimar su duración y costo, e integrarlas en un cronograma, estableciendo su relación con otras tareas. También se debe planificar la gestión de la calidad, la interacción con todas las partes interesadas, la comunicación de avances y resultados, así como la administración del equipo y los recursos materiales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[strong Documentación del proyecto:] registro claro de las fases, objetivos y requerimientos.
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[strong Estrategias de comunicación:] definir cómo y cuándo se informará a las partes interesadas.
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[strong Identificación de actividades:] descripción detallada de las tareas a realizar.
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[strong Duración:] estimación de tiempo para cada actividad.
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[strong Recursos (costos y presupuestos):] asignación de presupuesto y recursos humanos y materiales.
            .row.justify-content-center.align-items-center(data-aos="fade-up")
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[strong Posibles riesgos:] identificación y evaluación de posibles obstáculos o problemas.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/3.png')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Ejecución del proyecto  
    
    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La fase de ejecución es el momento clave del proyecto. Las tareas planificadas se están llevando a cabo, se están generando los resultados o entregables parciales previstos, el equipo está dedicado a las actividades, se emplean los recursos materiales, se incurren en costos y el cronograma avanza. En esta etapa, el gestor del proyecto se enfoca en la gestión diaria, asegurando que las tareas se realicen, supervisando al equipo, garantizando la calidad tanto del proceso como del producto, gestionando las expectativas de los interesados, administrando recursos económicos, humanos y materiales, resolviendo incidencias y tomando decisiones oportunas.

        p(data-aos="fade-left") Las etapas de la ejecución de un proyecto incluyen varios aspectos clave que aseguran su correcto desarrollo:


    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Lanzamiento del proyecto" :icon="require('@/assets/bullets/tab-2-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Alcance
            p Marca el inicio oficial de la ejecución, comunicando el comienzo del proyecto al equipo y a los interesados. Se revisan los objetivos, el alcance, los roles y responsabilidades, así como el cronograma, asegurando los recursos necesarios para iniciar las tareas.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gestión de incidencias y cambios" :icon="require('@/assets/bullets/tab-2-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Gestión de incidencias y cambios
            p En esta etapa, se gestionan los imprevistos que surgen y que pueden afectar el plan original. Implica identificar, evaluar y resolver incidencias, además de gestionar cualquier cambio en el alcance, cronograma o presupuesto para que no comprometan el éxito del proyecto.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gestión de los interesados" :icon="require('@/assets/bullets/tab-2-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Gestión de los interesados
            p Consiste en mantener una relación activa con todos los involucrados, alineando sus expectativas con los resultados del proyecto mediante comunicación efectiva y gestión de conflictos o ajustes en sus necesidades a lo largo del proceso.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/12.png', alt='', style="width: 100%;")

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Seguimiento y control del proyecto y de las tareas

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una vez que el proyecto inicia, el gestor se encarga de supervisar su desarrollo diario, asegurándose de que se ejecuten las tareas necesarias para verificar los requisitos y generar los entregables acordados. Esto incluye documentar el trabajo a través de informes, actualizar los planes del proyecto y realizar previsiones. Este proceso iterativo se lleva a cabo durante toda la duración del proyecto, manteniendo el avance conforme a lo planificado en términos de alcance, costos, tiempo y calidad.

        p(data-aos="fade-left") Además, la evaluación del proyecto puede apoyarse en herramientas como gráficos de Gantt para el seguimiento de tareas, matrices de riesgos para identificar y mitigar problemas, y software de gestión de proyectos que facilite la colaboración y comunicación del equipo. También se emplean técnicas como revisiones periódicas y reuniones de seguimiento para ajustar el enfoque según sea necesario y asegurar que el proyecto esté alineado con los objetivos establecidos.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Cierre del proyecto

    //p(data-aos="fade-left").mb-4 Al llegar al final del proyecto y haber producido todos los entregables, estos deben ser entregados al cliente. La forma de entrega depende del tipo de proyecto; por ejemplo, en proyectos de investigación o consultoría, puede incluir una serie de documentos, mientras que en otros casos podría implicar la implementación de un sistema de información, la provisión de un servicio documental o la instalación de una herramienta tecnológica. Además, es fundamental asegurarse de que el cliente reciba la capacitación necesaria para utilizar los entregables de manera adecuada.
        
    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        
        p(data-aos="fade-left").mb-4 Al llegar al final del proyecto y haber producido todos los entregables, estos deben ser entregados al cliente. La forma de entrega depende del tipo de proyecto; por ejemplo, en proyectos de investigación o consultoría, puede incluir una serie de documentos, mientras que en otros casos podría implicar la implementación de un sistema de información, la provisión de un servicio documental o la instalación de una herramienta tecnológica. Además, es fundamental asegurarse de que el cliente reciba la capacitación necesaria para utilizar los entregables de manera adecuada.
        
        .bg-color-4.py-4.px-5(data-aos="fade-left").mb-4

          p.mb-4 Lo invitamos a navegar el documento Cierre del proyecto, en el cual podrá conocer los aspectos principales del proceso de cierre del proyecto, detectar necesidades y oportunidades para el diseño del proyecto, así como conocer las herramientas como FODA y PESTEL para analizar los factores internos y externos que permiten identificar áreas de mejora y oportunidades en proyectos sociales y de inversión. 

          a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo. </strong> Cierre del proyecto

    //- .bg-full-width.bg-color-4
    //-   .px-4.p-md-5
    //-     .row.justify-content-center.align-items-center
    //-       .col-lg-7
    //-         h2.mb-4(data-aos="flip-up") Cierre del proyecto
    //-         p.mb-4(data-aos="fade-right") Lo invitamos a navegar el documento Cierre del proyecto, en el cual podrá conocer los aspectos principales del proceso de cierre del proyecto, detectar necesidades y oportunidades para el diseño del proyecto, así como conocer las herramientas como FODA y PESTEL para analizar los factores internos y externos que permiten identificar áreas de mejora y oportunidades en proyectos sociales y de inversión. 

    //-         a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
    //-           .anexo__icono(:style="{'background-color': '#FCDFDB'}")
    //-             img(src="@/assets/template/icono-pdf.svg")
    //-           .anexo__texto
    //-             p <strong>Anexo. </strong> Cierre del proyecto

    //-       .col-lg-5
    //-         figure(data-aos="zoom-in")
    //-           img(src='@/assets/curso/tema3/9.png', alt='')
    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
