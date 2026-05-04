# Bluelake Website

Static HTML/CSS clone of the former `bluelake.at` WordPress site, served by
nginx in Docker.

## Pages

- `/` homepage
- `/blog/` listing
- `/blog/hot-unlimited-vs-magenta-mobile-working/`
- `/blog/was-sind-die-vorteile-einer-website/`
- `/blog/ein-jahr-mit-der-dsgvo/`
- `/impressum/`
- `/agb/`

The old `/kontakt/` page has no content in this static version.

## Local Run

```bash
make build
make run
```

The compose file publishes nginx on `http://localhost:8082`.

## Deployment Notes

- Static assets are copied into `nginx:1.29-alpine`.
- `nginx.conf` serves extensionless directory routes via `try_files`.
- No application runtime, database, or JavaScript framework is involved.
