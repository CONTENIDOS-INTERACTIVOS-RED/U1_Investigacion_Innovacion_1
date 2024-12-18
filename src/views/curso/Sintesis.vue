<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(subTitulo="SÍNTESIS")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-up").mb-5 La Unidad 1, Fundamentos del diseño de proyectos, tiene como propósito que los estudiantes comprendan y gestionen proyectos de manera efectiva, esta unidad ofrece las bases conceptuales necesarias, explorando la definición y tipos de proyectos para distinguir entre diferentes iniciativas. Se analizará el ciclo de vida del proyecto, describiendo sus fases desde la concepción hasta la finalización, brindando una visión integral del proceso de planificación y ejecución. Un aspecto necesario es la identificación de necesidades y oportunidades, enfatizando la importancia de detectar problemas y áreas de mejora que justifiquen nuevos proyectos. También se profundizará en el diseño de objetivos claros y establecimiento de indicadores 
      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
</template>
<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
import Footer from '../../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
