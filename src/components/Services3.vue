<template>
  <section class="container h-screen pt-32 pb-32">
    <h4>Hier unterstützen wir</h4>

    <div class="grid lg:grid-rows-6 lg:grid-cols-4 grid-flow-col gap-4 grid-rows-4 grid-cols-1">
      <div class="lg:row-span-6 bg-blue-300 row-span-1">
        <ul id="tab-navi">
          <li class="active">Digitale Strategie</li>
          <li>Digitalisierung<br />&amp; Industrie 4.0</li>
          <li>Digital Bets &amp;<br />Nutzergewinnung</li>
          <li>Digitale Transformation</li>
        </ul>
      </div>
      <!-- <div class="row-span-1 lg:col-span-3 bg-blue-300 col-span-1">
        <h2 id="#tab-headline">Digitale Transformation</h2>
      </div> -->
      <div class="lg:row-span-6 lg:col-span-2 bg-blue-300 row-span-1 col-span-1">
        <ul id="tab-content">
          <article class="active">
            <h2>Digitale Transformation</h2>
            <p>Text 1 Geschäftsmodelle und Branchen verändern sich, werden digital und Arbeitsabläufe effizierter. Als Technologiepartner wissen wir aus der Praxis: Die besten Visionen und Software-Strategien helfen wenig ohne individuelle Lösungen für etablierte Arbeitsabläufe. Dabei bedarf es passgenaue Beratung Umsetzung und Einführung, damit skalierbare Plattform geschaffen werden, die mit dem Ihren Unternehmens Prozessen wachsen können. Wir bieten maßgeschneiderte Software- Lösungen und Automatisierung für unternehmens- kritische Anwendungen. Mit dem Ziel Arbeits- abläufe zu verbessern und Auslastung zu steiern, um nachhaltiges Wachstum Ihrer Abteiligungen und Mitarbeiter zu erreichen.</p>
          </article>
          <article>
            <h2>This is Text 2</h2>
            <p>Whatevery 2... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
          </article>
          <article>
            <h2>This is Text 3</h2>
            <p>Whatevery 3... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
          </article>
          <article>
            <h2>This is Text 4</h2>
            <p>Whatevery 4... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
          </article>
        </ul>
      </div>
      <div class="lg:row-span-6 col-span-1 bg-blue-300 row-span-1">
        <ul id="tab-thumb">
          <li class="active "><img class="rounded-lg" src="http://placehold.it/300x500" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x505" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x510" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x515" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x520" alt=""></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
ul:not(#tab-navi) article,
ul:not(#tab-navi) li {
  display: none;
}
ul:not(#tab-navi) article.active,
ul:not(#tab-navi) li.active {
  display: block;
}
#tab-navi {
}
#tab-headline {
}
#tab-content {
  font-size: 1.2em;
}
#tab-thumb {
  
}
</style>