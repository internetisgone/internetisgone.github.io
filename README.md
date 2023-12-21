# internetisgone.github.io

static site generated with [staticjinja](https://github.com/staticjinja/staticjinja)<br>

## build
```
cd src
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```
generate pages in `src/templates` to root dir
```
python3 generate.py
```
