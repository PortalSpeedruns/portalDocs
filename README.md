# Portal 1 Speedrun Docs

See the docs live at [portalspeedruns.com](https://www.portalspeedruns.com/docs/main/introduction)

## Documenting / contributing

### Images

If you want to add new images to the documentation, you first need to add the image to the `static/images` folder before referencing the image inside the markdown.

**markdown example**

```md
![alt text if image doesn't load](/images/yourImage.png)
```

### Custom syntax

On top of normal Markdown the documentation supports some special syntax to make documenting easier.

#### Youtube embeds

If you want to embed a Youtube video, you can do this like so using the `%y` prefix

```
%y youtube url
```

## Development

To install and work on the project locally:

```bash
git clone https://github.com/Vuurvos1/portalDocs.git
cd portalDocs
npm install # or pnpm install
```

Start the project using:

```bash
npm run start # or pnpm start
```

or to start the project in development mode use:

```bash
npm run dev # or pnpm dev
```

## License

[MIT](https://github.com/Vuurvos1/portalDocs/blob/main/LICENSE)
