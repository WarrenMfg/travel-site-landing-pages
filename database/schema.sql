DROP DATABASE IF EXISTS about;
CREATE DATABASE about;
USE about;


CREATE TABLE `about` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,

  `average` float(2, 1) NOT NULL,
  `location` float(2, 1) NOT NULL,
  `cleanliness` float(2, 1) NOT NULL,
  `service` float(2, 1) NOT NULL,
  `value` float(2, 1) NOT NULL,

  `certOfExcellence` tinyint NOT NULL,
  `greenLeaders` tinyint NOT NULL,

  `aboutCopy` text NOT NULL,

  `amenityIcon1` tinyint NOT NULL,
  `amenityCopy1` varchar(50) NOT NULL,
  `amenityIcon2` tinyint NOT NULL,
  `amenityCopy2` varchar(50) NOT NULL,
  `amenityIcon3` tinyint NOT NULL,
  `amenityCopy3` varchar(50) NOT NULL,
  `amenityIcon4` tinyint NOT NULL,
  `amenityCopy4` varchar(50) NOT NULL,
  `amenityIcon5` tinyint NOT NULL,
  `amenityCopy5` varchar(50) NOT NULL,
  `amenityIcon6` tinyint NOT NULL,
  `amenityCopy6` varchar(50) NOT NULL,
  `amenityIcon7` tinyint NOT NULL,
  `amenityCopy7` varchar(50) NOT NULL,
  `amenityIcon8` tinyint NOT NULL,
  `amenityCopy8` varchar(50) NOT NULL,

  `roomFeatureIcon1` tinyint NOT NULL,
  `roomFeatureCopy1` varchar(50) NOT NULL,
  `roomFeatureIcon2` tinyint NOT NULL,
  `roomFeatureCopy2` varchar(50) NOT NULL,
  `roomFeatureIcon3` tinyint NOT NULL,
  `roomFeatureCopy3` varchar(50) NOT NULL,
  `roomFeatureIcon4` tinyint NOT NULL,
  `roomFeatureCopy4` varchar(50) NOT NULL,
  `roomFeatureIcon5` tinyint NOT NULL,
  `roomFeatureCopy5` varchar(50) NOT NULL,
  `roomFeatureIcon6` tinyint NOT NULL,
  `roomFeatureCopy6` varchar(50) NOT NULL,
  `roomFeatureIcon7` tinyint NOT NULL,
  `roomFeatureCopy7` varchar(50) NOT NULL,
  `roomFeatureIcon8` tinyint NOT NULL,
  `roomFeatureCopy8` varchar(50) NOT NULL,

  `roomTypeIcon1` tinyint NOT NULL,
  `roomTypeCopy1` varchar(50) NOT NULL,
  `roomTypeIcon2` tinyint NOT NULL,
  `roomTypeCopy2` varchar(50) NOT NULL,
  `roomTypeIcon3` tinyint NOT NULL,
  `roomTypeCopy3` varchar(50) NOT NULL,
  `roomTypeIcon4` tinyint NOT NULL,
  `roomTypeCopy4` varchar(50) NOT NULL,

  `hotelClass` float(2, 1) NOT NULL,
  `hotelStyle` varchar(50) NOT NULL,

  `hotelWebsite` varchar(255) NOT NULL,
  `hotelDeals` varchar(255) NOT NULL
);

-- mysql -u root < database/schema.sql