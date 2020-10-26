## Como foi feito o deploy
Foi utilizado o heroku usando o mesmo repositório no github para os 3 serviços: web, servidor e mobile. Para isso foi necessário usar o git subtree para cada app no herokup identificando o serviço que seria rodado. 
Referências que ajudaram no processo:
[(MEDIUM) Deploy Git subdirectory to Heroku](https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f)
[(CODERWALL) Heroku deployment in a subfolder](https://coderwall.com/p/ssxp5q/heroku-deployment-without-the-app-being-at-the-repo-root-in-a-subfolder)
Definindo build para compilar o typescript e criar o inicio de produção do servidor
[How to Setup a TypeScript + Node.js Project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)

Comando importante pela qual foi possível utilizar o mesmo repositório para diferentes aplicações deploy no heroku
git subtree push --prefix server heroku master


## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/FelipeSD/ecoleta/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/FelipeSD/ecoleta/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.