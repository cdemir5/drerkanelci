-- Blog schema for drerkanelci.com
-- Run once in the Neon SQL Editor (Vercel → Storage → Neon → Open in Neon).
-- Safe to re-run: every statement is idempotent.

create table if not exists posts (
  id              uuid primary key default gen_random_uuid(),
  category        text,
  cover_image_url text,
  cover_alt       text,
  source          text not null default 'admin' check (source in ('admin', 'mcp')),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create table if not exists post_translations (
  id               uuid primary key default gen_random_uuid(),
  post_id          uuid not null references posts(id) on delete cascade,
  locale           text not null check (locale in ('tr', 'en', 'de', 'ru')),
  slug             text not null,
  title            text not null,
  excerpt          text not null default '',
  content_md       text not null default '',
  meta_title       text not null default '',
  meta_description text not null default '',
  faqs             jsonb not null default '[]'::jsonb,
  status           text not null default 'draft' check (status in ('draft', 'published')),
  published_at     timestamptz,  -- first publication (slug is locked from then on)
  reviewed_at      timestamptz,  -- last approval by the doctor (each publish)
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  unique (post_id, locale),
  unique (locale, slug)
);

create index if not exists post_translations_listing
  on post_translations (locale, status, published_at desc);

create index if not exists posts_source_created
  on posts (source, created_at desc);
