from staticjinja import Site
import os

PHOTOS_PATH = "../photos"
ART_PICS = [ "img/gg.png", "img/limbb.png", "img/bttp.png", "img/suspensionn.png", "img/knivess.png" ]

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
