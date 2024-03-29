from staticjinja import Site
import os

PHOTOS_PATH = "../photos"
ART_PICS = [
    {
        "path": "img/limbb.png",
        "link": "img/limbb.png"
    },
    {
        "path": "img/bttp.png",
        "link": "https://eternal100000000.bandcamp.com/album/thegn-silver-blade-shattered-mirror-deceiver"
    },
    {
        "path": "img/gg.png",
        "link": "img/gg.png"
    },
    {
        "path": "img/suspensionn.png",
        "link": "img/suspensionn.png"
    },
    {
        "path": "img/knivess.png",
        "link": "img/knivess.png"
    },
    {
        "path": "img/footwork_hobbes_logo.png",
        "link": "https://www.hkcr.live/residents/the-footwork-program"
    } 
]
def get_photos(photos_path):
    photonames = os.listdir(photos_path)
    for photoname in photonames:
        if photoname.startswith("."):
            photonames.remove(photoname)
    # append path 
    photonames = [photos_path[3:] + "/" + photoname for photoname in photonames]
    print(photonames)
    # sort by name
    return sorted(photonames) 

if __name__ == "__main__":
    photos = get_photos(PHOTOS_PATH)
    site = Site.make_site( 
            contexts = [ ("photos.html", {"photos": photos }), ("art.html", { "art_pics": ART_PICS })],
            outpath = "../"
        )
    site.render(use_reloader=True)
