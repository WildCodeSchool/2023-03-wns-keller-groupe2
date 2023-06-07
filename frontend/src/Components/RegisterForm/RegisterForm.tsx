export default function RegisterForm() {
  return (
    <>
      <div>
        <h1>Nouveau client</h1>
      </div>
      <form action="">
        <label htmlFor="mail">
          Email:
          <input type="mail" name="mail" id="mail" />
        </label>
        <label htmlFor="lastName">
          Nom:
          <input type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="firstName">
          Prenom:
          <input type="text" name="firstName" id="firstName" />
        </label>
        <label htmlFor="password">
          Mots de passe:
          <input type="password" name="password" id="password" />
        </label>
        <label htmlFor="confPassword">
          Confirmer mots de passe:
          <input type="password" name="confPassword" id="confPassword" />
        </label>
        <button type="submit">Bienvenue chez nous!</button>
      </form>
    </>
  );
}
