<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p.mb-4 Seguramente, a lo largo de su vida, se han presentado fenómenos que despiertan curiosidad o problemas que lo llevan a investigar más a fondo. Esta necesidad natural de aprender y encontrar respuestas es esencial para el progreso de la sociedad.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #cff7e4 ")
          p.mb-0 La investigación científica formaliza este proceso de adquisición y construcción de conocimiento. En esta unidad, se presentan los conceptos básicos, características y métodos que sustentan la investigación en diversos contextos. En un mundo que plantea constantes desafíos, comprender cómo se genera y valida el conocimiento resulta clave para cualquier profesional. Además, desarrollar habilidades investigativas fortalece la capacidad crítica y analítica en las actividades cotidianas.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/1.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.png', alt='')
      .col-lg-8
        p.mb-4 Al finalizar esta unidad, se comprenderán los principios de la investigación científica y se podrán aplicar diversos enfoques metodológicos para diseñar investigaciones en el área de desempeño. Estas habilidades representan un elemento diferenciador en el entorno laboral, valorado tanto para la toma de decisiones informadas como para generar soluciones innovadoras o destacar frente a las existentes.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #ecd4fe " )
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/temas/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Se sugiere contar con conocimientos básicos en lógica y lectura crítica para aprovechar plenamente este aprendizaje. Se invita a explorar las oportunidades que ofrece la investigación científica, donde cada pregunta representa una oportunidad para descubrir y entender mejor el entorno.

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
