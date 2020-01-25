const faker = require('faker');


for (let i = 0; i < 1; i++) {
  let average = faker.finance.amount(0, 5, 1);
  let location = faker.finance.amount(0, 5, 1);
  let cleanliness = faker.finance.amount(0, 5, 1);
  let service = faker.finance.amount(0, 5, 1);
  let value = faker.finance.amount(0, 5, 1);

  let certOfExcellence = faker.random.number(1);
  let greenLeaders = faker.random.number(1);

  let aboutCopy = faker.lorem.paragraphs(5, '\n');

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
  let amenityIcon8 = faker.random.number(10);
  let amenityCopy8 = faker.lorem.sentence(2);

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
  let roomFeatureIcon8 = faker.random.number(10);
  let roomFeatureCopy8 = faker.lorem.sentence(2);

  let roomTypeIcon1 = faker.random.number(3);
  let roomTypeCopy1 = faker.lorem.sentence(2);
  let roomTypeIcon2 = faker.random.number(3);
  let roomTypeCopy2 = faker.lorem.sentence(2);
  let roomTypeIcon3 = faker.random.number(3);
  let roomTypeCopy3 = faker.lorem.sentence(2);
  let roomTypeIcon4 = faker.random.number(3);
  let roomTypeCopy4 = faker.lorem.sentence(2);

  let hotelClass = faker.finance.amount(0, 5, 1);
  let hotelStyle = faker.lorem.sentence(2);

  let hotelWebsite = faker.internet.url();
  let hotelDeals = faker.internet.url();
}
