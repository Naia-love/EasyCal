const strings = {
   en: {
      pingBot: "Hello! Feel free to use me with the prefix \`%VAR%\`. You can learn more about me with \`%VAR%help\`.",
      ping: ":ping_pong: Pong! There is a latency of %VAR%ms between us!",
      ver: "The current version is %VAR%.",
      inv: "Feel free to add me to your server with",
      invLink: "[this link](%VAR%).",
      eventNoArgs: "To add an event follow the structure \`%VAR% add <name>\`.",
      eventDesc: "Event description :",
      eventDate: "Event date following the MM/DD/YYYY hh:mm:ss format(Time is optional. Date will be saved in UTC timezone).",
      internalError: "An internal error has occurred.",
      eventAdded: ":white_check_mark: Event added successfully.",
      newEventInfo: "Name: %VAR%, Description: %VAR%, Day: %VAR%",
      DateFormat: "The date format isn't valid. Try with MM/DD/YYYY (month/day/year).",
      TimeExpired: "It's been more than a minute without answer and the event has been canceled.",
      Unexpected: "Unexpected error",
      Events: "Events",
      ServerTitle: "This server's events",
      EventsFooter: "You can see all events in a calendar by clicking in this message's title.",
      NoEvents: "There are no events. You can create a new one with the add command.",
      PersonalEvents: "Your personal events",
      Utilities: "Utilities",
      HelpPing: "Returns the latency between the Discord API and this bot.",
      HelpHelp: "Returns all commands grouped by sections.",
      HelpInv: "Returns the link to add this bot to a new server.",
      HelpVer: "Returns the current version of the bot.",
      HelpLang: "Returns the current bot language. It depends on server and user. Can be changed with %VAR% language language short. Examples: es, en, fr, etc...",
      HelpTimezone: "Updates the current timezone. To update it, use %VAR% update timezone city country. Example: London UK",
      HelpAdd: "Adds a new event to database. First, send the event name in a message, then the description and finally the event date. You can also set an hour. The date and time will be saved in GMT +00:00 timeformat, so time may vary or even the day.",
      HelpEvents: "Returns all events from this server or DM.",
      HelpUpdate: "Updates a specific event. Example: `%VAR% update 11 party!` updates the event with id 11 and changes it's name to 'party!'. After that, bot will ask for new description and event date.",
      HelpRemove: "Removes a specific event, or multiple events.",
      HelpWelcome: "Welcome to easyCal, the simple calendar bot!",
      All: "All",
      Timezone1: "Please, type your city and country to get your timezone. Example: London UK",
      TimezoneUp: "Timezone updated",
      TimezoneError: "There was an error. Check city, country and try again.",
      NotiTitle: "Reminder for the event: %VAR%",
      NotiDesc: "Description: %VAR%",
      NotiFooter: "You received this message because you added the event.",
      CurLang: "The current language is: %VAR%",
      InvLang: "Invalid language",
      NewLang: "Language updated.",
      rmEventNoArgs: "Please, specify the event id to remove. You can find it with \`%VAR%events\`",
      rmEventInvalidArgs: "\`%VAR%\` is not a valid ID. Check the event ID you want to remove with \`%VAR%events\` and try again.",
      rmEventSuccess: "Event \`%VAR%\` successfully removed.",
      rmEventNoEvent: "No event with the \`%VAR%\` ID was found.",
      eventUpdated: "Event updated.",
      upEventNoArgs: "Please, specify the event id to update. You can find it with \`%VAR%events\`"
   },
   es: {
      pingBot: "¡Hola! Siéntete libre de usarme con el prefijo \`%VAR%\`. Puedes aprender más sobre mi con \`%VAR%help\`.",
      ping: ":ping_pong: ¡Pong! ¡Hay una latencia de %VAR%ms entre nosotros!",
      ver: "La version actual es %VAR%.",
      inv: "Siéntete libre de añadirme a tu servidor con",
      invLink: "[este link](%VAR%)",
      eventNoArgs: "Para añadir un evento sigue la estructura \`%VAR% add <nombre>\`",
      eventDesc: "Descripción del evento: ",
      eventDate: "Fecha del evento en formato MM/DD/YYYY hh:mm:ss(Hora opcional. Los datos se guardan en zona horaria UTC).",
      internalError: "Se ha producido un error interno.",
      eventAdded: ":white_check_mark: Evento añadido satisfactoriamente.",
      newEventInfo: "Nombre: %VAR%, Descripción: %VAR%, Dia: %VAR%",
      DataFormat: "El formato de fecha no es valido. Prueba con MM/DD/YYYY (mes/dia/año).",
      TimeExpired: "Ha pasado más de un minuto y se ha cancelado el nuevo evento.",
      Unexpected: "Error inesperado",
      Events: "Eventos",
      ServerTitle: "Eventos de este servidor",
      EventsFooter: "Puedes ver todos los eventos en formato calendario haciendo clic en el título.",
      NoEvents: "No hay eventos. Puedes añadir uno con el comando add",
      PersonalEvents: "Tus eventos personales",
      Utilities: "Utilidades",
      HelpPing: "Devuelve la latencia entre la API de Discord y este bot.",
      HelpHelp: "Devuelve todos los comandos agrupados por secciones.",
      HelpInv: "Devuelve el enlace para poder añadir este bot a un nuevo servidor.",
      HelpVer: "Devuelve la version actual del bot.",
      HelpLang: "Devuelve el idioma actual del bot, y puede variar según la configuración del servidor y el usuario. Se puede modificar con %VAR% language idioma corto. Ejemplos: es, en, fr, etc...",
      HelpTimezone: "Actualiza el huso horario. Para actualizarlo, usa %VAR% update zona horaria ciudad país. Ejemplo: Madrid España",
      HelpAdd: "Añade un evento a la base de datos. Primero se envía el nombre, después la descripción y por último la fecha del evento. También se puede enviar la hora. La fecha y hora se guarda en formato GMT +00:00, de modo que puede variar la hora e incluso el día.",
      HelpEvents: "Devuelve todos los eventos de este servidor o DM.",
      HelpUpdate: "Actualiza un evento específico. Ejemplo: `%VAR% update 11 ¡Fiesta!` actuliza el evento con el identificador 11 y cambia su nombre a  '¡Fiesta!'. El bot preguntará también por la nueva descripción y fecha.",
      HelpRemove: "Elimina uno o varios eventos específicos",
      HelpWelcome: "¡Bienvenido a easyCal, el bot calendario simple!",
      All: "Todo",
      Timezone1: "Por favor, escribe el nombre de tu región y capital para obtener tu huso horario. Ejemplo: Madrid Spain",
      TimezoneUp: "Zona horaria actualizada",
      TimezoneError: "Se ha producido un error. Comprueba que has introducido correctamente el nombre de tu ciudad y pais en inglés.",
      NotiTitle: "Recordatorio del evento: %VAR%.",
      NotiDesc: "Descripción: %VAR%.",
      NotiFooter: "Has recibido este mensaje ya que añadiste este evento.",
      CurLang: "El idioma actual es: %VAR%.",
      InvLang: "Idioma no válido.",
      NewLang: "Idioma actualizado.",
      rmEventNoArgs: "Por favor, especifica la ID del evento a eliminar. Puedes encontrarla con \`%VAR%events\`.",
      rmEventInvalidArgs: "La ID \`%VAR%\` no válida. Comprueba la ID del evento a eliminar con \`%VAR%events\` e inténtalo de nuevo.",
      rmEventSuccess: "Evento con la ID \`%VAR%\` eliminado satisfactoriamente.",
      rmEventNoEvent: "No se ha encontrado ningún evento con la ID \`%VAR%\`.",
      eventUpdated: "El evento ha sido actualizado.",
      upEventNoArgs: "Por favor, especifica la ID del evento a actualizar. Puedes encontrarla con \`%VAR%events\`."
   },
   fr: {
      pingBot: "Bonjours, vous pouvez m'utiliser a tous moment avec \`%VAR%\`. Vous pouvez en apprendre plus a propos de moi avec \`%VAR%help\`.",
      ping: ":ping_pong: Pong! Il y a %VAR%ms de latence entre nous!",
      ver: "La version actuelle est %VAR%.",
      inv: "Soyez libre de m'ajouter a votre propres serveur grace à:",
      invLink: "[ce lien](%VAR%).",
      eventNoArgs: "Pour ajouter un événement utilisez la structure suivante: \`%VAR% add <nom>\`.",
      eventDesc: "Description de l'évenement :",
      eventDate: "Les évenement suivent le format suivant: MM/JJ/ hh:mm:ss (L'heure est optionel. La timezone utilisé est UTC).",
      internalError: "Une erreur interne est survenue, désolé!",
      eventAdded: ":white_check_mark: Évenement ajouté avec succés.",
      newEventInfo: "Nom: %VAR%, Description: %VAR%, Jour: %VAR%",
      DateFormat: "Le format de la date n'est pas valide. Essayez avec MM/JJ/YYYY (mois/jours/année).",
      TimeExpired: "Vous n'avez pas répondue pendant plus d'une minutes, l'évenement a donc été annulé.",
      Unexpected: "Erreur inattendue",
      Events: "Évenements",
      ServerTitle: "Les évenements de ce serveur:",
      EventsFooter: "Vous pouvez voir tous les évenements dans un calendrier en cliquant sur le titre de ce message.",
      NoEvents: "Il n'y a pas d'évenement. Vous pouvez en créer un nouveau avec la commande d'ajout.",
      PersonalEvents: "Vos évenement personnel",
      Utilities: "Utilité",
      HelpPing: "Retourne la latence entre ce bot est l'api de discord.",
      HelpHelp: "Retourne toutes les commandes par sections.",
      HelpInv: "Retourne le lien pour ajouter ce bot a un nouveau serveur.",
      HelpVer: "Retourne la versions actuelle du bot.",
      HelpLang: "Renvois la langue actuelle du bot. Cella depend de l'utilisateur et du serveur. Peut être changé avec `%VAR% language l'identifiant_de_la_langue`. Exemples: es, fr, en...",
      HelpTimezone: "Mets a jour la timezone. Pour le faire, utilisez `%VAR% update votre_timezone` (format ville pays, ex: Paris france).",
      HelpAdd: "Ajoute un nouveau évenement dans la base de donnée. Premièrement, envoyez un message avec le nom voulue de l'évenement, puis la description, et enfin la date de l'évenement. Vous pouvez aussi indiqué une heure. La date et l'heure sera enregistrés en UTC, donc prévoyer ca pour ne pas avoir de décalage ;).",
      HelpEvents: "Retourne tous les évenements de ce serveur ou personel.",
      HelpUpdate: "Mets à jour un évènement spécifié. Exemple: `%VAR% update 11 fête!` mets à jour l'évènement avec l'ID 11 en changant son nom en "fête!". Après ça le bot vous demandera si vous voulez mettre a jour la descriptions et/ou la date.",
      HelpRemove: "Enlève un ou plusieurs évènements spécifié.",
      HelpWelcome: "Bienvenue, je suis easyCal, le calendrier le plus simple!",
      All: "Tous",
      Timezone1: "S'il-vous-plait, veuillez indiqué votre ville et pays pour connaitre votre timezone. Exemple: Paris France.",
      TimezoneUp: "Timezone mise à jour.",
      TimezoneError: "Il y a eu une erreur, vérifiez votre ville et pays et réessayez.",
      NotiTitle: "Rapel pour l'évenement: %VAR%.",
      NotiDesc: "Description: %VAR%",
      NotiFooter: "Vous avez reçus ce message car vous avez créer cet évenement.",
      CurLang: "La langue actuelle est: %VAR%.",
      InvLang: "Langue invalide.",
      NewLang: "Langue mise à jour.",
      rmEventNoArgs: "S'il-vous-plait, veuillez spécifier l'ID de l'évenement que vous souhaitez enlever. Vous pouvez la trouver grace à \`%VAR%events\`.",
      rmEventInvalidArgs: "\`%VAR%\` n'est pas une ID valide. Veuillez vérifier l'ID de l'évenement que vous voulez enlevé avec \`%VAR%events\` et réessayez.",
      rmEventSuccess: "L'évenement \`%VAR%\` a été enlevé avec succés.",
      rmEventNoEvent: "Aucun évenement avec l'ID \`%VAR%\` a été trouvé.",
      eventUpdated: "Évenement mis à jour.",
      upEventNoArgs: "S'il-vous-plait, veuillez spécifier l'ID de l'évenement que vous souhaitez mettre à jour. Vous pouvez la trouver grace à \`%VAR%events\`."
   }
};

module.exports = { strings };
