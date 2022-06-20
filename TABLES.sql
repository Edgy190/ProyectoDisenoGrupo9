-- Tables
CREATE TABLE DEPARTMENTS (
    NAME_DEPARTMENT VARCHAR(50) NOT NULL,
    CREATEDAT DATE,
    UPDATEDAT DATE,
    CONSTRAINT PK_DEPARTMENT PRIMARY KEY (NAME_DEPARTMENT)
);

CREATE TABLE USERS (
    FULL_NAME VARCHAR(150) NOT NULL,
    EMAIL VARCHAR(50) NOT NULL,
    EMAIL2 VARCHAR(50),
    PASSWORD_USER VARCHAR(256) NOT NULL,
    TYPE_USER VARCHAR(50) NOT NULL,
    PHONE_NUMBER INT NOT NULL,
	DESCRIPTION_JOB VARCHAR(150),
    DISABILITY VARCHAR(1) NOT NULL,
	ID_DEPARTMENT VARCHAR(50) NOT NULL,
    CREATEDAT DATE,
    UPDATEDAT DATE,
    CONSTRAINT PK_USER PRIMARY KEY (EMAIL),
    FOREIGN KEY FK_UXD_ID_DEPARTMENT (ID_DEPARTMENT) REFERENCES DEPARTMENTS(NAME_DEPARTMENT)
);

CREATE TABLE VEHICLES (
	VEHICLE_PLATE VARCHAR(6) NOT NULL,
    VEHICLE_BRAND VARCHAR(50) NOT NULL,
    VEHICLE_SERIES VARCHAR(50) NOT NULL,
    CREATEDAT DATE,
    UPDATEDAT DATE,
    CONSTRAINT PK_VEHICLE PRIMARY KEY (VEHICLE_PLATE)
);

CREATE TABLE VEHICLES_X_USERS (
	ID INT AUTO_INCREMENT NOT NULL,
	VEHICLE_PLATE VARCHAR(6) NOT NULL,
    EMAIL VARCHAR(50) NOT NULL,
    CREATEDAT DATE,
    UPDATEDAT DATE,
    FOREIGN KEY FK_VXU_1 (VEHICLE_PLATE) REFERENCES VEHICLES(VEHICLE_PLATE),
    FOREIGN KEY FK_VXU_2 (EMAIL) REFERENCES USERS(EMAIL),
	CONSTRAINT PK_VEHICLES_X_USERS PRIMARY KEY (ID)
);

CREATE TABLE PARKINGS (
	ID INT AUTO_INCREMENT NOT NULL,
    NAME_PARKING VARCHAR (50) NOT NULL,
    TYPE_PARKING VARCHAR (50) NOT NULL,
    EMAIL_RESPONSIBLE VARCHAR(50),
    LOCATION_PARKING VARCHAR (150) NOT NULL,
    SCHEDULE_START VARCHAR (25) NOT NULL,
    SCHEDULE_END VARCHAR (25) NOT NULL,
    SPACE_PARKING INT NOT NULL,
    SPACE_RESERVED INT NOT NULL,
    SPACE_DISABLED INT NOT NULL,
    CREATEDAT DATE,
    UPDATEDAT DATE,
    CONSTRAINT PK_PARKING PRIMARY KEY (ID)
);