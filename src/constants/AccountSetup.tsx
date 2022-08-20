

export const HEADLINE =
  "Tell us about yourself in a few words. What’s your talent, skill set, what you are best known for or what you wish to share with the world!";
export const STATUS =
  "Are you a Producer (Content Creator), Talent or Crew Member? You can indicate more than one option if applicable";

export const TITLE = "Please complete this section if you are registering as an Agency, Organization, Association or other professional entities."
export const TITLE2 =  "Create your account now to find talents or search for production jobs."
export const TITLE3 =  "How will you describe yourself? You can choose more than one."
export const HEADING1 = "Company & Contact Information"
export const HEADING2 = "Account Setup"
export const HEADING3 = "Persona Setup"
export const HEADING4 = "Personal Information"
export const HEADING5 = "Portfolio Items"
export const TITLE4 =  "Please complete this section if you a registering as an individual talent, producer or content creator. Fields with asterisk are required."
export const TITLE5 = "Showcase a sample of your best work. Upload audio/video clips, images or demo reels."
export const HEADING6 = "Talent"
export const TITLE6 = "What is your special gift or skill set? Are you an actor, presenter, model, singer, voice artist, writer, stunts choreographer"
export const HEADING7 = "Create Account"
export const TITLE7 = "Create your account to find roles as actors, models, crew members and more. Source for talents as a Content Creator or Producer."
export const USER_TITLE = ['Mr.', 'Mrs.', "Ms.", "Dr.", "Chief."]
export const GENDER = ['Male', 'Female']

// export const PERSONA_LIST = [
//   {
//     name: "Talent",
//     value: "true",
//   },
//   {
//     name: "Content Producer",
//     value: "false",
//   },
//   {
//     name: "Crew Member",
//     value: "false",
//   },
// ];
export const PRODUCER = "PRODUCER"
export const CREW_MEMBER = "CREW_MEMBER"
export const TALENT = "TALENT"

export const PERSONA_LIST = [
  {
    name: "Talent",
    persona: "talent",
  },
  {
    name: "Content Producer",
    persona: "producer",
  },
  {
    name: "Crew Member",
    persona: "crew_member",
  },
];

export const PORTFOLIO_ITEMS_VIDEO = [
  {
    type: "VIDEO.MP4",
    source: "",
    poster: "",
  },
  {
    type: "VIDEO.MP4",
    source: "",
    poster: "",
  },
  {
    type: "VIDEO.MP4",
    source: "",
    poster: "",
  },
  {
    type: "VIDEO.MP4",
    source: "",
    poster: "",
  },
];

export const PORTFOLIO_ITEMS_IMAGE = [
  {
    type: "IMAGE.JPG",
    source: "",
  },
  {
    type: "IMAGE.JPG",
    source: "",
  },
  {
    type: "IMAGE.JPG",
    source: "",
  },
];

export const PORTFOLIO_ITEMS_AUDIO = [
  {
    type: "AUDIO.MP3",
    source: "",
  },
  {
    type: "AUDIO.MP3",
    source: "",
  },
  {
    type: "AUDIO.MP3",
    source: "",
  },
  {
    type: "AUDIO.MP3",
    source: "",
  },
];

export const newUserDataKey =  ['id',   'profilePictureUrl',  'accountVerified', 'isLoggedIn','portfolios',"email","userType"]

export const GENRE = [
  { label: "Others", value: "others" },
  { label: "Movie", value: "movie" },
  { label: "Film", value: "film" },


]


export const ROLES_LIST = [
  { label: "Acting", value: "acting" },
  { label: "Presenting", value: "presenting" },
  { label: "Modelling", value: "modelling" },
  { label: "Voice Over Narration", value: "voiceOverNarration" },
  { label: "Music performance", value: "musicPerformance" },
  { label: "Photography", value: "photography" },
  { label: "Film/Video Editing", value: "filmVideoEditing" },
  { label: "Cinematography", value: "cinematography" },
  { label: "Lighting", value: "lighting" },
  { label: "Animation", value: "animation" },
  { label: "Sound Recording", value: "soundRecording" },
  { label: "Script Writing", value: "scriptWriting" },
  { label: "Production Management", value: "productionManagement" },
  { label: "Directing", value: "directing" },
  { label: "Dance", value: "dance" },
  { label: "Costume Design", value: "costumeDesign" },
  { label: "Graphics Design", value: "graphicsDesign" },
  { label: "Stunt Artist", value: "stuntArtist" },
]


export const SKIN_TONE = [
  "Dark", "Very Dark", "Light", "Very Light"
]

export const ETHNICITY = [
  "White",
  "Black",
  "Asian"
]

export const LANGUAGES = [
  "English",
]

export const convertToArrayOfObject = (array:any[]) => {
  return array.reduce((object:any, value:string) => {
    object?.push({ label: value, value: value })
    return object;
  }, []);
}


// export const Rlose = SKIN_TONE.reduce((object, value) => {
//   return {...object, ['label']: value, ['value']: value};
// }, {});

export const Rlose = convertToArrayOfObject(SKIN_TONE)

