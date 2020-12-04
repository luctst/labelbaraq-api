"use strict";

module.exports = {
  async send(ctx) {
    const { body } = ctx.request;

    try {
      const html = `
        <p>Bonjour,</p><br/>
        <p>Un utilisateur vous a contacté.</p><br/>
        <p><b>Nom et prénom:</b> ${body.name}</p><br/>
        <p><b>Email:</b> ${body.mail}</p><br/>
        <p><b>Besoin:</b> ${body.need}</p><br/>
        <p><b>Description:</b> ${body.description}</p>
      `;

      await strapi.plugins["email"].services.email.send({
        to: "lucas.tostee@gmail.com",
        from: "lucas.tostee@gmail.com",
        subject: "[LABEL BARAQUE] Une personne vous a contacté",
        html,
      });

      ctx.send({ success: "Votre message a bien été envoyé." }, 200);
    } catch (error) {
      ctx.send({ error: "Une erreur est survenue." }, 500);
    }
  },
};
