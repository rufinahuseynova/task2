class Message {
    constructor(name, message, date) {
      this.name = name;
      this.message = message;
      this.date = date;
    }
      toString() {
      console.log(this.name, this.message, this.date);
    }
  }
   class Messanger {
    constructor() {
      this.messages = [];
    }
    send(author, text) {
      let message = new Message(author, text, gettime());
      this.messages.push(message);
    }
    show_history() {
      this.messages.map((message) => message.toString());
    }
  }
  function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  let messenger = new Messanger();
  messenger.send("Hemail", "ilk mesaj");
  messenger.send("Rufina", "İkinci mesaj");
  messenger.show_history();