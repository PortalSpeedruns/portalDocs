import fs from 'fs';
import { renderCodeToHTML, runTwoSlash, createShikiHighlighter } from 'shiki-twoslash';
import PrismJS from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-diff.js';
import 'prismjs/components/prism-typescript.js';
// import 'prism-svelte';
import { extract_frontmatter, transform } from './markdown';
// import { modules } from '../../../../../../documentation/types.js';
// import { render_modules } from './modules';

const languages = {
	bash: 'bash',
	env: 'bash',
	html: 'markup',
	svelte: 'svelte',
	js: 'javascript',
	css: 'css',
	diff: 'diff',
	ts: 'typescript',
	'': ''
};

// const base = '../../documentation';
const base = './documentation';

// const type_regex = new RegExp(
// 	`(import\\(&apos;@sveltejs\\/kit&apos;\\)\\.)?\\b(${modules
// 		.map((module) => module.types)
// 		.flat()
// 		.map((type) => type.name)
// 		.join('|')})\\b`,
// 	'g'
// );

const type_links = new Map();

// modules.forEach((module) => {
// 	const slug = slugify(module.name);

// 	module.types.forEach((type) => {
// 		const link = `/docs/types#${slug}-${slugify(type.name)}`;
// 		type_links.set(type.name, link);
// 	});
// });

/**
 * @param {string} dir
 * @param {string} file
 */
export async function read_file(dir, file) {
	const match = /\d{2}-(.+)\.md/.exec(file);
	if (!match) return null;

	const slug = match[1];

	const markdown = fs.readFileSync(`${base}/${dir}/${file}`, 'utf-8');
	// .replace('**TYPES**', () => render_modules('types'))
	// .replace('**EXPORTS**', () => render_modules('exports'));

	const highlighter = await createShikiHighlighter({ theme: 'css-variables' });

	const { metadata, body } = extract_frontmatter(markdown);

	const { content } = parse({
		body: body,
		file,
		slug,
		code: () => ''
	});

	return {
		file: `${dir}/${file}`,
		slug: match[1],
		title: metadata.title,
		content
	};
}

/**
 * @param {string} dir
 * @param {string} slug
 */
export async function read(dir, slug) {
	const files = fs.readdirSync(`${base}/${dir}`).filter((file) => /^\d{2}-(.+)\.md$/.test(file));
	const index = files.findIndex((file) => file.slice(3, -3) === slug);

	if (index === -1) return null;

	const prev = index > 0 && files[index - 1];
	const next = index < files.length - 1 && files[index + 1];

	const summarise = (file) => {
		return {
			slug: file.slice(3, -3), // remove 00- prefix and .md suffix
			title: extract_frontmatter(fs.readFileSync(`${base}/${dir}/${file}`, 'utf8')).metadata.title
		};
	};

	return {
		prev: prev && summarise(prev),
		next: next && summarise(next),
		section: await read_file(dir, files[index])
	};
}

/** @param {string} dir */
export async function read_all(dir) {
	const result = [];

	for (const file of fs.readdirSync(`${base}/${dir}`)) {
		const section = await read_file(dir, file);
		if (section) result.push(section);
	}

	return result;
}

/** @param {string} dir */
export function read_headings(dir) {
	return fs
		.readdirSync(`${base}/${dir}`)
		.map((file) => {
			const match = /\d{2}-(.+)\.md/.exec(file);
			if (!match) return null;

			const slug = match[1];

			const markdown = fs.readFileSync(`${base}/${dir}/${file}`, 'utf-8');
			// .replace('**TYPES**', () => render_modules('types'))
			// .replace('**EXPORTS**', () => render_modules('exports'));

			const { body, metadata } = extract_frontmatter(markdown);

			const { sections } = parse({
				body,
				file,
				// gross hack to accommodate FAQ
				slug: dir === 'faq' ? slug : undefined,
				code: () => ''
			});

			return {
				slug: match[1],
				title: metadata.title,
				sections
			};
		})
		.filter(Boolean);
}

/**
 * @param {{
 *   body: string;
 *   file: string;
 *   slug: string;
 *   code: (source: string, language: string, current: string) => string;
 * }} opts
 */
function parse({ body, file, slug, code }) {
	const headings = slug ? [slug] : [];
	const sections = [];

	let section;

	// this is a bit hacky, but it allows us to prevent type declarations
	// from linking to themselves
	let current = '';

	const content = transform(body, {
		heading(html, level) {
			const title = html
				.replace(/<\/?code>/g, '')
				.replace(/&quot;/g, '"')
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>');

			current = title;

			const normalized = slugify(title);

			headings[level - 1] = normalized;
			headings.length = level;

			const slug = headings.filter(Boolean).join('-');

			if (level === 2) {
				section = {
					title,
					slug,
					sections: []
				};

				sections.push(section);
			} else if (level === 3) {
				section.sections.push({
					title,
					slug
				});
			} else if (level === 4) {
				// section.sections.push({
				// 	title,
				// 	slug
				// });
			} else if (level === 5) {
				// section.sections.push({
				// 	title,
				// 	slug
				// });
			} else {
				throw new Error(`Unexpected <h${level}> in ${file}`);
			}

			return `<h${level} id="${slug}">${html}<a href="#${slug}" class="anchor"><span class="visually-hidden">permalink</span></a></h${level}>`;
		},
		code: (source, language) => code(source, language, current)
	});

	return {
		sections,
		content
	};
}

/** @param {string} title */
export function slugify(title) {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9-$]/g, '-')
		.replace(/-{2,}/g, '-')
		.replace(/^-/, '')
		.replace(/-$/, '');
}
