<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p(data-aos="fade-up") En esta primera unidad, titulada Fundamentos del diseño de proyectos, se abordan los conceptos esenciales para entender qué es un proyecto, sus tipos, y las fases que componen su ciclo de vida, también conocerán cómo identificar necesidades y oportunidades para el diseño de proyectos, así como a establecer objetivos, indicadores y resultados esperados.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-up")
          p.mb-0 Al finalizar, se espera que los estudiantes comprendan los principios del diseño de proyectos y sean capaces de formular ideas claras y estructuradas para su desarrollo en el contexto de su área profesional. Este resultado de aprendizaje tiene como objetivo que adquieran las bases necesarias para participar activamente en el diseño, gestión y evaluación de proyectos, conocimientos vitales en el ejercicio profesional.
      .col-lg-4
        figure(data-aos="fade-up")
          img(src='@/assets/curso/intro/1.png', alt='Texto que describa la imagen')
      .col-lg-4
        .bg-color-2.p-4(data-aos="fade-up")
          p.mb-0 Al finalizar, se espera que los estudiantes comprendan los principios del diseño de proyectos y sean capaces de formular ideas claras y estructuradas para su desarrollo en el contexto de su área profesional. Este resultado de aprendizaje tiene como objetivo que adquieran las bases necesarias para participar activamente en el diseño, gestión y evaluación de proyectos, conocimientos vitales en el ejercicio profesional.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
