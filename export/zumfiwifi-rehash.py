#!/usr/bin/env python3
"""Rename zumfiwifi-site/_astro/* so each file's name changes whenever its content does.

_headers serves /_astro/* with a one-year immutable cache, so a browser that has
fetched a file never asks for it again. An edit to a file there only reaches
returning visitors if the file also gets a new name. Run this after any change
in _astro/: every file is named <stem>.<first 8 hex of sha256>.<ext>, and each
reference to an old name in the site's HTML, JS, CSS and XML is updated.

Renaming a file changes the content of any file that references it (the start-up
script imports the motion script by name), so this repeats until nothing moves.

    python3 export/zumfiwifi-rehash.py            # rename and rewrite references
    python3 export/zumfiwifi-rehash.py --check    # exit 1 if anything is out of date
"""
import hashlib
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parent / "zumfiwifi-site"
ASSETS = SITE / "_astro"
TEXT = (".html", ".js", ".css", ".xml")


def wanted_name(path):
    parts = path.name.split(".")
    stem = ".".join(parts[:-2] if len(parts) >= 3 else parts[:-1])
    digest = hashlib.sha256(path.read_bytes()).hexdigest()[:8]
    return "%s.%s.%s" % (stem, digest, parts[-1])


def rewrite_references(old, new):
    for f in SITE.rglob("*"):
        if f.is_file() and f.suffix in TEXT:
            text = f.read_text(encoding="utf-8")
            if old in text:
                f.write_text(text.replace(old, new), encoding="utf-8")


def main():
    check = "--check" in sys.argv[1:]
    for _ in range(10):
        stale = [(p, wanted_name(p)) for p in sorted(ASSETS.iterdir())
                 if p.is_file() and p.name != wanted_name(p)]
        if not stale:
            return 0
        if check:
            for p, new in stale:
                print("out of date: _astro/%s (should be %s)" % (p.name, new))
            return 1
        for p, new in stale:
            p.rename(p.with_name(new))
            rewrite_references(p.name, new)
            print("_astro/%s -> %s" % (p.name, new))
    sys.exit("names did not settle after 10 rounds; do two files reference each other?")


if __name__ == "__main__":
    sys.exit(main())
