const faker = require('faker');
const connection = require('./db.js');

let counter = 0;

const seed = () => {
  let average = faker.finance.amount(0, 5, 1);
  let location = faker.finance.amount(0, 5, 1);
  let cleanliness = faker.finance.amount(0, 5, 1);
  let service = faker.finance.amount(0, 5, 1);
  let value = faker.finance.amount(0, 5, 1);

  let certOfExcellence = faker.random.number(1);
  let greenLeaders = faker.random.number(1);

  let aboutCopy = faker.lorem.paragraphs(5, '\n');

  let amenityIcon0 = faker.random.number(10);
  let amenityCopy0 = faker.lorem.sentence(2);
  let amenityIcon1 = faker.random.number(10);
  let amenityCopy1 = faker.lorem.sentence(2);
  let amenityIcon2 = faker.random.number(10);
  let amenityCopy2 = faker.lorem.sentence(2);
  let amenityIcon3 = faker.random.number(10);
  let amenityCopy3 = faker.lorem.sentence(2);
  let amenityIcon4 = faker.random.number(10);
  let amenityCopy4 = faker.lorem.sentence(2);
  let amenityIcon5 = faker.random.number(10);
  let amenityCopy5 = faker.lorem.sentence(2);
  let amenityIcon6 = faker.random.number(10);
  let amenityCopy6 = faker.lorem.sentence(2);
  let amenityIcon7 = faker.random.number(10);
  let amenityCopy7 = faker.lorem.sentence(2);

  let roomFeatureIcon0 = faker.random.number(10);
  let roomFeatureCopy0 = faker.lorem.sentence(2);
  let roomFeatureIcon1 = faker.random.number(10);
  let roomFeatureCopy1 = faker.lorem.sentence(2);
  let roomFeatureIcon2 = faker.random.number(10);
  let roomFeatureCopy2 = faker.lorem.sentence(2);
  let roomFeatureIcon3 = faker.random.number(10);
  let roomFeatureCopy3 = faker.lorem.sentence(2);
  let roomFeatureIcon4 = faker.random.number(10);
  let roomFeatureCopy4 = faker.lorem.sentence(2);
  let roomFeatureIcon5 = faker.random.number(10);
  let roomFeatureCopy5 = faker.lorem.sentence(2);
  let roomFeatureIcon6 = faker.random.number(10);
  let roomFeatureCopy6 = faker.lorem.sentence(2);
  let roomFeatureIcon7 = faker.random.number(10);
  let roomFeatureCopy7 = faker.lorem.sentence(2);

  let roomTypeIcon0 = faker.random.number(3);
  let roomTypeCopy0 = faker.lorem.sentence(2);
  let roomTypeIcon1 = faker.random.number(3);
  let roomTypeCopy1 = faker.lorem.sentence(2);
  let roomTypeIcon2 = faker.random.number(3);
  let roomTypeCopy2 = faker.lorem.sentence(2);
  let roomTypeIcon3 = faker.random.number(3);
  let roomTypeCopy3 = faker.lorem.sentence(2);

  let hotelClass = faker.finance.amount(0, 5, 1);
  let hotelStyle = faker.lorem.sentences(4, '\n');

  let isSpecialOffered = faker.random.number(1);
  let special = faker.lorem.sentence(2);

  let params = [
    average,
    location,
    cleanliness,
    service,
    value,
    certOfExcellence,
    greenLeaders,
    aboutCopy,
    amenityIcon0,
    amenityCopy0,
    amenityIcon1,
    amenityCopy1,
    amenityIcon2,
    amenityCopy2,
    amenityIcon3,
    amenityCopy3,
    amenityIcon4,
    amenityCopy4,
    amenityIcon5,
    amenityCopy5,
    amenityIcon6,
    amenityCopy6,
    amenityIcon7,
    amenityCopy7,
    roomFeatureIcon0,
    roomFeatureCopy0,
    roomFeatureIcon1,
    roomFeatureCopy1,
    roomFeatureIcon2,
    roomFeatureCopy2,
    roomFeatureIcon3,
    roomFeatureCopy3,
    roomFeatureIcon4,
    roomFeatureCopy4,
    roomFeatureIcon5,
    roomFeatureCopy5,
    roomFeatureIcon6,
    roomFeatureCopy6,
    roomFeatureIcon7,
    roomFeatureCopy7,
    roomTypeIcon0,
    roomTypeCopy0,
    roomTypeIcon1,
    roomTypeCopy1,
    roomTypeIcon2,
    roomTypeCopy2,
    roomTypeIcon3,
    roomTypeCopy3,
    hotelClass,
    hotelStyle,
    isSpecialOffered,
    special
  ];

  connection.query('INSERT INTO about (average, location, cleanliness, service, value, certOfExcellence, greenLeaders, aboutCopy, amenityIcon0, amenityCopy0, amenityIcon1, amenityCopy1, amenityIcon2, amenityCopy2, amenityIcon3, amenityCopy3, amenityIcon4, amenityCopy4, amenityIcon5, amenityCopy5, amenityIcon6, amenityCopy6, amenityIcon7, amenityCopy7, roomFeatureIcon0, roomFeatureCopy0, roomFeatureIcon1, roomFeatureCopy1, roomFeatureIcon2, roomFeatureCopy2, roomFeatureIcon3, roomFeatureCopy3, roomFeatureIcon4, roomFeatureCopy4, roomFeatureIcon5, roomFeatureCopy5, roomFeatureIcon6, roomFeatureCopy6, roomFeatureIcon7, roomFeatureCopy7, roomTypeIcon0, roomTypeCopy0, roomTypeIcon1, roomTypeCopy1, roomTypeIcon2, roomTypeCopy2, roomTypeIcon3, roomTypeCopy3, hotelClass, hotelStyle, isSpecialOffered, special) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params, (err, data) => {
    if (err) {
      console.log('error at database/config.js INSERT INTO', err);
    } else {
      counter++;
      console.log(counter, 'data has been inserted');
      if (counter < 100) {
        seed();
      }
    }
  });
};

seed();

module.exports = seed;
//



// AMAZON
// var db = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME || config.HOSTNAME,
//   user     : process.env.RDS_USERNAME || config.USERNAME,
//   database : process.env.RDS_DATABASE || config.DATABASE,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });