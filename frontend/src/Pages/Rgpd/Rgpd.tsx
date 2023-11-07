import "./rgpd.scss";

export default function Rgpd() {
  return (
    <div className="rdpg-padding">
      <h1>Politique de confidentiliaté</h1>
      <h2>Collecte des données</h2>
      <p>
        Rent a bike ne collecte aucune information personnelle identifiable.
        Nous ne vendons pas, n'échangeons ni transférons ces informations à des
        tiers.
      </p>
      <h2>Utilisation des données</h2>
      <p>
        La connexion sur Rent a Bike nécessite un email et un mot de passe qui
        sont stockés en base de données, un email est également demandé en cas
        de perte de ses informations de connexion.
      </p>
      <p>
        L'application n'a besoin d'aucune connection à une application tiers
        afin de fonctionner et n'utilise donc pas de données enregistrées dans
        le téléphone.
      </p>
      <p>
        Par ailleurs, nous sommes autorisé à communiquer ces données pour des
        raisons légales, comme la nécessité de répondre à une demande
        gouvernementale, d'obéir à des lois applicables, ou encore en cas de
        fusion ou d'acquisition, à condition d'en informer les utilisateurs
        selon les modalités conformes aux lois en vigueur.
      </p>
      <p>
        Les mots de passe sont chiffrés dans la base de données et aucune
        personne en dehors de l'utilisateur ne peux avoir connaissance de
        celui-ci.
      </p>
      <h2>Droit à l'oubli</h2>
      <p>
        Une fois enregistré, l'utilisateur peut à tout moment faire la demande
        pour supprimer ses informations de la base données en contactant son
        administrateur.
      </p>
    </div>
  );
}
