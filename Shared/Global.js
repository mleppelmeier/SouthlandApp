import { StyleSheet } from "react-native";


export const globalStyles=StyleSheet.create({
  moveMenuIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    position: 'absolute',
    left: 35
  },
  safeAreaView: {
    flex:1, 
    backgroundColor: "rgba(65,65,66,1)"
  },
  scrollView:{
    backgroundColor:"white"
  },
  card:{
    borderRadius: 9,
    elevation: 3,
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  blueCircle: {
    backgroundColor:'rgba(0,148,200,1)', 
    top:-10, 
    borderRadius: 300, 
    height:675, 
    width:650
  }
})

export const listOfLocation = {
  'DANVILLE': {
    title:'DANVILLE',
    serviceTime: 'Sundays at 9:30am & 11:15am', 
    officeHours: 'Mon & Wed: 9am-5pm Thu: 9am-2pm',
    address: '1001 Ben Ali Dr. #2 \nDanville, KY 40422',
    announcements: 'https://southland.church/danville/announcements',
    events: 'https://southland.church/events/danville',
    facebookGroup: 'https://www.facebook.com/groups/217891832843391',
    localOutreach: 'https://southland.church/local-outreach/?campus=danville',
    mapLat: 37.651164286367724, mapLng: -84.80545980241355,
    moreInformation: 'https://southland.church/danville/', 
    picture: require('../assets/images/DANVILLE.jpeg'),
  },
  'GEORGETOWN':{
    title:'GEORGETOWN',
    serviceTime: 'Sundays at 9:30am & 11:15am', 
    officeHours: 'Mon & Wed: 9am-4pm',
    address: '134 Amerson Way \nGeorgetown, KY 40324',
    announcements: 'https://southland.church/georgetown/announcements',
    events: 'https://southland.church/events/georgetown',
    facebookGroup: 'https://www.facebook.com/groups/southlandgeo/',
    localOutreach: 'https://southland.church/local-outreach/?campus=georgetown',
    mapLat: 38.188035066919824, mapLng: -84.5426949042449,
    moreInformation: 'https://southland.church/georgetown/',
    picture: require('../assets/images/GEORGETOWN.jpeg'),
  },
  'LEXINGTON':{
    title:'LEXINGTON',
    serviceTime: 'Sundays at 9:30am, 11:15am, & 5pm', 
    officeHours: 'Mon & Wed: 9am-12pm, 1pm-4pm',
    address: '12349 Richmond Road \nLexington, KY 40502',
    announcements: 'https://southland.church/lexington/announcements',
    events: 'https://southland.church/events/lexington',
    facebookGroup: 'https://www.facebook.com/groups/234280150976456',
    localOutreach: 'https://southland.church/local-outreach/?campus=lexington',
    mapLat: 38.01785227510702, mapLng: -84.46071401589934,
    moreInformation: 'https://southland.church/lexington/',
    picture: require('../assets/images/LEXINGTON.jpeg'),
  },
  'NICHOLASVILLE':{
    title:'NICHOLASVILLE',
    serviceTime: 'Sundays at 9:30am & 11:15am', 
    officeHours: 'Mon–Thu: 9am-5pm Fri: 9am-1pm',
    address: '5001 Harrodsburg Road \nNicholasville, KY 40356',
    announcements: 'https://southland.church/nicholasville/announcements',
    events: 'https://southland.church/events/nicholasville',
    facebookGroup: 'https://www.facebook.com/groups/southlandnic',
    localOutreach: 'https://southland.church/local-outreach/?campus=nicholasville',
    mapLat: 37.971798318274175, mapLng:-84.59251170056054,
    moreInformation: 'https://southland.church/nicholasville/',
    picture: require('../assets/images/NICHOLASVILLE.jpeg'),
  },
  'RICHMOND':{
    title:'RICHMOND',
    serviceTime: 'Sundays at 9:30am & 11:15am', 
    officeHours: 'Mon–Thu: 9am-5pm Fri: 9am-1pm',
    address: 'Madison Central High School \n705 N 2nd St \nRichmond, KY 40475',
    announcements: 'https://southland.church/richmond/announcements',
    events: 'https://southland.church/events/richmond',
    facebookGroup: 'https://www.facebook.com/groups/SouthlandRichmondCampus',
    localOutreach: 'https://southland.church/local-outreach/?campus=richmond',
    mapLat: 37.75633549846826, mapLng:-84.2902582139307,
    moreInformation: 'https://southland.church/richmond/',
    picture: require('../assets/images/RICHMOND.jpeg'),
  },
  'ONLINE':{
    title: 'ONLINE',
    serviceTime: 'Sundays: \n\tPreschool: 9:00am \n\tChilderns: 9:30am\n\t Adults: 10am & 11:30am', 
    officeHours: '', address: '', announcements: '', events: '',facebookGroup: '', 
    localOutreach: '',  mapLat: 0, mapLng: 0, 
    moreInformation: 'https://online.southland.church/',
    picture: require('../assets/images/ONLINE.jpg'),
  }
}

export const links = {
  'ANNOUNCEMENTS': {title: 'ANNOUNCEMENTS',  info: 'See what is happening at your campus', 
    screen: 'false', nav: '', 
    picture: require('../assets/images/ANNOUNCEMENTS.jpeg'), key: '1'},
  'BIBLE':{title: 'BIBLE',  info: 'Grow in God\'s word', 
    screen: 'false', nav: 'https://youversion.com/the-bible-app/', 
    picture: require('../assets/images/BIBLE.jpeg'), key: '2'},
  'DEVOTION':{title: 'DEVOTION',  info: 'Spiritual Growth through God\'s word', 
    screen: 'false', nav: 'https://southland.church/devotions/', 
    picture: require('../assets/images/DEVOTION.jpg'), key: '3'},
  'EVENTS':{title: 'EVENTS',  info: 'Don\'t miss out on your campus events!', 
    screen: 'false', nav: '',  
    picture: require('../assets/images/EVENTS.jpeg'), key: '4'},
  'GROUPS':{title: 'GROUPS',  info: 'Find a group that works for you ', 
    screen: 'false', nav: 'https://southland.church/groups/', 
    picture: require('../assets/images/GROUPS.jpeg'), key: '5'},
  'NOTES':{title: 'NOTES',  info: 'Take notes along with each sermon', 
    screen: 'true', nav: 'Notes', 
    picture: require('../assets/images/NOTES.jpeg'), key: '6'},
  'ONLINE':{title: 'ONLINE',  info: 'Watch today\'s sermon online!', 
    screen: 'true', nav: 'Location', navItems: listOfLocation['ONLINE'],  picture: require('../assets/images/ONLINE.jpg'), key: '7'},
  'PODCASTS':{title: 'PODCASTS',  info: 'Find the perfect podcast for you', 
    screen: 'true', nav: 'Podcasts',  
    picture: require('../assets/images/PODCASTS.jpeg'), key: '8'},
  'PRAYER':{title: 'PRAYER',  info: 'How can we pray for you?', 
    screen: 'true', nav: 'Prayer',  
    picture: require('../assets/images/PRAYER.jpeg'), key: '9'},
  'VOLUNTEER':{title: 'VOLUNTEER',  info: 'Make an inpact in the world around you', 
    screen: 'false', nav: 'https://southland.church/volunteer/', 
    picture: require('../assets/images/VOLUNTEER.jpeg'), key: '10'},
}

export const newNote = { title: "Title", date: new Date().toDateString(),
  note: "Note...", key: ""}



