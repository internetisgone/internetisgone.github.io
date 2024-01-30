# internetisgone.github.io

hand crafted website, statically generated with [staticjinja](https://github.com/staticjinja/staticjinja)<br>

## build
```
cd src
python3 -m venv .venv
. .venv/bin/activate
pip3 install -r requirements.txt

# generate pages in `src/templates` to root dir
python3 generate.py

# start http server 
python3 -m http.server

```
