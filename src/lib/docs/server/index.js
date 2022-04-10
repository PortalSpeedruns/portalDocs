import fs from 'fs';
// import { renderCodeToHTML, runTwoSlash, createShikiHighlighter } from 'shiki-twoslash';
import PrismJS from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-diff.js';
import 'prismjs/components/prism-typescript.js';
import { extract_frontmatter, transform, escape } from './markdown';

const languages = {
	bash: 'bash',
	env: 'bash',
	html: 'markup',
	js: 'javascript',
	css: 'css',
	diff: 'diff',
	ts: 'typescript',
	'': ''
};

const base = './documentation';

/**
 * @param {string} dir
 * @param {string} file
 */
export async function read_file(dir, file) {
	const match = /\d{2}-(.+)\.md/.exec(file);
	if (!match) return null;

	const slug = match[1];

	const markdown = fs.readFileSync(`${base}/${dir}/${file}`, 'utf-8');

	// const highlighter = await createShikiHighlighter({ theme: 'css-variables' });

	const { metadata, body } = extract_frontmatter(markdown);

	const { content } = parse({
		body: body,
		file,
		slug,
		code: (code, infostring, escaped) => {
			const lang = (infostring || '').match(/\S*/)[0];

			code = code.replace(/\n$/, '') + '\n';

			if (!lang) {
				return (
					'<div class="code-block"><pre><code>' +
					(escaped ? code : escape(code, true)) +
					'</code></pre></div>\n'
				);
			}

			if (languages[lang]) {
				return `<div class="code-block"><pre><code>${PrismJS.highlight(
					code,
					PrismJS.languages[lang],
					lang
				)}</pre></code></div>`;
			}

			return (
				'<div class="code-block"><pre><code class="language-' +
				escape(lang, true) +
				'">' +
				(escaped ? code : escape(code, true)) +
				'</code></pre></div>\n'
			);
		}
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

			const { body, metadata } = extract_frontmatter(markdown);

			const { sections } = parse({
				body,
				file,
				slug: slug,
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

			const slugNormalized = headings.slice(1);
			const slug = slugNormalized.filter(Boolean).join('-');

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

			if (level < 4) {
				// only generate ids for headings lower than 4
				return `<h${level} id="${slug}">${html}<a href="#${slug}" class="anchor"><span class="visually-hidden">permalink</span></a></h${level}>`;
			}
			return `<h${level} >${html}</h${level}>`;
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
