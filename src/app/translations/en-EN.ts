export const TEXTS = {
  lang: 'English',
  appName: 'Simple Character PDF',

  jumbotron: {
    title: 'Hello there!',
    subtitle: "Let's create your character description!",
    note: "We know, you always wanted a nice description character document. No worries, we're on the same site!",
  },

  form: {
    errors: {
      required: 'This field is required',
      minlength: 'This input is too short',
      maxlength: 'This input is too long',
      pattern: 'Invalid value for this file',
    },
    avatar: {
      title: '1. Upload your avatar',
      subtitle: "We're so excited to see your new character!",
      note: "Don't be shy, upload your character image here!",
      upload: 'Edit',
      loading: 'Loading...',

      fields: {
        greyScale: 'Grey scale',
        sepia: 'Sepia',
        brightness: 'Brightness',
        reset: 'Reset filters',
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
    },
    description: {
      title: '3. Describe your background',
      subtitle: 'What would you like to share abut your character?',
      label: 'What would you like to tell about our new friend?',
      note: 'Oh, oh, a final stage! Remember to use an epic description!',
    },
    theme: {
      title: '4. Select your document theme',
      subtitle: 'Which theme is your favorite one?',
      note: 'See below, if your PDF is fine! If you love it, just click and download your document, yay!',

      fields: {
        theme1: 'Light life',
        theme2: 'Lovely lila',
        theme3: 'Back to black',
      },
    },
  },
  preview: {
    action: 'Download your PDF!',
    alert: {
      title: 'Warning!',
      text: 'This only a preview. To download PDF, use the button below. Or go back.',
    },
    pdf: {
      by: 'by NdV66, Simple Character PDF, 2024, v1.0',
      noInfo: 'No info',

      name: 'name',
      race: 'race',
      age: 'age',
      origin: 'origin',
      nature: 'nature',
      live: 'live',
    },
  },
  download: {
    action: 'Download your PDF!',
    back: 'I want go back!',
  },
  footer: {
    github: {
      title: 'See my public repositories!',
      link: 'https://github.com/NdV66',
    },
    contact: {
      title: 'See my other projects!',
      link: 'https://www.linkedin.com/in/marta-zazlak/',
    },
    info: 'created by NdV66 (Marta Zażlak), 2024, v1.0',
  },
};
