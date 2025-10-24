import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(302, 'https://discord.com/users/604573611046469643');
}
