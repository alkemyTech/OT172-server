'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', [

      {
        name: 'La donacion de Lionel Messi',
        content: `
        <p>&nbsp;</p><p>El astro argentino Lionel Messi donó medio millón de euros a la Fundación Garrahan para la lucha contra la pandemia de coronavirus, informó este lunes esa institución sanitaria mediante un comunicado.</p><p>El aporte se realizó a través de la Fundación Messi en el marco de la campaña de recaudación "Juntos por la Salud Argentina", que tiene como objetivo la compra de insumos y equipamientos para el tratamiento de la enfermedad provocada por el Covid-19.</p><p>&nbsp;</p><p>Con el aporte del capitán del seleccionado argentino, la Fundación Garrahan realizó diferentes inversiones en distintas instituciones de salud varias provincias, como el - Hospital José María Cullen de Santa Fe, el Hospital Provincial del Centenario en Rosario, el Hospital del Bicentenario de Esteban Echeverría, en el conurbano bonaerense,el Hospital de Alta Complejidad Cuenca Alta en Cañuelas y el Hospital Zonal de Agudos General Constituyentes “Manuel Belgrano” de San Martín.</p><p>Asimismo, el aporte de Messi permitió la importación de cinco equipos de ventilación de alta frecuencia y elementos de protección para el personal del sistema de salud, detalló el comunicado de la Fundación Garrahan.</p>
        `,
        image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652724442193-tmp-1-1652724442174',
        type: 'news',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Consejos para la poblacion',
        content: `
        <p><strong>Todo sobre las mascarillas en el contexto de la COVID-19</strong></p><p>&nbsp;</p><p>&nbsp;</p><p>Las mascarillas deben utilizarse como parte de una estrategia integral de medidas para suprimir la transmisión y salvar vidas; el uso de una mascarilla por sí sola no basta para proporcionar una protección adecuada contra la COVID-19.</p><p>Si la COVID-19 se propaga en su comunidad, cuídese adoptando algunas precauciones sencillas, por ejemplo, manteniendo el distanciamiento físico, llevando mascarilla, ventilando bien las habitaciones, evitando las aglomeraciones, lavándose las manos y cubriéndose la boca y la nariz con el codo flexionado o con un pañuelo al toser. Consulte las recomendaciones de su lugar de residencia y trabajo. <strong>Todas las medidas son necesarias.</strong></p><p><strong>Convierta el uso de la mascarilla en una parte normal de su interacción con otras personas.</strong> <strong>Para que sean lo más eficaces posibles, es esencial utilizar, guardar, limpiar y eliminar las mascarillas correctamente.</strong></p><p>Indicaciones básicas sobre la manera de <a href="https://youtu.be/ciUniZGD4tY">ponerse la mascarilla</a>:</p><ul><li>Lávese las manos antes de ponerse la mascarilla, y también antes y después de quitársela, y cada vez que la toque.</li><li>Compruebe que le cubre la nariz, la boca y el mentón.</li><li>Cuando se quite la mascarilla, guárdela en una bolsa de plástico limpia; si es de tela lávela cada día y si es una mascarilla médica, tírela a un cubo de basura.</li><li>No utilice mascarillas con válvulas.</li></ul><p>Si desea más detalles sobre qué tipo de mascarilla utilizar y cuándo, consulte nuestra sección de <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-on-covid-19-and-masks">Preguntas y respuestas</a>. También hay una página de Preguntas y respuestas sobre <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-children-and-masks-related-to-covid-19">los niños y las mascarillas</a></p><p><i>En esta </i><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/science-in-5/episode-2"><i>entrevista</i></a><i>- en inglés &nbsp;encontrará más información sobre la manera en que el virus de la COVID-19 infecta a las personas, y sobre la reacción de nuestro organismo.</i></p><p><i>Para asesoramiento específico dirigido a las instancias decisorias, consulte </i><a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/technical-guidance"><i>las orientaciones técnicas de la OMS</i></a><i>.</i>&nbsp;</p><p>&nbsp;</p>

        `,
        image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652726478822-tmp-7-1652726478801',
        type: 'news',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gran Terremoto',
        content: `
        <h2>Un terremoto de 3,5 en Puerto Lumbreras obliga a desalojar un colegio en Águilas por prevención</h2><h4>El seísmo ha sido sentido también en Pulpí, Lorca y Puerto Lumbreras, entre otras localidades de Almería y Huelva</h4><p>Un terremoto de 3,5 ha sacudido este viernes el límite fronterizo entre Murcia y Almería sin causar daños apreciables, aunque sí ha sido sentido con fuerza en las localidades de Pulpí, Águilas, Lorca y Puerto Lumbreras, según han informado los servicios de emergencia de ambas provincias. El temblor de tierra se ha registrado a las 9.15 a una profundidad de 2 kilómetros, con epicentro en sureste de Puerto Lumbreras, según la información del Instituto Geográfico Nacional, que ha rebajado la magnitud inicial del terremoto de 3,8 a 3,5. El colegio Carlos V de la localidad costera de Águilas ha sido desalojado por prevención, al sentir con fuerza el seísmo, según el Centro de Coordinación de Emergencias de la Región de Murcia 112, que no ha informado sobre víctimas ni sobre daños materiales.</p><p>Los primeros datos apuntaban a que el terremoto había alcanzado la magnitud 4 en la escala de Ritcher, pero posteriormente el Instituto Geográfico Nacional restó medio punto y cambió la profundidad del epicentro de los siete kilómetros a los dos. El seísmo fue sentido con especial intensidad en las citadas localidades, pero también en Totana, Cartagena, Cuevas del Almazora, Huercal Overa, Mazarrón, Pliego, Mula, Cabezo de Torres o Calasparra, según el listado del <a href="https://www.ign.es/web/resources/sismologia/tproximos/intensidades/textos/2022/es2022iieye.macro">IGN, elaborado con llamadas de ciudadanos que han percibido la sacudida.</a></p>
        `,
        image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652726891194-tmp-9-1652726891188',
        type: 'news',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Un buen locro',
        content: `
        <h2>Cómo hacer locro</h2><h3>Ingredientes para 5&nbsp;personas (10 porciones)&nbsp;</h3><ul><li><strong>Sal </strong>fina a gusto.</li><li><strong>Pimienta</strong> blanca molida a gusto.</li><li><strong>Aceite</strong> de maíz: 50 cc.</li><li><strong>Panceta</strong>: 200 g.</li><li><strong>Falda</strong>: 250 gramos.</li><li><strong>Caldo de verduras</strong>: 500 centímetros cúbicos.</li><li><strong>Mondongo</strong>: 350 g.</li><li><strong>Pimentón dulce</strong>: 60 g.</li><li><strong>Comino</strong>: 25 g.</li><li><strong>Patitas de cerdo</strong>: 200 g.</li><li><strong>Chorizos de cerdo</strong>: 3 unidades.</li><li><strong>Chorizos colorados</strong>: 3 unidades.</li><li><strong>Maíz blanco</strong>: 600 g.</li><li><strong>Porotos</strong>: 200 g.</li><li><strong>Puerro</strong>: medio atado.</li><li><strong>Zapallo anco</strong>:&nbsp;400 g.</li></ul><h3>Ingredientes para preparar el aceite picante</h3><ul><li><strong>Aceite</strong> de maíz: 150 cc.</li><li><strong>Cebolla de verdeo</strong>: medio atado.</li><li><strong>Pimentón dulce</strong>: 20 g.</li><li><strong>Ají</strong> <strong>triturado picante</strong>: 30 g.</li><li><strong>Agua fría</strong>: medio vaso.</li></ul><h2>La preparación del locro paso a paso</h2><ol><li><strong>Lavar y picar los vegetales en rodajas muy finas. Dejar remojando los porotos y el maíz</strong> desde la noche anterior para hidratarlos.</li><li><strong>Hervir el mondongo durante media hora hasta que quede&nbsp;blando. </strong>Repetir&nbsp;el procedimiento en otra olla y <strong>agregar las patitas de cerdo.</strong></li><li><strong>Cortar las carnes, el mondongo en tiras finas&nbsp;y las patitas</strong> en dos o tres partes removiendo las pezuñas.</li><li><strong>Comenzar a preparar el locro</strong> en sí mismo. <strong>Agarrar una olla grande, poner los porotos ahí y añadirle el maíz con los vegetales.</strong> Apartar un poco de cebolla y de apio.</li><li><strong>Reservar los chorizos, los cortes de carne, la panceta y el zapallo. Cubrirlos con unos cuatro litros de agua y cocinarlos</strong> a fuego lento.</li><li><strong>Remover</strong> todo junto.&nbsp;Una vez que la base del locro casero&nbsp;rompa hervor, bajar el fuego e <strong>incorporar los chorizos, la panceta y el zapallo.</strong></li><li>Seguir removiendo&nbsp;de vez en cuando para evitar que los ingredientes se peguen. Si el caldo se consume, agregar un poco más de agua.</li><li>Terminar la cocción. Una vez que transcurra hora y media de cocción, <strong>agregar el mondongo y las patitas.</strong> A la vez, <strong>retirar los chorizos para picarlos en rodajas muy finas, devolverlos a la olla y cocinar por un par de minutos más.</strong></li><li>Mientras el locro termina de cocinarse, <strong>preparar la salsa roja:&nbsp;saltear con&nbsp;un chorrito de aceite, cebollas y apio</strong> por un par de minutos. Apartar todo en un recipiente y <strong>agregar el pimiento dulce, el comino, el ají picante y el ajo.</strong></li><li><strong>Echarle la salsa por encima del locro y servir.</strong></li></ol><p><br>&nbsp;</p>
        `,
        image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652727260207-tmp-10-1652727260202',
        type: 'news',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Novedad unico',
        content: 'Lorem ipsum bla bla bla',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'news',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'No novedad',
        content: 'Lorem ipsum bla bla bla',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'news',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Evento unico',
        content: 'Lorem ipsum bla bla bla',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'news',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Evento masivo',
        content: 'Lorem ipsum bla bla bla',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'news',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
