/**
 * Formats a title and description to use as the `head` properties in a Vue component.
 *
 * The vue-meta plugin for Nuxt adds the `head` property to Vue components to allow pages to manage
 * their own metadata. However, most of the time, all that is needed is the page title and page
 * description. This utility function provides a simpler way to declare this information.
 *
 * @param {Object} meta The meta information of the page.
 * @param {String} meta.title The title of the page.
 * @param {String} meta.description The description of the page.
 * @returns {Object} An object containing the head properties.
 */
export default function pageMeta({ title, description }) {
	return {
		title() {
			return title;
		},
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: description,
			},
		],
	};
};
