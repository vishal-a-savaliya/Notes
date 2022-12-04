# DBMS Introduction

## Data

Data is a collection of a distinct small unit of information. It can be used in a variety of forms like text, numbers, media, bytes, etc. it can be stored in pieces of paper or electronic memory, etc.
Word 'Data' is originated from the word 'datum' that means 'single piece of information.' It is plural of the word datum.
In computing, Data is information that can be translated into a form for efficient movement and processing. Data is interchangeable.

## Database

A **database** is an organized collection of data, so that it can be easily accessed and managed.

You can organize data into tables, rows, columns, and index it to make it easier to find relevant information.

**Database handlers** create a database in such a way that only one set of software program provides access of data to all the users.

The **main purpose** of the database is to operate a large amount of information by storing, retrieving, and managing data.

There are many **dynamic websites** on the World Wide Web nowadays which are handled through databases. For example, a model that checks the availability of rooms in a hotel. It is an example of a dynamic website that uses a database.

There are many **databases available** like MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL, SQL Server, etc.

Modern databases are managed by the database management system (DBMS).

**SQL** or Structured Query Language is used to operate on the data stored in a database. SQL depends on relational algebra and tuple relational calculus.

## DBMS (Data Base Management System)

Database management System is software which is used to store and retrieve the database. For example, Oracle, MySQL, etc.; these are some popular DBMS tools.

- DBMS provides the interface to perform the various operations like creation, deletion, modification, etc.
- DBMS allows the user to create their databases as per their requirement.
- DBMS accepts the request from the application and provides specific data through the operating system.
- DBMS contains the group of programs which acts according to the user instruction.
- It provides security to the database.

## Advantage of DBMS

**Controls redundancy**

It stores all the data in a single database file, so it can control data redundancy.

**Data sharing**

An authorized user can share the data among multiple users.

**Backup**

It provides Backup and recovery subsystem. This recovery system creates automatic data from system failure and restores data if required.

**Multiple user interfaces**

It provides a different type of user interfaces like GUI, application interfaces.

## Disadvantage of DBMS

**Size**

It occupies large disk space and large memory to run efficiently.

**Cost**

DBMS requires a high-speed data processor and larger memory to run DBMS software, so it is costly.

**Complexity**

DBMS creates additional complexity and requirements.uy

## **What is a Database?**

A database is a collection of related data which represents some aspect of the real world. A database system is designed to be built and populated with data for a certain task.

# **What is DBMS?**

**Database Management System (DBMS)** is a software for storing and retrieving users’ data while considering appropriate security measures. It consists of a group of programs which manipulate the database. The DBMS accepts the request for data from an application and instructs the operating system to provide the specific data. In large systems, a DBMS helps users and other third-party software to store and retrieve data.

DBMS allows users to create their own databases as per their requirement. The term “DBMS” includes the user of the [database](https://www.guru99.com/introduction-to-database-sql.html) and other application programs. It provides an interface between the data and the software application.

In this Database Management System tutorial tutorial, you will learn DBMS concepts like-

- [What is a Database?](https://www.guru99.com/what-is-dbms.html#what-is-a-database)
- [What is DBMS (Database Management System)?](https://www.guru99.com/what-is-dbms.html#what-is-dbms)
- [Example of a DBMS](https://www.guru99.com/what-is-dbms.html#example-of-a-dbms)
- [History of DBMS](https://www.guru99.com/what-is-dbms.html#history-of-dbms)
- [Characteristics of DBMS](https://www.guru99.com/what-is-dbms.html#characteristics-of-dbms)
- [DBMS vs. Flat File](https://www.guru99.com/what-is-dbms.html#dbms-vs-flatfile)
- [Users of DBMS](https://www.guru99.com/what-is-dbms.html#users-of-dbms)
- [Popular DBMS Software](https://www.guru99.com/what-is-dbms.html#popular-dbms-software)
- [Application of DBMS](https://www.guru99.com/what-is-dbms.html#application-of-dbms)
- [Types of DBMS](https://www.guru99.com/what-is-dbms.html#types-of-dbms)
- [Advantages of DBMS](https://www.guru99.com/what-is-dbms.html#advantages-of-dbms)
- [Disadvantage of DBMS](https://www.guru99.com/what-is-dbms.html#disadvantage-of-dbms)
- [When not to use a DBMS system?](https://www.guru99.com/what-is-dbms.html#when-not-to-use-a-dbms-system)

# **Example of a DBMS**

Let us see a simple example of a university database. This database is maintaining information concerning students, courses, and grades in a university environment. The database is organized as five files:

- The STUDENT file stores data of each student
- The COURSE file stores contain data on each course.
- The SECTION stores the information about sections in a particular course.
- The GRADE file stores the grades which students receive in the various sections
- The TUTOR file contains information about each professor.

To define DBMS:

- We need to specify the structure of the records of each file by defining the different types of data elements to be stored in each record.
- We can also use a coding scheme to represent the values of a data item.
- Basically, your Database will have 5 tables with a foreign key defined amongst the various tables.

# **History of DBMS**

Here, are the important landmarks from the history:

- 1960 – Charles Bachman designed first DBMS system
- 1970 – Codd introduced IBM’S Information Management System (IMS)
- 1976- Peter Chen coined and defined the Entity-relationship model also know as the ER model
- 1980 – Relational Model becomes a widely accepted database component
- 1985- Object-oriented DBMS develops.
- 1990s- Incorporation of object-orientation in relational DBMS.
- 1991- Microsoft ships MS access, a personal DBMS and that displaces all other personal DBMS products.
- 1995: First Internet database applications
- 1997: XML applied to database processing. Many vendors begin to integrate XML into DBMS products.

# **Characteristics of DBMS**

Here are the characteristics and properties of Database Management System:

- Provides security and removes redundancy
- Self-describing nature of a database system
- Insulation between programs and data abstraction
- Support of multiple views of the data
- Sharing of data and multiuser transaction processing
- Database Management Software allows entities and relations among them to form tables.
- It follows the ACID concept ( Atomicity, Consistency, Isolation, and Durability).
- DBMS supports multi-user environment that allows users to access and manipulate data in parallel.

# **DBMS vs. Flat File**

| DBMS                                                             | Flat File Management System                |
| ---------------------------------------------------------------- | ------------------------------------------ |
| Multi-user access                                                | It does not support multi-user access      |
| Design to fulfill the need for small and large businesses        | It is only limited to smaller DBMS system. |
| Remove redundancy and Integrity                                  | Redundancy and Integrity issues            |
| Expensive. But in the long term Total Cost of Ownership is cheap | It’s cheaper                               |
| Easy to implement complicated transactions                       | No support for complicated transactions    |

**There are the following differences between DBMS and File systems:**

| Basis                             | DBMS Approach                                                                                                                              | File System Approach                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Meaning                           | DBMS is a collection of data. In DBMS, the user is not required to write the procedures.                                                   | The file system is a collection of data. In this system, the user has to write the procedures for managing the database.                                            |
| Sharing of data                   | Due to the centralized approach, data sharing is easy.                                                                                     | Data is distributed in many files, and it may be of different formats, so it isn't easy to share data.                                                              |
| Data Abstraction                  | DBMS gives an abstract view of data that hides the details.                                                                                | The file system provides the detail of the data representation and storage of data.                                                                                 |
| Security and Protection           | DBMS provides a good protection mechanism.                                                                                                 | It isn't easy to protect a file under the file system.                                                                                                              |
| Recovery Mechanism                | DBMS provides a crash recovery mechanism, i.e., DBMS protects the user from system failure.                                                | The file system doesn't have a crash mechanism, i.e., if the system crashes while entering some data, then the content of the file will be lost.                    |
| Manipulation Techniques           | DBMS contains a wide variety of sophisticated techniques to store and retrieve the data.                                                   | The file system can't efficiently store and retrieve the data.                                                                                                      |
| Concurrency Problems              | DBMS takes care of Concurrent access of data using some form of locking.                                                                   | In the File system, concurrent access has many problems like redirecting the file while deleting some information or updating some information.                     |
| Where to use                      | Database approach used in large systems which interrelate many files.                                                                      | File system approach used in large systems which interrelate many files.                                                                                            |
| Cost                              | The database system is expensive to design.                                                                                                | The file system approach is cheaper to design.                                                                                                                      |
| Data Redundancy and Inconsistency | Due to the centralization of the database, the problems of data redundancy and inconsistency are controlled.                               | In this, the files and application programs are created by different programmers so that there exists a lot of duplication of data which may lead to inconsistency. |
| Structure                         | The database structure is complex to design.                                                                                               | The file system approach has a simple structure.                                                                                                                    |
| Data Independence                 | In this system, Data Independence exists, and it can be of two types.Logical Data IndependencePhysical Data Independence                   | In the File system approach, there exists no Data Independence.                                                                                                     |
| Integrity Constraints             | Integrity Constraints are easy to apply.                                                                                                   | Integrity Constraints are difficult to implement in file system.                                                                                                    |
| Data Models                       | In the database approach, 3 types of data models exist:Hierarchal data modelsNetwork data modelsRelational data models                     | In the file system approach, there is no concept of data models exists.                                                                                             |
| Flexibility                       | Changes are often a necessity to the content of the data stored in any system, and these changes are more easily with a database approach. | The flexibility of the system is less as compared to the DBMS approach.                                                                                             |
| Examples                          | Oracle, SQL Server, Sybase etc.                                                                                                            | Cobol, C++ etc.                                                                                                                                                     |

# **Users of DBMS**

Following are the various category of users of DBMS

| Component Name          | Task                                                                                                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application Programmers | The Application programmers write programs in various programming languages to interact with databases.                                                              |
| Database Administrators | Database Admin is responsible for managing the entire DBMS system. He/She is called Database admin or DBA.                                                           |
| End-Users               | The end users are the people who interact with the database management system. They conduct various operations on database like retrieving, updating, deleting, etc. |

# **Popular DBMS Software**

Here, is the list of some popular DBMS system:

- [MySQL](https://www.guru99.com/sql.html)
- Microsoft Access
- Oracle
- [PostgreSQL](https://www.guru99.com/postgresql-tutorial.html)
- dBASE
- FoxPro
- SQLite
- IBM DB2
- LibreOffice Base
- [MariaDB](https://www.guru99.com/mariadb-tutorial-install.html)
- Microsoft SQL Server etc.

# **Application of DBMS**

Below are the popular database system applications:

| Sector            | Use of DBMS                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| Banking           | For customer information, account activities, payments, deposits, loans, etc.                                         |
| Airlines          | For reservations and schedule information.                                                                            |
| Universities      | For student information, course registrations, colleges and grades.                                                   |
| Telecommunication | It helps to keep call records, monthly bills, maintaining balances, etc.                                              |
| Finance           | For storing information about stock, sales, and purchases of financial instruments like stocks and bonds.             |
| Sales             | Use for storing customer, product & sales information.                                                                |
| Manufacturing     | It is used for the management of supply chain and for tracking production of items. Inventories status in warehouses. |
| HR Management     | For information about employees, salaries, payroll, deduction, generation of paychecks, etc.                          |

# **Types of DBMS**

Tha main Four Types of Database Management System are:

- Hierarchical database
- Network database
- Relational database
- Object-Oriented database

### **Hierarchical DBMS**

In a Hierarchical database, model data is organized in a tree-like structure. Data is Stored Hierarchically (top down or bottom up) format. Data is represented using a parent-child relationship. In Hierarchical DBMS parent may have many children, but children have only one parent.

### **Network Model**

The network database model allows each child to have multiple parents. It helps you to address the need to model more complex relationships like as the orders/parts many-to-many relationship. In this model, entities are organized in a graph which can be accessed through several paths.

### **Relational Model**

Relational DBMS is the most widely used DBMS model because it is one of the easiest. This model is based on normalizing data in the rows and columns of the tables. Relational model stored in fixed structures and manipulated using SQL.

### **Object-Oriented Model**

In Object-oriented Model data stored in the form of objects. The structure which is called classes which display data within it. It is one of the components of DBMS that defines a database as a collection of objects which stores both data members values and operations.

# **Advantages of DBMS**

- DBMS offers a variety of techniques to store & retrieve data
- DBMS serves as an efficient handler to balance the needs of multiple applications using the same data
- Uniform administration procedures for data
- Application programmers never exposed to details of data representation and storage.
- A DBMS uses various powerful functions to store and retrieve data efficiently.
- Offers Data Integrity and Security
- The DBMS implies integrity constraints to get a high level of protection against prohibited access to data.
- A DBMS schedules concurrent access to the data in such a manner that only one user can access the same data at a time
- Reduced Application Development Time

# **Disadvantage of DBMS**

DBMS may offer plenty of advantages but, it has certain flaws-

- Cost of Hardware and Software of a DBMS is quite high which increases the budget of your organization.
- Most database management systems are often complex systems, so the training for users to use the DBMS is required.
- In some organizations, all data is integrated into a single database which can be damaged because of electric failure or database is corrupted on the storage media
- Use of the same program at a time by many users sometimes lead to the loss of some data.
- DBMS can’t perform sophisticated calculations

# **When not to use a DBMS system?**

Although, DBMS system is useful. It is still not suited for specific task mentioned below:

Not recommended when you do not have the budget or the expertise to operate a DBMS. In such cases, Excel/CSV/Flat Files could do just fine.

# **Summary**

- DBMS definition: A database is a collection of related data which represents some aspect of the real world
- The full form of DBMS is [Database Management System](https://www.guru99.com/dbms-tutorial.html). DBMS stands for Database Management System is a software for storing and retrieving users’ data by considering appropriate security measures.
- DBMS Provides security and removes redundancy
- DBMS has many advantages over tradition Flat File management system
- Some Characteristics of DBMS are Security, Self-describing nature, Insulation between programs and data abstraction, Support of multiple views of the data, etc.
- End-Users, Application Programmers, and Database Administrators are they type of users who access a DBMS
- DBMS is widely used in Banking, Airlines, Telecommunication, Finance and other industries
- The main Four DBMS types are 1) Hierarchical 2) Network 3) Relational 4) Object-Oriented DBMS
- DBMS serves as an efficient handler to balance the needs of multiple applications using the same data
- Cost of Hardware and Software of a DBMS is quite high which increases the budget of your organization
