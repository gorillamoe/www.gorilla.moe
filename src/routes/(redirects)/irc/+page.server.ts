import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(302, 'ircs://irc.libera.chat:6697?username=GorillaMoe');
}
