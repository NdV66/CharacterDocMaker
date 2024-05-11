export const TEXTS = {
  lang: 'English',
  appName: 'Simple Character PDF',

  jumbotron: {
    title: 'Hello there!',
    subtitle: "Let's create your character description!",
    note: "We know, you always wanted a nice description character document. No worries, we're on the same site!",
  },

  form: {
    avatar: {
      title: '1. Upload your avatar',
      subtitle: "We're so excited to see your new character!",
      note: 'Upload your image here!',
      upload: 'Edit',

      fields: {
        greyScale: 'Grey scale',
        zoom: 'Zoom',
        brightness: 'Brightness',
      },
    },
    basicInfo: {
      title: '2. Provide some info',
      subtitle: 'Who is your character? What about the name?',
      note: "It's so important to know these basic information!",

      fields: {
        name: {
          label: 'What is they name?',
          hint: 'Choose a name that makes dragons jealous!',
        },
        nature: {
          label: 'What is their nature?',
          hint: 'Hint',
        },
        age: {
          label: 'How old are they?',
          hint: 'Hint',
        },
        race: {
          label: 'What is they race?',
          hint: 'Hint',
        },
        origin: {
          label: 'What are they come from?',
          hint: 'xxx',
        },
        live: {
          label: 'Where do they live?',
          hint: 'xxx1',
        },
      },
      errors: {
        error1: 'todo error 1',
      },
    },
    description: {
      title: '3. Describe your description',
      subtitle: 'What would you like to share abut your character?',
      label: 'What would you like to tell about our new friend?',
      note: 'Oh, oh, a final stage! Remember to use an epic description!',
    },
    theme: {
      title: '4. Select your document theme',
      subtitle: 'Which theme is your favorite one?',
      note: "Just select the document's theme and download your epic description!",

      fields: {
        theme1: 'Light life',
        theme2: 'Lovely lila',
        theme3: 'Back to black',
      },
    },
  },
  download: {
    action: 'Download your PDF!',
  },
  footer: {
    repo: 'See my public repositories!',
    contact: 'Stay in touch!',
    projects: 'See my other projects!',
    author: 'NdV66 (Marta Zażlak)',
  },
};
