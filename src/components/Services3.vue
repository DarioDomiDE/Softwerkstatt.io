<template>
  <section class="container min-h-screen max-w-screen-xl pt-32 pb-32">
    <h2 class="mb-8">Hier unterstützen wir</h2>

    <div class="grid lg:grid-cols-4 grid-flow-col gap-8 grid-cols-1">
      <div class="lg:row-span-6 row-span-1">
        <ul id="tab-navi">
          <li class="transform scale-103 transition-all active"><span>Digitale Strategie</span></li>
          <li class="transform scale-103 transition-all"><span>Prozessoptimierung</span></li>
          <li class="transform scale-103 transition-all"><span>Industrie 4.0</span></li>
          <li class="transform scale-103 transition-all"><span>Digital Transformation</span></li>
          <li class="transform scale-103 transition-all"><span>Automatisierung</span></li>
        </ul>
      </div>
      <div class="lg:row-span-6 lg:col-span-2 row-span-1 col-span-1">
        <ul id="tab-content">
          <article class="active">
            <h4>Digitale Transformation</h4>
            <p>Text 1 Geschäftsmodelle und Branchen verändern sich, werden digital und Arbeitsabläufe effizierter. Als Technologiepartner wissen wir aus der Praxis: Die besten Visionen und Software-Strategien helfen wenig ohne individuelle Lösungen für etablierte Arbeitsabläufe. Dabei bedarf es passgenaue Beratung Umsetzung und Einführung, damit skalierbare Plattform geschaffen werden, die mit dem Ihren Unternehmens Prozessen wachsen können. Wir bieten maßgeschneiderte Software- Lösungen und Automatisierung für unternehmens- kritische Anwendungen. Mit dem Ziel Arbeits- abläufe zu verbessern und Auslastung zu steiern, um nachhaltiges Wachstum Ihrer Abteiligungen und Mitarbeiter zu erreichen.</p>
          </article>
          <article>
            <h4>This is Text 2</h4>
            <p>Whatevery 2... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
          </article>
          <article>
            <h4>This is Text 3</h4>
            <p>Whatevery 3... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
          </article>
          <article>
            <h4>This is Text 4</h4>
            <p>Whatevery 4... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
          </article>
        </ul>
      </div>
      <div class="lg:row-span-6 col-span-1 row-span-1">
        <ul id="tab-thumb">
          <li class="active "><img class="rounded-lg" src="./../assets/img/service_1.jpg" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x505" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x510" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x515" alt=""></li>
          <li><img class="rounded-lg" src="http://placehold.it/300x520" alt=""></li>
        </ul>
      </div>
    </div>
    <button class="bg-gray-100 rounded-full shadow-md hover:shadow-xl transform scale-101 focus:outline-none transition-all font-semibold px-8 py-3 text-xl text-gray-700 float-right my-4" v-on:click="onClickCta">UNVERBINDLICH ANFRAGEN &raquo;</button>
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
  #tab-navi ul {
  }
  #tab-navi li {
    background-color: rgba(243, 244, 246, 1);
    margin-bottom: 5px;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
  }
  #tab-navi li.active {
    background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
    color: #fff;
  }
  #tab-navi li span {
    display: table-cell;
    padding: 35px 0 25px 30px;
    height: 20px;
    font-size: 1.2em;
  }
  #tab-navi li::before,
  #tab-navi li::after {
    content: '';
    position: absolute;
    width: calc(100% + 2px);
    height: 64px;
    background: url('./../assets/img/border.png') no-repeat center center;
    background-size: cover;
    left: -1px;
  }
  #tab-navi li::before {
    top: -1px;
  }
  #tab-navi li::after {
    bottom: -1px;
    -moz-transform: scaleX(-1) scaleY(-1);
    -o-transform: scaleX(-1) scaleY(-1);
    -ms-transform: scaleX(-1) scaleY(-1);
    -webkit-transform: scaleX(-1) scaleY(-1);
    transform: scaleX(-1) scaleY(-1);
  }
#tab-headline {
}
#tab-content {
  font-size: 1.2em;
}
#tab-thumb {
  
}
</style>