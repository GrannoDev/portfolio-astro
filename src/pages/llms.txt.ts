import type {APIRoute} from 'astro';
import {profileMarkdown} from '../lib/markdown';

export const GET: APIRoute = () =>
  new Response(profileMarkdown({includeLinks: true}), {
    headers: {'Content-Type': 'text/plain; charset=utf-8'},
  });
