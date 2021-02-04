<template>
  <div class="container mx-auto max-w-screen-lg 2xl:max-w-screen-xl pt-16 px-4 lg:px-0 pb-32">
    <span class="block pre-headline text-center">Legal Notice</span>
    <h1 class="text-center">Impressum</h1>
    <h2>Angaben gemäß § 5 TMG:</h2>
    <p>Softwerkstatt GmbH
      <br>Brunckhorstweg 3
      <br>22525 Hamburg</p>
    <h2>Vertreten durch</h2>
    <p>Geschäftsführer:
      <br />Dario D. Müller</p>
    <h2>Kontakt</h2>
    <p>Telefon: +49 123 456 789
      <br>E-Mail: <a href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a>
    </p>
    <h2>Registereintrag</h2>
    <p>Eintragung im Handelsregister.
        <br> Registergericht:Amtsgericht Hamburg
        <br> Registernummer: HRB 123456</p>
    <h2>Umsatzsteuer</h2>
    <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        <br> DE 123456789
    </p>
    <h3>Streitschlichtung</h3>
    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    <h3>Haftung
            für Inhalte</h3>
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>
    <h3>Haftung für Links</h3>
    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
    <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
    </p>
    <h3>Urheberrecht</h3>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
    <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

    <CtaButton class="mx-auto bg-gray-100 border-gray-100 hover:border-gray-500" @clicked="onClickCta">Fragen oder Anmerkungen?</CtaButton>
    <Modal ref="modal" @modalClosed="onModalClosed" />
  </div>
</template>

<script>
import CtaButton from './../views/CtaButton.vue'
import Modal from './../views/Modal.vue'

export default {
  name: 'Legal',
  components: {
    CtaButton,
    Modal
  },
  methods: {
    onClickCta() {
      this.$refs.modal.open('Fragen oder Anmerkungen?');
      this.$refs.menu.close();
    },
    onModalClosed() {
      this.$refs.menu.open();
    }
  }
}
</script>

<style scoped>
</style>