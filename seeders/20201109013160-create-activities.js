'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Activities',
      [
        {
          name: 'Recorriendo las montanas',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652529072634-tmp-1-1652529072605',
          content: `
          <h2>MODO DE ACCESO</h2><p><strong>Desde el centro de Bariloche:</strong></p><p><strong>Bus.</strong> En temporada de verano hay un <a href="https://www.barilochetrekking.com/modo-acceso/"><strong>minibus de traslado hasta Pampa Linda</strong></a> que pasa por el Hotel Tronador, próximo al inicio de sendero.</p><p><strong>En auto:</strong> Por la Ruta Nacional 40 que se dirige a El Bolsón hay que transitar 36 km. hasta el desvío que se encuentra hacia la derecha una vez que se pasa la Villa Mascardi. Por el camino de ripio y a pocos metros se encuentra la Seccional de Guardaparques de Lago Mascardi, lugar del cobro de acceso al Parque Nacional. Desde este punto son 25 km. más hasta Los Césares, pasando unos metros el ingreso al Hotel Tronador.</p><p><strong>El camino entre Los Rápidos y Pampa Linda tiene horarios de sentido único de tránsito.</strong></p><ul><li>Subida únicamente: de 10 a 14 hs desde Los Rápidos</li><li>Bajada únicamente: de 16 a 18 hs desde Pampa Linda</li><li>Doble mano: desde 19:30 a 9 hs.</li><li>Prohibido subir entre las 14 y las 19:30 hs.</li></ul><h2>DESCRIPCIÓN</h2><p>El inicio del sendero comienza en Los Césares, ubicado a orillas del Lago Mascardi, sobre la ruta de acceso a Pampa Linda. El camino bordea el Río Manso hasta llegar al puente colgante. De allí se continúa a orillas del Arroyo Claro hasta su encuentro con el Arroyo Callvuco. Por este último se continúa hasta su naciente en la Laguna Azúl (Calvú).</p><p>Hay que prestar mucha atención a las marcas, y en los sectores por donde se transita por el lecho del río a las <strong>pircas</strong> o pilas de piedras que van indicando el camino a seguir.</p><p>Es recomendable realizar la caminata bien entrado el verano para evitar el período de crecida del arroyo lo cual puede dificultar la travesía. En todo caso se recomienda llevar calzado extra para <strong>vadeo</strong>.</p><p>Se regresa por el mismo camino.</p><p>El mapa del sendero indica la continuación desde la Laguna Azul hasta conectar con la <a href="https://www.barilochetrekking.com/travesia-04/"><strong>Travesía 5 lagunas</strong></a>. Este tramo tiene un nivel de dificultad alto, es muy exigente, transcurre en un pedrero muy empinado con mucha exposición solar. Es importante prestar atención a las <strong>Pircas</strong> y marcas en el terreno para no perder la senda.</p><p>En el sentido inverso es utilizado desde el sector de Laguna Cretón como vía de evacuación en caso de mal clima.</p>
          `,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Maraton en mar del Plata',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652529283416-tmp-2-1652529283408',
          content: `
          <h3>MAR DEL PLATA 2022</h3><p>&nbsp;</p><p>Mar del Plata se impone en el calendario de running de la República Argentina y programa dos competencias anuales sumandose al New Balance Race Series 2022</p><p>El&nbsp;Maratón de Mar del Plata se realizará el&nbsp; 24 de Abril de 2022&nbsp;y contará con distancias complementarias de 21K y 10K, mientras que el&nbsp;Medio Maratón de Mar del Plata se realizará el 6 Noviembre de 2022 y se disputarán las distancias adicionales de 10K y 5K.</p><p>Las inscripciones para el Maratón de Mar de Plata ya se encuentra abiertas, y&nbsp; para el Medio Maratón de Mar del Plata se habilitarán en Mayo 2022.</p><p>New Balance Race Series, es un programa de excelencia en running. Nuestra misión es impulsar a cada corredor a cumplir sus objetivos, ayudarte a conseguir nuevas marcas, correr tus primeros 5 kilómetros o tu primera maratón o, simplemente, mantener un estilo de vida sano y activo.<br>Nuestros calzados e indumentaria de running son la combinación perfecta de funcionalidad y moda, aportándote siempre el mejor rendimiento tecnológico que necesitás y el estilo que buscás.</p>
          `,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Torneo de Ajedrez',
          image: 'https://cohorte-abril-98a56bb4.s3.us-east-1.amazonaws.com/1652529514539-tmp-1-1652529514523',
          content: `
          <h2><strong>Copa Ciudad de Mendoza</strong></h2><p>La Federación Mendocina de Ajedrez organizara del&nbsp;08 al 12 de diciembre la primera edición de la Copa Ciudad de Mendoza que convocará a fuertes jugadores de la Región y tendrá la destacada presencia del&nbsp;Pentacampeón Argentino el gran maestro Pablo Ricardi.<br><br>La sede del torneo será en el Auditorio Angel Bustelo (Sala Plumerillo) y se repartirán 60mil pesos en premios.&nbsp;<br>Esta sin duda es una buena oportunidad para los juveniles de entrenar previo a los Campeonatos Argentinos infantiles y juveniles 2021, en el caso de los adultos podrán presenciar&nbsp;entre jornada y jornada&nbsp;de las bandas en el Festival Provincial de la Cerveza o simplemente disfrutar&nbsp; de un torneo de gran confort, camaradería y paseos en la Capital mendocina<br><br>Informes e inscripción:&nbsp;<a href="https://bit.ly/InscripAbiertoMendoza">https://bit.ly/InscripAbiertoMendoza</a><br><br>Sistema de juego:<br><br>Suizo a 7 rondas – 90’+30″ – Es obligatorio anotar los movimientos durante toda la partida<br>Descansos:1 o 2 bye anunciados de medio punto hasta la ronda 4</p><p>Cronograma de juego:</p><p>MIÉRCOLES 08 DE DICIEMBRE<br>Cierre de inscripciones 14:00h</p><p>– 1° Ronda 08/12 14:30h<br>– 2° Ronda 08/12 19:00h</p><p>JUEVES 09 DE DICIEMBRE</p><p>– 3° Ronda 09/12 20:00h</p><p>VIERNES 10 DE DICIEMBRE</p><p>– 4° Ronda 10/12 20:00h<br>SÁBADO 11 DE DICIEMBRE</p><p>– 5° Ronda 11/12 10:00h<br>– 6° Ronda 11/12 17:00h</p><p>DOMINGO 12 DE DICIEMBRE</p><p>– 7° Ronda 12/12 9:00h</p><p>Horario estimado de finalización del torneo y entrega de premios: 13:15hs.</p><p>Bases completas: <a href="https://www.google.com/url?q=https://bit.ly/BasesAbiertoMza21&amp;sa=D&amp;source=editors&amp;ust=1638284366616000&amp;usg=AOvVaw35wi9XjQ-RwyjohO0Hioox">https://bit.ly/BasesAbiertoMza21</a></p><p>Preinscriptos: <a href="https://www.google.com/url?q=http://chess-results.com/tnr595269.aspx?lan%3D2&amp;sa=D&amp;source=editors&amp;ust=1638284366616000&amp;usg=AOvVaw1HSi9qph3Ztn0kkESJWGI8">http://chess-results.com/tnr595269.aspx?lan=2</a></p><p>Protocolo: <a href="https://www.google.com/url?q=https://bit.ly/ProtocoloCovidDic2021&amp;sa=D&amp;source=editors&amp;ust=1638284366617000&amp;usg=AOvVaw0gY_M2FTQwtEslV8b-fjSc">https://bit.ly/ProtocoloCovidDic2021</a></p><p>Consultas y +info: por WhatsApp 2622441706 o al mail <a href="mailto:fmendozajedrez@gmail.com">fmendozajedrez@gmail.com</a></p><p>Noticias: <a href="https://www.google.com/url?q=https://www.facebook.com/AjedrezEnMendoza&amp;sa=D&amp;source=editors&amp;ust=1638284366617000&amp;usg=AOvVaw3XjNoeGLE1ZhCocMU8Mhjw">https://www.facebook.com/AjedrezEnMendoza</a></p>
          `,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
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
