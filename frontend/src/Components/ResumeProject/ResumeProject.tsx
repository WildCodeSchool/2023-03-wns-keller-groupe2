import "./resumeProject.scss";
import logo from "../../assets/Logo.png";

export default function ResumeProject() {
  return (
    <div className="resumeProject">
      <img src={logo} alt="Logo Rent Bike" className="logoResumeProject"></img>
      <div className="textResume">
        <h1 className="titleResume">Rent Bike Qui sommes nous ?</h1>
        <p className="display-text">
          Rent Bike est une solution de location de vélos qui rend vos
          déplacements urbains pratiques et écologiques. Que vous soyez un
          habitant local ou un touriste en visite, notre service de location de
          vélos vous permet d'explorer la ville à votre rythme. Imaginez-vous
          pédalant le long des rues pittoresques, découvrant des quartiers
          animés et des sites emblématiques en chemin.
        </p>
        <p className="display-text">
          Avec Rent Bike, vous avez la liberté de créer votre propre itinéraire
          et de vivre une expérience authentique. Notre processus de location
          est simple et rapide. Il vous suffit de télécharger notre application
          conviviale, de choisir la station de location la plus proche et de
          réserver votre vélo en quelques clics. Nous proposons une large gamme
          de vélos adaptés à tous les besoins : des vélos de ville élégants aux
          VTT robustes pour les aventuriers. Lorsque vous récupérez votre vélo à
          la station, vous constaterez que nos vélos sont bien entretenus, sûrs
          et équipés de tout ce dont vous avez besoin pour une balade agréable.
        </p>
      </div>
      <p className="display-text-bottom">
        Vous recevrez également des conseils sur les meilleurs itinéraires et
        les attractions locales à ne pas manquer. Que vous souhaitiez vous
        rendre au travail, visiter des musées, vous promener le long de la côte
        ou simplement profiter de l'air frais, Rent Bike est là pour vous
        accompagner. Vous pouvez louer nos vélos pour une heure, une journée ou
        même plus longtemps, selon vos besoins. De plus, notre engagement envers
        l'environnement se reflète dans nos pratiques durables. Nous
        encourageons le vélo comme moyen de transport respectueux de
        l'environnement et nous nous efforçons de réduire notre empreinte
        carbone. Alors, prêt à découvrir la ville d'une manière nouvelle et
        passionnante ? Rejoignez Rent Bike dès aujourd'hui et embarquez pour une
        aventure à deux roues inoubliable !
      </p>
    </div>
  );
}
