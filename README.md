# # APIOPTIMUM
Awesome Project Build with TypeORM



# Presentation
Optimum Solutions SA is a brokerage company allowing customers to subscribe to insurance and to learn about the different possible insurance offers. The brokerage company is mandated by multiple insurance companies present in the country or in the sub-region. The business process is simple.
The customer arrives in the company, he can:

1. Contact the agency to find out about an insurance package that interests him.
The company records the customer's information and therefore sends the package information back to him.

2. Apply for specific insurance.
The company records the client's information, and presents the client with a contract related to the brokerage mandate. The client signs the brokerage mandate and returns the PDF document to the company. Once all the steps related to the insurance chosen by the customer are carried out by the company, it returns the contract to the customer.

These APIs are the way by which all operations are conducted.

# Steps to run this project:

1. Run :
```bash
npm i
```
2. Please be sure to check you environment. Setup environnement settings are inside **./.env** file

3. Finally Run : 
```bash
npm run dev
```

## Project structure

| Location             |  Content                                   |
|----------------------|--------------------------------------------|
| `/src/.env`  | Environnement settings                    |
| `/assets/documents`  | Document folder                     |
| `/assets/pictures`   | Pictures folder                     |
| `/src/entity`   | Entity files wrote with typeORM decorators  |
| `/src/interfaces`   | Interface for some entities  |
| `/src/services`   | All services organized by entity with an index |
| `/src/middlewares`   | Middlewares for some services  |
| `/src/routes`        | Routes organized by entity with an index |
| `/src/index.js` | API Entry Point with server configurations |
| `/src/dtos`     | DTOs for entities          |
| `/src/configs`     | Imported project configurations from an .env file  |

Please kindly respect this project architecture in your code maintenance.

[link-author]: https://github.com/yaasiin-ayeva


