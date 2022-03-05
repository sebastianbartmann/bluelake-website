export const pushToDataLayer = (obj: object) => {
	window.dataPlayer = window.dataPlayer || [];
	window.dataPlayer.push(obj);
};

export const pushDatalayerEvent = (
	name: string,
	category: string,
	action: string,
	label: string
) => {
	var event = { event: 'cEvent', event_name: name };
	event[name] = {
		category: category,
		action: action,
		label: label
	};

	window.dataPlayer = window.dataPlayer || [];
	window.dataPlayer.push(event);
};

export const pushDatalayerBlogImpression = (
	category: string,
	title: string,
	creation_date: string
) => {
	var event = {
		event: 'cEvent',
		event_name: 'blog_post_impression',
		blog_post_impression: {
			category: category,
			title: title,
			creation_date: creation_date
		}
	};

	window.dataPlayer = window.dataPlayer || [];
	window.dataPlayer.push(event);
};
