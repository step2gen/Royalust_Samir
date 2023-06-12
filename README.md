# Royalust_Samir 
 
System Requirements:
=> Windows Operating System.
=> Visual Studio Community 2022 or above (https://visualstudio.microsoft.com/vs/) with ASP.NET and web development options.

Steps to run the project:
=> Open the project using RoyalLust.sln file.
=> Paste your database connection string in the appsetting.json file under the ConnectionStrings section on the right side of DefaultConnection.

	///Example  
	{
	  "ConnectionStrings": {
	"DefaultConnection": "Add your connection string."
	  },
	  "Logging": {
	    "LogLevel": {
	      "Default": "Information",
	      "Microsoft.AspNetCore": "Warning"
	    }
	  },
	  "AllowedHosts": "*"
	}
 
Create tables in database: 
=> In the top menu go to Tools > Nuget Package Manager > Package Manager Console.
=> Run the command "update-database" into the Package Manager Console.
=> Hit the https button in the visual studio to run the project.
=> Create your first user using SignUp - https://localhost:7105/Identity/Account/Register.
=> Sign In with your created user credentials - https://localhost:7105/Identity/Account/Login
=> After Sign-In click on top menu email drop down and go to profile section where you can change user profile info as well as passwords.
