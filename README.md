# Scaffolt for Ingredients

## Use this to generate ingredients

- Install scaffolt globally `npm install -g scaffolt`
- Clone the repo
- Create files and folders with `scaffolt -g {path/to/scaffolt-generators/repo} Ingredient {name of the ingredient}`

This will generate this folder structure:

```
.src
|___Ingredients
	|__{Name}
		|__tests__
			|__ {Name}.stories.js
			|__ {Name}.stories.css
		{Name.js}
		index.js
```

and inside the files there's already the starting poin to start working on the creation of the ingredient.

> TIP: The folder and files will be generated inside the folder from where you start the script. I suggest create an alias inside your `.bash_profile` file so that it is easier to run the script from everywhere.
