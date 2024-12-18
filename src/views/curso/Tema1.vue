<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definición de proyecto y tipos de proyectos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden

    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El término "proyecto" se refiere a una actividad destinada a ofrecer una solución específica y única a un problema o necesidad identificada en algún contexto (personal, social o empresarial). Esta solución puede materializarse en forma de un producto o servicio, ya sea tangible o intangible. A continuación, se presenta una caracterización de los proyectos y los distintos tipos que existen.

        p(data-aos="fade-left") La gestión de proyectos no es una actividad reciente. Sin embargo, fue en la década de los ochenta cuando las metodologías de gestión comenzaron a adoptarse ampliamente en áreas organizativas más allá de las operaciones o la ingeniería.

      .col-lg-4
        figure
            img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")

    .row.mb-5
      .col-lg-4
        figure(data-aos="fade-right")
          img(src="@/assets/curso/tema1/3.png", alt="Texto que describa la imagen")
      .col-lg-8
        LineaTiempoD.color-primario.large
          p(numero="1" titulo="Inicio histórico") El primer proyecto reconocido data de aproximadamente 2550 a.C., con la construcción de la pirámide de Gizeh.
          p(numero="2" titulo="Siglo XX: primeras estandarizaciones") En los años sesenta, surgieron esfuerzos para estandarizar la gestión de proyectos con la creación de organismos internacionales. En la década de los ochenta, estas metodologías comenzaron a adoptarse ampliamente, marcando un hito en la disciplina al dejar de asociarse únicamente con la gestión técnica, posicionando al director de proyectos como un gestor integral.
          div(numero="3" titulo="Década de los ochenta a 2010") 
            p - Evolución significativa impulsada por la globalización y la creciente complejidad organizativa. 
            p - Aparición de guías como el PMBOK y la metodología PRINCE2, que consolidaron buenas prácticas y procedimientos. 
            p - Expansión de la gestión de proyectos a sectores como telecomunicaciones, construcción e informática. 
            p - Con el avance de internet en los años noventa, los proyectos se volvieron interconectados, facilitando la gestión global pero planteando retos de coordinación y comunicación.
          div(numero="4" titulo="Siglo XXI: digitalización") 
            p - La digitalización y herramientas como Microsoft Project transformaron la gestión de proyectos, permitiendo monitoreo y control en tiempo real. 
            p - Aparición de metodologías ágiles como Scrum y Kanban, diseñadas para entornos dinámicos que requieren flexibilidad.
          div(numero="5" titulo="Actualidad") 
            p Hoy en día, la gestión de proyectos es esencial en sectores como tecnología, finanzas, educación y salud. Las herramientas digitales y metodologías avanzadas impulsan la innovación y el cumplimiento de objetivos estratégicos, asegurando una coordinación más eficiente de tareas, recursos y equipos.

    h2(data-aos="fade-left") ¿Qué es un proyecto?
    p(data-aos="fade-left") Un proyecto es un esfuerzo temporal con un inicio y un fin definidos, que se realiza con el propósito de crear un producto, servicio o resultado único. Los proyectos surgen para dar respuesta a una necesidad específica, ya sea la solución de un problema, la explotación de una oportunidad o el desarrollo de una idea. Cada proyecto es distinto, y su ejecución implica la planificación y organización de recursos limitados para alcanzar objetivos claros dentro de plazos y presupuestos determinados.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/4.png", alt="")
          .col-lg-8
            .bg-color-3.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Un proyecto debe permitir transformar una idea general en un producto o servicio específico. Sin embargo, no es necesario que siempre culmine con la producción o implementación de dicho producto o servicio, ya que puede limitarse únicamente a su diseño. Es decir, un proyecto puede enfocarse solo en el diseño, o en la ejecución, o en ambos aspectos. Por ejemplo, en el desarrollo de aplicaciones, un proyecto podría centrarse en la creación conceptual, identificando las necesidades del cliente, alineándose con su estrategia, recopilando requisitos y definiendo las funcionalidades. No obstante, la implementación final del diseño podría ser realizada por otra organización.

        p(data-aos="fade-left") Al examinar las definiciones ofrecidas por las metodologías de gestión de proyectos más establecidas, como PMBOK o PRINCE2, es posible identificar ciertos elementos comunes que pueden considerarse características fundamentales.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 «Un proyecto es un esfuerzo temporal que se lleva a cabo para crear un producto, servicio o resultado único». PMBOK (PMI, 2013, pag. 3)
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 «Un proyecto es una organización temporal que se crea con el propósito de entregar uno o más productos comerciales según un Business Case acordado». PRINCE2 (OGC, 2009)

    p(data-aos="fade-left") Las características de los proyectos son: 

    .bg-color-3.px-4.pt-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/infografias/1b.png', alt='', style="max-width: 840px;").mx-auto


            .bg-color-white.p-3(x="48%" y="83%" numero="+")
              h5 01. Temporalidad
              p Todo proyecto tiene un inicio y un fin claramente definidos. Su duración es limitada y su objetivo es alcanzar los resultados propuestos dentro de un plazo específico.

            .bg-color-white.p-3(x="78.5%" y="75%" numero="+")
              h5 02. Resultado único
              p Un proyecto busca generar un producto, servicio o resultado único y distintivo. A diferencia de las operaciones rutinarias, los proyectos no son repetitivos.
              
            .bg-color-white.p-3(x="57%" y="65%" numero="+")
              h5 03. Objetivos específicos
              p Los proyectos se diseñan para cumplir metas claras y concretas, que responden a necesidades específicas, como resolver un problema o aprovechar una oportunidad.
              
            .bg-color-white.p-3(x="22%" y="65%" numero="+")
              h5 04. Multidisciplinariedad
              p Los proyectos suelen involucrar a equipos de diferentes disciplinas y áreas de especialización, abordando el problema o la oportunidad desde diversas perspectivas.
              
            .bg-color-white.p-3(x="28%" y="44%" numero="+")
              h5 05. Incertidumbre y riesgo
              p Todos los proyectos implican un grado de incertidumbre, ya que se desarrollan en entornos cambiantes. La gestión de riesgos es clave para minimizar los impactos negativos.
              
            .bg-color-white.p-3(x="64.5%" y="45%" numero="+")
              h5 06. Recursos limitados
              p Un proyecto se lleva a cabo con recursos finitos (tiempo, dinero, personas, materiales, etc.) que deben administrarse eficientemente para alcanzar los objetivos.
              
            .bg-color-white.p-3(x="57%" y="26%" numero="+")
              h5 07. Progresividad
              p Los proyectos se desarrollan en fases o etapas, donde se monitorean avances y se realizan ajustes conforme se ejecutan las actividades planificadas.
                

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] ¿Qué es la gestión de proyectos?

    .row.align-items-stretch.mb-5
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4.h-100
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un proyecto debe permitir transformar una idea general en un producto o servicio específico. Sin embargo, no es necesario que siempre culmine con la producción o implementación de dicho producto o servicio, ya que puede limitarse únicamente a su diseño. Es decir, un proyecto puede enfocarse solo en el diseño, o en la ejecución, o en ambos aspectos. Por ejemplo, en el desarrollo de aplicaciones, un proyecto podría centrarse en la creación conceptual, identificando las necesidades del cliente, alineándose con su estrategia, recopilando requisitos y definiendo las funcionalidades. No obstante, la implementación final del diseño podría ser realizada por otra organización.

      .col-lg-4
        figure(data-aos="fade-right").h-100
          img(src="@/assets/curso/tema1/9.png", alt="")

    p(data-aos="fade-left") La gestión de proyectos requiere un enfoque estructurado que abarca diversas acciones clave. Estas son desglosadas en la siguiente tabla para facilitar su comprensión:
    

    .row.mb-5
      .col-lg-4
        figure(data-aos="fade-right")
          img(src="@/assets/curso/tema1/10.png", alt="Texto que describa la imagen")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Identificación de requisitos")
            p Es fundamental documentar y cuantificar las necesidades y expectativas de los clientes y demás partes interesadas de manera clara.

          .div(titulo="Establecimiento de objetivos")
            p Los objetivos deben ser específicos, medibles, alcanzables, relevantes y definidos en un tiempo determinado, siguiendo los criterios SMART.

          .div(titulo="Equilibrio de factores")
            p La gestión de proyectos implica equilibrar elementos como el alcance, el tiempo, el presupuesto, la calidad y los recursos asignados.

          .div(titulo="Naturaleza multidisciplinar")
            p Requiere la participación de equipos provenientes de distintas disciplinas y áreas de especialización, lo que permite abordar problemas y oportunidades desde múltiples perspectivas.

          .div(titulo="Habilidades especializadas")
            p Involucra conocimientos técnicos y competencias específicas para gestionar las diversas etapas y desafíos del proyecto.

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Este enfoque asegura una gestión efectiva y colaborativa, maximizando las probabilidades de éxito del proyecto. La gestión de las restricciones del proyecto es un aspecto esencial para una gestión efectiva. El concepto de triple restricción es tradicionalmente utilizado para referirse a los elementos críticos o restricciones en el proyecto, que deben gestionarse de manera equilibrada: el alcance, el costo y el tiempo. Este concepto se representa visualmente mediante un triángulo equilátero, en el que cada vértice corresponde a uno de estos elementos. El arte de la gestión radica en mantener el equilibrio entre estos factores, que están claramente interrelacionados y son interdependientes.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/11.png', alt='')

    p(data-aos="fade-left") #[strong Figura 1.] Triángulo  de restricciones

    .bg-color-3.px-4.py-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src='@/assets/curso/tema1/12.png', alt='', style="max-width: 515px").mx-auto

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        TabsC.color-acento-contenido.mb-5
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Alcance" :icon="require('@/assets/bullets/tab-1.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
                h4 Alcance
                p Se refiere a la definición precisa de los límites del proyecto, es decir, lo que se incluye y lo que se excluye. Una restricción en el alcance puede surgir con cambios en los requisitos del cliente o en las expectativas de las partes interesadas, lo que podría incrementar el trabajo requerido y complicar la gestión del proyecto.
            
              .col-md-6.col-lg-5.col-xl-4
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/13.png', alt='')
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Costo" :icon="require('@/assets/bullets/tab-2.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
                h4 Costo
                p Implica el presupuesto asignado para llevar a cabo el proyecto. Cualquier incremento en los gastos, ya sea por recursos adicionales, cambios en el alcance o imprevistos, puede afectar la viabilidad financiera del proyecto. Es esencial gestionar y controlar los costos para evitar desviaciones que comprometan el éxito del proyecto.
            
              .col-md-6.col-lg-5.col-xl-4
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/14.png', alt='')

          .tabs-content.border.px-4.p-md-5.py-3(titulo="Tiempo" :icon="require('@/assets/bullets/tab-3.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
                h4 Tiempo
                p Se refiere a los plazos establecidos para completar el proyecto. El gestor del proyecto debe mantener el cronograma planificado, ya que los retrasos pueden generar un efecto dominó, impactando el alcance y el costo. La gestión del tiempo implica la coordinación eficiente de actividades y recursos para cumplir los plazos sin sacrificar la calidad del resultado final.    
              .col-md-6.col-lg-5.col-xl-4
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/15.png', alt='', style="width: 100%;")


        p(data-aos="fade-left") El éxito de un proyecto no siempre está asegurado y su medición varía según cada situación. Los motivos más comunes de fracaso incluyen: 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/16.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 No haber logrado los objetivos y resultados planteados.
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/17.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Haber excedido el tiempo, costo o recursos estipulados.
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/18.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 No alcanzar los estándares de calidad esperados.
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/19.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 La insatisfacción del cliente con el resultado final.

    .bg-full-width.bg-color-4
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Tipos de proyectos
            p.mb-4(data-aos="fade-right") En el documento Tipos de Proyectos , se presentan clasificaciones según su naturaleza, área funcional y fines, destacando proyectos dependientes, sociales, productivos y de infraestructura, entre otros. Cada tipo aborda necesidades específicas con ejemplos prácticos. Se invita a consultar el documento para ampliar esta información.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de proyectos

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='')
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
