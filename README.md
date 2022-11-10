#RESTfull API

Backend Technology
1. Servlet
2. JPA with Hibernate
3. RESTful resources
4. CRUD Operation 
5.Frameworks
6. MySql database
7. Spring Boot
8. Maven

Frontend Technology


1.React-js
2.Bootstrap
3.node package manager

Explanation
:At the frontend we have used React-js ,I have provided Home page as landing page with the help of this you can add multiple products along with its details ,
we have splitted it on the basis of product category,I have also provide delete option to remove the records from table.
when you insert the details and click on "ADD PRODUCT" button it will be routed to backend and first it will route to controller where we have mentioned our web api
to get the records and save it.after that it will be routed to service layer where we have provided method implimentation,and then it will route to Dao(repository layer)
to connect with Database we have used JPA Repository and Database we have used "Mysql Database".table name is "Product" and "ProductPrice".

Table Contains following columns
1.ProductId
2.ProductCategory
3.ProductType
4.Productname
5.Discount
6.GST
7.Final price

After that we have Stored All the details in the above mentioned Table and Retrieve Data from Database from getallProducts() method and it will Display All data At fronted
on home page as I have displayed in table.
